import { createFeatureSelector, createSelector} from '@ngrx/store';
import { Game } from '../../models/games.models';

export const selectGames =
createFeatureSelector<Array<Game>>('games');
