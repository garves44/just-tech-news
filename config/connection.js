const Sequelize = require('sequelize');

const sequelize = new Sequelize('just_tech-news-db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;