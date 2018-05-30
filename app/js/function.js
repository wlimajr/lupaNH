/*
da pra colocar um item em cada formulario somente pra identificar pra onde deve ir
(a url) aí fica somente um enviarForm generico que altera a url
*/

// função para enviar formulário de água
var url = "https://lupanh.000webhostapp.com/LUPANH/api";

function enviarFormAsfalto() {
    var dataForm = $("#form-asfalto").serialize();
    $.ajax({
        url: url + "/asfalto",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        if (resposta.status == "ok") {
            swal("Bom trabalho!", resposta.mensagem, "success");
        } else {
            swal(resposta);
        }
    }).fail(function () {
        swal("erro");
    });
}

function enviarFormAgua() {
    if (document.getElementsByName('poco')[1].checked) {
        document.getElementById('dispoco').checked = true;
    }
    var dataForm = $("#form-agua").serialize();
    if ($("#latAgua").val() === "" || $("#longAgua").val() === "") {
        swal({
            title: 'Oops...',
            type: 'error',
            html:
                'Parece que as coordenadas não foram carregadas, ligue seu GPS e ' +
                'clique no botão <img src="css/images/icons-png/location-black.png">, ' +
                'e tente novamente',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                'Ok!',
            confirmButtonAriaLabel: 'Mapa',
        })
        return;
    }
    $.ajax({

        url: url + "/agua",
        data: dataForm,
        method: 'POST'
        // beforeSend: function () {
        //     $.mobile.loading('show');
        // }
    }).done(function (resposta) {
        if (resposta.status == "ok") {
            swal("Bom trabalho!", resposta.mensagem, "success");
        } else {
            swal(resposta.mensagem);
        }
    }).fail(function () {
        swal("erro tente");
    });
}

// função para enviar formulário de coleta de lixo
function enviarFormLixo() {
    // o usuario disse que nao tem esgoto
    if (document.getElementsByName('coleta')[1].checked) {
        document.getElementById('frequenciaNull').checked = true;
    }
    var dataForm = $("#form-lixo").serialize();
    if ($("#latLixo").val() === "" || $("#longLixo").val() === "") {
        swal({
            title: 'Oops...',
            type: 'error',
            html:
                'Parece que as coordenadas não foram carregadas, ligue seu GPS e ' +
                'clique no botão <img src="css/images/icons-png/location-black.png">, ' +
                'e tente novamente',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                'Ok!',
            confirmButtonAriaLabel: 'Mapa',
        })
        return;
    }
    $.ajax({
        url: url + "/lixo",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        var teste = resposta;
        if (resposta.status == "ok") {
            swal("Bom trabalho!", resposta.mensagem, "success");
        } else {
            swal(resposta);
        }
    }).fail(function () {
        swal("erro");
    });
}

// função para enviar formulário de esgoto
function enviarFormEsgoto() {
    var dataForm = $("#form-esgoto").serialize();
    if ($("#latEsgoto").val() === "" || $("#longEsgoto").val() === "") {
        swal({
            title: 'Oops...',
            type: 'error',
            html:
                'Parece que as coordenadas não foram carregadas, ligue seu GPS e ' +
                'clique no botão <img src="css/images/icons-png/location-black.png">, ' +
                'e tente novamente',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                'Ok!',
            confirmButtonAriaLabel: 'Mapa',
        })
        return;
    }
    $.ajax({

        url: url + "/esgoto",
        data: dataForm,
        method: 'POST',
    }).done(function (resposta) {

        if (resposta.status == "ok") {
            swal("Bom trabalho!", resposta.mensagem, "success");
        } else {
            swal(resposta);
        }
    }).fail(function () {
        swal('erro');
    });
}

function enviarFormIluminacao() {
    // o usuario disse que nao tem esgoto
    if (document.getElementsByName('poste')[1].checked) {
        document.getElementById('ilumNull').checked = true;

    }
    var dataForm = $("#form-iluminacao").serialize();
    if ($("#latIlum").val() === "" || $("#longIlum").val() === "") {
        swal({
            title: 'Oops...',
            type: 'error',
            html:
                'Parece que as coordenadas não foram carregadas, ligue seu GPS e ' +
                'clique no botão <img src="css/images/icons-png/location-black.png">, ' +
                'e tente novamente',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                'Ok!',
            confirmButtonAriaLabel: 'Mapa',
        })
        return;
    }
    $.ajax({
        url: url + "/iluminacao",
        data: dataForm,
        method: 'POST'
    }).done(function (resposta) {
        var teste = resposta;
        if (resposta.status == "ok") {
            swal("Bom trabalho!", resposta.mensagem, "success");
        } else {
            swal(resposta);
        }
    }).fail(function () {
        swal("erro");
    });
}
