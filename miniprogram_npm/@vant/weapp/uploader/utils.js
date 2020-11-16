'use strict';
<<<<<<< HEAD
Object.defineProperty(exports, '__esModule', { value: true });
exports.isPromise = exports.isObject = exports.isFunction = exports.chooseFile = exports.isVideo = exports.isImageFile = void 0;
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  if (item.type) {
    return item.type.indexOf('image') === 0;
  }
  if (item.path) {
    return isImageUrl(item.path);
  }
  if (item.url) {
    return isImageUrl(item.url);
=======
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.chooseFile = exports.isVideoFile = exports.isImageFile = void 0;
var utils_1 = require('../common/utils');
var validator_1 = require('../common/validator');
function isImageFile(item) {
  if (item.isImage != null) {
    return item.isImage;
  }
  if (item.type) {
    return item.type === 'image';
  }
  if (item.url) {
    return validator_1.isImageUrl(item.url);
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
  }
  return false;
}
exports.isImageFile = isImageFile;
<<<<<<< HEAD
function isVideo(res, accept) {
  return accept === 'video';
}
exports.isVideo = isVideo;
=======
function isVideoFile(item) {
  if (item.isVideo != null) {
    return item.isVideo;
  }
  if (item.type) {
    return item.type === 'video';
  }
  if (item.url) {
    return validator_1.isVideoUrl(item.url);
  }
  return false;
}
exports.isVideoFile = isVideoFile;
function formatImage(res) {
  return res.tempFiles.map(function (item) {
    return __assign(__assign({}, utils_1.pickExclude(item, ['path'])), {
      type: 'image',
      url: item.path,
      thumb: item.path,
    });
  });
}
function formatVideo(res) {
  return [
    __assign(
      __assign(
        {},
        utils_1.pickExclude(res, [
          'tempFilePath',
          'thumbTempFilePath',
          'errMsg',
        ])
      ),
      { type: 'video', url: res.tempFilePath, thumb: res.thumbTempFilePath }
    ),
  ];
}
function formatMedia(res) {
  return res.tempFiles.map(function (item) {
    return __assign(
      __assign(
        {},
        utils_1.pickExclude(item, [
          'fileType',
          'thumbTempFilePath',
          'tempFilePath',
        ])
      ),
      {
        type: res.type,
        url: item.tempFilePath,
        thumb:
          res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath,
      }
    );
  });
}
function formatFile(res) {
  return res.tempFiles.map(function (item) {
    return __assign(__assign({}, utils_1.pickExclude(item, ['path'])), {
      url: item.path,
    });
  });
}
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
function chooseFile(_a) {
  var accept = _a.accept,
    multiple = _a.multiple,
    capture = _a.capture,
    compressed = _a.compressed,
    maxDuration = _a.maxDuration,
    sizeType = _a.sizeType,
    camera = _a.camera,
    maxCount = _a.maxCount;
<<<<<<< HEAD
  switch (accept) {
    case 'image':
      return new Promise(function (resolve, reject) {
=======
  return new Promise(function (resolve, reject) {
    switch (accept) {
      case 'image':
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
        wx.chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType: sizeType,
<<<<<<< HEAD
          success: resolve,
          fail: reject,
        });
      });
    case 'media':
      return new Promise(function (resolve, reject) {
=======
          success: function (res) {
            return resolve(formatImage(res));
          },
          fail: reject,
        });
        break;
      case 'media':
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
        wx.chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          maxDuration: maxDuration,
          sizeType: sizeType,
          camera: camera,
<<<<<<< HEAD
          success: resolve,
          fail: reject,
        });
      });
    case 'video':
      return new Promise(function (resolve, reject) {
=======
          success: function (res) {
            return resolve(formatMedia(res));
          },
          fail: reject,
        });
        break;
      case 'video':
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
        wx.chooseVideo({
          sourceType: capture,
          compressed: compressed,
          maxDuration: maxDuration,
          camera: camera,
<<<<<<< HEAD
          success: resolve,
          fail: reject,
        });
      });
    default:
      return new Promise(function (resolve, reject) {
        wx.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: 'file',
          success: resolve,
          fail: reject,
        });
      });
  }
}
exports.chooseFile = chooseFile;
function isFunction(val) {
  return typeof val === 'function';
}
exports.isFunction = isFunction;
function isObject(val) {
  return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
exports.isPromise = isPromise;
=======
          success: function (res) {
            return resolve(formatVideo(res));
          },
          fail: reject,
        });
        break;
      default:
        wx.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: function (res) {
            return resolve(formatFile(res));
          },
          fail: reject,
        });
        break;
    }
  });
}
exports.chooseFile = chooseFile;
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
