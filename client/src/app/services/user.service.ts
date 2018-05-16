import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class UserService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/${id}`)
      .map((res) => res.json());
  }


  removeFavorite(id) {
    return this.http.delete(`${this.BASE_URL}/api/favorite/${id}`)
      .map((res) => res.json());
  }

  getFavorites(id) {
    return this.http.get(`${this.BASE_URL}/api/favorite/user/${id}`)
      .map((res) => res.json());
  }

  removeOpinion(id) {
    return this.http.delete(`${this.BASE_URL}/api/opinion/${id}`)
      .map((res) => res.json());
  }

  getOpinions(id) {
    return this.http.get(`${this.BASE_URL}/api/opinion/user/${id}`)
      .map((res) => res.json());
  }

  removeBurger(id) {
    return this.http.delete(`${this.BASE_URL}/api/burger/${id}`)
      .map((res) => res.json());
  }

  getBurgers(id) {
    return this.http.get(`${this.BASE_URL}/api/burger/${id}`)
      .map((res) => res.json());
  }





}
