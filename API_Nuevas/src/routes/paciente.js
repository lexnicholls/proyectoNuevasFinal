const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/paciente', (req, res) => {
  mysqlConnection.query('SELECT * from paciente', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  })
});

router.get('/paciente:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM paciente WHERE identificacion_paciente = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/paciente:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM paciente WHERE identificacion_paciente = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Paciente Deleted' });
    } else {
      console.log(err);
    }
  });
});

router.post('/paciente', (req, res) => {
  const { nombre_paciente, apellido_paciente, fecha_nacimiento } = req.body;
  console.log(nombre_paciente);
  const query = `
      INSERT INTO paciente (nombre_paciente, apellido_paciente, fecha_nacimiento)VALUES ( ?,?,?);
      
    `;
  mysqlConnection.query(query, [nombre_paciente, apellido_paciente, fecha_nacimiento], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Paciente Saved' });
    } else {
      console.log(err);
    }
  });

});
router.put('/paciente:id', (req, res) => {

    const { nombre_paciente, apellido_paciente, fecha_nacimiento } = req.body;
    const { id } = req.params;
    const query = `
    UPDATE paciente SET nombre_paciente = ?, apellido_paciente = ?, fecha_nacimiento = ? WHERE identificacion_paciente = ?;
    
  `;
mysqlConnection.query(query, [nombre_paciente, apellido_paciente, fecha_nacimiento,id], (err, rows, fields) => {
  if (!err) {
    res.json({ status: 'Paciente Saved' });
  } else {
    console.log(err);
  }
});

});



module.exports = router;