const Cantante = require('../model/cantante');

exports.getAllCantantes = async (req, res) => {
    try {
        const cantantes = await Cantante.findAll();
        res.json(cantantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getCantanteById = async (req, res) => {
    try {
        const cantante = await Cantante.findByPk(req.params.id);
        if (cantante) {
            res.json(cantante);
        } else {
            res.status(404).json({ message: 'Cantante not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createCantante = async (req, res) => {
    try {
        res.status(501).json({ message: 'Not Implemented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateCantante = async (req, res) => {
    try {
        res.status(501).json({ message: 'Not Implemented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteCantante = async (req, res) => {
    try {
        res.status(501).json({ message: 'Not Implemented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const db = require('https://www.db4free.net/phpMyAdmin/index.php?route=/sql&pos=0&db=iesdaw&table=cantantes'); 
const getAllCantantes = (req, res) => {
    db.query('SELECT * FROM cantantes', (err, result) => {
        if (err) {
            console.error('Error al obtener los cantantes:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.json(result);
    });
};


module.exports = {
    getAllCantantes,
    deleteCantante,
    createCantante,
    getCantanteById


};

