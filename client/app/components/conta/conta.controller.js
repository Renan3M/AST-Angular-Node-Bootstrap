function contaController(lancamentoService) {


this._lancamentoService = lancamentoService;  
this.receita_ultimo_mes = 0;
this.despesa_ultimo_mes = 0;
this.items = [];
this.rendaMensal = [];

// 0 = janeiro, 1 = fevereiro, 2 = março, 3 = abril, 4 = maio, 5 = junho, 6 = julho, 
// 7 = agosto, 8 = setembro, 9 = outubro , 10 = novembro, 11 = dezembro.


 var promisse = this._lancamentoService.getListPromisse();
    promisse.then((response)=>{ console.log(response);

                this.listaLancamentos = response.data;
                this.listaLancamentos.forEach(this.analitics);
                console.log(this.receita_ultimo_mes+", "+this.despesa_ultimo_mes);
                
                /* this.listaLancamentos.sort(function(a,b){
                	return new Date(b.data) - new Date(a.data);
				});
				console.log(this.listaLancamentos);
                */
                console.log(this.items);
                this.items.forEach(this.renda);
                console.log(this.rendaMensal);
            });

this.analitics = (item, index) => {

	let dataD = new Date()
	let dataAtual = dataD.getTime();
	let mesAtual = dataD.getMonth();
	
// Pegando valores do ultimo mes	
	let data = dataAtual - item.data;
	if (data <= 2629800000) { // 1 mes
		if (item.receita) {
			this.receita_ultimo_mes += new Number(item.valor) * item.repeticoes;
		} else{
			this.despesa_ultimo_mes += new Number(item.valor) * item.repeticoes;
		}
}

// Agrupamento em meses
	let itemData = new Date(item.data);
	let mes = itemData.getMonth();

	  if (!this.items[mes]) {
	    this.items[mes] = [];
	  }
	  this.items[mes].push(item);


  }

  this.renda = (item, index) => {
  	let income = 0;
  	for(let a = 0; a < item.length; a++)
  	{
  		if (item[a].receita) {
  		income += new Number(item[a].valor) * item[a].repeticoes;
		} else 
			income -= new Number(item[a].valor) * item[a].repeticoes;
  	}

  	console.log(income +'para'+ index);

let mes;
  	if (index == 0){mes = 'Janeiro'}
  	else if (index == 1){mes = 'Fevereiro';}
  	else if (index == 2){mes = 'Março';}
  	else if (index == 3){mes = 'Abril';}
  	else if (index == 4){mes = 'Maio';}
  	else if (index == 5){mes = 'Junho';}
  	else if (index == 6){mes = 'Julho';}
  	else if (index == 7){mes = 'Agosto';}
  	else if (index == 8){mes = 'Setembro';}
  	else if (index == 9){mes = 'Outubro';}
  	else if (index == 10){mes = 'Novembro';}
  	else if (index == 11){mes = 'Dezembro';}; 


  	let renda_do_mes = {
  		income: income,
  		month: mes
  	}
  	this.rendaMensal.push(renda_do_mes);

  }

}

contaController.$inject = ['lancamentoService'];
export default contaController;