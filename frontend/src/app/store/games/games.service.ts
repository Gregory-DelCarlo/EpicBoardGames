import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from './games.model';

@Injectable({ providedIn: 'root' })
export class gameService {
  private url = "Http://localhost:3000";
  private games$: Subject<Game[]> = new Subject();
  private game$: Subject<Game> = new Subject();
  constructor(private http: HttpClient) {}

  fetchGames(): Subject<Game[]> {
    this.allGames();
    return this.games$;
  }


// http calls
  private allGames() {
    this.http.get<Game[]>(
      `${this.url}/games`
    ).subscribe(games => {
      this.games$.next(games);
    });
  }

  private getGame(game_id: string) {
    this.http.get<Game>(
      `${this.url}/games/${game_id}`
    ).subscribe(game => {
      this.game$.next(game);
    })
  }

  private createGame(game: Game) {
    this.http.post<Game>(
      `${this.url}/games`, game
    ).subscribe(game => {
      this.game$.next(game);
    });
  }

  private editGame(game_id: string, game: Game) {
    this.http.post<Game>(
      `${this.url}/games/${game_id}`, game
    ).subscribe(game => {
      this.game$.next(game);
    });
  }

  private destroyGame(game_id: string) {
    this.http.delete(
      `${this.url}/games/${game_id}`
    )
  }
}
