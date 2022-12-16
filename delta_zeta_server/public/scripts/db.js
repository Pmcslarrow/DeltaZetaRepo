const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Loly2012!",
    host: "deltazetachapterdatabase.ckucncd2fgys.us-west-2.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})


module.exports = pool;