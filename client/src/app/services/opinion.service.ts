import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class OpinionService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  saveOpinion(id,text) {
    console.log(`Saving opinion ${text} for ${id}`)
    return this.http.post(`${this.BASE_URL}/api/opinion/burger/${id}`, 
    {text : text})
      .map((res) => res.json());
  }

  getOpinions(id) {
    return this.http.get(`${this.BASE_URL}/api/opinion/burger/${id}`)
      .map((res) => res.json());
  }
}
