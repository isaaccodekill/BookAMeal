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

var _catererRoutes = _interopRequireDefault(require("./routes/catererRoutes"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _index = require("./models/index");

var _order = _interopRequireDefault(require("./models/order"));

var _user = _interopRequireDefault(require("./models/user"));

var _caterer = _interopRequireDefault(require("./models/caterer"));

var _meal = _interopRequireDefault(require("./models/meal"));

var _menu = _interopRequireDefault(require("./models/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// route files
// db file
// models fiels
// Order.belongsTo(User);
// Order.belongsTo(Meal);
var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json()); // creating db associations

_caterer.default.hasMany(_meal.default);

_caterer.default.hasOne(_menu.default); // associations can be defined here


_meal.default.hasMany(_order.default);

_meal.default.belongsTo(_caterer.default); // associations can be defined here


_menu.default.belongsTo(_caterer.default);

_order.default.belongsTo(_user.default);

_order.default.belongsTo(_meal.default); // associations can be defined here


_user.default.hasMany(_order.default);

app.get('/', function (req, res) {
  res.send('Welcome to isaac Bello\'s Book-A-Meal project');
});
app.use('/api/v1/meals', _mealRoutes.default);
app.use('/api/v1/menu', _menuRoutes.default);
app.use('/api/v1/orders', _orderRoutes.default);
app.use('/ap1/v1/caterer/auth', _catererRoutes.default);
app.use('/ap1/v1/auth', _userRoutes.default);
var PORT = process.env.PORT || 5500;

_index.db.sync().then(function () {
  console.log('DB connected');
  app.emit('appStarted');
  app.listen(PORT);
}).catch(function (err) {
  console.log(err);
});

var _default = app;
exports.default = _default;