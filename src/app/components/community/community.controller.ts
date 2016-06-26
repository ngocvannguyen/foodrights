export class CommunityController {
  /* @ngInject */
  constructor (private $window:angular.IWindowService, private $rootScope:angular.IRootScopeService) {
    }

  melbourne()
  {
    this.$rootScope['community_selected'] = 'MELBOURNE';
    this.$window.location.href = "/#season"
  }
}
