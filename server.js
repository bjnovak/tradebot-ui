const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'var/www/dash')))

app.listen(3000, () => console.log('Example app listening on port 3000!'));