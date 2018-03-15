import { Component,OnInit } from '@angular/core';
import {User} from '../app/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myPattern=new RegExp('\\d{4,4}');
 
  title = 'app';
  private test;
  userArray :Array<User> =[];
  newUser :User ={name: '',email:'',mobile:'',amount:'',city:''
};

  public onSubmit(form){
    console.log("form",form.value);
      console.log(this.newUser);

  }

  ngOnInit(){
    console.log("mypattern",this.myPattern);
  }
  

}
