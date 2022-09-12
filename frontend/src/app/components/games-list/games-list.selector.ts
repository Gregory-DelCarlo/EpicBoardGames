import { createFeatureSelector, createSelector} from '@ngrx/store';
import { Game } from '../../store/games/games.model';

export const selectAllGames =
createFeatureSelector<Array<Game>>('games'); // get all games
