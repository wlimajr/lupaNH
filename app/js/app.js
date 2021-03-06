function onBodyLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
  $('#teste').html($('#teste').html().split('&nbsp;').join(''));
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


function setCoordIluminacao() {
  // latitude = '';
  // longitude = '';
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latIlum").val(latitude);
  $("#longIlum").val(longitude);
}

function setCoordAgua() {
  // latitude = '';
  // longitude = '';
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latAgua").val(latitude);
  $("#longAgua").val(longitude);
}
function setCoordLixo() {
  // latitude = '';
  // longitude = '';
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latLixo").val(latitude);
  $("#longLixo").val(longitude);

}
function setCoordEsgoto() {
  // latitude = '';
  // longitude = '';
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latEsgoto").val(latitude);
  $("#longEsgoto").val(longitude);

}



//função para setar as coordenadas form-asfalto
function setCoordAsfaltIni() {
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latitudeInicial").val(latitude);
  $("#longitudeInicial").val(longitude);
}

function setCoordAsfaltFinal() {
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latitudeFinal").val(latitude);
  $("#longitudeFinal").val(longitude);
}

function limpaCoords(){
  $("#latitudeInicial").val("");
  $("#longitudeInicial").val("");
  $("#latitudeFinal").val("");
  $("#longitudeFinal").val("");
}


function freqColetaLixo(status) {
  if (status == 'habilitar') {
    $('#frequenciaColetaLixo').show();
  } else {
    $('#frequenciaColetaLixo').hide();
  }
}

function iluminacao(status) {
  if (status == "habilitar") {
    $("#lamp").show();
  } else {
    $("#lamp").hide();
  }
}

function unablePoco(status) {
  if (status == "habilitar") {
    $("#teste").show();
  } else {
    $("#teste").hide();
  }
}
