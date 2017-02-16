import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control"
          [(ngModel)]="email" name="email" required pattern=".+@.+">
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
  //1.to use the ngModel with forms we need to install the package @angular/forms (look in package.json)
  //and include it in the app.module imports
  //2.input using ngModel have to have its name set or the form
  //    control must be defined as 'standalone' in ngModelOptions
  //3.required - validation of the field made by the browser itself (we cant depend on it)
  //4.ng-dirty, ng-invalid etc.. are added by angular by using ngModel with form input
  //ng-pristine becomes ng-dirty when the user change the value of the field in the first time
  //ng-untouched becomes ng-touched after the blur event happens.
  //5.pattern - attribute that can get regular expression that the ngModel of the input need to fit to
  //novalidate - prevent from the browser itself preform validation (all validation only by angular)

})
export class SignupFormComponent {

  email = '';

  onSubmit() {
    console.log('should submit:', this.email);
  }
}
