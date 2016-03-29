'use strict';

/* jasmine specs for services go here */

describe('Testing Services', function() {
  beforeEach(module('MainApp'));
  it('check the existence the last element in the array', inject(function(filtersSrv) {
    expect(filtersSrv.getRanges([10, 1253])).toContain([1127,1253]);
  }));
  it('check the length of the array to be 10', inject(function(filtersSrv) {
    expect(filtersSrv.getRanges([11, 1253]).length).toEqual(10);
  }));
});
