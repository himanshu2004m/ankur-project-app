import { Component } from '@angular/core';
import {User} from '../app/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private test;
  userArray :Array<User> =[];
  newUser :User ={name: '',email:'',mobile:'',amount:'',city:''
};

  public onSubmit(){
      console.log(this.newUser);

  }
  

}
