'use strict';

InspectormanApp.controller('NavCtrl', function ($scope, $timeout) {
    $scope.showNav = false;
    $scope.showMain = false;
    $scope.showSub = false;

    $scope.dashboardActive = '';
    $scope.settingsActive = '';

    $scope.detailActive = '';
    $scope.formsActive = '';
    $scope.summaryActive = '';
    $scope.complaintsActive = '';
    $scope.historyActive = '';

    $scope.$on('show_nav', function () {
        $scope.showNav();
    });

    $scope.$on('hide_nav', function () {
        $scope.hideNav();
    });

    $scope.$on('switch_nav', function () {
        $scope.switchNav();
    });

    $scope.showNav = function () {
        $scope.showNav = true;
        $('#primary').addClass("animated bounceInLeft");

        $timeout(function() {
            $('#primary').removeClass("animated bounceInLeft");
        }, 1000);
    };

    $scope.hideNav = function () {
        $('#primary').addClass("animated bounceOutLeft");

        $timeout(function() {
            $('#primary').removeClass("animated bounceOutLeft");
            $scope.showNav = false;
        }, 500);
    };

    $scope.switchNav = function () {
        $('#primary').addClass("animated bounceOutLeft");

        $timeout(function() {
            if($scope.showMain){
                $scope.showMain = false;
                $scope.showSub = true;
            } else {
                $scope.showMain = true;
                $scope.showSub = true;
            }

            $('#primary').removeClass("animated bounceOutLeft");

            $('#primary').addClass("animated bounceInLeft");

            $timeout(function() {
                $('#primary').removeClass("animated bounceInLeft");
            }, 1000);
        }, 1000);
    };

    $scope.$on('dashboard_active', function () {
        $scope.showMain = true;
        $scope.dashboardActive = 'active';
    });

    $scope.setDashboardActive = function () {
        $scope.dashboardActive = 'active';
        $scope.settingsActive = '';
    };

    $scope.$on('settings_active', function () {
        $scope.showMain = true;
        $scope.settingsActive = 'active';
    });

    $scope.setSettingsActive = function () {
        $scope.settingsActive = 'active';
        $scope.dashboardActive = '';
    };

    $scope.$on('detail_active', function () {
        $scope.showSub = true;
        $scope.detailActive = 'active';
    });

    $scope.setDetailActive = function () {
        $scope.formsActive = '';
        $scope.summaryActive = '';
        $scope.complaintsActive = '';
        $scope.historyActive = '';
        $scope.detailActive = 'active';
    };

    $scope.$on('forms_active', function () {
        $scope.showSub = true;
        $scope.formsActive = 'active';
    });

    $scope.setFormsActive = function () {
        $scope.detailActive = '';
        $scope.summaryActive = '';
        $scope.complaintsActive = '';
        $scope.historyActive = '';
        $scope.formsActive = 'active';
    };

    $scope.$on('summary_active', function () {
        $scope.showSub = true;
        $scope.summaryActive = 'active';
    });

    $scope.setSummaryActive = function () {
        $scope.detailActive = '';
        $scope.formsActive = '';
        $scope.complaintsActive = '';
        $scope.historyActive = '';
        $scope.summaryActive = 'active';
    };

    $scope.$on('complaints_active', function () {
        $scope.showSub = true;
        $scope.complaintsActive = 'active';
    });

    $scope.setComplaintsActive = function () {
        $scope.complaintsActive = 'active';
        $scope.detailActive = '';
        $scope.formsActive = '';
        $scope.summaryActive = '';
        $scope.historyActive = '';
    };

    $scope.$on('history_active', function () {
        $scope.showSub = true;
        $scope.historyActive = 'active';
    });

    $scope.setHistoryActive = function () {
        $scope.historyActive = 'active';
        $scope.detailActive = '';
        $scope.formsActive = '';
        $scope.summaryActive = '';
        $scope.complaintsActive = '';
    };

});