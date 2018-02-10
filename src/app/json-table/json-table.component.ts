import { Component, OnInit } from '@angular/core';
import { GetDataFromUrlService } from '../get-data-from-url.service'
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HtmlTagDefinition } from '@angular/compiler';
import { PagerServiceService } from './pager-service.service';
@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css'],
})
export class JsonTableComponent implements OnInit {
  // allItems: Observable <Array<any>>;
  clickedUser: {};
  selectedOptions: string[] = [];

  constructor(private getService: GetDataFromUrlService, private pagerService: PagerServiceService) { }
  flag= false;
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {
    // this.getService.getdata().subscribe((data: Response) => {
    //   console.log('data', data.json());
    // }, function(error){
    //   console.log(error);
    // });

    this.getService.getdata().map(res => res.json()).subscribe(users2 => {
      // set items to json response
      this.allItems = users2;
      console.log(users2);
      // initialize to page 1
      this.setPage(1);
    });

  }

  sendUser(user: any, evt, flag: boolean) {
    this.flag = true;
    this.clickedUser = user;
    this.selectedOptions = evt.value.selectoptions;
    console.log(this.clickedUser);
    console.log(this.selectedOptions);
  }

  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
           return;
          }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
