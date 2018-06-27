import template from './noticia.html';
import controller from './noticia.controller';
import './noticia.scss'; 

let noticiaComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default noticiaComponent;