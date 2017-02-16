import { ExchangeAppPage } from './app.po';

describe('exchange-app App', function() {
  let page: ExchangeAppPage;

  beforeEach(() => {
    page = new ExchangeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
