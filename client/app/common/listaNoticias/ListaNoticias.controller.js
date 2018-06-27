class ListaNoticiasController {

  constructor($log, noticiaService) {
this._log = $log;
this.showList = true;
this._noticiaService = noticiaService;
}

 RemoverNoticia = (noticia) => {
  this.remove({$event: noticia});

}

 EditarNoticia = (noticia) => {
this._log.info(noticia);
this.showList = false;
this.noticia = noticia;

    this.novoTitulo = noticia.titulo;
    this.novoComentario = noticia.mensagem;
    this.novaImg_src = noticia.imagem;

 }

 AtualizarNoticia = () => {

    if (this.novoTitulo == null) {this.novoTitulo = this.noticia.titulo;}
    if (this.novoComentario == null) {this.novoComentario = this.noticia.mensagem;}
    if (this.novaImg_src == null) {this.novaImg_src = this.noticia.imagem;}

  var novaNoticia = {
        titulo: this.novoTitulo,
        mensagem: this.novoComentario,
        autor: this.noticia.autor,
        data: this.noticia.data,
        imagem: this.novaImg_src,
        id: this.noticia.id
      }

  this.noticia = null; // No reason to keep in memory
  this.showList = true;
  this.save({$event: novaNoticia});
 }

 UpdateList = () => {

    let promisse = this._noticiaService.getListPromisse();
    promisse.then((response)=>{ console.log(response);
                this.listaNoticias = response.data;
                } 
              );
}


$onChanges (changedObjs) {

	if (changedObjs.update) {
		this.UpdateList();
	}
}
}

ListaNoticiasController.$inject = ['$log','noticiaService'];

export default ListaNoticiasController;
