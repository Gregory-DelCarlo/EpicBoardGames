import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GameListComponent } from "../../components/games-list/games-list.component";
import * as fromGames from "./games.reducer";
import { gameService } from "./games.service";
import { AddGameComponent } from "src/app/components/add-game/add-game.component";
import { GameFormComponent } from "src/app/components/game-form/game-form.component";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGames.gamesFeatureKey,
      fromGames.gamesReducer
      )
    ],
  declarations: [GameListComponent, AddGameComponent, GameFormComponent],
  providers: [gameService],
  bootstrap: [GameListComponent, AddGameComponent, GameFormComponent]
})
export class GamesStateModule {}
