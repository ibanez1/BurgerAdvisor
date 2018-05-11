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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BurgerListComponent,
    BurgerDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
