document.addEventListener('DOMContentLoaded', function () {
    initMap();
});

// Google Maps API haritasını yükle
function initMap() {
    var location = { lat: 41.045742, lng: 28.777005 }; // Örnek konum
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Luxperde'
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const protezHakkindaLink = document.getElementById('protezhakkinda');
    const dropdownContainer = document.getElementById('protez-options');
    let closeTimeout;

    protezHakkindaLink.addEventListener('mouseover', function (e) {
        e.preventDefault();
        clearTimeout(closeTimeout);
        dropdownContainer.classList.add('show');
    });

    protezHakkindaLink.addEventListener('mouseleave', function () {
        closeTimeout = setTimeout(function() {
            dropdownContainer.classList.remove('show');
        }, 200); // 200 milisaniyelik bir gecikme ekleyelim
    });

    dropdownContainer.addEventListener('mouseleave', function () {
        closeTimeout = setTimeout(function() {
            dropdownContainer.classList.remove('show');
        }, 200); // 200 milisaniyelik bir gecikme ekleyelim
    });

    dropdownContainer.addEventListener('mouseenter', function () {
        clearTimeout(closeTimeout);
    });
});
