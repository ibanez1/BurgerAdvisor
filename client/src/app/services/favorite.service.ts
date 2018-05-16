import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs';

@Injectable()
export class FavoriteService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  saveFavorite(id, user) {
    console.log(`Saving favorite ${id} for ${user}`)
    return this.http.post(`${this.BASE_URL}/api/favorite/burger/${id}`, 
    {user})
      .map((res) => res.json());
  }

}