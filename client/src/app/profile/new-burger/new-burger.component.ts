import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BurgerService } from '../../services/burger.service';
import {Observable} from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-new-burger',
  templateUrl: './new-burger.component.html',
  styleUrls: ['./new-burger.component.css']
})
export class NewBurgerComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/burger/new/`
  });

  newBurger = {
    title: '',
    description: '',
    price: 0,
    rates: [],
    restaurant: ''
  };
  
  feedback: string;

  constructor(
  ) { }

  ngOnInit() {
   
  }

  public show:boolean = false;
  public buttonName = 'Add new Burger!';
  toggle() {
    this.show = !this.show;
  }
  
  submit() {

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newBurger.title);
      form.append('description', this.newBurger.description);
      form.append('price', this.newBurger.price)
      form.append('restaurant', this.newBurger.restaurant);
      console.log(item, form)
    };

    this.uploader.uploadAll();
    this.toggle()
    alert('Added new Burger!')
  }


 
}
