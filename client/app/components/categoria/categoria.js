import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriaComponent from './categoria.component';
import CategoriaService from './categoria.service';

let categoriaModule = angular.module('categoria', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('categoria', {
      url: '/categoria',
      component: 'categoria'
    });
})

.service('categoriaService', CategoriaService)
.component('categoria', categoriaComponent)
  
.name;

export default categoriaModule;