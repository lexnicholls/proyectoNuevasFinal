const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/doctores', (req, res) => {
  mysqlConnection.query('SELECT * from doctores', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  })
});

router.get('/doctores:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM doctores WHERE identificacion = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/doctores', (req, res) => {
  const { id } = req.body;
  mysqlConnection.query('DELETE FROM doctores WHERE identificacion = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Doctor Deleted' });
    } else {
      console.log(err);
    }
  });
});

router.post('/doctores', (req, res) => {
  const { nombre_doctor, apellido_doctor, num_celular, id_tipo_doctor } = req.body;
  console.log(nombre_doctor);
  const query = `
      INSERT INTO doctores (nombre_doctor, apellido_doctor, num_celular, id_tipo_doctor)VALUES ( ?,?,?,?);
      
    `;
  mysqlConnection.query(query, [nombre_doctor, apellido_doctor, num_celular, id_tipo_doctor], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Doctor Saved' });
    } else {
      console.log(err);
    }
  });

});
router.put('/doctores:id', (req, res) => {

    const { nombre_doctor, apellido_doctor, num_celular, id_tipo_doctor } = req.body;
    const { id } = req.params;
    let miPrimeraPromise = new Promise((resolve, reject) => {
      // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
      // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
      // En la vida real, probablemente uses algo como XHR o una API HTML5.
      if (nombre_paciente != undefined) {
        var query = `
    UPDATE paciente SET nombre_paciente=? WHERE identificacion_paciente = ?;
    `;
        mysqlConnection.query(query, [nombre_paciente, id], (err, rows, fields) => {
          console.log(query);
          if (!err) {
            res.json({ status: 'Paciente Updated' });
            resolve();
          } else {
            console.log(err);
          }
        });
      }else{
        resolve();
      }
    }).then((value) => {
      if (apellido_paciente != undefined) {
        var query = `
    UPDATE paciente SET apellido_paciente=? WHERE identificacion_paciente = ?;
    `;
        mysqlConnection.query(query, [apellido_paciente, id], (err, rows, fields) => {
          console.log(query);
          if (!err) {
            res.json({ status: 'Paciente Updated' });
          } else {
            console.log(err);
          }
        });
      }
    }).then((value) => {
      if (fecha_nacimiento != undefined) {
        var query = `
    UPDATE paciente SET fecha_nacimiento=? WHERE identificacion_paciente = ?;
    `;
        mysqlConnection.query(query, [fecha_nacimiento, id], (err, rows, fields) => {
          console.log(query);
          if (!err) {
            res.json({ status: 'Paciente Updated' });
          } else {
            console.log(err);
          }
        });
      }
    });


  
});

module.exports = router;