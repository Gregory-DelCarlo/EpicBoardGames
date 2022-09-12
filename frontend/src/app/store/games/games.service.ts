import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from './games.model';

@Injectable({ providedIn: 'root' })
export class gameService {
  private url = "Http://localhost:3000";
  private games$: Subject<Game[]> = new Subject();
  constructor(private http: HttpClient) {}

  fetchGames(): Subject<Game[]> {
    this.refreshGames();
    return this.games$;
  }
  private refreshGames() {
    this.http.get<Game[]>(
      `${this.url}/games`
    ).subscribe(games => {
      this.games$.next(games);
    });
  }
}
