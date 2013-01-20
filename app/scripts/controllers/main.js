'use strict';

InspectormanApp.controller('MainCtrl', function($scope, $timeout) {
    $scope.login = function(){

        $('#login').addClass("wobble");

        $timeout(function() {
            $('#login').removeClass("wobble");
        }, 1000);
    };
});
