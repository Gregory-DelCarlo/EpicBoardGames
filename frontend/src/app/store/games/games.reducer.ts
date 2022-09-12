import { createReducer, on } from '@ngrx/store';
import { retrieveGamesList } from './games.actions';
import { Game } from './games.model';

export const initialState: ReadonlyArray<Game> = [];

export const gamesFeatureKey = "games"

export const gamesReducer = createReducer(
    initialState,
    on(retrieveGamesList, (state, { games }) => games)
);
