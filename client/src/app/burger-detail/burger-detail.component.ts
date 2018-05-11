import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import { BurgerService } from '../services/burger.service';
import { OpinionService } from '../services/opinion.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {
  burger:any;
  opinion: string;
  opinions: Array<object>;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private burgerService: BurgerService,
    private opinionService: OpinionService
  ) { 
    route.params.subscribe(params => {
      burgerService.get(params.id).subscribe(burger => {
        this.burger = burger;
        this.refreshOpinions();
      });
    });
  }

  ngOnInit() {
  }
  refreshOpinions(){
    this.opinionService.getOpinions(this.burger._id).subscribe(opinions => {
      this.opinions = opinions;
      
    })
    
  }


  saveOpinion() {
    console.log(this.opinion);
    this.opinionService.saveOpinion(this.burger._id,this.opinion).subscribe(() =>{
      this.refreshOpinions();
      
    });
    this.opinion = "";
  }
}
