import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GamesStateModule } from "../games";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    GamesStateModule,
  ],
})
export class RootStoreModule {}
