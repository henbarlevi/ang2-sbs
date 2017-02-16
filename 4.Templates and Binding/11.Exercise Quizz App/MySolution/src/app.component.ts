// Exercise: Quiz App Write a simple Quiz application in either TypeScript or ES6.
// The requirements are as folows: 
//  Use the data provided in the questions.json downloadable file. You can copy the data from the JSON into your own JavaScript or TypeScript file, no need to load the JSON file from your app.
//  The quiz consists of a series of questions. All questions are fixed-choice, i.e. a few possible answers - or options - are presented but only one - the solution - is correct. 
// At the start of the quiz the user can see all the questions and possible answers. No answers are selected. The user can select a single answer for each question. 
// The user can click a Check button to complete the quiz and see the results.  
//After clicking Check each question reveals whether the user answered it correctly or not.
// A summary at the end shows the score, i.e. how many answers are correct, both as a number and as a percentage, e.g. 3 out of 5 (60%). 
// After clicking Check all user interactions are disabled, i.e. the user cannot select a different answer. The Check button itself disappears. 


import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <p>answers chosen : {{answers | json}}</p>
    <div *ngFor="let question of questions">
      <quiz-question [question]="question" (selectedOptionId)="onOptionSelected($event)" #questionField></quiz-question>
    <template [ngIf] ="finished">
    <p *ngIf="checkResult(question)">Correct</p>
    <p *ngIf="!checkResult(question)">not Correct</p>
    </template>
    
    </div>
       <button *ngIf="!finished" (click) = "onClick()">Check</button>
  `
})
export class AppComponent {
  questions = questionsSample;
  myAnswer = 90;
  answers: any[] = [];
  finished:boolean = false ; //if the user clicked on "check" and finished the queize
  onOptionSelected($event) {
    //debugger;
    this.myAnswer = $event;
    let questionNumber = Number($event.substring(1, 2));
    this.answers[questionNumber] = $event;
    //this.answers.push({[questionNumber] : $event});
  }
  onClick() {
    this.finished = true; //after clicking 'check' will use Property 'finished' to disable the button and show if answers correct
  }
  checkResult(question){
    let questionNumber =Number( question.id.substring(1,2));
    if(question.solution == this.answers[questionNumber]){
      return true;
    }
    return false;
  }

}

var questionsSample = [
  {
    "id": "q1",
    "text": "Property binding with [value]=\"foo\" or interpolation with {{foo}} results in",
    "options": [
      {
        "id": "q1.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q1.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q1.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q1.a1"
  },
  {
    "id": "q2",
    "text": "Event binding with (click)=\"doSomething()\" results in",
    "options": [
      {
        "id": "q2.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q2.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q2.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q2.a2"
  },
  {
    "id": "q3",
    "text": "Using ngModel with [(ngModel)]=\"foo\" results in",
    "options": [
      {
        "id": "q3.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q3.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q3.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q3.a3"
  },
  {
    "id": "q4",
    "text": "ngFor is an example of",
    "options": [
      {
        "id": "q4.a1",
        "text": "Attribute directive"
      },
      {
        "id": "q4.a2",
        "text": "Structural directive"
      },
      {
        "id": "q4.a3",
        "text": "Destructuring assignment"
      }
    ],
    "solution": "q4.a2"
  },
  {
    "id": "q5",
    "text": "ngClass is an example of",
    "options": [
      {
        "id": "q5.a1",
        "text": "Attribute directive"
      },
      {
        "id": "q5.a2",
        "text": "Structural directive"
      },
      {
        "id": "q5.a3",
        "text": "Destructuring assignment"
      }
    ],
    "solution": "q5.a1"
  }
];