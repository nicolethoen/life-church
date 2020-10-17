(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(39);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(41);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(42);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(11);

var _helpers = __webpack_require__(43);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(11);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(40)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectDestructuringEmpty");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/containers/Dynamic.tsx


var Dynamic_Dynamic = function Dynamic() {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
};

/* harmony default export */ var containers_Dynamic = (Dynamic_Dynamic);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(27);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(6);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectDestructuringEmpty"
var objectDestructuringEmpty_ = __webpack_require__(8);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty_);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/ActionButton.tsx


var ActionButton_ActionButton = function ActionButton(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? '' : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-action-buttons__button ".concat(className)
  }, children);
};

/* harmony default export */ var components_ActionButton = (ActionButton_ActionButton);
// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/LifeChurchLogo.png
var LifeChurchLogo = __webpack_require__(28);
var LifeChurchLogo_default = /*#__PURE__*/__webpack_require__.n(LifeChurchLogo);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(29);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/menu.svg
var menu = __webpack_require__(30);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/Header.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Header_Header = function Header(_ref) {
  objectDestructuringEmpty_default()(_ref);

  var _React$useState = external_react_default.a.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      inProp = _React$useState2[0],
      setInProp = _React$useState2[1];

  var duration = 300;
  var defaultStyle = {
    transition: "visibility 0s linear 300ms, opacity ".concat(duration, "ms ease-in-out"),
    visibility: 'hidden',
    opacity: '0'
  };
  var transitionStyles = {
    entering: {
      visibility: 'visible',
      opacity: '1',
      transition: "visibility 0s linear 0s, opacity ".concat(duration, "ms ease-in-out")
    },
    entered: {
      visibility: 'visible',
      opacity: '1',
      transition: "visibility 0s linear 0s, opacity ".concat(duration, "ms ease-in-out")
    },
    exiting: {
      visibility: 'hidden',
      opacity: '0',
      transition: "visibility 0s linear 300ms, opacity ".concat(duration, "ms ease-in-out")
    },
    exited: {
      visibility: 'hidden',
      opacity: '0',
      transition: "visibility 0s linear 300ms, opacity ".concat(duration, "ms ease-in-out")
    }
  };
  return /*#__PURE__*/external_react_default.a.createElement("header", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-logo"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: LifeChurchLogo_default.a,
    height: "100"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu-toggle lc-link",
    onClick: function onClick() {
      return setInProp(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(menu_default.a, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-action-buttons"
  }, /*#__PURE__*/external_react_default.a.createElement(components_ActionButton, {
    className: "primary"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/order-of-service"
  }, "Order of service")), /*#__PURE__*/external_react_default.a.createElement(components_ActionButton, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link",
    target: "_blank"
  }, "Visitor Form"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "lc-live-stream-link"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "LIVE STREAM")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/announcement-flyer"
  }, "Announcements")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/facebook-feed"
  }, "Facebook feed")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/stone-soup"
  }, "Support Stone Soup")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/sermons"
  }, "Sermons")))), /*#__PURE__*/external_react_default.a.createElement(external_react_transition_group_["Transition"], {
    "in": inProp,
    timeout: duration
  }, function (state) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "lc-mobile-menu fade fade-".concat(state),
      style: _objectSpread(_objectSpread({}, defaultStyle), transitionStyles[state])
    }, /*#__PURE__*/external_react_default.a.createElement("span", {
      className: "lc-mobile-menu__close",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "X"), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "LIVE FEED")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/announcement-flyer",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Announcements")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/facebook-feed",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Facebook feed")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/stone-soup",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Support Stone Soup")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/sermons",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Sermons"))));
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/app.css
var app = __webpack_require__(52);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/App.tsx







