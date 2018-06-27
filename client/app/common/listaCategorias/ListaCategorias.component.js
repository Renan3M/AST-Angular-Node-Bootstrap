import template from './ListaCategorias.html';
import controller from './ListaCategorias.controller';
import './ListaCategorias.scss';

let ListaCategoriasComponent = {
  restrict: 'E',
  bindings: {
  	update: '<',
  	remove: '&'
  },
  transclude: true,
  template,
  controller
};

export default ListaCategoriasComponent;
