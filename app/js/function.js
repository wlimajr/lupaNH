/*
da pra colocar um item em cada formulario somente pra identificar pra onde deve ir
(a url) aí fica somente um enviarForm generico que altera a url
*/

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

// função para enviar formulário de coleta de lixo
function enviarFormLixo() {
    var dataForm = $("#form-lixo").serialize();
    $.ajax({
        url: "http://172.16.15.83/app/lixo",
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

// função para enviar formulário de esgoto
function enviarFormEsgoto() {
    var dataForm = $("#form-esgoto").serialize();
    $.ajax({
        url: "http://172.16.15.83/app/esgoto",
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