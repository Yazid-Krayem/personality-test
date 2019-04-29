"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var mysql = require('mysql2'); //phpmyadmin config 


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Personality-test"
});
var _default = connection;
exports.default = _default;
//# sourceMappingURL=mysqlConfig.js.map