import template from './conta.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './conta.controller';
import './conta.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let contaComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default contaComponent;
