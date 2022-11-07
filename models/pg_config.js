const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'ejrtofviglkquw',
        password:'4def305fdfa754bc0fac39ab199c270e8ad00fb1a99042212d435502b84372c0',
        host:'ec2-54-86-214-124.compute-1.amazonaws.com',
        database:'d5attiu7f6bqq9',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;


