import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {
  burger:any;
  constructor(
    route: ActivatedRoute,
    public router: Router,
    private burgerService: BurgerService,
  ) { 
    route.params.subscribe(params => {
      burgerService.get(params.id).subscribe(burger => {
        this.burger = burger;
      });
    });
  }

  ngOnInit() {
  }

}
