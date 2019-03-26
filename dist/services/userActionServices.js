"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _caterer = _interopRequireDefault(require("../models/caterer"));

var _extractParams = _interopRequireDefault(require("../Extras/extractParams"));

var _user = _interopRequireDefault(require("../models/user"));

var _populate = _interopRequireDefault(require("../Extras/populate"));

var _order = _interopRequireDefault(require("../models/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserActions =
/*#__PURE__*/
function () {
  function UserActions() {
    _classCallCheck(this, UserActions);
  }

  _createClass(UserActions, null, [{
    key: "getAllCaterers",
    value: function getAllCaterers(req, res) {
      (0, _extractParams.default)(_caterer.default.findAll(), 'id,name,restaurant').then(function (arr) {
        res.status(200).json({
          status: 'successfull',
          Caterers: arr
        });
      }).catch(function (err) {
        res.status(200).json({
          status: 'Unsuccessfull',
          err: err
        });
      });
    }
  }, {
    key: "saveCaterers",
    value: function saveCaterers(req, res) {
      _user.default.findByPk(req.user.id).then(function (user) {
        var ExistingArray = null;

        if (user.saveCaterers == null) {
          ExistingArray = [];
          ExistingArray.push(req.body.savedCaterers);
        } else {
          ExistingArray = user.savedCaterers;
          ExistingArray.push(req.body.savedCaterers);
        }

        _user.default.update({
          savedCaterers: ExistingArray
        }, {
          where: {
            id: req.user.id
          }
        }).then(function () {
          res.status(200).json({
            status: 'successful',
            message: 'caterer saved'
          });
        });
      });
    }
  }, {
    key: "getSavedCaterers",
    value: function getSavedCaterers(req, res) {
      var catererList = null;

      _user.default.findByPk(req.user.id).then(function (user) {
        catererList = user.savedCaterers;
      }).then(function () {
        return (0, _populate.default)(_caterer.default, catererList, 'id,restaurant,name');
      }).then(function (populatedCaterers) {
        res.status(200).json({
          status: 'successfull',
          savedCaterers: populatedCaterers
        });
      }).catch(function (error) {
        res.status(400).json({
          message: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "getOrderHistory",
    value: function getOrderHistory(req, res) {
      _order.default.findAll({
        where: {
          UserId: req.user.id
        }
      }).then(function (orders) {
        res.status(200).json({
          status: 'successfull',
          orders: orders
        });
      }).catch(function () {
        res.status(400).json({
          status: 'unsuccesfull',
          message: 'Could not retreive order history'
        });
      });
    }
  }, {
    key: "deleteSavedCaterer",
    value: function deleteSavedCaterer(req, res) {
      _user.default.findByPk(req.user.id).then(function (user) {
        var ExistingArray = null;
        var newArr = null;

        if (user.saveCaterers == null) {
          ExistingArray = [];
          newArr = [];
        } else {
          ExistingArray = user.savedCaterers;
          newArr = ExistingArray.filter(function (id) {
            return id !== req.params.id;
          });
        }

        _user.default.update({
          savedCaterers: newArr
        }, {
          where: {
            id: req.user.id
          }
        }).then(function () {
          res.status(200).json({
            status: 'successful',
            message: 'caterer deleted'
          });
        });
      });
    }
  }]);

  return UserActions;
}();

var _default = UserActions;
exports.default = _default;