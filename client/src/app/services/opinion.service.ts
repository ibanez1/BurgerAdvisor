import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs';

@Injectable()
export class OpinionService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  saveOpinion(id,text, user) {
    console.log(`Saving opinion ${text} for ${id}`)
    return this.http.post(`${this.BASE_URL}/api/opinion/burger/${id}`, 
    {text : text, user})
      .map((res) => res.json());
  }

  getOpinions(id) {
    return this.http.get(`${this.BASE_URL}/api/opinion/burger/${id}`)
      .map((res) => res.json());
  }
}
