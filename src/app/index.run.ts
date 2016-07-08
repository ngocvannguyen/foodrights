import {WordingService} from '../app/common/services/wording.service';
import IAngularEvent = angular.IAngularEvent;
import {LoginService} from "./common/services/login.service";

/** @ngInject */
export function runBlock($log: angular.ILogService, wordingService:WordingService, loginService:LoginService, $rootScope:angular.IRootScopeService, $location:angular.ILocationService, webStorage:any) {
  wordingService.setWording('vietnamese');

  $rootScope.$on('$routeChangeStart', (event:IAngularEvent, next:any) => {
    let permissionRoutes = ['', '/', '/home', '/login']
    console.log("routeChange: " + $location.path());
    if (permissionRoutes.indexOf($location.path()) == -1)
    {
      console.log("protected path");
      if (!loginService.isLoggedIn()) {
        webStorage.local.set("requestedPath", $location.path());
        $location.path("/login");        
      }
    }
  })

  $log.debug('runBlock end');
}
