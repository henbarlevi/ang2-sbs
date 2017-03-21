

describe('MaskPipe', () => { // describe is used to group related tests together

  const maskPipe = new MaskPipe();//for now MaskPipe is available in global namespace because we not using ES6 Modules

  it('should hide everything when no letters selected', () => {
    const masked = maskPipe.transform('ANGULAR', '');
    expect(masked).toBe('*******');
  });

  it('should reveal only the selected letter', () => {
    const masked = maskPipe.transform('ANGULAR', 'A');
    expect(masked).toBe('A****A*');
  });

  it('should reveal only the selected letters', () => {
    const masked = maskPipe.transform('ANGULAR', 'ABCL');
    expect(masked).toBe('A***LA*');
  });

  it('should reveal everything when all letters selected', () => {
    const masked = maskPipe.transform('ANGULAR', 'ANGULR');
    expect(masked).toBe('ANGULAR');
  });

});
