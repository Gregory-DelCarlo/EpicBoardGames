import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from '../components/games-list/games-list.component';
import {AddGameComponent } from '../components/add-game/add-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full'},
  { path: 'games', component:  GameListComponent },
  { path: "add-game", component: AddGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
