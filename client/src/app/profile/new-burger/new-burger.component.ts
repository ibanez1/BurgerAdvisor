import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BurgerService } from '../../services/burger.service';
import {Observable} from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-burger',
  templateUrl: './new-burger.component.html',
  styleUrls: ['./new-burger.component.css']
})
export class NewBurgerComponent implements OnInit {

  user: any;
  burger: any;

  constructor(
    
    route: ActivatedRoute,
    public router: Router,
    private burgerService: BurgerService,
    public session: SessionService,
    private userService: UserService
  ) { 
    session.isLoggedIn().subscribe(u => {
      this.user = u
    })
  }

  ngOnInit() {
  }

}
