function onBodyLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
  var attachFastClick = Origami.fastclick;
  attachFastClick(document.body);
}
$(function () {
  onBodyLoad();
  onDeviceReady();
});

var latitude;
var longitude;

// função para pegar as coordenadas
var onSuccessGeo = function (position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
};

// onError Callback receives a PositionError object
//
function onErrorGeo(error) {
  latitude = null;
  longitude = null;

  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
}

// função para setar as coordenadas form-agua
function setCoordAgua() {
  $("#latAgua").val(latitude);
  $("#longAgua").val(longitude);
  
}

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
