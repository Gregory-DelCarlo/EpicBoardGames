import { createFeatureSelector, createSelector} from '@ngrx/store';
import { Game } from '../../store/games/games.model';

export const selectGames =
createFeatureSelector<Array<Game>>('games');
