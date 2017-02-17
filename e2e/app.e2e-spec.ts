import { SatpalTestPage } from './app.po';

describe('satpal-test App', function() {
  let page: SatpalTestPage;

  beforeEach(() => {
    page = new SatpalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
