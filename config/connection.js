const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database //
const sequelize = new Sequelize('just_tech_news_db', 'test', 'test', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;