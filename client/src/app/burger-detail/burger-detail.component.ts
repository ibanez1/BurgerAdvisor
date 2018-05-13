import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import { BurgerService } from '../services/burger.service';
import { OpinionService } from '../services/opinion.service';
import { RatingService } from '../services/rating.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
  
})
export class BurgerDetailComponent implements OnInit {
  burger:any;
  opinion: string;
  opinions: Array<object>;
  rating: string;
  ratings: Array<object>;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private burgerService: BurgerService,
    private opinionService: OpinionService,
    private ratingService: RatingService,
    public session: SessionService
  ) { 
    route.params.subscribe(params => {
      burgerService.get(params.id).subscribe(burger => {
        this.burger = burger;
        this.refreshOpinions();
        this.refreshRatings();
      });
    });
  }

  ngOnInit() {
  }

  refreshBurger(){
    this.burgerService.get(this.burger._id).subscribe(burger => {
      this.burger = burger;
    })
  }
 
  refreshOpinions(){
    this.opinionService.getOpinions(this.burger._id).subscribe(opinions => {
      this.opinions = opinions; 
    })
  }
  refreshRatings(){
    this.ratingService.getRating(this.burger._id).subscribe(ratings => {
      this.ratings = ratings;
    })
  }

  
  saveOpinion(){
    console.log(this.session.user._id);
    this.opinionService.saveOpinion(this.burger._id,this.opinion, this.session.user._id)
    .subscribe(() =>{
      this.refreshOpinions();
    });
    this.opinion = "";
  }
  saveRating(){
    this.ratingService.saveRating(this.burger._id, this.rating, this.session.user._id)
    .subscribe(()=>{
      this.refreshRatings();
      this.refreshBurger();
    })
  }
}
