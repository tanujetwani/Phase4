import { Component, OnInit } from '@angular/core';
import { ServiceworkService} from '../servicework.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

   //actualScore:number=0;
   aQuestions:any[]=[];
   qLength:number=0;

   rscore:number=0;
   counter:number=0;
   displayresult:boolean=false;

  constructor(private http:HttpClient,private serviceobj1:ServiceworkService ){}



  quizanswers:any[]=this.serviceobj1.mainanswers;
  correctanswers:any[]=[];
  //correctanswers:any[]=this.serviceobj1.servicecorrectanswers;


  ngOnInit() :void{
     
    this.http.get<any>('assets/json/answer.json').subscribe(data=>{this.correctanswers=data.answers;
      this.qLength=this.serviceobj1.quesLength;
    }
      
      );
    //this.serviceobj1.checkAnswers();
  // this.actualScore=this.serviceobj1.score;
  this.aQuestions=this.serviceobj1.allQuestions;
 // this.qLength=this.serviceobj1.quesLength;
  }

  displayResult(){

    this.rscore=0;
   for(  this.counter=0; this.counter<this.correctanswers.length; this.counter++){
     
    //this.isactiveQuiz=false;
   // this.serviceobj.isactiveQuiz=false;
         //this.answer=this.quizanswers[this.counter];
         //const correctanswer=this.correctanswers[this.counter]
        console.log("Inside for");
        //console.log("IsactiveQuiz:" + this.serviceobj.isactiveQuiz);
        console.log(this.quizanswers[this.counter]);
        console.log(this.correctanswers[this.counter].q);
        console.log("Score:"+ this.rscore);


       if(this.quizanswers[this.counter]===(this.correctanswers[this.counter]).q)
       {
         console.log("Inside if");
           this.rscore++;
           console.log("Score inside if Score :" + this.rscore);
          //this.rscore=this.serviceobj.score;
          //this.serviceobj.score=this.rscore;

       }

            }

           // this.serviceobj.score=this.rscore;
            this.displayresult=true;
            console.log("Inside CheckAnswers");
           // this.reviewans();
}

}
