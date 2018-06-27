import angular from 'angular';
import _categorias from './categorias-data';

function CategoriasMock($httpBackend, $log, storage) {

  let categorias = storage.load('categorias', _categorias); // Vai tentar carregar um novo se disponivel, caso não haja pega o nosso.
  let _id = storage.load('categorias-index', _categorias.length+1);
  let _log = $log;

	$httpBackend.whenGET('/api/categorias').respond( () => {
		console.log(categorias);

    	return [200, categorias, {}];
  });

    $httpBackend.whenPOST('/api/categorias').respond( (method, url, data) => {

		let _data = JSON.parse(data);
		_data.id = _id++;
	    categorias.push(_data);
	    storage.save('categorias', categorias);
	    storage.save('categorias-index', _id);

	   	console.log('inserido com sucesso' + _data);
	   	console.log(categorias);
	    return [200, categorias, {}];

    });

$httpBackend.whenRoute('PUT','/api/categorias/:id').respond(function(method, url, data, headers, params) {
    console.log('Dados recebidos: ' + data +', '+ params.id);
    let id = params.id;
    let _data = JSON.parse(data);

    if (url === '/api/categorias') {// atualiza toda a coleção
      categorias = _data;
    } else { //atualiza um item da coleção

      for(let i=0; i<categorias.length; i++) {
        if(categorias[i].id == id){
          categorias[i].nome = _data.nome;
          categorias[i].descricao = _data.descricao;
          categorias[i].data = _data.data;

          break;
        }
      }
    }
    storage.save('categorias', categorias);
    return [200, categorias, {}];
  });

    $httpBackend.whenRoute('DELETE','/api/categorias/:id').respond(function(method, url, data, headers, params) {
     console.log('Funcao delete');
     let id = params.id;
   
      for(let i=0; i<categorias.length; i++) {
        if(categorias[i].id == id){
          categorias.splice(i, 1);

          storage.save('categorias', categorias);
          storage.save('categorias-index', --_id);
          console.log('Deletado com sucesso');
          break;
        }
      }

     return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
   });

}

CategoriasMock.$inject = ['$httpBackend','$log', 'StorageService'];

export default CategoriasMock;
