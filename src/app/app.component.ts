import { Component, OnInit } from '@angular/core';
import {ServiceworkService} from './servicework.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Online_Test_Application';

  
  constructor(private serviceobj2:ServiceworkService){

    console.log("Inside constructor of AppComponent");
  }

  //isactiveQuiz=this.serviceobj2.isactiveQuiz;

  ngOnInit() : void{
     console.log("Inside OnInit of AppComponent");
    //this.isactiveQuiz=this.serviceobj2.isactiveQuiz;

  }
}
