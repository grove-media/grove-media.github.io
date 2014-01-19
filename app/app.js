angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  $scope.tooltipPos = {left:0, top:0};
  $scope.showTooltip = function (e) {
    $scope.tooltipIsVisible = true;
    $scope.tooltipPos = { left: e.clientX, top: e.clientY };
    e.stopPropagation();
  };
})

.directive('gmService', function () { 
  return {
    link: function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        scope.tooltipPos = element.position();
        scope.tooltipIsVisible = true;
      });
      
      /*$(element).bind('mouseleave', function () {
        scope.tooltipIsVisible = false;
      });*/
    }
  };
});