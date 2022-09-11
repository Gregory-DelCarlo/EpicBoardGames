import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameIndexComponent } from '../components/games-list/games-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full'},
  { path: 'games', component:  GameIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
