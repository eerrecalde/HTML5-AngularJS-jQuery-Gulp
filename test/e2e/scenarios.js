'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Home', function() {


  it('should render home with title as title', function() {
    browser.get('/');
    var title = element(by.css('header > h1'));
    expect(title.getText()).toEqual('Page Title');
  })

});
