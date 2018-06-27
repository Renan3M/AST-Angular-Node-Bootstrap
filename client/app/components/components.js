import angular from 'angular';
import categoriaModule from './categoria/categoria';
import lancamentoModule from './lancamento/lancamento';
import loginModule from './login/login';
import noticiaModule from './noticia/noticia';
import contaModule from './conta/conta';

let componentModule = angular.module('app.components', [
  categoriaModule,
  lancamentoModule,
  loginModule,
  noticiaModule,
  contaModule
])

.name;

export default componentModule;