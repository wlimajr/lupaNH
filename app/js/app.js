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

// função para setar as coordenadas form-lixo
function setCoordLixo() {
  $("#latLixo").val(latitude);
  $("#longLixo").val(longitude);
}

// função para setar as coordenadas form-esgoto
function setCoordEsgoto() {
  $("#latEsgoto").val(latitude);
  $("#longEsgoto").val(longitude);
}

// funcao que vai verificar se é necessario habilitar ou nao a coleta de lixo
function freqColetaLixo(status){
  if (status=='habilitar'){
    $('#frequenciaColetaLixo').show();
  }else{
    $('#frequenciaColetaLixo').hide();
  }
}