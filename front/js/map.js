var map;
var infowindow = new google.maps.InfoWindow();
var url = "http://lupanh.000webhostapp.com/LUPANH/api";
var jsonLixo;
var jsonAgua;
var jsonIlum;
var jsonEsgoto;


window.initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0.1021154, lng: -51.2369497 },
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


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

    $.getJSON(url + '/agua').done(function(response){
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

    $.getJSON(url + '/iluminacao').done(function(response){
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
    })


}



google.maps.event.addDomListener(window, 'load', initMap);