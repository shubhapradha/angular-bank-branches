import angular from 'angular';

import {bank} from './app/bank/bank';
import BankService from './app/bank/bankService';
import 'angular-ui-router';
import routesConfig from './routes';

import './styles/css/index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .constant('APIUrl', 'https://vast-shore-74260.herokuapp.com/banks?city=')
  .component('bank', bank)
  .service('BankService', BankService);
