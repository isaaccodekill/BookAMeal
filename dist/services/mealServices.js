"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../models/meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mealServices =
/*#__PURE__*/
function () {
  function mealServices() {
    _classCallCheck(this, mealServices);
  }

  _createClass(mealServices, null, [{
    key: "getAllmeals",
    value: function getAllmeals(req, res) {
      return _meal.default.findAll({
        where: {
          CatererId: req.caterer.id
        }
      }).then(function (meals) {
        res.status(200).json({
          status: 'succesful',
          meals: meals
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "createAndSave",
    value: function createAndSave(req, res) {
      req.body.CatererId = req.caterer.id;
      return _meal.default.create(req.body).then(function (meal) {
        res.status(200).json({
          status: 'successful',
          meal: meal
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "findMealById",
    value: function findMealById(req, res) {
      return _meal.default.findByPk(req.params.id).then(function (foundMeal) {
        res.status(200).json({
          status: 'successful',
          foundMeal: foundMeal
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "findMealByIdAndUpdate",
    value: function findMealByIdAndUpdate(req, res) {
      req.body.CatererId = req.caterer.id;

      _meal.default.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then(function (updatedMeal) {
        res.status(200).json({
          status: 'successful',
          updatedMeal: updatedMeal
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }, {
    key: "findMealByIdAndDelete",
    value: function findMealByIdAndDelete(req, res) {
      return _meal.default.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (deletedMeal) {
        res.status(200).json({
          status: 'successful',
          deletedMeal: deletedMeal
        });
      }).catch(function (error) {
        res.status(400).json({
          status: 'unsuccesful',
          error: error
        });
      });
    }
  }]);

  return mealServices;
}();

var _default = mealServices;
exports.default = _default;