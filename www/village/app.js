var map = L.map("map", {
    center: [18.802817586158447, 98.9502135132693],
    zoom: 12,
});

var osm = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: "@openstreetmap"
})

function getAllVillage() {
    axios.get('/api/getdata').then((r) => {
        var arr = r.data.data;
        arr.forEach(item => {
            L.marker([item.lat, item.lng])
                // .bindPopup(`หมู่บ้าน:${item.vill_nam_t} <br>latlng: ${item.lat},${item.lng}`)
                .bindTooltip("หมู่บ้าน: " + item.vill_nam_t + "<br> latlng:" + item.lat + ", " + item.lng)
                .addTo(map);
        });
    })
}

function removeMarker() {
    map.eachLayer((r) => {
        if (r.options.name == "mymarker") {
            map.removeLayer(r)
        }
        console.log(r);
    })
}

function postBylatlng(latlng) {
    removeMarker()
    const buffer = document.getElementById("buffer").value

    L.circle([latlng.lat, latlng.lng], { radius: buffer, name: "mymarker" }).addTo(map);

    axios.post('/api/getvillage', {
        lat: latlng.lat,
        lng: latlng.lng,
        buffer: buffer
    }).then((r) => {
        var arr = r.data;
        arr.forEach(item => {
            L.marker([item.lat, item.lng], { name: "mymarker" })
                // .bindPopup(`หมู่บ้าน:${item.vill_nam_t} <br>latlng: ${item.lat},${item.lng}`)
                .bindTooltip("หมู่บ้าน: " + item.vill_nam_t + "<br> latlng:" + item.lat + ", " + item.lng)
                .addTo(map);
        });
    })
}

map.on("click", (r) => {
    // console.log(r.latlng);
    postBylatlng(r.latlng)
})

function showPosition(e) {
    let lat = e.coords.latitude
    let lng = e.coords.longitude
    let acc = e.coords.accuracy

    let latlng = { lat, lng }
    postBylatlng(latlng)

    L.marker([lat, lng]).addTo(map).bindPopup("ตำแหน่งของฉัน")

}

function getGPS() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

osm.addTo(map);