export class MainController {
  /* @ngInject */
  constructor (private $window:angular.IWindowService, private $rootScope:angular.IRootScopeService) {
  }

  season() {
    this.$window.location.href ="#/season";
  }
}
