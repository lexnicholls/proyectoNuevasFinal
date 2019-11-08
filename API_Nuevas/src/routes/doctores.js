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

router.delete('/doctores:id', (req, res) => {
  const { id } = req.params;
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

    const query = `
    UPDATE doctores SET nombre_doctor = ?, apellido_doctor = ?, num_celular = ?, id_tipo_doctor = ? WHERE identificacion = ?;
    
  `;
mysqlConnection.query(query, [nombre_doctor, apellido_doctor, num_celular, id_tipo_doctor, id], (err, rows, fields) => {
  if (!err) {
    res.json({ status: 'Doctor Saved' });
  } else {
    console.log(err);
  }
});
  
});

module.exports = router;