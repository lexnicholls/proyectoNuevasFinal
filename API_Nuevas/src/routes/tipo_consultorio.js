const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/tipo_consultorio', (req, res) => {
    mysqlConnection.query('SELECT * from tipo_consultorio', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/tipo_consultorio:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM tipo_consultorio WHERE id_tipo_consultorio = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.delete('/tipo_consultorio', (req, res) => {
    const { id } = req.body;
    mysqlConnection.query('DELETE FROM tipo_consultorio WHERE id_tipo_consultorio = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Tipo Consultorio Deleted' });
        } else {
            console.log(err);
        }
    });
});

router.post('/tipo_consultorio', (req, res) => {
    const { tipo_consultorio } = req.body;
    console.log(tipo_consultorio);
    const query = `
      INSERT INTO tipo_consultorio (tipo_consultorio)VALUES ( ?);
      
    `;
    mysqlConnection.query(query, [tipo_consultorio], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Tipo Consultorio Saved' });
        } else {
            console.log(err);
        }
    });

});
router.put('/tipo_consultorio:id', (req, res) => {
    const { tipo_consultorio } = req.body;
    const { id } = req.params;
    const query = `
    UPDATE tipo_consultorio SET tipo_consultorio = ? WHERE id_tipo_consultorio = ?;
    `;
    console.log(query,tipo_consultorio,id);
    mysqlConnection.query(query, [tipo_consultorio, id], (err, rows, fields) => {
        console.log(query);
        if (!err) {
            res.json({ status: 'Tipo_Consultorio Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;