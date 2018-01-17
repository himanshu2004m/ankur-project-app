import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamaic-table',
  templateUrl: './dynamaic-table.component.html',
  styleUrls: ['./dynamaic-table.component.css']
})
export class DynamaicTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addRow() {

    console.log('product added');
  }
  deleteRow() {

    console.log('product deleted');
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

}
