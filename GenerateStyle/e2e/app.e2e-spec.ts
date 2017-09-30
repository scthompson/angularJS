import { GenerateStylePage } from './app.po';

describe('generate-style App', () => {
  let page: GenerateStylePage;

  beforeEach(() => {
    page = new GenerateStylePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
