import { Game } from '../store/games/games.model';

export interface AppState {
  games: ReadonlyArray<Game>;
}
