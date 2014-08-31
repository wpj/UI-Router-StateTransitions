angular.module('homepage', ['app.controllers', 'app.directives', 'app.services', 'ui.router', 'ngAnimate'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      resolve: resolve,
      template: '<box-container>' +
                  '<box title="About" state="about"></box>' +
                  '<box title="Work" state="work"></box>' +
                  '<box title="Media" state="media"></box>' +
                  '<box title="Contact" state="contact"></box>' +
                '</box-container>'
    })
    .state('about', {
      url: '/about',
      resolve: resolve,
      template: '<box-container class="bl-expand-item">' +
                  '<box-content template-url="views/about.html"></box-content>' +
                '</box-container>'
    })
    .state('work', {
      url: '/work',
      resolve: resolve,
      template: '<box-container class="bl-expand-item">' +
                  '<box-content template-url="views/work.html"></box-content>' +
                '</box-container>'
    })
    .state('media', {
      url: '/media',
      resolve: resolve,
      template: '<box-container class="bl-expand-item">' +
                  '<box-content template-url="views/media.html"></box-content>' +
                '</box-container>'
    })
    .state('contact', {
      url: '/contact',
      resolve: resolve,
      template: '<box-container class="bl-expand-item">' +
                  '<box-content template-url="views/contact.html"></box-content>' +
                '</box-container>'
    });

  $urlRouterProvider
  .otherwise('/#');
}])

.run(['$rootScope', '$state', function($rootScope, $state) {
  var oldLocation = '';

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
    var isDownwards = true;
    var isRoot = true;

    var newLocation = toState.url;
    if (oldLocation !== newLocation && oldLocation.indexOf(newLocation) !== -1) {
      isDownwards = false;
    }
    if (fromState.name !== "") {
      isRoot = false;
    }

    oldLocation = newLocation;

    $rootScope.isDownwards = isDownwards;
    $rootScope.isRoot = isRoot;
  });
}]);

var resolve = {
  delay: function($q, $timeout) {
    var delay = $q.defer();
    $timeout(delay.resolve, 0, false);
    return delay.promise;
  }
};
