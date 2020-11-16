'use strict';
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
var queue = [];
<<<<<<< HEAD
=======
var defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
};
var currentOptions = __assign({}, defaultOptions);
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}
var Dialog = function (options) {
<<<<<<< HEAD
  options = __assign(__assign({}, Dialog.currentOptions), options);
=======
  options = __assign(__assign({}, currentOptions), options);
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
  return new Promise(function (resolve, reject) {
    var context = options.context || getContext();
    var dialog = context.selectComponent(options.selector);
    delete options.context;
    delete options.selector;
    if (dialog) {
      dialog.setData(
        __assign({ onCancel: reject, onConfirm: resolve }, options)
      );
      wx.nextTick(function () {
        dialog.setData({ show: true });
      });
      queue.push(dialog);
    } else {
      console.warn(
        '未找到 van-dialog 节点，请确认 selector 及 context 是否正确'
      );
    }
  });
};
<<<<<<< HEAD
Dialog.defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
};
Dialog.alert = Dialog;
=======
Dialog.alert = function (options) {
  return Dialog(options);
};
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
Dialog.confirm = function (options) {
  return Dialog(__assign({ showCancelButton: true }, options));
};
Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};
Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};
<<<<<<< HEAD
Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = __assign({}, Dialog.defaultOptions);
=======
Dialog.currentOptions = currentOptions;
Dialog.defaultOptions = defaultOptions;
Dialog.setDefaultOptions = function (options) {
  currentOptions = __assign(__assign({}, currentOptions), options);
  Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions = function () {
  currentOptions = __assign({}, defaultOptions);
  Dialog.currentOptions = currentOptions;
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
};
Dialog.resetDefaultOptions();
exports.default = Dialog;
