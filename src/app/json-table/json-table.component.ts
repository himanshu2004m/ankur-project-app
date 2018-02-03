import { Component, OnInit } from '@angular/core';
import { GetDataFromUrlService} from '../get-data-from-url.service'
import {Response, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  users: Observable <Array<any>>;

  constructor(private getService: GetDataFromUrlService) {
    // this.getService.getdata().subscribe((data: Response) => {
    //   console.log('data', data.json());
    // }, function(error){
    //   console.log(error);
    // });

    this.getService.getdata().map(res => res.json()).subscribe(users2 => {
      this.users = users2;
      console.log(users2) ;
    });
   }

  ngOnInit() {
  }

}
