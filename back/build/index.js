"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _app = _interopRequireDefault(require("./app"));

var _mysqlConfig = _interopRequireDefault(require("./mysqlConfig"));

var _regeneratorRuntime2 = _interopRequireDefault(require("regenerator-runtime"));

console.log(_regenerator.default); //router 

var start =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // All users
            _app.default.get('/users', function (req, res) {
              var allUsers = _mysqlConfig.default.query('SELECT * FROM `users`', function (err, results) {
                res.json(results);
              });
            }); //add user with redirect 


            _app.default.post('/add/user', function (req, res) {
              var user_name = req.query.user_name;

              _mysqlConfig.default.query('INSERT INTO users SET ? ', {
                user_name: user_name
              }, function (err, result) {
                res.redirect('/users');
              });
            }); // delete user with redirect


            _app.default.post('/user/delete/', function (req, res) {
              var user_id = req.query.user_id;

              _mysqlConfig.default.query("DELETE FROM users WHERE user_id =".concat(user_id, " "), function (err, result) {
                res.redirect('/users');
              });
            }); // update user name with redirect 


            _app.default.post('/user/update/', function (req, res, next) {
              var user_id = req.query.user_id;
              var user_name = req.query.user_name;

              _mysqlConfig.default.query("UPDATE users SET user_name = '".concat(user_name, "' WHERE user_id = ").concat(user_id), function (err, result) {
                res.redirect('/users');
              });
            }); // get user by id 


            _app.default.get('/user/get', function (req, res) {
              var user_id = req.query.user_id;

              var allUsers = _mysqlConfig.default.query("SELECT * FROM  users where user_id=".concat(user_id), function (err, results) {
                res.json(results);
              });
            });

            _app.default.listen(8080, function () {
              return console.log("server listening on port 8080");
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();
//# sourceMappingURL=index.js.map