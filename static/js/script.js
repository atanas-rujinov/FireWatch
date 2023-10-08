

var latitude = 0;
var longitude = 0;
/*function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else { 
    console.log("Geolocation is not supported by this browser.");
}
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}*/

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    if (crd.accuracy > 20) {
        alert("WARNING: Your location accuracy is low. Please check your location settings.");
    }
    latitude = crd.latitude;
    longitude = crd.longitude;
    console.log(latitude);
    console.log(longitude);
    map.panTo(new L.LatLng(latitude, longitude));
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("YOU").openPopup();
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

console.log(latitude);

var map = L.map('map').setView([latitude, longitude], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*document.onload = function () {

var paragraphs = document.getElementsByClassName("letter");

// Loop through the <p> elements and retrieve their text content
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}}*/