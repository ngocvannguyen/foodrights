export class SeafoodController {
  /* @ngInject */
  constructor (private $window:angular.IWindowService) {
  }

  where() {
    this.$window.location.href ="#/seafoodLocation";
  }

  why() {
    this.$window.location.href ="#/seafoodReason";
  }
}
