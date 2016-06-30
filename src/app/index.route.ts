/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
    })
    .when('/home', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'app/components/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .when('/visit', {
      templateUrl: 'app/components/visit/visit.html',
      controller: 'VisitController',
      controllerAs: 'visit'
    })
    .when('/season', {
      templateUrl: 'app/components/season/season.html',
      controller: 'SeasonController',
      controllerAs: 'season'
    })
    .when('/community', {
      templateUrl: 'app/components/community/community.html',
      controller: 'CommunityController',
      controllerAs: 'community'
    })
    .when('/seafood', {
      templateUrl: 'app/components/season/seafood/seafood.html',
      controller: 'SeafoodController',
      controllerAs: 'seafood'
    })
    .when('/seafoodLocation', {
      templateUrl: 'app/components/season/seafood/location/location.html',
      controller: 'SeafoodController',
      controllerAs: 'seafood'
    })
    .when('/seafoodReason', {
      templateUrl: 'app/components/season/seafood/reason/reason.html',
      controller: 'SeafoodController',
      controllerAs: 'seafood'
    })
    .when('/progress', {
      templateUrl: 'app/components/progress/progress.html',
      controller: 'ProgressController',
      controllerAs: 'progress'
    })
    .otherwise({
      redirectTo: '/'
    });
}
