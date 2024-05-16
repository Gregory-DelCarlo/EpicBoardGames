import { Component} from "@angular/core";
import {Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { gameService } from "src/app/store/games/games.service";
import { gameDispatchers } from "src/app/store/games/games.actions";
import { Game } from "../../store/games/games.model";


@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent {

  constructor(
    private gameService: gameService,
    private store: Store,
    private router: Router,
    ) {

  }

  redirect() {
    this.router.navigate(['/games']);
  }

  addGame(game: Game) {
    gameDispatchers.createGame(this.store, this.gameService, game)
    this.redirect();
  }
}
