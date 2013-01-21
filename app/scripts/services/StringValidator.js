'use strict';

InspectormanApp.factory('StringValidator', function() {
  // Service logic
  // ...

  // Public API here
  return {
    isEmpty: function(str) {
        return (!str || 0 === str.length);
    },
    isBlank: function(str) {
        return (!str || /^\s*$/.test(str));
    }
  };
});
