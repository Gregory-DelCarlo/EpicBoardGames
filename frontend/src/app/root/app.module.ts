import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { gamesReducer } from '../store/games/games.reducer';
import { gameService } from '../store/games/games.service';
import { CommonModule } from '@angular/common';
import { GamesStateModule } from '../store/games';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({games: gamesReducer}),
    HttpClientModule,
    GamesStateModule
  ],
  providers: [gameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
