var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var infowindow = new google.maps.InfoWindow();
var url = "http://lupanh.000webhostapp.com/LUPANH/api";
var jsonLixo;
var jsonAgua;
var jsonIlum;
var jsonEsgoto;
var jsonAsfalto;


window.initMap = () => {

    directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
    var latlng = new google.maps.LatLng(0.0369303, -51.108547);

    var options = {
        zoom: 11,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), options);
    directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado

    $.getJSON(url + '/lixo').done(function (response) {
        jsonLixo = response.dados;
        for (let i = 0; i < jsonLixo.length; i++) {
            var lat = jsonLixo[i].latitude;
            var long = jsonLixo[i].longitude;
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: "img/trash.png",
            });
        }
    });

    $.getJSON(url + '/agua').done(function (response) {
        jsonAgua = response.dados;
        for (let i = 0; i < jsonAgua.length; i++) {
            var lat = jsonAgua[i].latitude;
            var long = jsonAgua[i].longitude;
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: 'img/water.png'
            })

        }
    })

    $.getJSON(url + '/esgoto').done(function (response) {
        jsonEsgoto = response.dados;
        for (let i = 0; i < jsonEsgoto.length; i++) {
            var lat = jsonEsgoto[i].latitude;
            var long = jsonEsgoto[i].longitude;
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: "img/sewer.png",
            });
        }
    });

    $.getJSON(url + '/iluminacao').done(function (response) {
        jsonIlum = response.dados;
        for (let i = 0; i < jsonIlum.length; i++) {
            var lat = jsonIlum[i].latitude;
            var long = jsonIlum[i].longitude;
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: 'img/light.png'
            })

        }
    });

    /*$.getJSON(url + '/asfalto').done(function (response) {
        jsonAsfalto = response.dados;
        for (let i = 0; i < jsonAsfalto.length; i++) {
            var start = new google.maps.LatLng(jsonAsfalto[i].latitude_inicial, jsonAsfalto[i].longitude_inicial);
            var end = new google.maps.LatLng(jsonAsfalto[i].latitude_final, jsonAsfalto[i].longitude_final);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.WALKING
            };
            
        }
        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });

    })*/
}

google.maps.event.addDomListener(window, 'load', initMap);