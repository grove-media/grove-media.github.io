angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  $scope.tooltipPos = {left:0, top:0};
})

.directive('gmService', function () { 
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
});