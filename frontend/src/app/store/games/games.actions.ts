import {createAction, props, Store } from '@ngrx/store';
import { Game } from './games.model';
import { gameService } from './games.service';

export enum ActionTypes {
  RETRIEVE_GAMES = '[Game List] Retrieve Games Success'
}

const getGamesList = createAction(
  ActionTypes.RETRIEVE_GAMES,
  props<{ games: ReadonlyArray<Game>}>()
);

function retrieveGamesList(store: Store, gameService: gameService) {
  gameService.fetchGames()
    .subscribe((games) => {store.dispatch(getGamesList({ games }))});
}

export const gameActions = {
  getGamesList: getGamesList
}

export const gameDispatchers = {
  retrieveGamesList: retrieveGamesList
}
