const display = document.getElementById('display');

setTimeout(getLocation, 1000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude + "</br>" +
                        "Longitue: " + position.coords.longitude;
}