import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from '../components/games-list/games-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full'},
  { path: 'games', component:  GameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
