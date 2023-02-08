
// Project uses Leaflet library from https://leafletjs.com/

// Set up map and buttons
const map = L.map('map').setView([38.771, -104.754], 10);        // Create map and set default location

const buttonShowCoords = document.getElementById('showCoords')   // Toggles the coordinates alert popup when clicking on the map
const buttonReset = document.getElementById('showNone');         // Identify showNone button

const buttonAirports = document.getElementById('showAirports');  // Identify showAirports button
const buttonBases = document.getElementById('showBases');        // Identify showBases button
const buttonHome = document.getElementById('showHome');          // Identify showBases button

const buttonRandomUS = document.getElementById('showRandomUS');            // Identify showRandomWorld button
const buttonRandomWorld = document.getElementById('showRandomWorld');      // Identify showRandomWorld button

// Set up layer groups
let layerAirports = L.layerGroup().addTo(map);
let layerBases = L.layerGroup().addTo(map);
let layerHome = L.layerGroup().addTo(map);

let coordShow = false;

// Function to show coordinates of clicked spot
function getCoords(e) {
    if (coordShow) {
        alert(`The coordinates of the last map click are at: \n${e.latlng}`);
    }
}


function showNone() {
    layerAirports.clearLayers();
    layerBases.clearLayers();
    layerHome.clearLayers();
    map.setView([38.771, -104.754], 10);
}


function showAirports() {
    let airport1 = L.marker([38.676699, -104.757385]).addTo(layerAirports);
    airport1.bindPopup('Butts Army Airfield');

    let airport2 = L.marker([38.971988, -104.820557]).addTo(layerAirports);
    airport2.bindPopup('Air Force Academy Airfield');

    let airport3 = L.marker([38.800357, -104.703312]).addTo(layerAirports);
    airport3.bindPopup('Colorado Springs Airport');

    let airport4 = L.marker([38.738538, -104.835148]).addTo(layerAirports);
    airport4.bindPopup('Cheyenne Mountain SFS Heliport');

    //L.layerAirports().addTo(map);
}


function showBases() {
    let base1 = L.circle([38.827324, -104.701509], {
        color: 'blue', fillColor: 'lightblue', fillOpacity: 0.5, radius: 1300
    }).addTo(layerBases);
    base1.bindPopup('Peterson Space Force Base');

    let base2 = L.polygon([[38.816825, -104.544096], [38.816758, -104.488821], [38.788063, -104.48822], [38.788063, -104.543667]]).addTo(layerBases);
    base2.bindPopup('Schriever Space Force Base');

    let base3 = L.circle([38.740814, -104.845448], {
        color: 'blue', fillColor: 'lightblue', fillOpacity: 0.5, radius: 700
    }).addTo(layerBases);
    base3.bindPopup('Cheyenne Mountain Space Force Base');

    let base4 = L.polygon([[39.041795, -104.909821], [39.042061, -104.840813], [38.955346, -104.799957], [38.955613, -104.896088]]).addTo(layerBases);
    base4.bindPopup('US Air Force Academy');

    let base5 = L.polygon([[38.765001, -104.810944], [38.758041, -104.770432], [38.722693, -104.731293], [38.668834, -104.719276], [38.66374, -104.745712], [38.620567, -104.745712], [38.620567, -104.719276], [38.519908, -104.71756], [38.519371, -104.737473], [38.425832, -104.736099], [38.419377, -104.958916], [38.54256, -104.960632], [38.643456, -104.865875]], {
        color: 'green', fullColor: 'lightgreen', fillOpacity: 0.5
    }).addTo(layerBases);
    base5.bindPopup('Fort Carson');
}


function showHome() {
    let home = L.circle([38.730443, -104.715586], {
        color: 'purple', fillColor: 'indigo', fillOpacity: 0.5, radius: 1000
    }
    ).addTo(layerHome);
    home.bindPopup('My Neighborhood');
}


function randomCoord(max) {
    if (max <= 180) {
        let integer = Math.floor(Math.random() * max);
        let decimal = Math.floor(Math.random() * 1000);
        if (Math.random() < 0.5) {
            return -(integer + (decimal / 1000));
        }
        else {
            return integer + (decimal / 1000);
        }
    }
    else {
        consolel.log(`Max boundary of 180 was exceeded when calling function randomCoord`);
    }
}


function randomUS() {
    lat = Math.abs(randomCoord(24)) + 25;
    long = -(Math.abs(randomCoord(80)) + 44.5);

    map.setView([lat, long], 8);
}


function randomWorld() {
    let lat = randomCoord(180);
    let long = randomCoord(180);

    map.setView([lat, long], 8);
}


/* 
    START CODE HERE
*/


// Displays map on page
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// What happens when you click an unmarked section of the map
map.on('click', getCoords);


// Make buttons do stuff
buttonShowCoords.addEventListener('click', function () {
    coordShow = coordShow ? false : true;
    buttonShowCoords.style.background = coordShow ? 'green' : 'red';

});
buttonReset.addEventListener('click', showNone);
buttonAirports.addEventListener('click', function () {
    showNone();
    showAirports();
});
buttonBases.addEventListener('click', function () {
    showNone();
    showBases();
});
buttonHome.addEventListener('click', function () {
    showNone();
    showHome();
});
buttonRandomUS.addEventListener('click', function () {
    randomUS();
});
buttonRandomWorld.addEventListener('click', function () {
    randomWorld();
});



//let base6 = L.marker([]).addTo(map);
//base6.bindPopup('');