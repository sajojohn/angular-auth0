import { AppLayoutPage } from './app.po';

describe('app-layout App', () => {
  let page: AppLayoutPage;

  beforeEach(() => {
    page = new AppLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
