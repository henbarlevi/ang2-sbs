import { TestBed } from '@angular/core/testing';
import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //the TestingModule:
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterButtonsComponent]  //components and services needed for the test
    });
  });

  it('should display a button for each letter of the alphabet', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();//in order to get updated element and not the element in the initial state (in the initial state angular render our template without any data)
    const component = fixture.componentInstance; // get the component instance
    const element = <HTMLElement>fixture.nativeElement; //getting the template dom elment
    const buttons = element.querySelectorAll('button'); //pure js - grabbing all buttons element from template
    expect(buttons.length).toBe(alphabet.length);
    for (let i = 0; i < alphabet.length; i++) {
      const button = buttons.item(i);
      expect(button.textContent).toBe(alphabet.charAt(i));
      expect(button.disabled).toBe(false);
    }
  });

  it('should add that letter to the selection when a button is clicked', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = <HTMLElement>fixture.nativeElement;
    const buttons = element.querySelectorAll('button');
    const buttonO = buttons.item(alphabet.indexOf('O'));
    const buttonK = buttons.item(alphabet.indexOf('K'));
    
    expect(component.selection).toBe('');
    buttonO.click();
    expect(component.selection).toBe('O');
    expect(buttonO.disabled).toBe(true);
    buttonK.click();
    expect(component.selection).toBe('OK');
    expect(buttonK.disabled).toBe(true);
  });

});
