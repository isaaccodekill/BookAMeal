"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mealRoutes = _interopRequireDefault(require("./routes/mealRoutes"));

var _menuRoutes = _interopRequireDefault(require("./routes/menuRoutes"));

var _orderRoutes = _interopRequireDefault(require("./routes/orderRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  res.send('Hello world');
});
app.use('/api/v1/meals', _mealRoutes.default);
app.use('/api/v1/menu', _menuRoutes.default);
app.use('/api/v1/orders', _orderRoutes.default);
var PORT = process.env.PORT || 5500;
app.listen(PORT);
var _default = app;
exports.default = _default;