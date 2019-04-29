"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _cors = _interopRequireDefault(require("cors"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _path = _interopRequireDefault(require("path"));

// parses cookies
// parses sessions
// serves favicon
// allows cross-domain requests
// better JS errors
var app = (0, _express.default)(); // create a new app

var IS_PRODUCTION = app.get('env') === 'production';

if (IS_PRODUCTION) {
  app.set('trust proxy', 1); // secures the app if it is running behind Nginx/Apache/similar
}

app.use((0, _cors.default)()); // allows cross domain requests

app.use(_express.default.json()); // allows POST requests with JSON

app.use(_express.default.urlencoded({
  extended: false
})); // allows POST requests with GET-like parameters

app.use((0, _cookieParser.default)()); // Parses cookies
//app.use(favicon(path.join(__dirname, '../public', 'favicon.ico'))) // <-- location of your favicon

app.use(_express.default.static(_path.default.join(__dirname, '../public'))); // <-- location of your public dir

app.use((0, _expressSession.default)({
  // handles sessions
  secret: 'keyboard cat',
  // <-- this should be a secret phrase
  cookie: {
    secure: IS_PRODUCTION
  },
  // <-- secure only in production
  resave: true,
  saveUninitialized: true
}));
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map