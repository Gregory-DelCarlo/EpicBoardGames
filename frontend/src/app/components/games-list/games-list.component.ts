import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
// import { FormsModule } from '@angular/forms';
import { gameService } from 'src/app/store/games/games.service';
import { retrieveGamesList } from 'src/app/store/games/games.actions';
import { Game } from '../../store/games/games.model';
import { Observable } from 'rxjs';
import { selectGames } from './games-list.selector';

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
      this.games$ = this.store.select(selectGames);
    }

    ngOnInit() {
      // this.games$ = this.gameService.fetchGames()
      // console.log(this.games$);
      this.gameService.fetchGames()
        .subscribe((games) => {this.store.dispatch(retrieveGamesList({ games }))});
      // this.games$ = this.store.select(selectGames); // for referencing   state

      // console.log(this.store);
      console.log(this.games$);
  }
}

// @Component({
//   selector: 'app-game-list',
//   templateUrl: './games-list.component.html'
// })
// class GameListComponent {
//   @Input() games: ReadonlyArray<Game> = []; // for referencing iinside the template
// }
