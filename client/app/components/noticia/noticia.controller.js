function NoticiaController($http) {
	this.update = false;

		this.btnClicked = () => {
			var d = new Date();
			this.tempo = d.getTime();
			var novaNoticia = {
				titulo: this.titulo,
				mensagem: this.comentario,
				autor: this.autor,
				data: this.tempo,
				imagem: this.img_src
			}
			
	if (novaNoticia.titulo != undefined && novaNoticia.mensagem != undefined && 
		novaNoticia.autor != undefined)	{
	this.update = true;
	$http.post('/api/noticias', novaNoticia).then((response)=>{console.log(response); this.update = false;});
  	this.showAlert('Noticia adicionada', 'success', 9000); 

	}
  }

  this.onListChange = ($event) => {
  	this.update = true;
  	$http.put('/api/noticias/'+$event.id, $event).then((response)=>{console.log(response); this.update = false;});
  }

  this.onItemRemove = ($event) => {
  	this.update = true;
  	$http.delete('/api/noticias/'+$event.id).then((response)=>{console.log(response); this.update = false;});
  	
  	this.showAlert('Noticia removida', 'danger', 9000); 
  }

  this.showAlert = function (message, type, tempo) { 
	this.alertMsg = { text: message, type: type, tempo: tempo }; 
  }
  	
}

NoticiaController.$inject = ['$http'];
export default NoticiaController;