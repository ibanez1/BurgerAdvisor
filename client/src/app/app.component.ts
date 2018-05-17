import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a place for all burgers...';
  constructor(public sessionService:SessionService){
    this.sessionService.userEvent.subscribe( user => {
      console.log("USER EVENT");
      if(user){
        this.title = `${user.username}`;
      }else{
        this.title = "Login!";
      }
    })
  }

}
