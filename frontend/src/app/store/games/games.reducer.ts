import { createReducer, on } from '@ngrx/store';
import { gameActions } from './games.actions';
import { Game } from './games.model';

export const initialState: ReadonlyArray<Game> = [];

export const gamesFeatureKey = "games"

export const gamesReducer = createReducer(
    initialState,
    on(gameActions.getGamesList, (state, { games }) => (games)) //get games from state then add to state
);
