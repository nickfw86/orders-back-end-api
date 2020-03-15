const express = require('express');
const bodyParser = require('body-parser');
const allowCORS = require('./middleware/allowCORS');

const app = express();

//Middlware
app.use(allowCORS);
app.use(bodyParser.json());

//Route Functions
const getOrderStatus = require('./routes/getOrderStatus');

app.get('/orders/:id', getOrderStatus)

app.listen(4000);

