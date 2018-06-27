import './common.scss'; //css comum a todas as views comuns
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import listaNoticiasModule from './listaNoticias/ListaNoticias';
import listaLancamentosModule from './listaLancamentos/ListaLancamentos';
import listaCategoriasModule from './listaCategorias/ListaCategorias';
import alertModule from './alert/alert';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  listaNoticiasModule,
  listaLancamentosModule,
  listaCategoriasModule,
  alertModule
])

.name;

export default commonModule;
