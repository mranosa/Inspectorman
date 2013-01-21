'use strict';

InspectormanApp.controller('MainCtrl', function($scope, $timeout, NotificationService, StringValidator) {

    $scope.username = '';
    $scope.password = '';

    $scope.init = function(){
        //TODO check if user has logged in redirect else login
    }

    $scope.login = function(){

        //initial validation
        if(!formEntriesValid($scope.username, $scope.password)) {
            wobbleForm();
            return;
        };

        //TODO get user object then load everything
    };

    function formEntriesValid(username, password){
        if(StringValidator.isEmpty(username) || StringValidator.isEmpty(password) ||
           StringValidator.isBlank(username) || StringValidator.isBlank(password)) {

            NotificationService.warning('Empty Fields!', 'All Items are required.');

            return false;
        };

        return true;
    };

    function wobbleForm(){
        $('#login').addClass("wobble");

        $timeout(function() {
            $('#login').removeClass("wobble");
        }, 1000);
    };

    //start the love
    $scope.init();
});
