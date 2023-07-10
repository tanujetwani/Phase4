import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceworkService} from '../servicework.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

   questions:any[] =[];
   currentQuestionIndex:number=0;
   //length1:number=this.questions.length;
   length1:number=0;
   message:String='';
   message1:String='';
   questions2:any[]=["1","2","3"];
    

  constructor(private http: HttpClient, private serviceobj:ServiceworkService){ 
     //console.log("Inside constructor of Quiz");
     //this.pushQuestions();
     //console.log("lenght: "+ this.length1);
     
    /*for(var counter=0;counter<this.questions.length; counter++)
   { console.log("Inside constructor for");
    this.serviceobj.allQuestions[counter].push(this.questions[counter].question);
  }*/
  }

  

 /* pushQuestions(){
 // for(var counter=0;counter<this.questions.length; counter++)
    console.log("Inside pushQuestions for");
    this.serviceobj.allQuestions.concat(this.questions);
    console.log(this.serviceobj.allQuestions.length);
    this.length1=this.questions.length;
    this.serviceobj.quesLength=this.length1;
    console.log("Inside pushQuestions, lenght:"+this.length1)
  
}*/

  ngOnInit(): void {

      
    this.http.get<any>('assets/json/question.json').subscribe(data=>{this.questions=data.questions;
    
      this.length1=this.questions.length;
      console.log("lenght1:" + this.questions.length);
      this.serviceobj.quesLength=this.length1;
      console.log("Lenght2:"+ this.serviceobj.quesLength);
    
    })
    
    this.length1=this.questions.length;
    console.log("lenght:" + this.questions.length);
    console.log("Questions:"+ this.questions);
    console.log("Questions2: "+ this.questions2);
    //console.log("lenght2:"+ this.length1);
    //this.serviceobj.quesLength=this.length1;
    //this.serviceobj.allQuestions=this.questions;
    //this.serviceobj.allQuestions=this.questions;
    //this.serviceobj.allQuestions.push(this.questions);
  }

  

  pushAnswer(selectedAnswer:string):void {
    console.log("Inside push");
   
    
    //this.serviceobj.mainanswers.push(selectedAnswer);
    this.serviceobj.mainanswers[this.currentQuestionIndex]=selectedAnswer;
      

  }

  nextcurrentIndex(){
    //console.log("Questions:"+ this.questions);
   // this.length1=this.questions.length;
   // console.log("lenght inside next:"+ this.length1)
    //this.serviceobj.quesLength=this.length1;

   // this.currentQuestionIndex=(this.currentQuestionIndex+1)%this.questions.length;

   if(this.currentQuestionIndex<(this.questions.length-1)){
          
        this.currentQuestionIndex++;

   }

   else{
      this.message="Quiz Finished. Click on Review tab to review the answers." ;
     // this.message1= "Dont click on Result tab directly. It will not display the correct result.";

   }

  }

  
  


}
