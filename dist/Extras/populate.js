"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function pickFrom(promiseObj, paramsString) {
  if (!paramsString) return promiseObj;
  var params = paramsString.split(',');
  return promiseObj.then(function (obj) {
    var extractedObj = {};
    params.forEach(function (param) {
      if (obj !== null) {
        if (param in obj) {
          extractedObj[param] = obj.dataValues[param];
        }
      } else {
        extractedObj = null;
      }
    });
    return extractedObj;
  });
}

var populate = function populate(model, array, params) {
  var populatedArray = array.map(function (id) {
    return pickFrom(model.findByPk(id), params);
  });
  return Promise.all(populatedArray);
};

var _default = populate;
exports.default = _default;