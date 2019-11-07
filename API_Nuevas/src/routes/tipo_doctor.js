const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/tipo_doctor', (req,res) => {
    mysqlConnection.query('SELECT * from tipo_doctor', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })    
});

router.get('/tipo_doctor:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM tipo_doctor WHERE id_tipo_doctor = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  router.delete('/tipo_doctor', (req, res) => {
    const { id } = req.body;
    mysqlConnection.query('DELETE FROM tipo_doctor WHERE id_tipo_doctor = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tipo Doctor Deleted'});
      } else {
        console.log(err);
      }
    });
  });
  
  router.post('/tipo_doctor', (req, res) => {
    const { tipo_doctor} = req.body;
    console.log( tipo_doctor);
    const query = `
      INSERT INTO tipo_doctor (tipo_doctor)VALUES ( ?);
      
    `;
    mysqlConnection.query(query, [tipo_doctor], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tipo Doctor Saved'});
      } else {
        console.log(err);
      }
    });
  
  });
  router.put('/tipo_doctor:id', (req, res) => {
    const { tipo_doctor } = req.body;
    const { id } = req.params;
    const query = `
    UPDATE tipo_doctor SET tipo_doctor = ? WHERE id_tipo_doctor = ?;
    `;
    console.log(query,tipo_doctor,id);
    mysqlConnection.query(query, [tipo_doctor, id], (err, rows, fields) => {
        console.log(query);
        if (!err) {
            res.json({ status: 'Tipo_Doctor Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;