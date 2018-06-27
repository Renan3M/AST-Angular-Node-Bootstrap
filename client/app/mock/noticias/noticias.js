import angular from 'angular';
import _noticias from './noticias-data';

function NoticiasMock($httpBackend, $log, storage) {


  let noticias = storage.load('noticias', _noticias); // Vai tentar carregar um novo se disponivel, caso não haja pega o nosso.
  let _id = storage.load('noticias-index', _noticias.length+1);
  let _log = $log;

	$httpBackend.whenGET('/api/noticias').respond( () => {
		console.log(noticias);

    	return [200, noticias, {}];
  });

    $httpBackend.whenPOST('/api/noticias').respond( (method, url, data) => {

		let _data = JSON.parse(data);
		_data.id = _id++;
	    noticias.push(_data);
	    storage.save('noticias', noticias);
	    storage.save('noticias-index', _id);

	   	console.log('inserido com sucesso' + _data);
	    return [200, noticias, {}];

    });

$httpBackend.whenRoute('PUT','/api/noticias/:id').respond(function(method, url, data, headers, params) {
    console.log('Dados recebidos: ' + data +', '+ params.id);
    let id = params.id;
    let _data = JSON.parse(data);

    if (url === '/api/noticias') {// atualiza toda a coleção
      noticias = _data;
    } else { //atualiza um item da coleção

/*				titulo: this.titulo,
				mensagem: this.comentario,
				autor: this.autor,
				data: this.tempo,
				imagem: this.img_src*/

      for(let i=0; i<noticias.length; i++) {
        if(noticias[i].id == id){
          noticias[i].titulo = _data.titulo;
          noticias[i].mensagem = _data.mensagem;
          noticias[i].autor = _data.autor;
          noticias[i].data = _data.data;
          noticias[i].imagem = _data.imagem;

          break;
        }
      }
    }
    storage.save('noticias', noticias);
    return [200, noticias, {}];
  });

    $httpBackend.whenRoute('DELETE','/api/noticias/:id').respond(function(method, url, data, headers, params) {
     console.log('Funcao delete');
     let id = params.id;
   
      for(let i=0; i<noticias.length; i++) {
        if(noticias[i].id == id){
          noticias.splice(i, 1);

          storage.save('noticias', noticias);
          storage.save('noticias-index', --_id);
          console.log('Deletado com sucesso');
          break;
        }
      }

     return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
   });
 
}

NoticiasMock.$inject = ['$httpBackend','$log','StorageService'];

export default NoticiasMock;
