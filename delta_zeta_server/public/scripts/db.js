const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "NO!!!",
    host: "deltazetachapterdatabase.ckucncd2fgys.us-west-2.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})


module.exports = pool;
