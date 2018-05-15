import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { LoginFormComponent } from './login-form/login-form.component';

import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerService } from './services/burger.service';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { BurgerMapComponent } from './burger-detail/burger-map/burger-map.component'
import { OpinionService } from './services/opinion.service';
import { RatingService } from './services/rating.service';
import { AverageRatingPipe } from './pipes/averageRating.pipe';
import { SearchBurgerPipe } from './pipes/searchBurger.pipe';
import { SortBurgersPipe } from './pipes/sortBurgers.pipe';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BurgerListComponent,
    BurgerDetailComponent,
    BurgerMapComponent,
    AverageRatingPipe,
    SearchBurgerPipe,
    SortBurgersPipe,
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALlKLsCDkTTqalmc97qDmcqYMuARCu7Pc'
    })
  ],

  providers: [SessionService, BurgerService, OpinionService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
