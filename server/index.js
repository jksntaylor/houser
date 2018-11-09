const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(bodyParser.json());

const massive = require('massive');
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Are you feeling it now Mr. Krabs?')
})

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.postHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

const port = SERVER_PORT || 6660;
app.listen(port, () => {
    console.log("you don't need a license to drive a sandwich", port);
})