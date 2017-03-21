import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {

  const component = new LetterButtonsComponent();
  //fit - in order to make karma run only this test
  fit('should display a button for each letter of the alphabet', () => {
    expect(component.alphabet).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  });
  //toBe() - strict equality compare , toEqual() - compare the content
});
