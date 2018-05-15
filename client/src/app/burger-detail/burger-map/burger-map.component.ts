import { Component, OnInit } from '@angular/core';
import { Address } from 'angular-google-place';



@Component({
  selector: 'app-burger-map',
  templateUrl: './burger-map.component.html',
  styleUrls: ['./burger-map.component.css']
})
export class BurgerMapComponent implements OnInit {
  lat:any;
  lng:any;


  constructor(
 
  ) { 
   
    if (navigator){
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }else {
      navigator.geolocation.getCurrentPosition( pos => {
      this.lng = 40.3826641;
      this.lat = -3.7015089;
    }) 
  }
}
  public address : Object;
       getAddress(place:Object) {       
           this.address = place['formatted_address'];
           var location = place['geometry']['location'];
           var lat =  location.lat();
           var lng = location.lng();
           console.log("Address Object", place);
       }

       

  ngOnInit() {
}
}
    
  
