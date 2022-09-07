import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { gameService } from 'src/app/services/games.service';
import { retrieveGamesList } from 'src/app/actions/games.actions';
import { Game } from '../../models/games.models';

@Component({
  selector: 'app-game-list',
  templateUrl: './games-list.component.html'
})
export class GameListComponent implements OnInit {
  @Input() games: ReadonlyArray<Game> = [];

  constructor(
    private gameService: gameService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // console.log(this.games)
    this.gameService
    .fetchGames()
      .subscribe((games) => {console.log(games);this.store.dispatch(retrieveGamesList({ games }))});
  }
}
