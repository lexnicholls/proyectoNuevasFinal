const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/cita', (req, res) => {
  mysqlConnection.query('SELECT * from cita', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  })
});

router.get('/cita:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM cita WHERE id_cita = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/cita:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM cita WHERE id_cita = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Cita Deleted' });
    } else {
      console.log(err);
    }
  });
});

router.post('/cita', (req, res) => {
  const { id_cita, cod_consultorio, identificacion, identificacion_paciente, fecha_cita, hora_inicio, hora_final, motivo_cita } = req.body;
  console.log(motivo_cita);
  const query = `
      INSERT INTO cita (id_cita,cod_consultorio,identificacion,identificacion_paciente,fecha_cita,hora_inicio,hora_final,motivo_cita)VALUES ( ?,?,?,?,?,?,?,?);
      
    `;
  mysqlConnection.query(query, [id_cita, cod_consultorio, identificacion, identificacion_paciente, fecha_cita, hora_inicio, hora_final, motivo_cita], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Cita Saved' });
    } else {
      console.log(err);
    }
  });

});
router.put('/cita:id', (req, res) => {

  const { cod_consultorio, identificacion, identificacion_paciente, fecha_cita, hora_inicio,
    hora_final, motivo_cita } = req.body;
  const { id } = req.params;

  const query = `
    UPDATE cita SET cod_consultorio = ?, identificacion = ?, identificacion_paciente = ?, 
    fecha_cita = ?, hora_inicio = ?, hora_final = ?, motivo_cita = ? WHERE id_cita = ?;    
  `;
  mysqlConnection.query(query, [cod_consultorio, identificacion, identificacion_paciente
    , fecha_cita, hora_inicio, hora_final, motivo_cita, id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Cita Saved' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;