import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {User} from '../../common/models';

export class LoginService {

  /* @ngInject */
  constructor(private $http:angular.IHttpService, private $rootScope:angular.IRootScopeService) {
  }

  public send(user:User) {
    let url = "/api/login";
    this.$http.post(url, user);
  }
}
