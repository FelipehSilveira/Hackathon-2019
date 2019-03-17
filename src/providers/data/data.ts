import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/observable';

@Injectable()
export class DataProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  load() {

    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/questions.json').subscribe(data => {
        this.data = data["questions"];
        resolve(this.data);
      });
    });

  }
}
