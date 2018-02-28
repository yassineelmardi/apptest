import { ApptestPage } from './app.po';

describe('apptest App', () => {
  let page: ApptestPage;

  beforeEach(() => {
    page = new ApptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
