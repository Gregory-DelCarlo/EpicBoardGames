import {createAction, props } from '@ngrx/store';
import { Game } from './games.model';

export enum ActionTypes {
  RETRIEVE_GAMES = '[Game List] Retrieve Games Success'
}

export const retrieveGamesList = createAction(
  ActionTypes.RETRIEVE_GAMES,
  props<{ games: ReadonlyArray<Game>}>()
);
