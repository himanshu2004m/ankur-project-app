import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamaic-table',
  templateUrl: './dynamaic-table.component.html',
  styleUrls: ['./dynamaic-table.component.css']
})
export class DynamaicTableComponent implements OnInit {

  constructor() { }
  private newAttribute :any ={};
  private tableData:Array<any> =[
    { 
      productName:"mobile"

    },
    { 
      productName:"ipad"

    },
    { 
       productName:"earphone"

    },
  
  
  ]

  ngOnInit() {
  }
  addRow() {
    this.tableData.push(this.newAttribute);

    console.log(this.newAttribute);
    console.log('product added');
    this.newAttribute = {};
    console.log(this.tableData.length);
  }
  deleteRow(i:number) {
    this.tableData.splice(i,1);
    console.log('product deleted');
  }


}
