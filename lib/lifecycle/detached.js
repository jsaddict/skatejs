(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', '../util/data'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('../util/data'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.data);
    global.unknown = mod.exports;
  }
})(this, function (exports, module, _utilData) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _data = _interopRequireDefault(_utilData);

  module.exports = function (options) {
    return function () {
      var element = this;
      var targetData = (0, _data['default'])(element, options.id);

      if (targetData.detached) {
        return;
      }

      targetData.detached = true;

      if (options.detached) {
        options.detached(element);
      }

      targetData.attached = false;
    };
  };
});