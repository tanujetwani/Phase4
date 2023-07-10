import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceworkService {

  constructor() {
   
   }

  mainanswers:any[]=[];
  score:number=0;
  allQuestions:any[]=[];
  quesLength:number=0;



  //isactiveQuiz:boolean=true;
  //rscore:number=0;
  //counter:number=0;
  //servicecorrectanswers:any[]=[];
  
  /*checkAnswers(){

    this.rscore=0;
   for(  this.counter=0; this.counter<this.servicecorrectanswers.length; this.counter++){
     
    //this.isactiveQuiz=false;
   // this.serviceobj.isactiveQuiz=false;
         //this.answer=this.quizanswers[this.counter];
         //const correctanswer=this.correctanswers[this.counter]
        console.log("Inside for");
        //console.log("IsactiveQuiz:" + this.serviceobj.isactiveQuiz);
        console.log(this.mainanswers[this.counter]);
        console.log(this.mainanswers[this.counter].q);
        console.log("Score:"+ this.rscore);


       if(this.mainanswers[this.counter]===(this.servicecorrectanswers[this.counter]).q)
       {
         console.log("Inside if");
           this.rscore++;
           console.log("Score inside if Score :" + this.rscore);
          //this.rscore=this.serviceobj.score;
          //this.serviceobj.score=this.rscore;

       }

            }

           // this.serviceobj.score=this.rscore;
            //this.checkanswer=true;
            console.log("Inside CheckAnswers");
           // this.reviewans();
}*/


  
}