function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-content"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Header, null), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(containers_Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "For more information, email ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:lifechurch.ayer@gmail.com"
  }, "lifechurch.ayer@gmail.com")), /*#__PURE__*/external_react_default.a.createElement("div", null, "Daughter church of ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "http://www.faithevfree.org"
  }, "Faith Evangelical Free Church"), " in Acton, MA")));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(7);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("/Users/nthoen/Projects/life-church/node_modules/react-static/lib/browser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_announcement_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var assets_announcement_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_announcement_png__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-announcement-flyer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_announcement_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "announcement flyer",
    width: 600
  }));
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })));
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      smallVideo = _React$useState2[0],
      setSmallVideo = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Handler to call on window resize
    function handleResize() {
      setSmallVideo(window.innerWidth < 800);
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lc-welcome-message"
  }, smallVideo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F157283136064182&width=480",
    width: "480",
    height: "360",
    style: {
      border: "none",
      overflow: "hidden"
    },
    scrolling: "no",
    frameBorder: "0"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F157283136064182&width=640",
    width: "640",
    height: "480",
    style: {
      border: "none",
      overflow: "hidden"
    },
    scrolling: "no",
    frameBorder: "0"
  }));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/FeedJust1",
    className: "lc-stone-soup__website-link",
    target: "_blank"
  }, "Stone Soup Kitchen Ministry's Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup__donate"
  }, "To contribute monetarily to weekly produce delivery as part of your church giving, write the check out to Faith Evangelical Free Church, with 'Stone Soup' in the memo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup__donation-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "List of items Stone Soup is always collection:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "lc-stone-soup__donation-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "spaghetti sauce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "pasta (spaghetti and other shapes)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxes of cereal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxes of oatmeal packets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned tuna (or the pre-mixed packets)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned chicken (or the pre-mixed packets)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned soups (no fish or shellfish soups please)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned carrots, green beans, corn, peas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "fruit cups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "corn beef hash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "baked beans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned pasta (spaghettios, beef ravioli, etc)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned chili (like Hormel)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxed mac + cheese"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "envelopes or small boxes of instant potatoes, any flavor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small boxes or foil packs of rice, rice pilaf, rice-a-roni, etc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "instant ramen noodles (no shrimp please)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2 lb bags of rice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small jars of peanut butter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small jars of jelly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "box cartons of shelf stable whole milk (not evaporated)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "pudding cups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "granola bars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "peanut butter or cheese cracker packs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "juice boxes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "toilet paper")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To drop off your donations directly, they can be delivered Wednesdays from 10 to noon, Fridays from 4 to 5:30pm, and Saturdays from 9 to noon.  We are located in the back of Living Water Fellowship, 41 Littleton Road in Ayer. Alternatively, Nicole brings donations every Saturday morning and would happily pick anything up from your house throughout the week if you pick up items during your grocery run. Just let her know!")));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/ServiceItem.tsx


var ServiceItem_ServiceItem = function ServiceItem(_ref) {
  var children = _ref.children,
      _ref$subtext = _ref.subtext,
      subtext = _ref$subtext === void 0 ? '' : _ref$subtext,
      _ref$person = _ref.person,
      person = _ref$person === void 0 ? '' : _ref$person,
      _ref$sermonNotes = _ref.sermonNotes,
      sermonNotes = _ref$sermonNotes === void 0 ? '' : _ref$sermonNotes;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-service-item"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-service-item__item"
  }, children), person && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-service-item__person"
  }, person), subtext && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-service-item__subtext"
  }, subtext), sermonNotes && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-service-item__sermon-notes"
  }, sermonNotes));
};

/* harmony default export */ var components_ServiceItem = (ServiceItem_ServiceItem);
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(6);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/ScriptureDecorator.tsx


var ScriptureDecorator_ScriptureDecorator = function ScriptureDecorator(_ref) {
  var children = _ref.children,
      variant = _ref.variant;

  if (variant === 'chapter') {
    return /*#__PURE__*/external_react_default.a.createElement("h2", {
      className: "lc-scripture-decorator"
    }, children);
  } else if (variant === 'reference') {
    return /*#__PURE__*/external_react_default.a.createElement("h1", {
      className: "lc-scripture-decorator"
    }, children);
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "lc-scripture-decorator"
  }, children);
};

