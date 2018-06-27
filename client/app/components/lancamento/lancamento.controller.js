function LancamentoController($http, categoriaService) {
	this.update = false;

	let promisse = categoriaService.getListPromisse();
    promisse.then((response)=>{ console.log(response);
                this.listaCategorias = response.data;
                } 
              );

		this.btnClicked = () => {
		
			var d = new Date();
			this.data_lancamento = d.getTime();
			
			var novoLancamento = {
				nome: this.nome, //string
				descricao: this.descricao, //string
				valor: this.valor, // number (must positive)
				receita: this.receita, // bolean
				categoria: this.categoria, // string
				data: this.data_lancamento, // number 
				repeticoes: this.repeticoes_despesa, // number
				repetitividade: this.repetitividade_despesa // string
			}
			
	if (novoLancamento.nome != undefined && 
		novoLancamento.descricao != undefined && 
		novoLancamento.valor != undefined && 
		novoLancamento.receita != undefined && 
		novoLancamento.categoria != undefined && 
		novoLancamento.repeticoes != undefined && 
		novoLancamento.repetitividade != undefined)	{
		
		if (novoLancamento.repetitividade != 'Anual'&& 
			novoLancamento.repetitividade != 'Mensal' && 
			novoLancamento.repetitividade != 'Semanal' && 
			novoLancamento.repetitividade != 'Diaria') {
				
			this.showAlert("Repetitividade só pode ser um dos"+ 
					" seguintes valores (Anual, Mensal, Semanal, Diaria)", 'warning', 18000); 
			return;
			}

		if (novoLancamento.valor < 0) {
			this.showAlert("Valor deve ser acima de 0, para despesas,"+ 
				" selecionar o botão despesa no final do formulario.", 'warning', 12000); 
			return;
		}
	
	this.update = true; // updates the child component
	$http.post('/api/lancamentos', novoLancamento).then((response)=>{
		console.log(response); this.update = false;});

	this.showAlert('Lançamento adicionado', 'success', 9000); 

	}
  }
  	
  this.onItemRemove = ($event) => {
  	this.update = true;
  	$http.delete('/api/lancamentos/'+$event.id).then((response)=>{
		console.log(response); this.update = false;});
	
	this.showAlert('Lançamento removido', 'danger', 9000); 
  }

  this.showAlert = function (message, type, tempo) { // O onChanges do alert responde à essa mudança.
			this.alertMsg = { text: message, type: type, tempo: tempo }; 
			}
}

LancamentoController.$inject = ['$http', 'categoriaService'];
export default LancamentoController;