class NoticiaService {
	constructor($http) {
	this.http = $http;
    this.listaNoticias = [];
	}

error = () => {}

getListPromisse = () => {


return this.http.get('/api/noticias');
}

}

NoticiaService.$inject = ['$http'];

export default NoticiaService;