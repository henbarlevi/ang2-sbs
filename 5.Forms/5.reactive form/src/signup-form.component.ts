import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//Cretung form in code instead of in template with reactiveFroms
//https://toddmotto.com/angular-2-forms-reactive
@Component({
  selector: 'signup-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div class="from-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control"
          formControlName="email">
          <p *ngIf="myForm.controls.email?.errors && myForm.controls.email?.touched"
          class="alert alert-danger">Please enter a valid email</p>
      </div>
      <div class="from-group">
        <label for="password">Paddssword</label>
        <input type="text" id="password" class="form-control"
        formControlName="password">
        
      </div>
      <button [disabled]="!myForm.valid" type="submit" class="btn btn-primary">Signup</button>
    </form>
  `,

  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
/**
 * we can also use
 *  {{ myForm.controls.name?.errors | json }} - to print the errors created progrematicaly
 * myForm.get('email') - instead of myForm.controls.email?
 * myForm.get('email').hasError('required) - to  check a specific error
 * mor info in :
 * https://toddmotto.com/angular-2-forms-reactive
 */
export class SignupFormComponent implements OnInit {

  myForm: FormGroup

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('',
        [Validators.required,
        Validators.pattern(".+@.+")]
      ), // '' - default value - can also enter null
      password: new FormControl('', Validators.required) // '' - default value 

    });
    //version 2 - with sugar syntax form builder:
    //first import formBuilder and inject it in constructor - (private fb:FormBuilder)
  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(2)]],
  //     account: this.fb.group({
  //       email: ['', Validators.required],
  //       confirm: ['', Validators.required]
  //     })
  //   });
  //}
  }
  onSubmit() {
    console.log('should register:', this.myForm);
    console.log(this.myForm.value.email);
    console.log(this.myForm.value.password);

    this.myForm.reset(); //clear the values and reset the fields state (ng.dirty ng.touched etc...)
  }
}
