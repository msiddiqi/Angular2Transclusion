import { Angular2TransclusionAppPage } from './app.po';

describe('angular2-transclusion-app App', function() {
  let page: Angular2TransclusionAppPage;

  beforeEach(() => {
    page = new Angular2TransclusionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
