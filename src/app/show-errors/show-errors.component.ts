import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'show-errors',
  template: `
   <ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
   </ul>
 `,
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessages = {
    'required': () => 'field is required',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    console.log("control",this.control);
    console.log("control errors",this.control.errors);
    console.log("object keys",Object.keys(this.control.errors));
    return Object.keys(this.control.errors)
      .map((x) => this.getMessage(x, this.control.errors[x]));
  }

  private getMessage(type: string, params: any) {
    console.log("type",type);
    console.log("params",params);
    return ShowErrorsComponent.errorMessages[type](params);
  }




  constructor() { }

  ngOnInit() {
  }

}
