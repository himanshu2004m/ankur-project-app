import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamaic-form',
  templateUrl: './dynamaic-form.component.html',
  styleUrls: ['./dynamaic-form.component.css']
})
export class DynamaicFormComponent implements OnInit {
  inlineRadioOptions :any="option1";
  constructor() { }

  ngOnInit() {
  }

}