/* harmony default export */ var components_ScriptureDecorator = (ScriptureDecorator_ScriptureDecorator);
// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/close.svg
var assets_close = __webpack_require__(32);
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/ScriptureLink.tsx





var ScriptureLink_ScriptureLink = function ScriptureLink(_ref) {
  var reference = _ref.reference,
      text = _ref.text;

  var _React$useState = external_react_default.a.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      openPassage = _React$useState2[0],
      setOpenPassage = _React$useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-scripture-link"
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "lc-link",
    onClick: function onClick() {
      return setOpenPassage(true);
    }
  }, reference), openPassage && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-pop-up"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-pop-up__content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-pop-up__modal"
  }, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "lc-pop-up__close",
    onClick: function onClick() {
      return setOpenPassage(false);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(close_default.a, null)), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "reference"
  }, reference), text))));
};

/* harmony default export */ var components_ScriptureLink = (ScriptureLink_ScriptureLink);
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/pages/order-of-service.tsx




/* harmony default export */ var order_of_service = __webpack_exports__["default"] = (function () {
  var worshipSongs = /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-worship-song"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub",
    target: "_blank"
  }, "Praise To The Lord The Almighty")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-worship-song"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub",
    target: "_blank"
  }, "In Christ Alone/ The Solid Rock")));
  var sermonNotes = /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
    reference: "Jonah 3:1-5",
    text: /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "1"), "Then the word of the Lord came to Jonah the second time, saying, ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "2"), " \u201CArise, go to Nineveh, that great city, and call out against it the message that I tell you.\u201D ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "3"), " So Jonah arose and went to Nineveh, according to the word of the Lord. Now Nineveh was an exceedingly great city,[a] three days' journey in breadth. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "4"), " Jonah began to go into the city, going a day's journey. And he called out, \u201CYet forty days, and Nineveh shall be overthrown!\u201D ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "5"), " And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.")
  }), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
    reference: "Philippians 3:7-11",
    text: /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "7"), " But whatever gain I had, I counted as loss for the sake of Christ. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "8"), " Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "9"), " and be found in him, not having a righteousness of my own that comes from the law, but that which comes through faith in Christ, the righteousness from God that depends on faith\u2014 ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "10"), " that I may know him and the power of his resurrection, and may share his sufferings, becoming like him in his death, ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "11"), " that by any means possible I may attain the resurrection from the dead.")
  }), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come."
  }), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
    reference: "Jonah 3:4",
    text: "Jonah began to go into the city, going a day's journey. And he called out, \u201CYet forty days, and Nineveh shall be overthrown!\u201D"
  }), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
    reference: "Jonah 3:5-10",
    text: /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "5"), " And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them."), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "6"), " The word reached the king of Nineveh, and he arose from his throne, removed his robe, covered himself with sackcloth, and sat in ashes. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "7"), " And he issued a proclamation and published through Nineveh, \u201CBy the decree of the king and his nobles: Let neither man nor beast, herd nor flock, taste anything. Let them not feed or drink water, ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "8"), " but let man and beast be covered with sackcloth, and let them call out mightily to God. Let everyone turn from his evil way and from the violence that is in his hands. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "9"), " Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish.\u201D"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
      variant: "verse"
    }, "10"), " When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it."))
  }));
  var scriptureReading = /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "chapter"
  }, "Chapter 2"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "10"), " And the Lord spoke to the fish, and it vomited Jonah out upon the dry land."), /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "chapter"
  }, "Chapter 3"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "1"), " Then the word of the Lord came to Jonah the second time, saying, ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "2"), " \u201CArise, go to Nineveh, that great city, and call out against it the message that I tell you.\u201D ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "3"), " So Jonah arose and went to Nineveh, according to the word of the Lord. Now Nineveh was an exceedingly great city, three days' journey in breadth. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "4"), " Jonah began to go into the city, going a day's journey. And he called out, \u201CYet forty days, and Nineveh shall be overthrown!\u201D ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "5"), " And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them."), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "6"), " The word reached the king of Nineveh, and he arose from his throne, removed his robe, covered himself with sackcloth, and sat in ashes. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "7"), " And he issued a proclamation and published through Nineveh, \u201CBy the decree of the king and his nobles: Let neither man nor beast, herd nor flock, taste anything. Let them not feed or drink water, ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "8"), " but let man and beast be covered with sackcloth, and let them call out mightily to God. Let everyone turn from his evil way and from the violence that is in his hands. ", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "9"), " Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish.\u201D"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "10"), " When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it."));
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-order-of-worship"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "lc-order-of-worship__date"
  }, "October 18th, 2020"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Welcome"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Andre Wu"
  }, "Call to Worship & Opening Prayer"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Tara and Jazmyn Kasey",
    subtext: worshipSongs
  }, "Worship"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Dawn Provost"
  }, "Praise, Thanksgiving, and Prayer"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Greet one another"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Aaron Claussen"
  }, "Announcements"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Julia Wu",
    subtext: /*#__PURE__*/external_react_default.a.createElement(components_ScriptureLink, {
      reference: "Jonah 2:10-3:10",
      text: scriptureReading
    })
  }, "Scripture Reading"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Dan Kasey",
    subtext: "\"A better version of Jonah\"",
    sermonNotes: sermonNotes
  }, "Sermon"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Benediction"));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(6);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectDestructuringEmpty"
