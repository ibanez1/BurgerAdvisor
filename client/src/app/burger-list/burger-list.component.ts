import { Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { BurgerService } from '../services/burger.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  user:any;
  burgers$:Observable<any>;
  burgers:Array<any> = [];
  path: string[] = ['burger'];
  order: number = 1; // 1 asc, -1 desc;
  constructor(public burgerService:BurgerService) {
  }

  ngOnInit() {
    this.burgers$ = this.burgerService.getList();
    this.burgerService.getList().subscribe( burgers => {this.burgers = burgers});
  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }
}
