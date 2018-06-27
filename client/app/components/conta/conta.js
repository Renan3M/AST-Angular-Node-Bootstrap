import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contaComponent from './conta.component';

let contaModule = angular.module('conta', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('conta', {
      url: '/conta',
      component: 'conta'
    });
})

.component('conta', contaComponent)
  
.name;

export default contaModule;
