import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import {RouterModule , Routes} from  '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ServiceworkService} from './servicework.service';

const routes:Routes=[
{path:'quiz',component:QuizComponent},
{path:'review',component:ReviewComponent},
{path:'result',component:ResultComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ReviewComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
