import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()">
    <div>
    <label>Email :</label>
    <input type="text" class="form-control" [(ngModel)]="email" name="email" required>
    </div>
    <button type="submit" class="btn btn-primary">Sign up</button>
    </form>
  `//1.to use the ngModel with forms we need to install the package @angular/forms (look in package.json)
  //and include it in the app.module imports
  //2.input using ngModel have to have its name set or the form
  //    control must be defined as 'standalone' in ngModelOptions
  //3.required - validation of the field made by the browser itself (we cant depend on it)
  //4. the classes added to the input and btn are for the bootstrap style
})
export class SignupFormComponent {
  email ='';

  onSubmit(){
    //suppose to send http request to server:
    console.log('should submit:',this.email);
  }
}
