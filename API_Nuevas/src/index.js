const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());   
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

app.use(require('../src/routes/tipo_doctor'));