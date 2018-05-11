import { Routes } from "@angular/router";
import { BurgerListComponent } from './burger-list/burger-list.component';

export const routes: Routes = [

  
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: BurgerListComponent},
];