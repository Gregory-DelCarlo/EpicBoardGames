import {createAction, props } from '@ngrx/store';
import { Game } from './games.model';

export const retrieveGamesList = createAction(
  '[Game List] Retrieve Games Success',
  props<{ games: ReadonlyArray<Game>}>()
);
