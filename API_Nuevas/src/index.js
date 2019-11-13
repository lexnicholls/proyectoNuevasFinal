const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(require('../src/routes/tipo_doctor'));
app.use(require('../src/routes/tipo_consultorio'));
app.use(require('../src/routes/paciente'));
app.use(require('../src/routes/doctores'));
app.use(require('../src/routes/consultorio'));
app.use(require('../src/routes/cita'));

app.post('/api/login', (req, res) =>{
    const user = {id: 3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token
    })
});

app.get('/api/protected', ensureToken, (req, res) =>{
    jwt.verify(req.token, 'my_secret_key', (err,data) => {
        if(err){
            res.sendStatus(403);
        } else {
            res.json({
                text: 'protected',
                data
            });
        }
    })
});

function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else {
        res.sendStatus(403);
    }
}

app.get('/', (req,res) =>{
    res.json({
        text: 'api works!'
    });
});