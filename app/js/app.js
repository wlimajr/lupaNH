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


function setCoord(x){
  if (x == "agua"){
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    $("#latAgua").val(latitude);
    $("#longAgua").val(longitude);
    
  }else if(x == "lixo"){
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    $("#latLixo").val(latitude);
    $("#longLixo").val(longitude);

  }else if(x == "esgoto"){
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    $("#latEsgoto").val(latitude);
    $("#longEsgoto").val(longitude);
  }
}

//função para setar as coordenadas form-asfalto
function setCoordAsfaltIni(){
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latitudeInicial").val(latitude);
  $("#longitudeInicial").val(longitude);
}

function setCoordAsfaltFinal(){
  navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
  $("#latitudeFinal").val(latitude);
  $("#longitudeFinal").val(longitude);
}

//  função para setar as coordenadas form-agua
// function setCoordAgua() {
//   navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
//   $("#latAgua").val(latitude);
//   $("#longAgua").val(longitude);
// }

//  função para setar as coordenadas form-lixo
// function setCoordLixo() {
//   navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
//   $("#latLixo").val(latitude);
//   $("#longLixo").val(longitude);
// }

// função para setar as coordenadas form-esgoto
// function setCoordEsgoto() {
//   navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
//   $("#latEsgoto").val(latitude);
//   $("#longEsgoto").val(longitude);
// }

