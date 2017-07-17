import { WorldbuildersPage } from './app.po';

describe('worldbuilders App', () => {
  let page: WorldbuildersPage;

  beforeEach(() => {
    page = new WorldbuildersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
