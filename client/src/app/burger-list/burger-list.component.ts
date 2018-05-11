import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  burgers$:Observable<any>;
  burgers:Array<any> = [];
  constructor(public burgerService:BurgerService) {
    
  }

  ngOnInit() {
    this.burgers$ = this.burgerService.getList();
    this.burgerService.getList().subscribe( burgers => {this.burgers = burgers});
  }

}
