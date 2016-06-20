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

declare var moment: moment.MomentStatic;

module app {
  'use strict';

  angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
      .controller('MainController', MainController)
      .controller('AboutController', AboutController)
      .controller('VisitController', VisitController)
      .controller('CommunityController', CommunityController)
      .controller('SeasonController', SeasonController)
      .directive('menu', menu);
}
