class ListaLancamentosController {

  constructor($log, lancamentoService) {
this._log = $log;
this._lancamentoService = lancamentoService;
}

 RemoverLancamento = (lancamento) => {
  this.remove({$event: lancamento});
}

 EditarLancamento = (lancamento) => {
  // Não é pedido no preambulo, edição de lancamentos.
  console.log("item "+lancamento+" editado");
 }

  getClass = function(aval) { 
      if (aval) return 'positivo';
        else return 'negativo'; 
} 

  UpdateList = () => {

 	  let promisse = this._lancamentoService.getListPromisse();
    promisse.then((response)=>{ console.log(response);
                this.listaLancamentos = response.data;
                } 
              );
}


$onChanges (changedObjs) {

	if (changedObjs.update) {
		this.UpdateList();
   }
 }
}

ListaLancamentosController.$inject = ['$log', 'lancamentoService'];

export default ListaLancamentosController;
