import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
//import loginService from './login.service';  <-> Inutilizado, uma vez que agora todos estados são publicos. Minha idéia era usar um ng-If que fosse apagar todo conteudo (ou mostra-lo) dependendo da variável do serviço.

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    });
})
//.service('LoginService', LoginService)  <-> Inutilizado.
.component('login', loginComponent)
  
.name;

export default loginModule;
