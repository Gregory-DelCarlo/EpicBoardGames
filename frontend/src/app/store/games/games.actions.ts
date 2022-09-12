import {createAction, props, Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Game } from './games.model';
import { gameService } from './games.service';

export enum ActionTypes {
  RETRIEVE_GAMES = '[Game List] Retrieve Games Success',
  // RETRIEVE_GAME  = '[Game List] Retrieve Game Success',
  ADD_GAME    = '[Game List] Add Game Success',
  // EDIT_GAME      = '[Game List] Edit Game Success',
  DELETE_GAME    = '[Game List] Delete Game Success'
}

const getGamesList = createAction(
  ActionTypes.RETRIEVE_GAMES,
  props<{ games: ReadonlyArray<Game>}>()
);

// const getGame = createAction(
//   ActionTypes.RETRIEVE_GAME,
//   props<{ game: Game}>()
// )

const addGame = createAction(
  ActionTypes.ADD_GAME,
  props<{ game: Game}>()
)

// const editGame = createAction(
//   ActionTypes.EDIT_GAME,
//   props<{ game: Game}>()
// )

const deleteGame = createAction(
  ActionTypes.DELETE_GAME,
  props<{ game: Game}>()
)

function retrieveGamesList(store: Store, gameService: gameService) {
  gameService.fetchGames()
    .subscribe((games) => {store.dispatch(getGamesList({ games }))});
}

function retrieveGame(store: Store, gameService: gameService, game_id: string) {
  gameService.fetchGame(game_id)
    .subscribe((game) => {store.dispatch(addGame({ game }))});
}

function createGame(store: Store, gameService: gameService, game: Game) {
  gameService.newGame(game)
    .subscribe((game) => {store.dispatch(addGame({ game }))});
}

function editGame(store: Store, gameService: gameService, game: Game) {
  gameService.changeGame(game)
    .subscribe((game) => {store.dispatch(addGame({ game }))});
}

function removeGame(store: Store, gameService: gameService, game_id: string) {
  gameService.deleteGame(game_id)
    .subscribe((game) => {store.dispatch(deleteGame({ game }))});
}

export const gameActions = {
  getGamesList: getGamesList,
  // getGame: getGame,
  addGame: addGame,
  // editGame: editGame,
  deleteGame: deleteGame
}

export const gameDispatchers = {
  retrieveGamesList: retrieveGamesList,
  retrieveGame: retrieveGame,
  createGame: createGame,
  editGame: editGame,
  removeGame: removeGame
}
