const { Database } = require("@adminjs/sequelize");

module.exports = {
    development: {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'onebitflix_development',
        username: 'onebitflix',
        password: 'onebitflix'
    }
};