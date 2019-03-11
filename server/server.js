const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// routes for api
const api = require('./routes/api.js');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Welcome to RLE API!');
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });