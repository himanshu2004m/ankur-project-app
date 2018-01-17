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
  addRow(){
    
        console.log('product added');
      }
      deleteRow(){
        
            console.log('product deleted');
          }
}
