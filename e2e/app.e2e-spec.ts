import { HealthyUClientPage } from './app.po';

describe('healthy-uclient App', function() {
  let page: HealthyUClientPage;

  beforeEach(() => {
    page = new HealthyUClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
