import angular from 'angular';
import ListaCategoriasComponent from './ListaCategorias.component';

let ListaCategoriasModule = angular.module('ListaCategorias', [])

.component('listaCategorias', ListaCategoriasComponent)
  
.name;

export default ListaCategoriasModule;