var objectDestructuringEmpty_ = __webpack_require__(8);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty_);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/FacebookPost.tsx


var FacebookPost_FacebookPost = function FacebookPost(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-facebook-feed__post"
  }, children);
};

/* harmony default export */ var components_FacebookPost = (FacebookPost_FacebookPost);
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/FacebookFeed.tsx




var FacebookFeed_FacebookFeed = function FacebookFeed(_ref) {
  objectDestructuringEmpty_default()(_ref);

  var _React$useState = external_react_default.a.useState(0),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      feedItemWidth = _React$useState2[0],
      setFeedItemWidth = _React$useState2[1];

  external_react_default.a.useEffect(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setFeedItemWidth(window.innerWidth < 600 ? window.innerWidth - 20 : 580);
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-facebook-feed"
  }, /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153750056417490&show_text=true&width=552&appId=612285882769039&height=578",
    width: feedItemWidth,
    height: "578",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153749486417547&show_text=true&width=552&appId=612285882769039&height=735",
    width: feedItemWidth,
    height: "735",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153740766418419&show_text=true&width=552&appId=612285882769039&height=715",
    width: feedItemWidth,
    height: "715",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F150856230040206&show_text=true&width=552&appId=612285882769039&height=345",
    width: feedItemWidth,
    height: "345",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F150842446708251&show_text=true&width=552&appId=612285882769039&height=572",
    width: feedItemWidth,
    height: "572",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F149673373491825&show_text=true&width=".concat(feedItemWidth, "&appId=612285882769039&height=576"),
    width: feedItemWidth,
    height: "576",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148928983566264&show_text=true&width=".concat(feedItemWidth, "&appId=612285882769039&height=527"),
    width: feedItemWidth,
    height: "527",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148678036924692&show_text=true&width=".concat(feedItemWidth, "&appId=540151866036099&height=557"),
    width: feedItemWidth,
    height: "557",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })), /*#__PURE__*/external_react_default.a.createElement(components_FacebookPost, null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148269636965532&show_text=true&width=".concat(feedItemWidth, "&appId=540151866036099&height=716"),
    width: feedItemWidth,
    height: "716",
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    scrolling: "no",
    frameBorder: "0",
    allow: "encrypted-media"
  })));
};
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/pages/facebook-feed.tsx


/* harmony default export */ var facebook_feed = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(FacebookFeed_FacebookFeed, null);
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/Sermon.tsx


