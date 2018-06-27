class LancamentoService {

	constructor($http) {
	this.http = $http;
    this.listaLancamentos = [];
	}

error = () => {}

getListPromisse = () => {

return this.http.get('/api/lancamentos');
}

}

LancamentoService.$inject = ['$http'];
export default LancamentoService;