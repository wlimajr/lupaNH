/*
da pra colocar um item em cada formulario somente pra identificar pra onde deve ir
(a url) aí fica somente um enviarForm generico que altera a url
*/

// função para enviar formulário de água
var url = "http://localhost/LUPANH/api";

function enviarFormAsfalto() {
    var dataForm = $("#form-asfalto").serialize();
    $.ajax({
        url: url + "/asfalto",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        if (resposta.status == "ok") {
            asdf = resposta;
            alert(resposta.mensagem);
        } else {
            alert(resposta);
        }
    }).fail(function () {
        alert("erro");
    });
}

function enviarFormAgua() {
    if (document.getElementsByName('poco')[1].checked){
        document.getElementById('dispoco').checked = true;
    }
    var dataForm = $("#form-agua").serialize();
    $.ajax({

        url: "http://walterlima.tempsite.ws/LUPANH/api/agua",
        data: dataForm,
        method: 'POST'
        // beforeSend: function () {
        //     $.mobile.loading('show');
        // }
    }).done(function(resposta) {
        if (resposta.status == "ok") {
            alert(resposta.mensagem);
        } else {
            alert(resposta.mensagem);
        }
    }).fail(function () {
        alert("erro");
    });
}

// função para enviar formulário de coleta de lixo
function enviarFormLixo() {
    // o usuario disse que nao tem esgoto
    if (document.getElementsByName('coleta')[1].checked){
        document.getElementById('frequenciaNull').checked = true;
    }
    var dataForm = $("#form-lixo").serialize();
    $.ajax({
        url: url+"/lixo",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        var teste = resposta;
        if (resposta.status == "ok") {
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
    console.log(dataForm);
    $.ajax({

        url: url + "/esgoto",
        data: dataForm,
        method: 'POST',
    }).done(function(resposta) {

        if (resposta.status == "ok") {
            alert(resposta.mensagem);
        } else {
            alert(resposta);
        }
    }).fail(function () {
        alert('erro');
    });
}

function enviarFormIluminacao() {
    // o usuario disse que nao tem esgoto
    if (document.getElementsByName('poste')[1].checked){
        document.getElementById('ilumNull').checked = true;
        
    }
    var dataForm = $("#form-iluminacao").serialize();
    $.ajax({
        url: url+"/iluminacao",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        var teste = resposta;
        if (resposta.status == "ok") {
            alert(resposta.mensagem);
        } else {
            alert(resposta);
        }
    }).fail(function () {
        alert("erro");
    });
}
