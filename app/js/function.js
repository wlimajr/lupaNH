// função para enviar formulário de água
function enviarForm() {
    var dataForm = $("#form-agua").serialize();
    $.ajax({
        url: "http://172.16.15.83/app/agua",
        data: dataForm,
        method: 'POST',
    }).done(function(resposta) {
        var teste = resposta;
        if (resposta == "ok") {
            alert(resposta.mensagem);
        } else {
            alert(resposta);
        }
    }).fail(function () {
        alert("erro");
    });
}
