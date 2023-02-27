
var map = L.map("map", {
    center: [18.802817586158447, 98.9502135132693],
    zoom: 12,
});

var osm = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: "@openstreetmap"
})

osm.addTo(map);





console.log("test JavaScript");