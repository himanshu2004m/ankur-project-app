import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-popout-model',
  templateUrl: './popout-model.component.html',
  styleUrls: ['./popout-model.component.css']
})
export class PopoutModelComponent implements OnInit {
  @Input() user: any = { } ;
  constructor() {
  console.log(this.user + "1");

   }

  ngOnInit() {
  }

}
