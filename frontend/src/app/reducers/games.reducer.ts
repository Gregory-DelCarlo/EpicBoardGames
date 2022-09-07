import { createReducer, on } from '@ngrx/store';
import { retrieveGamesList } from '../actions/games.actions';
import { Game } from '../models/games.models';

export const initialState: ReadonlyArray<Game> = [];

export const gamesReducer = createReducer(
    initialState,
    on(retrieveGamesList, (state, { games }) => games)
);
