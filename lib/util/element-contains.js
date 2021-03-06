(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.elementContains = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (source, target) {
    // The document element does not have the contains method in IE.
    if (source === document && !source.contains) {
      return head.contains(target) || body.contains(target);
    }
    return source.contains ? source.contains(target) : elementPrototypeContains.call(source, target);
  };

  var _document = document;
  var body = _document.body;
  var head = _document.head;

  var elementPrototype = window.HTMLElement.prototype;
  var elementPrototypeContains = elementPrototype.contains;

  module.exports = exports['default'];
});