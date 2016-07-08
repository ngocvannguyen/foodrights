import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {User, Token} from '../../common/models';

export class LoginService {

  /* @ngInject */
  constructor(private $http:angular.IHttpService, private $rootScope:angular.IRootScopeService, private webStorage:any) {
  }

  public login(user:User):angular.IPromise<Token> {
    let url = "/api/login";
    return this.$http.post(url, user).then((httpPromise:IHttpPromiseCallbackArg<Token>) => {
      return httpPromise;
    });
  }

  public isLoggedIn():boolean {

    console.log("Time: " + Date.now());
    this.webStorage.local.get("token")

    return (this.webStorage.local.get("token"));
  }
}
