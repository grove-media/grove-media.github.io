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
  $scope.tooltipPos = { left: 0 };
  
  $scope.setActiveService = function (srvc, e) {
    $scope.activeService = srvc;
    $scope.tooltipPos = { left: e.offsetX };
  };
  
  $scope.shouldShowTooltip = function () {
    return $scope.activeService !== null;
  };
});