var Sermon_Sermon = function Sermon(_ref) {
  var children = _ref.children,
      link = _ref.link;
  return /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "lc-sermons__link",
    href: link
  }, children);
};

/* harmony default export */ var components_Sermon = (Sermon_Sermon);
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/pages/sermons.tsx


/* harmony default export */ var sermons = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "lc-sermons__date"
  }, "Sept 27th, 2020 - A Battle of Wills"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons__video"
  }, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/D8iSoEgy4n8",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons__previous"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Previous Sermons"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/5P-fpeqRH2E"
  }, "Sept 20th, 2020 - Introduction to Jonah"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/RcfiGyRD1uQ"
  }, "Sept 13th, 2020"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/_TlI5iw0Oyg"
  }, "Sept 6th, 2020")));
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(5);

var _router = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LifeChurchLogo.853be0ce.png";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Menu (props) {
    return React.createElement("svg",props,React.createElement("path",{"fill":"currentcolor","d":"M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z","color":"#c11010"}));
}

Menu.defaultProps = {"width":"30","height":"30","viewBox":"0 0 92 92"};

module.exports = Menu;

Menu.default = Menu;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/announcement.5849f30a.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Close (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"}));
}

Close.defaultProps = {"height":"16","viewBox":"0 0 512 512","width":"16"};

module.exports = Close;

Close.default = Close;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(36);
module.exports = __webpack_require__(44);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(35)["default"];

var _require = __webpack_require__(13),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-svg",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-favicons",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(13),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(37),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/announcement-flyer.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/announcement-flyer.tsx */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/announcement-flyer.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/announcement-flyer.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/announcement-flyer.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog.tsx */).then(__webpack_require__.bind(null, 18))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/facebook-feed.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/facebook-feed.tsx */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/facebook-feed.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/facebook-feed.tsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/facebook-feed.tsx';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/index.tsx';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/order-of-service.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/order-of-service.tsx */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/order-of-service.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/order-of-service.tsx";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/order-of-service.tsx';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/sermons.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/sermons.tsx */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/sermons.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/sermons.tsx";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/sermons.tsx';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/stone-soup.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/stone-soup.tsx */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/stone-soup.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/stone-soup.tsx";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/stone-soup.tsx';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/announcement-flyer.tsx': t_1,
  '__react_static_root__/src/pages/blog.tsx': t_2,
  '__react_static_root__/src/pages/facebook-feed.tsx': t_3,
  '__react_static_root__/src/pages/index.tsx': t_4,
  '__react_static_root__/src/pages/order-of-service.tsx': t_5,
  '__react_static_root__/src/pages/sermons.tsx': t_6,
  '__react_static_root__/src/pages/stone-soup.tsx': t_7,
  '__react_static_root__/src/containers/Post': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(11);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 7,
	"./": 7,
	"./index": 7,
	"./index.js": 7
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 40;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(45);

var _interopRequireDefault = __webpack_require__(46);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(47));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(48));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(49);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(50)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("/Users/nthoen/Projects/life-church/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// Imports
var urlEscape = __webpack_require__(54);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(55));

