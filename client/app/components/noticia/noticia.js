import angular from 'angular';
import uiRouter from 'angular-ui-router';
import noticiaComponent from './noticia.component';
import NoticiaService from './noticia.service';

let noticiaModule = angular.module('noticia', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('noticia', {
      url: '/',
      component: 'noticia'
    });
})
.service('noticiaService', NoticiaService)
.component('noticia', noticiaComponent)
  
.name;

export default noticiaModule;