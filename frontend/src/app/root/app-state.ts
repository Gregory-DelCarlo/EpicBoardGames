import { Game } from '../models/games.models';

export interface AppState {
  games: ReadonlyArray<Game>;
}
