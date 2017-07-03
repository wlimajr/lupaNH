var map;
var infowindow = new google.maps.InfoWindow();
var jsonLixo;
var jsonAgua;
var jsonIlum;
var jsonEsg;

$.getJSON("http://localhost/LUPANH/api/lixo").done(function (response) {
    jsonLixo = response.dados;
});

$.getJSON("http://localhost/LUPANH/api/agua").done(function (response) {
    jsonAgua = response.dados;
});

$.getJSON("http://localhost/LUPANH/api/iluminacao").done(function (response) {
    jsonIlum = response.dados;
});

$.getJSON("http://localhost/LUPANH/api/esgoto").done(function (response) {
    jsonEsg = response.dados;
});

function initialize() {

    var mapProp = {
        center: new google.maps.LatLng(0.1021154,-51.2369497), //MACAPA
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    $.each(jsonLixo, function (key, data) {

        var latLng = new google.maps.LatLng(data.latitude, data.longitude);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: "img/trash.png",
            // title: data.title
        });

        // var details = data.website + ", " + data.phone + ".";

        // bindInfoWindow(marker, map, infowindow, details);

        //    });

    });

    $.each(jsonAgua, function (key, data) {
        var latLng = new google.maps.LatLng(data.latitude, data.longitude);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: "img/water.png",
        });
    });

    $.each(jsonIlum, function (key, data) {
        var latLng = new google.maps.LatLng(data.latitude, data.longitude);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: "img/light.png",
        });
    });

    $.each(jsonEsg, function (key, data) {
        var latLng = new google.maps.LatLng(data.latitude, data.longitude);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: "img/sewer.png",
        });
    });


}

// function bindInfoWindow(marker, map, infowindow, strDescription) {
//     google.maps.event.addListener(marker, 'click', function () {
//         infowindow.setContent(strDescription);
//         infowindow.open(map, marker);
//     });
// }

google.maps.event.addDomListener(window, 'load', initialize);