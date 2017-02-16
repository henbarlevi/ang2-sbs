import { Component } from '@angular/core';


@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" #emailField="ngModel"
          [(ngModel)]="email" name="email" required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid"
          class="alert alert-danger">Please enter a valid email</p>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `,
  //#emailField - input element (the element itslef by default)
  //in this case:
  //when we use ngModel directive angular create instance of the ngModel class
  //that associate the ngModel instance with the element it is in (in this case the input element) so when we type
  //#emailField="ngModel" we set it to the ngModel instance
  //so we can check emailField.invalid bool directly like in the ngIf of 'p'
  //we can also use emailField.errors in order to show different to each type of error:
  //      <p *ngIf="emailField.errors.requierd">the field is empty</p>
  //      <p *ngIf="emailField.errors.pattern">email is invalid</p>
  //instead of ngIf we can hide element using css classes

  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  email = '';

  onSubmit() {
    console.log('should submit:', this.email);
  }
  //we can also pass the emailField to the onSubmit method:
  // onSubmit(emailField : NgModel) { 
  //   console.log('should submit:', this.email);
  // }//and use the NgModel interface by import it(import {NgModel} from '@angular/forms')
  
}
