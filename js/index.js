const display = document.getElementById('display');

setInterval(getLocation, 3000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude + "</br>" +
                        "Longitue: " + position.coords.longitude;
}