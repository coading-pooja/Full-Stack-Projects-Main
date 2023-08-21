const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Pooja@SQL504',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;