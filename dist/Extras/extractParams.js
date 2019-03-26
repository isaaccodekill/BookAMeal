"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function objectPicker(promiseObj, paramsString) {
  var params = paramsString.split(',');
  return promiseObj.then(function (arr) {
    var newArray = arr.map(function (arrItem) {
      var mirrorObj = {};
      params.forEach(function (key) {
        if (key in arrItem) {
          mirrorObj[key] = arrItem[key];
        }
      });
      return mirrorObj;
    });
    return newArray;
  });
}

var _default = objectPicker;
exports.default = _default;