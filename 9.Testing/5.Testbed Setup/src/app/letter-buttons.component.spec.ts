import { TestBed } from '@angular/core/testing';
import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {
  //the TestingModule:
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterButtonsComponent] //components and services needed for the test
    });
  });

  fit('should display a button for each letter of the alphabet', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();//in order to get updated element and not the element in the initial state
    const component = fixture.componentInstance;
    const element = fixture.nativeElement;
    console.log('element:', element);
  });

});
