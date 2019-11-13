const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CitasMedicas',
    multipleStatements: true
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else {
        console.log('Conexión exitosa con la base de datos en XAMPP');
    }
});

module.exports = mysqlConnection;