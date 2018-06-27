import template from './lancamento.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './lancamento.controller';
import './lancamento.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let lancamentoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default lancamentoComponent;
