'use strict';

describe('Service: UserFirebaseService', function () {

  // load the service's module
  beforeEach(module('InspectormanApp'));

  // instantiate service
  var UserFirebaseService;
  beforeEach(inject(function(_UserFirebaseService_) {
    UserFirebaseService = _UserFirebaseService_;
  }));

  it('should do something', function () {
    expect(!!UserFirebaseService).toBe(true);
  });

});
