class CategoriaService {
	constructor($http) {
	this.http = $http;
    this.listaCategorias = [];
	}

error = () => {}

getListPromisse = () => {


return this.http.get('/api/categorias');
}

}

CategoriaService.$inject = ['$http'];

export default CategoriaService;