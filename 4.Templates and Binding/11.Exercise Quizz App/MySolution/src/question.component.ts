import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'quiz-question',
    template: `
            <form>{{question.text}}
            <ul >
            <li *ngFor="let option of question.options">
            <input type="radio" name="question.id" (click)="OnSelectedChange(option.id)"
            [checked]="option.id == selectedOptionId"
            value= {{option.id}}>{{option.text}}
            </li>
            </ul>
            </form>
           `

})
export class QuestionComponent {
    @Input() question: string; //the question objects that contain id,text and options that each one also contain id,text
    private options: any[];
    //@Output() selectedOptionId:number;
    @Output() selectedOptionId = new EventEmitter<string>();
    constructor() {
        this.question = 'whats your name';
        this.options = [{ id: "q1.a1", "text": "One-way binding from the component to the view" }];
    }
    OnSelectedChange(selectedOption: string) {
        this.selectedOptionId.emit(selectedOption);

    }


}