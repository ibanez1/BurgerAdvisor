import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs';

@Injectable()
export class RatingService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}


  saveRating(id,rate, user) {
    console.log(`Saving rate ${rate} for ${id}`)
    return this.http.post(`${this.BASE_URL}/api/rating/burger/${id}`, 
    {rate, user})
      .map((res) => res.json());
  }

  getRating(id) {
    return this.http.get(`${this.BASE_URL}/api/rating/burger/${id}`)
      .map((res) => res.json());
  }
}
