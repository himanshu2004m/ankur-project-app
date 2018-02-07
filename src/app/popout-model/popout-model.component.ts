import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-popout-model',
  templateUrl: './popout-model.component.html',
  styleUrls: ['./popout-model.component.css']
})
export class PopoutModelComponent implements OnInit {
  @Input() user: any = { } ;
  @Input() selectedProperty: string[]= [];
  constructor() {
}

  ngOnInit() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnChanges(changes: SimpleChanges){
  //   console.log(changes);
  //  // console.log(this.selectedProperty + '200');
  // }
}
