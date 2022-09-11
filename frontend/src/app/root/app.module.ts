import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameIndexComponent } from '../components/games-list/games-list.component';

import { gamesReducer } from '../reducers/games.reducer';
import { gameService } from '../services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    GameIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({games: gamesReducer}),
    HttpClientModule
  ],
  providers: [gameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
