const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cantante = sequelize.define('Cantante', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artista: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.BLOB,
    allowNull: true
  }
});

module.exports = Cantante;
