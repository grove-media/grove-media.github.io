angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.services = [
    { css: 'fa-code' },
    { css: 'fa-cloud' },
    { css: 'fa-mobile' },
    { css: 'fa-bar-chart-o' },
    { css: 'fa-pencil' },
    { css: 'fa-wrench' }
  ];
  
  $scope.activeService = null;
  
  /*$scope.tooltipPos = {left:0, top:0};
  $scope.showTooltip = function (e) {
    $scope.tooltipIsVisible = true;
    $scope.tooltipPos = { left: e.clientX, top: e.clientY };
    e.stopPropagation();
  };*/
});