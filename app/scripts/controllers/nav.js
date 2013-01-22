'use strict';

InspectormanApp.controller('NavCtrl', function ($scope) {
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

    $scope.$on('dashboard_active', function () {
        $scope.showNav = true;
        $scope.showMain = true;
        $scope.dashboardActive = 'active';
    });

    $scope.setDashboardActive = function () {
        $scope.dashboardActive = 'active';
        $scope.settingsActive = '';
    };

    $scope.$on('settings_active', function () {
        $scope.showNav = true;
        $scope.showMain = true;
        $scope.settingsActive = 'active';
    });

    $scope.setSettingsActive = function () {
        $scope.settingsActive = 'active';
        $scope.dashboardActive = '';
    };

    $scope.$on('detail_active', function () {
        $scope.showNav = true;
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
        $scope.showNav = true;
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
        $scope.showNav = true;
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
        $scope.showNav = true;
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
        $scope.showNav = true;
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