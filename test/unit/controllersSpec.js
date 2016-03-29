'use strict';

describe("Dummy Test Controllers", function() {

  beforeEach(module('MainApp'));

  var hc,
    scope;

	beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    hc = $controller('homeCtrl', {
      $scope: scope
    });
  }));

	it('Ctrl should be working and it should have ctrlTest as true', function () {
    expect(hc.ctrlTest).toBe(true);
  });

});
