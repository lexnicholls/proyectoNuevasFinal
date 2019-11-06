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
    mysqlConnection.query('SELECT * FROM tipo_doctor WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  router.delete('/tipo_doctor:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM tipo_doctor WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tipo Doctor Deleted'});
      } else {
        console.log(err);
      }
    });
  });
  
  router.post('/tipo_doctor', (req, res) => {
    const {id_tipo_doctor, tipo_doctor} = req.body;
    console.log(id_tipo_doctor, tipo_doctor);
    const query = `
      INSERT INTO tipo_doctor VALUES (?, ?);
      CALL tipo_doctorAddOrEdit(@id_tipo_doctor, @tipo_doctor);
    `;
    mysqlConnection.query(query, [id_tipo_doctor, tipo_doctor], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tipo Doctor Saved'});
      } else {
        console.log(err);
      }
    });
  
  });

module.exports = router;