angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.gmServices = [
    { css: 'fa-code' },
    { css: 'fa-cloud' },
    { css: 'fa-mobile' },
    { css: 'fa-bar-chart-o' },
    { css: 'fa-pencil' },
    { css: 'fa-wrench' }
  ];
  
  $scope.activeService = null;
  
  $scope.setActiveService = function (srvc, e) {
    $scope.activeService = srvc;
  };
  
  $scope.shouldShowTooltip = function () {
    return $scope.activeService !== null;
  };
});