const display = document.getElementById('display');

setTimeout(getLocation, 1000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, null, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude + "</br>" +
                        "Longitue: " + position.coords.longitude;
}