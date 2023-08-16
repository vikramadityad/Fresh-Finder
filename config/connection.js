const { Sequelize } = require('sequelize');
require('dotenv').config();

let dbUrl = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/${process.env.DB_NAME}`
if(process.env.JAWSDB_URL) {
    dbUrl = process.env.JAWSDB_URL
}

const sequelize = new Sequelize(dbUrl);

sequelize.authenticate()
.then(() => {
    console.log('Database connection successful');
})
.catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;
