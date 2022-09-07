import {createAction, props } from '@ngrx/store';
import { Game } from '../models/games.models';

export const retrieveGamesList = createAction(
  '[Game List/API] Retrieve Games Success',
  props<{ games: ReadonlyArray<Game>}>()
);
