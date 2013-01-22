'use strict';

InspectormanApp.controller('MainCtrl', function($scope, $timeout, NotificationService,
                                                StringValidator, ProgressBarService) {

    $scope.username = '';
    $scope.password = '';

    $scope.isLoading = false;

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

        //show loading bar
        $scope.isLoading = true;


        //animate
        console.log('Initialize everything...');
        ProgressBarService.animateProgress(20, function(){
            $timeout(function() {
                console.log('Loading user info...');
            }, 2000);
        });
        ProgressBarService.animateProgress(40, function(){
            $timeout(function() {
                console.log('Loading inspections...');
            }, 4000);
        });
        ProgressBarService.animateProgress(70, function(){
            $timeout(function() {
                console.log('Loading user forms...');
            }, 2000);
        });
        ProgressBarService.animateProgress(100, function(){
            console.log('Done!');
        });
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
