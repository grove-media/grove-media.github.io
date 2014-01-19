angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  $scope.tooltipPos = {left:0, top:0};
  $scope.toggleTooltip = function (e) {
    $scope.tooltipIsVisible = !$scope.tooltipIsVisible;
    $scope.tooltipPos = { left: e.clientX, top: e.clientY };
    e.stopPropagation();
  };
})

/*.directive('gmService', function () { 
  return {
    link: function (scope, element, attrs) {
      $(element).bind('mouseenter', function () {
        var pos = 
        scope.tooltipPos = $(this).position();
        scope.tooltipIsVisible = true;
      });
      
      $(element).bind('mouseleave', function () {
        scope.tooltipIsVisible = false;
      });
    }
  };
})*/;