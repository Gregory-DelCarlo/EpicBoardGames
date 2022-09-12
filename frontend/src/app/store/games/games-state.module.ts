import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GameListComponent } from "../../components/games-list/games-list.component";
import * as fromGames from "./games.reducer";
import { gameService } from "./games.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGames.gamesFeatureKey,
      fromGames.gamesReducer
      )
    ],
  declarations: [GameListComponent],
  providers: [gameService],
  bootstrap: [GameListComponent]
})
export class GamesStateModule {}
