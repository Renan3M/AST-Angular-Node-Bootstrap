import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lancamentoComponent from './lancamento.component';
import LancamentoService from './lancamento.service';


let lancamentoModule = angular.module('lancamento', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('lancamento', {
      url: '/lancamento',
      component: 'lancamento'
    });
})

.service('lancamentoService', LancamentoService)
.component('lancamento', lancamentoComponent)
  
.name;

export default lancamentoModule;
