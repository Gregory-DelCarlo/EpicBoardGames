import { createReducer, on } from '@ngrx/store';
import { gameActions } from './games.actions';
import { Game } from './games.model';

export const initialState: ReadonlyArray<Game> = [];

export const gamesFeatureKey = "games"

export const gamesReducer = createReducer(
    initialState,
    on(gameActions.getGamesList, (state, { games }) => (games)), //get games from state then add to state
    on(gameActions.addGame, (state, { game }) => ({...state, game})),
    on(gameActions.deleteGame, (state, { game }) => (
      state.filter((gameEl) => { return gameEl._id != game._id })
    ))
);
