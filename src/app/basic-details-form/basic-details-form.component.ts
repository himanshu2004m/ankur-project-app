import { Component, OnInit } from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.css']
})
export class BasicDetailsFormComponent implements OnInit {
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
