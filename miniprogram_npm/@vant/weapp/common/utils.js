'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
<<<<<<< HEAD
exports.requestAnimationFrame = exports.addUnit = exports.getSystemInfoSync = exports.nextTick = exports.range = exports.isNumber = exports.isObj = exports.isDef = void 0;
=======
exports.getAllRect = exports.getRect = exports.pickExclude = exports.requestAnimationFrame = exports.addUnit = exports.getSystemInfoSync = exports.nextTick = exports.range = exports.isObj = exports.isDef = void 0;
var validator_1 = require('./validator');
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
function isDef(value) {
  return value !== undefined && value !== null;
}
exports.isDef = isDef;
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
exports.isObj = isObj;
<<<<<<< HEAD
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
exports.isNumber = isNumber;
=======
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
exports.range = range;
function nextTick(fn) {
  setTimeout(function () {
    fn();
  }, 1000 / 30);
}
exports.nextTick = nextTick;
<<<<<<< HEAD
var systemInfo = null;
=======
var systemInfo;
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }
  return systemInfo;
}
exports.getSystemInfoSync = getSystemInfoSync;
function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
<<<<<<< HEAD
  return isNumber(value) ? value + 'px' : value;
=======
  return validator_1.isNumber(value) ? value + 'px' : value;
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
}
exports.addUnit = addUnit;
function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();
  if (systemInfo.platform === 'devtools') {
    return nextTick(cb);
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(function () {
      cb();
    });
}
exports.requestAnimationFrame = requestAnimationFrame;
<<<<<<< HEAD
=======
function pickExclude(obj, keys) {
  if (!validator_1.isPlainObject(obj)) {
    return {};
  }
  return Object.keys(obj).reduce(function (prev, key) {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
exports.pickExclude = pickExclude;
function getRect(selector) {
  var _this = this;
  return new Promise(function (resolve) {
    wx.createSelectorQuery()
      .in(_this)
      .select(selector)
      .boundingClientRect()
      .exec(function (rect) {
        if (rect === void 0) {
          rect = [];
        }
        return resolve(rect[0]);
      });
  });
}
exports.getRect = getRect;
function getAllRect(selector) {
  var _this = this;
  return new Promise(function (resolve) {
    wx.createSelectorQuery()
      .in(_this)
      .selectAll(selector)
      .boundingClientRect()
      .exec(function (rect) {
        if (rect === void 0) {
          rect = [];
        }
        return resolve(rect[0]);
      });
  });
}
exports.getAllRect = getAllRect;
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
