/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AboutController } from './components/about/about.controller';
import { VisitController } from './components/visit/visit.controller';
import { CommunityController } from './components/community/community.controller';
import { SeasonController } from './components/season/season.controller';
import {menu} from "./common/directives/menu/menu.directive";
import {httpHeaderInterceptorConfig} from './index.interceptor';
import {language} from "./common/directives/language/language.directive";
import {WordingService} from "./common/services/wording.service";
import {LoginService} from "./common/services/login.service";
import {SeafoodController} from "./components/season/seafood/seafood.controller";
import {ProgressController} from "./components/progress/progress.controller";
import {EmailService} from "./common/services/email.service";
import {LoginController} from "./components/login/login.controller";

declare var moment: moment.MomentStatic;

module app {
  'use strict';

  angular.module('app', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'ui.bootstrap', 'webStorageModule'])
    .constant('moment', moment)
    .service('wordingService', WordingService)
    .service('emailService', EmailService)
      .service('loginService', LoginService)
    .config(config)
    .config(routerConfig)
    .config(httpHeaderInterceptorConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('AboutController', AboutController)
    .controller('VisitController', VisitController)
    .controller('CommunityController', CommunityController)
    .controller('SeasonController', SeasonController)
    .controller('SeafoodController', SeafoodController)
    .controller('ProgressController', ProgressController)
      .controller('LoginController', LoginController)      
    .directive('menu', menu)
    .directive('language', language);
}
