const Sequelize = require('sequelize');

const database = 'pizza_luvrs';
const host = 'pizza-db.cfctvntsqroe.us-east-2.rds.amazonaws.com';
const password = 'fell400burp!';

const pgClient = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: 'postgres'
    }
)

const Pizza = pgClient.define('pizza', {
    id: {
        type: Sequalize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    toppings: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.BIGINT
    },
})

Pizza.sync().then(() => {
    console.log('postgres connection ready')
})

module.exports = Pizza;