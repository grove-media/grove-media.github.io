angular.module('app', ['ngRoute'])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  $scope.tooltipPos = {x:0, y:40};
  
  $scope.showTooltip = function (x, y) {
    $scope.tooltipPos = {x, y};
    $scope.tooltipIsVisible = true;
  };
  
  $scope.hideTooltip = function () {
    $scope.tooltipIsVisible = false;
  };
})

.directive('service', function () {
  return {
    restrict: 'E',
    scope: {
      type: '=type'
    },
    template: '<i class="fa fa-{{ type }}"></i>',
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