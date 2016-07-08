import {LoginService} from "../../common/services/login.service";
import IWindowService = angular.IWindowService;
import {User, Token} from "../../common/models";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

export class LoginController {
  public user:User = new User();
  public error:String;  
  
  /* @ngInject */
  constructor (private loginService:LoginService, private $location:angular.ILocationService, private webStorage:any) {
  }

  public login():void {

      this.loginService.login(this.user).then((httpPromise:IHttpPromiseCallbackArg<Token>) => {
          let token = httpPromise.data;
          if (token.userName && token.expiry)
          {
              this.webStorage.local.set("token", token);
              this.$location.path(this.webStorage.local.get("requestedPath"));
          } else {
              this.error = 'Invalid credential';
          }
      });
  }
}
