import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceworkService} from '../servicework.service';
 interface Quizformat{
  ques:string;
  uans:string;
  correctans:string;

}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

 // correctanswers:any[]=[];
  //counter :number=0;
  //rscore:number=0;
  //checkanswer:boolean=false;
  
 // filecontent:Quizformat[]=[];
  
 // answer:String='';
 //isactiveQuiz:boolean=true;
  

  


  constructor(private http:HttpClient, private serviceobj:ServiceworkService) {
    
  }

  quizanswers:any[]=this.serviceobj.mainanswers;

  ngOnInit() : void {

    // this.http.get<any>('assets/json/answer.json').subscribe(data=>this.correctanswers=data.answers)

    console.log("Inside Init 1");
    //this.serviceobj.servicecorrectanswers=this.correctanswers;
    //console.log("Filecontent:"+this.filecontent);
    
  }

   /* checkAnswers(){

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

              this.serviceobj.score=this.rscore;
              this.checkanswer=true;
              console.log("Inside CheckAnswers");
             // this.reviewans();
  } */


  /*reviewans():void{

  for(var i=0;i<this.correctanswers.length; i++){
    //this.filecontent[i] = new Quizformat();
    console.log("Inside for of init in review");
    //this.filecontent[i]=this.quizanswers[i];
   (this.filecontent[i]).ques="What is ur name?";
    (this.filecontent[i]).uans=this.quizanswers[i];
   (this.filecontent[i]).correctans=(this.correctanswers[i]).q;

   console.log("U Ans:" +(this.filecontent[i]).uans);
   console.log("C Ans:" + (this.filecontent[i]).correctans);
   // console.log("Filecontent Address:"+ this.filecontent[i]);

}  

  } */
         



}
