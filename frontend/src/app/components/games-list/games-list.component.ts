import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
// import { FormsModule } from '@angular/forms';
import { gameService } from 'src/app/store/games/games.service';
import { gameDispatchers } from 'src/app/store/games/games.actions';
import { Game } from '../../store/games/games.model';
import { Observable } from 'rxjs';
import { selectAllGames } from './games-list.selector';

@Component({
  selector: 'app-game-list', // this is the tag used to render the component
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GameListComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(
    private gameService: gameService,
    private store: Store // for accessing state
    ) {
      this.games$ = this.store.select(selectAllGames) //use selector
      console.log(this.games$)
    }

    ngOnInit() {
      // calls api endpoint, and action to add games to state
      gameDispatchers.retrieveGamesList(this.store, this.gameService)
  }
  
}

