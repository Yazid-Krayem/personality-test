var mysql = require('mysql2');

//phpmyadmin config 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"Personality-test"
});

export default connection