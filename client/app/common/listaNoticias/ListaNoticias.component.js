import template from './ListaNoticias.html';
import controller from './ListaNoticias.controller';
import './ListaNoticias.scss';

let ListaNoticiasComponent = {
  restrict: 'E',
  bindings: {
  	update: '<',
  	save: '&',
  	remove: '&'
  },
  transclude: true,
  template,
  controller
};

export default ListaNoticiasComponent;
