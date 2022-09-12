import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { GameIndexComponent } from "../../components/games-list/games-list.component";
import * as fromGames from "./games.reducer";
import { gameService } from "./games.service";

@NgModule({
  declarations: [GameIndexComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGames.gamesFeatureKey,
      fromGames.gamesReducer
      )
  ],
  providers: [gameService],
  bootstrap: [GameIndexComponent]
})
export class GamesStateModule {}
