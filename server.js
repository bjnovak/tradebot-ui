const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static('srv/www/tradebot'));

app.listen(3000);