import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount">
    <p *ngIf="isInvalid(baseAmount)">Please enter a valid amount</p>
  `//the <p> will display only if isInvalid(baseAmount) returns true

//can also use [class.hidden] = "!isInvalid(baseAmount)" for same result:
//<p [class.hidden]="isInvalid(baseAmount)">Please enter a valid amount</p>
//and in style:
//styles:['
//.hidden{ display:none;}
//']
//-------------------------------------------------
//ngIf Using template tag to manipulate/hide multi tags:
//<template [ngIf] = "isInvalid(baseAmount)">
//<p>please enter a valid amount</p>
//<p>validation amount error</p>
//</template>
})
export class AppComponent {

  baseAmount = 1;

  constructor() { }

  isInvalid(value) {
    return !Number.isFinite(value);
  }
}
