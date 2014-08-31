angular.module('app.directives', [])

.directive('boxContainer', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    template: '<div id="bl-main" class="bl-main" ng-transclude></div>'
  };
})

.directive('boxContent', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: function(elem, attrs) { return attrs.templateUrl; }
  };
})

.directive('box', function() {
  return {
    replace: true,
    restrict: 'E',
    template: '<section class="box-header" ng-class="state">' +
                '<div class="bl-box" ui-sref="{{state}}">' +
                  '<h2>{{title}}</h2>' +
                '</div>' +
              '</section>',
    scope: {
      title: '@',
      state: '@'
    }
  };
});
