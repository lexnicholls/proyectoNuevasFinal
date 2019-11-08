const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/consultorio', (req, res) => {
  mysqlConnection.query('SELECT * from consultorio', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  })
});

router.get('/consultorio:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM consultorio WHERE cod_consultorio = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/consultorio:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM consultorio WHERE cod_consultorio= ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Consultorio Deleted' });
    } else {
      console.log(err);
    }
  });
});

router.post('/consultorio', (req, res) => {
  const { cod_consultorio,nombre_consultorio, ubicacion, id_tipo_consultorio } = req.body;
  console.log(nombre_consultorio);
  const query = `
      INSERT INTO consultorio (nombre_consultorio, ubicacion, id_tipo_consultorio)VALUES ( ?,?,?);
      
    `;
  mysqlConnection.query(query, [nombre_consultorio, ubicacion, id_tipo_consultorio], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Consultorio Saved' });
    } else {
      console.log(err);
    }
  });

});

//ZONA OSCURA

router.put('/consultorio:id', (req, res) => {

    const { nombre_consultorio, ubicacion, id_tipo_consultorio } = req.body;
    const { id } = req.params;
    
    const query = `
    UPDATE consultorio SET nombre_consultorio = ?, ubicacion = ?, id_tipo_consultorio = ? WHERE cod_consultorio = ?;
    
  `;
mysqlConnection.query(query, [nombre_consultorio, ubicacion, id_tipo_consultorio,id], (err, rows, fields) => {
  if (!err) {
    res.json({ status: 'Consultorio Saved' });
  } else {
    console.log(err);
  }
});

  
});

module.exports = router;