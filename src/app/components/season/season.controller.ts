export class SeasonController {
  /* @ngInject */
  constructor (private $window:angular.IWindowService) {
  }

  seafood() {
    this.$window.location.href ="#/seafood";
  }

  meat() {
    this.$window.location.href ="#/season";
  }

  spice() {
    this.$window.location.href ="#/season";
  }

  fruit() {
    this.$window.location.href ="#/season";
  }


}
