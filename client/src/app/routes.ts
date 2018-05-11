import { Routes } from "@angular/router";
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component'

export const routes: Routes = [

  
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: BurgerListComponent},
  { path: 'burger/:id', component: BurgerDetailComponent },
];