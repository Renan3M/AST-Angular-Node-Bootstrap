function CategoriaController($http) {

this.update = false;

this.btnClicked = () => {
	var d = new Date();
	this.tempo = d.getTime();
	
	var novaCategoria = {
		nome: this.nome,
		descricao: this.descricao,
		data: this.tempo,
	}
			
	if (novaCategoria.nome != undefined && novaCategoria.descricao != undefined){
		this.update = true;
		$http.post('/api/categorias', novaCategoria).then((response)=>{console.log(response); this.update = false;});
	  	this.showAlert('Categoria adicionada', 'success', 9000); 

	}
  }

this.onItemRemove = ($event) => {
  	this.update = true;
  	$http.delete('/api/categorias/'+$event.id).then((response)=>{console.log(response); this.update = false;});
  	
  	this.showAlert('Categoria removida', 'danger', 9000); 
  }

   		this.showAlert = function (message, type, tempo) { 
			this.alertMsg = { text: message, type: type, tempo: tempo }; 
		}

}


CategoriaController.$inject = ['$http'];
export default CategoriaController;