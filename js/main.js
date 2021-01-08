function Enviar() {
 
    var nome = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
 
    if (nome.value != "" & email.value != "" & subject.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}