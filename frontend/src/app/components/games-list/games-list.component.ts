import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
// import { FormsModule } from '@angular/forms';
import { gameService } from 'src/app/store/games/games.service';
import { retrieveGamesList } from 'src/app/store/games/games.actions';
import { Game } from '../../store/games/games.model';
import { Observable } from 'rxjs';
import { selectAllGames } from './games-list.selector';

@Component({
  selector: 'app-game-list',
  templateUrl: './games-list.component.html'
})
export class GameListComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(
    private gameService: gameService,
    private store: Store // for accessing state
    ) {
      this.games$ = this.store.select(selectAllGames) //use selector
    }

    ngOnInit() {
      // fetch games makes the AJAX call
      this.gameService.fetchGames()   // send the games returned from api to the store
        .subscribe((games) => {this.store.dispatch(retrieveGamesList({ games }))});

  }
}

