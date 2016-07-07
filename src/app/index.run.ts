import {WordingService} from '../app/common/services/wording.service';
import IAngularEvent = angular.IAngularEvent;

/** @ngInject */
export function runBlock($log: angular.ILogService, wordingService:WordingService, $rootScope:angular.IRootScopeService, $location:angular.ILocationService) {
  wordingService.setWording('vietnamese');

  $rootScope.$on('$routeChangeStart', (event:IAngularEvent, next:any) => {
    let permissionRoutes = ['', '/', '/home', '/login']
    console.log("routeChange: " + $location.path());
    if (permissionRoutes.indexOf($location.path()) == -1)
    {
      console.log("protected path");
      $location.path("/login");
    }
  })

  $log.debug('runBlock end');
}
