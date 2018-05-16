import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { BurgerService } from '../services/burger.service';
import { OpinionService } from '../services/opinion.service';
import { SessionService } from '../services/session.service';
import { FavoriteService} from '../services/favorite.service';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  opinion: any;
  opinions: Array<object>;
  favorite: any;
  favorites: Array<object>;
  burger: any;
  burgers: Array<object>;
  comment: any;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private burgerService: BurgerService,
    private opinionService: OpinionService,
    public session: SessionService,
    private favoriteService: FavoriteService,
    private userService: UserService

  ) { 
    //route.params.subscribe(params => {
      session.isLoggedIn().subscribe(u => {
        this.user = u
        this.refreshUserFavorites();
        this.refreshUserOpinions();
        this.refreshUserBurgers();
      })
    //});
  }

  ngOnInit() {
  }

deleteFavorite(favorite) {
  console.log("DELETED FAVORITE");
  this.userService.removeFavorite(favorite._id).subscribe(() => {
    this.refreshUserFavorites();
    this.router.navigate(["/profile"]);
  });
}

refreshUserFavorites(){
  this.userService.getFavorites(this.user._id).subscribe(favorites => {
    this.favorites = favorites;
  })
}

deleteOpinion(opinion) {
  console.log("DELETED OPINION");
  this.userService.removeOpinion(opinion._id).subscribe(() => {
    this.refreshUserOpinions()
    this.router.navigate(["/profile"]);
  });
}

refreshUserOpinions(){
  this.userService.getOpinions(this.user._id).subscribe(opinions => {
    this.opinions = opinions;
  })
}

deleteBurger() {
  console.log("DELETED BURGER");
  this.userService.removeBurger(this.burger._id).subscribe((burger) => {
    this.burger = burger;
  });
}

refreshUserBurgers(){
  this.userService.getBurgers(this.user._id).subscribe(burger => {
    this.burger = burger;
  })
}
}