import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GetDataFromUrlService {

  data :any;
  constructor(private http :Http) {

   }

  getdata(){
    let data =this.data;
    return this.http.get('http://localhost:8085/getCities');
  }

}
