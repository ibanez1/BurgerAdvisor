import { Component, OnInit } from '@angular/core';
import { Address } from 'angular-google-place';
import { FormControl } from '@angular/forms';

let mac = [
  {lat: 40.4641417, long: -3.7015089},
  {lat: 40.4596357, long: -3.6942992},
  {lat: 40.4668518, long: -3.6978308},
  {lat: 40.3907595, long: -3.7190902},
  {lat: 40.4165113, long: -3.713082},
  {lat: 40.4142894, long: -3.7026107},
  {lat: 40.4161845, long: -3.7050998},

];


let goiko = [
  {lat: 40.4125994, long: -3.7054571},
  {lat: 40.4279551, long: -3.7115511},
  {lat: 40.4265014, long: -3.6976895},
  {lat: 40.3973363, long: -3.7034022},
  {lat: 40.4222275, long: -3.7023501},
  {lat: 40.4267038, long: -3.7016011},


];

let five = [
  {lat: 40.4290085, long: -3.7073106},
  {lat: 40.4250213, long: -3.6919865}
];

@Component({
  selector: 'app-burger-map',
  templateUrl: './burger-map.component.html',
  styleUrls: ['./burger-map.component.css']
})
export class BurgerMapComponent implements OnInit {
  lat:any;
  lng:any;
  label?: string;
  mcDonalds = mac;
  goikoGrill = goiko;
  fiveGuys = five;
  

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
    this.mcDonalds = mac;
    this.goikoGrill = goiko;
    this.fiveGuys = five;
}
}
