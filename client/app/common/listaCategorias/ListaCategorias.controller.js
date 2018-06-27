class ListaCategoriasController {

  constructor($log, categoriaService) {
this._log = $log;
this._CategoriaService = categoriaService;
}

 RemoverCategoria = (Categoria) => {
  this.remove({$event: Categoria});
}

 EditarCategoria = (Categoria) => {
  // Não é pedido no preambulo, edição de Categorias.
  console.log("item "+Categoria+" editado");
 }

  getClass = function(aval) { 
      if (aval) return 'positivo';
        else return 'negativo'; 
} 

  UpdateList = () => {

 	  var promisse = this._CategoriaService.getListPromisse();
    promisse.then((response)=>{ console.log(response);
                this.listaCategorias = response.data;
                } 
              );
}


$onChanges (changedObjs) {

	if (changedObjs.update) {
		this.UpdateList();
   }
 }
}

ListaCategoriasController.$inject = ['$log', 'categoriaService'];

export default ListaCategoriasController;
