const config = require("./config");
const { Pool } = require('pg')

const pool = new Pool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
})

module.exports = {
    connect: function () {
        pool.connect()
            .then((success) => {
                console.log("Connected database.")
            })
            .catch((error) => {
                console.log("Can not connect database.");
                throw error;
            })
    },
    query: function (queryText, callback) {
        return pool.query(queryText, callback);
    }
}