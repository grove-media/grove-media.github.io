angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  $scope.tooltipPos = {left:0, top:0};
  
  $scope.showTooltip = function (x, y) {
    $scope.tooltipPos = {left: x, top: y};
    $scope.tooltipIsVisible = true;
  };
  
  $scope.hideTooltip = function () {
    $scope.tooltipIsVisible = false;
  };
})

.directive('gmService', function () {
  return {
    link: function (scope, element, attrs) {
      element.bind('mouseenter', function (e) {
        scope.showTooltip(e.clientX, e.clientY);
      });
      
      element.bind('mouseleave', function () {
        scope.hideTooltip();
      });
    }
  };
});