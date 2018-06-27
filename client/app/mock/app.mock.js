import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import categoriasMock from './categorias/categorias';
import lancamentosMock from './lancamentos/lancamentos';
import noticiasMock from './noticias/noticias';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.run(categoriasMock)
.run(lancamentosMock)
.run(noticiasMock)

.name;

export default appMockModule;