import template from './ListaLancamentos.html';
import controller from './ListaLancamentos.controller';
import './ListaLancamentos.scss';

let ListaLancamentosComponent = {
  restrict: 'E',
  bindings: {
  	update: '<',
  	remove: '&'
  },
  transclude: true,
  template,
  controller
};

export default ListaLancamentosComponent;
