import template from './footer.html';
import controller from './footer.controller';
import './footer.scss';

let footerComponent = {
  restrict: 'E',
  bindings: {},
  transclude: true,
  template,
  controller
};

export default footerComponent;
