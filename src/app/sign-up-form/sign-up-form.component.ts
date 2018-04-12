import { Component, OnInit } from '@angular/core';
import {NewUser} from '../SignInUser';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
   newUser:any=[

   ];
  constructor() { }

  ngOnInit() {
  }

  onSave(){
console.log(this.newUser);

  }
}
