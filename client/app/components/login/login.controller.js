function LoginController (){ 
  this.loginInserido = "";
  this.senhaInserida = "";

  this.btnClicked = () => {

    if (this.loginInserido == "ceo" && this.senhaInserida == 123 || 
      this.loginInserido == "financeiro" && this.senhaInserida == 123){ 
     // console.log("vc tem acesso adm, pode ver paginas privadas");
     // LoginService.isLogged = true;

    } else { this.showAlert("Usuário ou senha invalidos", 'danger', 9000); }
  }

 this.showAlert = function (message, type, tempo) { 
  this.alertMsg = { text: message, type: type, tempo: tempo }; 
  }
}

 // LoginController.$inject = ['LoginService'];
  export default LoginController;