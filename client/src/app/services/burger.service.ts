import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class BurgerService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/burger`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/burger/${id}`)
      .map((res) => res.json());
  }

  edit(burger) {
    return this.http.put(`${this.BASE_URL}/api/burger/${burger.id}`, burger)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/burger/${id}`)
      .map((res) => res.json());
  }

}
