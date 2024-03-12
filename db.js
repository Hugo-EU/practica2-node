const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('iesdaw', 'jcarlos', 'Jcarl0sJcarl0s', {
  host: 'db4free.net',
  dialect: 'mysql'
});

module.exports = sequelize;
