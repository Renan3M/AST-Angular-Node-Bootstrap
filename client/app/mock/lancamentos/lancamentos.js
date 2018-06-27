import angular from 'angular';
import _lancamentos from './lancamentos-data';

function LancamentosMock($httpBackend, $log, storage) {

 let lancamentos = storage.load('lancamentos', _lancamentos); // Vai tentar carregar um novo se disponivel, caso não haja pega o nosso.
  let _id = storage.load('lancamentos-index', _lancamentos.length+1);
  let _log = $log;

	$httpBackend.whenGET('/api/lancamentos').respond( () => {
		console.log(lancamentos);

    	return [200, lancamentos, {}];
  });

    $httpBackend.whenPOST('/api/lancamentos').respond( (method, url, data) => {

		let _data = JSON.parse(data);
		_data.id = _id++;
	    lancamentos.push(_data);
	    storage.save('lancamentos', lancamentos);
	    storage.save('lancamentos-index', _id);

	   	console.log('inserido com sucesso' + _data);
	   	console.log(lancamentos);
	    return [200, lancamentos, {}];

    });

$httpBackend.whenRoute('PUT','/api/lancamentos/:id').respond(function(method, url, data, headers, params) {
    console.log('Dados recebidos: ' + data +', '+ params.id);
    let id = params.id;
    let _data = JSON.parse(data);

    if (url === '/api/lancamentos') {// atualiza toda a coleção
      lancamentos = _data;
    } else { //atualiza um item da coleção

      for(let i=0; i<lancamentos.length; i++) {
        if(lancamentos[i].id == id){
          lancamentos[i].nome = _data.nome;
          lancamentos[i].descricao = _data.descricao;
          lancamentos[i].valor = _data.valor;
          lancamentos[i].receita = _data.receita;
          lancamentos[i].categoria = _data.categoria;
          lancamentos[i].data = _data.data;
          lancamentos[i].repeticoes = _data.repeticoes;
          lancamentos[i].repetitividade = _data.repetitividade;

          break;
        }
      }
    }
    storage.save('lancamentos', lancamentos);
    return [200, lancamentos, {}];
  });

    $httpBackend.whenRoute('DELETE','/api/lancamentos/:id').respond(function(method, url, data, headers, params) {
     console.log('Funcao delete');
     let id = params.id;
   
      for(let i=0; i<lancamentos.length; i++) {
        if(lancamentos[i].id == id){
          lancamentos.splice(i, 1);

          storage.save('lancamentos', lancamentos);
          storage.save('lancamentos-index', --_id);
          console.log('Deletado com sucesso');
          break;
        }
      }

     return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
   });

}

LancamentosMock.$inject = ['$httpBackend','$log', 'StorageService'];

export default LancamentosMock;
