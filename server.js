const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json({}))
const port = 3000

// database connection
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'sakdahomhuan',
    database: 'gdb',
    password: '1234',
})

client.connect();

app.get('/api/getdata', (req, res) => {
    const sql = "SELECT st_x(geom) as lng, st_y(geom) as lat, vill_nam_t FROM cm_village_4326";
    client.query(sql).then((r) => {
        // console.log(r.rows)
        res.json({ data: r.rows })
    })
})

app.post('/api/getvillage', (req, res) => {
    const { lat, lng, buffer } = req.body
    const sql = `SELECT st_x(geom) as lng, st_y(geom) as lat, vill_nam_t FROM cm_village_4326
                WHERE ST_DWithin(ST_Transform(geom, 32647), 
                     ST_Transform(ST_GeomFromText('Point(${lng} ${lat})', 4326), 32647),
                    ${buffer})='true'`
    // console.log(sql);
    client.query(sql).then(r => {
        // console.log(r);
        res.json(r.rows)
    })
})

app.get('/api/hello', (req, res) => {
    res.json({ status: "hello" })
})

app.get('/api/:lat/:lng', (req, res) => {
    const { lat, lng } = req.params;
    res.json({
        status: "Hello World!",
        lat: lat,
        lng: lng
    })
})

app.use('/', express.static('www'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})