angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  
  $scope.toogleTooltip = function (item) {
    $(item).css('top:' + $(item).css('top')).css('left', $(item).css('left'));
    $scope.tooltipIsVisible = true;
  };
});