// Module
exports.push([module.i, "body {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n    'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center fixed; ;\n  background-size: cover;\n}\n\n.lc-content {\n  min-height: calc(100vh - 70px);\n  margin-bottom: 20px;\n}\n\n@media screen and (min-width: 600px) {\n  header {\n    -ms-grid-rows: 20px 120px auto 20px;\n    grid-template-rows: 20px 120px auto 20px;\n    -ms-grid-columns: 10px auto auto auto 10px;\n    grid-template-columns: 10px auto auto auto 10px;\n    display: grid;\n  }\n\n  .lc-logo {\n    align-items: center;\n    display: flex;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    grid-column: 2/3;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    grid-row: 2/3;\n    width: auto;\n  }\n\n  .lc-action-buttons {\n    align-items: center;\n    display: flex;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    grid-row: 2/3;\n    -ms-grid-column: 4;\n    -ms-grid-column-span: 1;\n    grid-column: 4/5;\n    justify-content: flex-end;\n  }\n\n  .lc-menu {\n    display: flex;\n    flex-grow: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-column: 2/5;\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    grid-row: 3/4;\n  }\n\n  .lc-menu ul {\n    display: flex;\n    height: 100%;\n    justify-content: space-around;\n    list-style: none;\n    padding: 0 0 0 15px;\n    margin: 0 auto;\n  }\n\n  .lc-menu ul>li {\n    align-items: center;\n    display: flex;\n    margin-right: 20px;\n    position: relative;\n  }\n\n  .lc-menu ul>li>a {\n    font-weight: 900;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 15px 0;\n    color: white;\n  }\n\n  .lc-live-stream-link a {\n    color: #c11010 !important;\n  }\n\n  .lc-live-stream-link a:hover {\n    color: #7a0a7a !important;\n  }\n\n\n  .lc-welcome-message {\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-column: 2/5;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 1;\n    grid-row: 4/5;\n    padding: 0;\n  }\n}\n\na, .lc-link {\n  text-decoration: none;\n  color: #c11010;\n  font-weight: bold;\n}\n\na:hover, .lc-link:hover, .lc-menu ul>li>a:hover {\n  color: #7a0a7a;\n  cursor: pointer;\n}\n\n.lc-logo img {\n  display: block;\n  max-height: 100px;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n}\n\nnav {\n  width: 100%;\n  background: #606060;\n  display: flex;\n  justify-content: flex-end;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n}\n\nnav a:hover {\n  background-color: #909090;\n  color: white;\n  text-decoration: none;\n}\n\n.lc-welcome-message {\n  text-align: center;\n  font-style: italic;\n}\n\n.lc-menu-toggle, .lc-mobile-menu {\n  display: none;\n}\n\n.lc-action-buttons__button {\n  background-color: #eeeeee;\n  border: 2px solid #c11010;\n  border-radius: 30px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-weight: 900;\n  min-width: 125px;\n  padding: 10px 25px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.lc-action-buttons__button:hover {\n  background-color: #8B63BB;\n  border-color: #7a0a7a;\n}\n\n.lc-action-buttons__button:hover a {\n  color: white;\n}\n\n.lc-action-buttons__button a {\n  color: #c11010;\n}\n\n.lc-action-buttons__button a:hover {\n  text-decoration: none;\n  color: white;\n}\n\n.lc-action-buttons__button.primary {\n  margin-right: 20px;\n  background-color: #c11010;\n}\n\n.lc-action-buttons__button.primary:hover {\n  background-color: #7a0a7a;\n}\n\n.lc-action-buttons__button.primary a {\n  color: white;\n}\n\n.lc-service-item {\n  padding-bottom: .7rem;\n}\n\n.lc-service-item__item {\n  font-size: 1.2em;\n}\n\n.lc-service-item__person {\n  font-style: italic;\n  padding-left: 1em;\n}\n\n.lc-service-item__subtext, .lc-service-item__sermon-notes {\n  padding-left: 2em;\n}\n\n.lc-facebook-feed {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.lc-facebook-feed__post {\n  align-self: center;\n  padding: 2em;\n  background-color: #bbbbbb;\n  margin-top: 1em;\n}\n\n.lc-announcement-flyer {\n  text-align: center;\n}\n\n.lc-announcement-flyer img {\n  width: 600px;\n  border: 25px #bbbbbb solid;\n  margin-top: 10px;\n}\n\n.lc-stone-soup {\n  width: 600px;\n  margin: auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n}\n\n.lc-order-of-worship {\n  width: 600px;\n  margin: auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n}\n\n.lc-order-of-worship__date {\n  color: #c11010;\n  margin: 0;\n}\n\n.lc-order-of-worship__faithlife-bulletin {\n  margin-bottom: .83em;\n  font-style: italic;\n}\n\n.lc-pop-up {\n  background-color: rgba(3, 3, 3, 0.62);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 400;\n}\n\n.lc-pop-up__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.lc-pop-up__modal {\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(3, 3, 3, 0.16) 0 16px 32px 0, rgba(3, 3, 3, 0.1) 0px 0px 8px 0px;\n  box-sizing: border-box;\n  width: 600px;\n  min-height: 24px;\n  padding: 0 24px 24px 16px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n  word-break: break-word;\n  position: relative;\n}\n\n.lc-pop-up__modal br {\n\n}\n\n.lc-pop-up__close {\n  align-items:flex-start;\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  background-color:rgba(0, 0, 0, 0);\n  border: none;\n  box-sizing:border-box;\n  color:rgb(106, 110, 115);\n  font-size:16px;\n  font-stretch:100%;\n  font-weight:400;\n  height:36px;\n  letter-spacing:normal;\n  line-height:24px;\n  margin: 0;\n  padding: 6px 16px;\n  position:absolute;\n  right:16px;\n  text-align:center;\n  top:23px;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  white-space:nowrap;\n  width:48px;\n  word-spacing:0px;\n  -ms-writing-mode:lr-tb;\n      writing-mode:horizontal-tb;\n  -webkit-border-image:none;\n}\n\n.lc-scripture-decorator {\n  color: #7a0a7a;\n  font-weight: bold;\n}\n\n.lc-sermons {\n  width: 700px;\n  margin: 0 auto 20px auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n}\n\n.lc-sermons__date{\n\n}\n\n.lc-sermons__video {\n\n}\n\n.lc-sermons__link {\n  display: block;\n}\n\n.lc-sermons__previous {\n\n}\n\nfooter {\n  background-color: #bbbbbb;\n  color: white;\n  padding: 2em;\n  font-size: .8em;\n  font-weight: bold;\n  height: 50px;\n}\n\n@media screen and (max-width: 600px) {\n  .lc-logo img {\n    height: 50px;\n  }\n\n  nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    height: auto;\n    padding-left: .2em;\n  }\n  nav a {\n    padding: 0.35rem;\n  }\n\n  .lc-announcement-flyer img {\n    width: 80%;\n    border: 25px #bbbbbb solid;\n    margin-top: 10px;\n  }\n\n  .lc-stone-soup {\n    width: 90%;\n    margin: auto;\n  }\n\n  .lc-order-of-worship {\n    width: 90%;\n    background-color: #bbbbbb;\n    padding: 1em;\n  }\n\n  .lc-menu {\n    display:none;\n  }\n\n  .lc-menu-toggle {\n    display: flex;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    border-radius: 5px;\n  }\n\n  .lc-menu-toggle:hover {\n    background-color: #bbbbbb;\n  }\n\n  .lc-action-buttons {\n    margin: 15px 23px 15px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .lc-mobile-menu {\n    display: inherit;\n    background: rgba(0,0,0,.9);\n    bottom: 0;\n    height: 100vh;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 2;\n  }\n\n  .lc-mobile-menu__close {\n    color: #fff;\n    cursor: pointer;\n    font-size: 26px;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n\n  .lc-mobile-menu ul {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: center;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .lc-mobile-menu li {\n    padding: 15px 0;\n  }\n\n  .lc-mobile-menu li a {\n    color: #fff;\n    font-size: 22px;\n    font-weight: 900;\n    text-decoration: none;\n    text-transform: uppercase;\n  }\n\n  .lc-live-stream-link a {\n    color: #c11010 !important;\n  }\n\n  .lc-live-stream-link a:hover {\n    color: #7a0a7a !important;\n  }\n\n  .lc-pop-up__modal {\n    max-height:calc(100% - 48px);\n    max-width:calc(100% - 32px);\n  }\n\n  h1.lc-scripture-decorator {\n    font-size: 150%;\n    margin-top: 25px;\n  }\n\n  h2.lc-scripture-decorator {\n    font-size: 120%;\n  }\n}\n", ""]);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/worship.a45299ac.jpg";

/***/ })
/******/ ]);
});