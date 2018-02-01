import { Component, OnInit } from '@angular/core';
import { GetDataFromUrlService} from '../get-data-from-url.service'
import {Response} from '@angular/http';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {

  constructor(private getService: GetDataFromUrlService) {
    this.getService.getdata().subscribe((data: Response) => {
      console.log('data', data.json());
    }, function(error){
      console.log(error);
    });

   }

  ngOnInit() {
  }

}
