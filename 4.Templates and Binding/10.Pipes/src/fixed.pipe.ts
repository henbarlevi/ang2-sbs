import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'}) //pipe name
export class FixedPipe implements PipeTransform { //implements PipeTransform interface

  transform(value: number, digits=2) { //transform return the value that seen in the view
    return value.toFixed(digits);
  }
}
