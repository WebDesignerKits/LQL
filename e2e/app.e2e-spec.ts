import { LQLPage } from './app.po';

describe('lql App', function() {
  let page: LQLPage;

  beforeEach(() => {
    page = new LQLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
