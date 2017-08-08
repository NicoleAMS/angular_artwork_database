import { ArtworkDatabasePage } from './app.po';

describe('artwork-database App', () => {
  let page: ArtworkDatabasePage;

  beforeEach(() => {
    page = new ArtworkDatabasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
