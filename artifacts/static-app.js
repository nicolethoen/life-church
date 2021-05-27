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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(13);

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

var _requireUniversalModule = __webpack_require__(46);

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

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(49);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(14);

var _helpers = __webpack_require__(50);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(14);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(47)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
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
    className: "lc-highlight-large",
    id: "service-information"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Service Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Sunday Mornings at 10:30am"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We do not yet have a designated indoor space to meet. The pandemic has slowed our search, since meeting indoors is not as much of an option."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Currently, we stream the services on Facebook and YouTube each Sunday. If we are not meeting in person, once the virtual Sunday service is over we gather on Zoom for a time of fellowship."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Now that it is spring, whenever the weather forecast seems to allow it, we will additionally gather outside at The Hidden Park in Devens, MA. We will still stream the services for those unable to attend when meeting in person. Outdoor worship services will be announced via email and on our Facebook page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "lc-outdoor-location"
  }, smallVideo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2445339800483!2d-71.61165464882482!3d42.5501002309691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3eb055d5357a3%3A0xfee010927702a67e!2sThe%20Hidden%20Park!5e0!3m2!1sen!2sus!4v1616867869897!5m2!1sen!2sus",
    width: "400",
    height: "300",
    style: {
      "border": "0"
    },
    allowFullScreen: false,
    loading: "lazy"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2447200697047!2d-71.61164928453765!3d42.5500962791746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3eb055d5357a3%3A0xfee010927702a67e!2sThe%20Hidden%20Park!5e0!3m2!1sen!2sus!4v1616811297797!5m2!1sen!2sus",
    width: "600",
    height: "450",
    style: {
      "border": "0"
    },
    allowFullScreen: false,
    loading: "lazy"
  })));
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/OrderOfService.tsx



/* harmony default export */ var OrderOfService = __webpack_exports__["a"] = (function () {
  // const callToWorship = (
  //     <>
  //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Father who has given us every spiritual blessing in Christ.</p>
  //         <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> We give praise and glory.</p>
  //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Son through whom we have redemption, forgiveness, and the riches of God's grace.</p>
  //         <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> We give praise and glory.</p>
  //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Spirit that seals us in his promise, the guarantee of our inheritance until we possess it.</p>
  //         <p><ScriptureDecorator variant="verse">All:</ScriptureDecorator> We give praise and glory.</p>
  //     </>
  // );
  var worshipSongs = /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-worship-song"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub",
    target: "_blank"
  }, "Lyrics")));
  var scriptureReading = /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "4"), " even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "5"), " he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will,", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "6"), " to the praise of his glorious grace, with which he has blessed us in the Beloved.", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "7"), " In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace,", /*#__PURE__*/external_react_default.a.createElement(components_ScriptureDecorator, {
    variant: "verse"
  }, "8"), " which he lavished upon us, in all wisdom and insight"); // const sermonNotes = (
  //     <>
  //         <ScriptureLink reference="1 John 4:8" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> Whoever does not love does not know God, because God is love.
  //             </>
  //         )}/>
  //         <ScriptureLink reference="John 15:9-13" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">9</ScriptureDecorator> As the Father has loved me, so have I loved you. Abide in my love.
  //                 <ScriptureDecorator variant="verse">10</ScriptureDecorator> If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love.
  //                 <ScriptureDecorator variant="verse">11</ScriptureDecorator> These things I have spoken to you, that my joy may be in you, and that your joy may be full.
  //                 <ScriptureDecorator variant="verse">12</ScriptureDecorator> “This is my commandment, that you love one another as I have loved you.
  //                 <ScriptureDecorator variant="verse">13</ScriptureDecorator> Greater love has no one than this, that someone lay down his life for his friends.
  //             </>
  //         )}/>
  //         <ScriptureLink reference="Jonah 4:4-11" text={(
  //             <>
  //                 <p>
  //                     <ScriptureDecorator variant="verse">4</ScriptureDecorator> And the Lord said, “Do you do well to be angry?”
  //                 </p>
  //                 <p>
  //                     <ScriptureDecorator variant="verse">5</ScriptureDecorator> Jonah went out of the city and sat to the east of the city and made a booth for himself there. He sat under it in the shade, till he should see what would become of the city.
  //                     <ScriptureDecorator variant="verse">6</ScriptureDecorator> Now the Lord God appointed a plant and made it come up over Jonah, that it might be a shade over his head, to save him from his discomfort. So Jonah was exceedingly glad because of the plant.
  //                     <ScriptureDecorator variant="verse">7</ScriptureDecorator> But when dawn came up the next day, God appointed a worm that attacked the plant, so that it withered.
  //                     <ScriptureDecorator variant="verse">8</ScriptureDecorator> When the sun rose, God appointed a scorching east wind, and the sun beat down on the head of Jonah so that he was faint. And he asked that he might die and said, “It is better for me to die than to live.”
  //                     <ScriptureDecorator variant="verse">9</ScriptureDecorator> But God said to Jonah, “Do you do well to be angry for the plant?” And he said, “Yes, I do well to be angry, angry enough to die.”
  //                     <ScriptureDecorator variant="verse">10</ScriptureDecorator> And the Lord said, “You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night.
  //                     <ScriptureDecorator variant="verse">11</ScriptureDecorator> And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?”
  //                 </p>
  //             </>
  //         )}/>
  //         <ScriptureLink reference="Romans 5:6-8" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">6</ScriptureDecorator> For while we were still weak, at the right time Christ died for the ungodly.
  //                 <ScriptureDecorator variant="verse">7</ScriptureDecorator> For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die—
  //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> but God shows his love for us in that while we were still sinners, Christ died for us.
  //             </>
  //         )}/>
  //         <ScriptureLink reference="Proverbs 7:17-19" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">17</ScriptureDecorator> I have perfumed my bed with myrrh, aloes, and cinnamon.
  //                 <ScriptureDecorator variant="verse">18</ScriptureDecorator> Come, let us take our fill of love till morning; let us delight ourselves with love.
  //                 <ScriptureDecorator variant="verse">19</ScriptureDecorator> For my husband is not at home; he has gone on a long journey;
  //             </>
  //         )}/>
  //         <ScriptureLink reference="Proverbs 30:15-16" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">15</ScriptureDecorator> The leech has two daughters: Give and Give. Three things are never satisfied; four never say, “Enough”:
  //                 <ScriptureDecorator variant="verse">16</ScriptureDecorator> Sheol, the barren womb, the land never satisfied with water, and the fire that never says, “Enough.”
  //             </>
  //         )}/>
  //         <ScriptureLink reference="1 Corinthians 13:4-6" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">4</ScriptureDecorator> Love is patient and kind; love does not envy or boast; it is not arrogant
  //                 <ScriptureDecorator variant="verse">5</ScriptureDecorator> or rude. It does not insist on its own way; it is not irritable or resentful;
  //                 <ScriptureDecorator variant="verse">6</ScriptureDecorator> it does not rejoice at wrongdoing, but rejoices with the truth.
  //             </>
  //         )}/>
  //         <ScriptureLink reference="Romans 5:8" text={(
  //             <>
  //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> but God shows his love for us in that while we were still sinners, Christ died for us.
  //             </>
  //         )}/>
  //     </>
  // );
  //

  var sermonNotes = /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Introduction"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Children", /*#__PURE__*/external_react_default.a.createElement("ol", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "Obey your parents (vs 1)"), /*#__PURE__*/external_react_default.a.createElement("li", null, "Honor your parents (vs 2)"), /*#__PURE__*/external_react_default.a.createElement("li", null, "Your promise (vs 3)"))), /*#__PURE__*/external_react_default.a.createElement("p", null, "Parents", /*#__PURE__*/external_react_default.a.createElement("ol", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "Do not provoke your children to anger (vs 4)"), /*#__PURE__*/external_react_default.a.createElement("li", null, "Discipline them"), /*#__PURE__*/external_react_default.a.createElement("li", null, "Instruct / council them"))), /*#__PURE__*/external_react_default.a.createElement("p", null, "Conclusion"));
  var closingSong = /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-worship-song"
  }, "Yet Not I But Through Christ In Me");
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-order-of-worship"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "lc-order-of-worship__date"
  }, "May 30th, 2021"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Welcome"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Julia Wu"
  }, "Call to Worship & Opening Prayer"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Dawn Provost",
    subtext: worshipSongs
  }, "Worship"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Announcements"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Andre Wu"
  }, "Thanksgiving and Prayer"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, null, "Scripture Reading"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Dan Kasey"
  }, "Sermon"), /*#__PURE__*/external_react_default.a.createElement(components_ServiceItem, {
    person: "Dan Kasey"
  }, "Benediction"));
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(3);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/containers/Dynamic.tsx


var Dynamic_Dynamic = function Dynamic() {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
};

/* harmony default export */ var containers_Dynamic = (Dynamic_Dynamic);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(5);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectDestructuringEmpty"
var objectDestructuringEmpty_ = __webpack_require__(30);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty_);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/LifeChurchLogo.png
var LifeChurchLogo = __webpack_require__(31);
var LifeChurchLogo_default = /*#__PURE__*/__webpack_require__.n(LifeChurchLogo);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(9);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/menu.svg
var menu = __webpack_require__(32);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/NavItem.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var NavItem_NavItem = function NavItem(_ref) {
  var _ref$linkTo = _ref.linkTo,
      linkTo = _ref$linkTo === void 0 ? "" : _ref$linkTo,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? "" : _ref$href,
      itemText = _ref.itemText,
      _ref$isSubMenuItem = _ref.isSubMenuItem,
      isSubMenuItem = _ref$isSubMenuItem === void 0 ? false : _ref$isSubMenuItem,
      _ref$submenuItems = _ref.submenuItems,
      submenuItems = _ref$submenuItems === void 0 ? [] : _ref$submenuItems;

  var _React$useState = external_react_default.a.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      showSubmenu = _React$useState2[0],
      setShowSubmenu = _React$useState2[1];

  var hasSubMenu = submenuItems.length > 0;

  var _React$useState3 = external_react_default.a.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      inProp = _React$useState4[0],
      setInProp = _React$useState4[1];

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
  return isSubMenuItem ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu-item" + (inProp ? " focused" : ""),
    onMouseEnter: function onMouseEnter() {
      return setInProp(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setInProp(false);
    }
  }, linkTo && /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    className: "lc-menu-item-submenu-link",
    to: linkTo
  }, itemText), href && /*#__PURE__*/external_react_default.a.createElement("a", {
    href: href,
    target: "_blank"
  }, itemText)) : /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "lc-menu-item" + (inProp ? " focused" : ""),
    onMouseEnter: function onMouseEnter() {
      return setInProp(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setInProp(false);
    }
  }, hasSubMenu && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu-item-link",
    tabIndex: 0 //onKeyDown={() => setInProp(!inProp)}

  }, itemText), linkTo && /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    className: "lc-menu-item-link",
    to: linkTo
  }, itemText), href && /*#__PURE__*/external_react_default.a.createElement("a", {
    href: href,
    target: "_blank"
  }, itemText), submenuItems.length > 0 && /*#__PURE__*/external_react_default.a.createElement(external_react_transition_group_["Transition"], {
    "in": inProp,
    timeout: duration
  }, function (state) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "lc-menu-item-submenu fade fade-".concat(state),
      style: _objectSpread(_objectSpread({}, defaultStyle), transitionStyles[state])
    }, submenuItems);
  }));
};

/* harmony default export */ var components_NavItem = (NavItem_NavItem);
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/components/Header.tsx




function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








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
    height: "100",
    "aria-label": "Life Church Logo - link to home page"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu-toggle lc-link",
    onClick: function onClick() {
      return setInProp(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(menu_default.a, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-menu",
    role: "navigation"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    "aria-label": "Navigation"
  }, /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
    itemText: "Sunday Worship",
    submenuItems: [/*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Live stream",
      linkTo: "/live-stream",
      isSubMenuItem: true,
      key: 0
    }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Service Information",
      linkTo: "/service-information",
      isSubMenuItem: true,
      key: 1
    }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Sermons",
      linkTo: "/sermons",
      isSubMenuItem: true,
      key: 2
    }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Service Sign Up",
      href: "https://docs.google.com/spreadsheets/d/1A57V2SGXO3aKTPP3lzzXZ6tkKFnnomvZ/edit",
      isSubMenuItem: true,
      key: 3
    })]
  }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
    itemText: "Announcements",
    submenuItems: [/*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Stone Soup",
      linkTo: "/stone-soup",
      isSubMenuItem: true,
      key: 0
    }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Latest announcements",
      linkTo: "/announcement-flyer",
      isSubMenuItem: true,
      key: 1
    })]
  }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
    itemText: "Events",
    linkTo: "/calendar"
  }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
    itemText: "Contact us",
    submenuItems: [/*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Visitor Form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link",
      isSubMenuItem: true,
      key: 0
    }), /*#__PURE__*/external_react_default.a.createElement(components_NavItem, {
      itemText: "Facebook page",
      href: "https://www.facebook.com/LifeChurchAyer",
      isSubMenuItem: true,
      key: 1
    })]
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_transition_group_["Transition"], {
    "in": inProp,
    timeout: duration
  }, function (state) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "lc-mobile-menu fade fade-".concat(state),
      role: "navigation",
      style: Header_objectSpread(Header_objectSpread({}, defaultStyle), transitionStyles[state])
    }, /*#__PURE__*/external_react_default.a.createElement("span", {
      className: "lc-mobile-menu__close",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "X"), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/live-stream",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "LIVE STREAM")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/order-of-service",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Digital Bulletin")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/stone-soup",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Support Stone Soup")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/sermons",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Sermons")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: "/calendar",
      onClick: function onClick() {
        return setInProp(false);
      }
    }, "Events"))));
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/app.css
var app = __webpack_require__(59);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/App.tsx







function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-body"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Header, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(containers_Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(13);

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

var _requireById = __webpack_require__(6);

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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/Users/nthoen/Projects/life-church/node_modules/react-static/lib/browser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Something went wrong... "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you keep seeing this message, head to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/LifeChurchAyer/"
  }, "our Facebook page"), " for updates."));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_announcement1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _assets_announcement1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_announcement1_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_announcement2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _assets_announcement2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_announcement2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_announcement4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _assets_announcement4_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_announcement4_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_announcement6_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _assets_announcement6_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_announcement6_png__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-announcement-flyer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "aria-hidden": "true",
    src: _assets_announcement1_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Church online announcement",
    width: 600
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visible-to-screen-reader"
  }, "Sunday mornings we host a praise and worship service at 10:30am eastern. Follow the live stream broadcasted from our website and facebook page. Join us after the service for fellowship via Zoom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "aria-hidden": "true",
    src: _assets_announcement2_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "Life groups announcement",
    width: 600
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visible-to-screen-reader"
  }, "Wednesday evenings we dig into scripture and build transparent community at 7:00pm eastern. Email Julia Wu for Zoom link at LifeChurch.Ayer@gmail.com."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "aria-hidden": "true",
    src: _assets_announcement4_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Stone Soup announcement",
    width: 600
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visible-to-screen-reader"
  }, "You can give money toward fresh produce each week or donate dry goods. Visit LifeChurchAyer.com/stone-soup for details."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "aria-hidden": "true",
    src: _assets_announcement6_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Tithes and offerings",
    width: 600
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visible-to-screen-reader"
  }, "Visit https://tithe.ly/user to create an account and search for Life Church Ayer.\xDF"));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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
    className: "lc-calendar"
  }, smallVideo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=bGlmZWNodXJjaC5heWVyQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&showDate=1",
    style: {
      "border": "solid 1px #777"
    },
    width: "450",
    height: "500",
    frameBorder: "0",
    scrolling: "no"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=bGlmZWNodXJjaC5heWVyQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0",
    style: {
      "border": "solid 1px #777"
    },
    width: "800",
    height: "600",
    frameBorder: 0,
    scrolling: "no"
  }));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OrderOfService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-live-stream"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/w3m_Xk5qTuI",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "If the youtube stream is misbehaving, try viewing it on our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/LifeChurchAyer",
    target: "_blank"
  }, "Facebook page"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrderOfService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OrderOfService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrderOfService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ServiceInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ServiceInformation__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_stone_soup_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _assets_stone_soup_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_stone_soup_jpg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/FeedJust1",
    className: "lc-stone-soup__website-link",
    target: "_blank"
  }, "Stone Soup Kitchen Ministry's Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup__donate"
  }, "To contribute monetarily to weekly produce delivery as part of your church giving, write the check out to Faith Evangelical Free Church, with 'Stone Soup' in the memo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "aria-hidden": "true",
    src: _assets_stone_soup_jpg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Produce donation",
    width: 600
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lc-stone-soup__donation-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "List of items Stone Soup is always collection:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "lc-stone-soup__donation-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "spaghetti sauce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "pasta (spaghetti and other shapes)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxes of cereal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxes of oatmeal packets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned tuna (or the pre-mixed packets)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned chicken (or the pre-mixed packets)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned soups (no fish or shellfish soups please)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned carrots, green beans, corn, peas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "fruit cups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "corn beef hash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "baked beans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned pasta (spaghettios, beef ravioli, etc)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "canned chili (like Hormel)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxed mac + cheese"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "envelopes or small boxes of instant potatoes, any flavor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small boxes or foil packs of rice, rice pilaf, rice-a-roni, etc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "instant ramen noodles (no shrimp please)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2 lb bags of rice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small jars of peanut butter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "small jars of jelly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "box cartons of shelf stable whole milk (not evaporated)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "pudding cups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "granola bars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "peanut butter or cheese cracker packs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "juice boxes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "toilet paper")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To drop off your donations directly, they can be delivered Wednesdays from 10 to noon, Fridays from 4 to 5:30pm, and Saturdays from 9 to noon.  We are located in the back of Living Water Fellowship, 41 Littleton Road in Ayer. Alternatively, Nicole brings donations every Saturday morning and would happily pick anything up from your house throughout the week if you pick up items during your grocery run. Just let her know!")));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/facebook.png
var facebook = __webpack_require__(37);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/assets/youtube.png
var youtube = __webpack_require__(38);

// EXTERNAL MODULE: /Users/nthoen/Projects/life-church/src/components/ServiceInformation.tsx
var ServiceInformation = __webpack_require__(10);

// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/pages/index.tsx






/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-welcome-message"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "lc-announcement-banner"
  }, "This Sunday, May 30th, we have still not determined whether or not we will be meeting in person. ", /*#__PURE__*/external_react_default.a.createElement("br", null), "Please check your email for an update, or watch the live stream."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-splash-image"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-action-buttons"
  }, /*#__PURE__*/external_react_default.a.createElement(components_ActionButton, {
    className: "primary"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/live-stream"
  }, "Live Stream")), /*#__PURE__*/external_react_default.a.createElement(components_ActionButton, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link",
    target: "_blank"
  }, "Visitor Form")))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-tagline"
  }, "Life Church exists in Ayer to be a transformed people, loving God, and loving others, sharing life in and through community."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-highlights"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-highlight-small highlight1"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/calendar"
  }, "Events")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-highlight-small highlight2"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/sermons"
  }, "Sermons")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-highlight-small highlight3"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/LifeChurchAyer",
    target: "_blank"
  }, "Facebook Page"))), /*#__PURE__*/external_react_default.a.createElement(ServiceInformation["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-highlight-large"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Contact Information"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Email: ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:lifechurch.ayer@gmail.com"
  }, "lifechurch.ayer@gmail.com")), /*#__PURE__*/external_react_default.a.createElement("p", null, "Phone: ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "tel:978-391-9324"
  }, "(978) 391-9324")), /*#__PURE__*/external_react_default.a.createElement("p", null, "Daughter church of ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "http://www.faithevfree.org"
  }, "Faith Evangelical Free Church"), " in Acton, MA"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/LifeChurchAyer",
    target: "_blank"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: facebook,
    "aria-label": "Facebook page link"
  })), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCPWxKdRb7-ngMn4NITM39mw",
    target: "_blank"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: youtube,
    "aria-label": "YouTube channel link"
  })))));
});

/***/ }),
/* 27 */
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
    href: link,
    target: "_blank"
  }, children);
};

/* harmony default export */ var components_Sermon = (Sermon_Sermon);
// CONCATENATED MODULE: /Users/nthoen/Projects/life-church/src/pages/sermons.tsx


/* harmony default export */ var sermons = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Sermons"), /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "lc-sermons__date",
    role: "heading"
  }, "May 16th, 2021 - The Belt of Truth"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons__video"
  }, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/H9-BDw_lpVU",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/external_react_default.a.createElement("h1", null, "Previous Sermons"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "lc-sermons__previous"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    role: "heading"
  }, "Ephesians"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/7iQd0i_b-vM"
  }, "May 9th, 2021 - Glorifying God in our Work"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/KgPL5q3yQXo"
  }, "May 2nd, 2021 - Duties of Children and Parents"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/j2AxO90NgHU"
  }, "April 25th, 2021 - The Marriage Motif"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/iY8Xnr7urcw"
  }, "April 18th, 2021 - Spiritually Vigilant"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/m5GWImDutps"
  }, "April 11th, 2021 - The Stockholm Syndrome"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/lN91L2dt0CM"
  }, "March 21st, 2021 - Turning up the Contrast"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/YXBQWtTPnVk"
  }, "March 14th, 2021 - A New Look for a New Society"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/I5o3PzHph24"
  }, "March 7th, 2021 - Growing in Maturity and Unity"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/zObg_1Bd9N4"
  }, "February 28th, 2021 - God's Grace in our Gifting"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/EQNhcshLCrk"
  }, "February 14th, 2021 - Walk this way, unite this way"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/RCuxfW16sw0"
  }, "February 7th, 2021 - Prayer for Strength"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/RCuxfW16sw0"
  }, "January 31th, 2021 - The Divine Detour"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/IWrk_DTe18A"
  }, "January 24th, 2021 - The United Community in Christ"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/Qt4qunDskgc"
  }, "January 17th, 2021 - The Walking Dead Made Alive in Christ"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/GVej-OcfzqY"
  }, "January 10th, 2021 - Eyes of our Hearts Enlightened"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/9H7zkYNZfIo"
  }, "January 3rd, 2021 - Continuing in Ephesians"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/dsOG8t6X7Fk"
  }, "Dec 13th, 2020 - Ephesians 1:11-14 - God's Guarantee"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/dsOG8t6X7Fk"
  }, "Dec 6th, 2020 - Ephesians 1:5-10 - God's Glorious Plan"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://fb.watch/2bLf_xBRRd/"
  }, "Nov 22nd, 2020 - Ephesians 1:4-8"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://fb.watch/1VCx2JzO9D/"
  }, "Nov 15th, 2020 - Chosen out of Love to be in Christ"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://fb.watch/1VCzESHhca/"
  }, "Nov 8th, 2020 - Beginning the Journey in Ephesians"), /*#__PURE__*/external_react_default.a.createElement("h2", {
    role: "heading"
  }, "Jonah"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://fb.watch/1MnaS-4BQs/"
  }, "Nov 1st, 2020 - God's Abounding Steadfast Love"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/X-XcdLaiijs"
  }, "Oct 25th, 2020 - A Life Worth Living"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/D8iSoEgy4n8"
  }, "Oct 18th, 2020 - Angry with God"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/D8iSoEgy4n8"
  }, "Sept 27th, 2020 - A Battle of Wills"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/5P-fpeqRH2E"
  }, "Sept 20th, 2020 - Introduction to Jonah"), /*#__PURE__*/external_react_default.a.createElement("h2", {
    role: "heading"
  }, "Special Sermons"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/7QBhHLujj2c"
  }, "April 4th, 2021 - The Good Catastrophe - Easter"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/Ix8TKa0Ven0"
  }, "March 28th, 2021 - Pastor Brad Johnson The Triumph Jesus Offers"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/orMYPTR09yk"
  }, "February 21st, 2021 - Ryan Fields: Jesus Christ, Lord of All"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/ONvXzfUSqF0"
  }, "Dec 27th, 2020 - Psalm 23"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/QxHakwy4cDk"
  }, "Dec 20th, 2020 - God and Sinner Reconciled"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/TVUa2dLOAEg"
  }, "Nov 29nd, 2020 - Ryan Fields: 2 Corinthians 1:3-11"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/RcfiGyRD1uQ"
  }, "Sept 13th, 2020"), /*#__PURE__*/external_react_default.a.createElement(components_Sermon, {
    link: "https://youtu.be/_TlI5iw0Oyg"
  }, "Sept 6th, 2020")));
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(3);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectDestructuringEmpty");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LifeChurchLogo.853be0ce.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Menu (props) {
    return React.createElement("svg",props,React.createElement("path",{"fill":"currentcolor","d":"M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z","color":"#c11010"}));
}

Menu.defaultProps = {"width":"30","height":"30","viewBox":"0 0 92 92"};

module.exports = Menu;

Menu.default = Menu;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/announcement1.c3647eeb.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/announcement2.8ca9e32e.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/announcement4.29ae56e9.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/announcement6.2572b4be.png";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/stone-soup.fe58d607.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(43);
module.exports = __webpack_require__(51);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(42)["default"];

var _require = __webpack_require__(16),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(16),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(44),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/announcement-flyer.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/announcement-flyer.tsx */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/announcement-flyer.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/announcement-flyer.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/announcement-flyer.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/calendar.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/calendar.tsx */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/calendar.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/calendar.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/calendar.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.tsx';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/live-stream.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/live-stream.tsx */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/live-stream.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/live-stream.tsx";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/live-stream.tsx';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/order-of-service.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/order-of-service.tsx */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/order-of-service.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/order-of-service.tsx";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/order-of-service.tsx';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/sermons.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/sermons.tsx */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/sermons.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/sermons.tsx";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/sermons.tsx';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/service-information.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/service-information.tsx */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/service-information.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/service-information.tsx";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/service-information.tsx';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/stone-soup.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/stone-soup.tsx */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/stone-soup.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/stone-soup.tsx";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/pages/stone-soup.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/announcement-flyer.tsx': t_1,
  '__react_static_root__/src/pages/calendar.tsx': t_2,
  '__react_static_root__/src/pages/index.tsx': t_3,
  '__react_static_root__/src/pages/live-stream.tsx': t_4,
  '__react_static_root__/src/pages/order-of-service.tsx': t_5,
  '__react_static_root__/src/pages/sermons.tsx': t_6,
  '__react_static_root__/src/pages/service-information.tsx': t_7,
  '__react_static_root__/src/pages/stone-soup.tsx': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 45 */
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
/* 46 */
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

var _utils = __webpack_require__(14);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 6,
	"./": 6,
	"./index": 6,
	"./index.js": 6
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
webpackContext.id = 47;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(13);

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

var _propTypes = __webpack_require__(17);

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
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(18);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(52);

var _interopRequireDefault = __webpack_require__(53);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(54));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(55));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(56);
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

var App = __webpack_require__(57)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("/Users/nthoen/Projects/life-church/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)(module)))

/***/ }),
/* 58 */
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(false);
// Imports
var urlEscape = __webpack_require__(61);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(62));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(65));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(66));

// Module
exports.push([module.i, "body {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background-color: #f1f2f2;\n}\n\n.visible-to-screen-reader {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px,1px,1px,1px);\n  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);\n  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);\n  overflow: hidden !important;\n}\n\n.lc-body {\n  min-height: calc(100vh - 70px);\n  margin-bottom: 20px;\n}\n\n.lc-highlights {\n  height: 250px;\n}\n\n.lc-highlight-small {\n  width: 25%;\n  height: 10em;\n  position: relative;\n  display: block;\n  float: left;\n  margin: 3em 0 3em 4.8em;\n}\n\n.lc-highlight-small a {\n  display: block;\n  width: 300px;\n  height: 110px;\n  color: white;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 200%;\n  padding-top: 50px;\n}\n\n.lc-highlight-small a:hover {\n  color: black;\n  background-color: white;\n  opacity: 70%;\n}\n\n.highlight1 {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.highlight3 {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.highlight2 {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.lc-highlight-large {\n  text-align: left;\n  padding: 1.5em 4em;\n  background-color: #cc2418;\n  color: white;\n}\n\n.lc-highlight-large:last-child {\n  background-color: #e0ae75;\n}\n\n.lc-highlight-large img {\n  padding: .5em 1em .5em 0;\n}\n\n@media screen and (min-width: 600px) {\n  header {\n    height: 10em;\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: #dddddd;\n    background-color: #ffffff;\n    -ms-grid-rows: 20px 120px auto 20px;\n    grid-template-rows: 20px 120px auto 20px;\n    -ms-grid-columns: 10px auto auto auto 10px;\n    grid-template-columns: 10px auto auto auto 10px;\n    display: grid;\n  }\n\n  .lc-logo {\n    align-items: center;\n    display: flex;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    grid-column: 2/3;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    grid-row: 2/3;\n    width: auto;\n  }\n\n  .lc-menu {\n    align-items: center;\n    display: flex;\n    height: 60px;\n    margin-top: 70px;\n    text-align: center;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    grid-row: 2/3;\n    -ms-grid-column: 4;\n    -ms-grid-column-span: 1;\n    grid-column: 4/5;\n    justify-content: flex-end;\n  }\n\n  .lc-menu ul {\n    display: flex;\n    height: 100%;\n    justify-content: space-around;\n    list-style: none;\n    padding: 0 0 0 15px;\n    margin: 0 auto;\n  }\n\n  .lc-menu ul>li {\n    align-items: center;\n    display: flex;\n    margin-right: 5px;\n    position: relative;\n  }\n\n  .lc-menu ul>li>.lc-menu-item-link {\n    font-weight: 900;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 15px;\n    color: black;\n  }\n\n  .lc-menu .lc-menu-item.focused>.lc-menu-item-link, .lc-menu .lc-menu-item-link:focus {\n    background-color: #cc2418;\n    color: white !important;\n    outline: none;\n    cursor: pointer;\n  }\n\n  .lc-menu .lc-menu-item-submenu {\n    margin-top: 1.5em;\n    background-color: #f9f9f9;\n    position: absolute;\n    top: 50%;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n  }\n\n  .lc-menu .lc-menu-item-submenu div {\n    text-decoration: none;\n    display: block;\n  }\n\n  .lc-menu .lc-menu-item-submenu div a {\n    display: block;\n    padding: 1em;\n    color: black;\n  }\n\n  .lc-menu .lc-menu-item-submenu div a:hover {\n    background-color: #e0ae75;\n    color: white;\n  }\n\n  .lc-menu .lc-menu-item-link .lc-menu-item-submenu div {\n    padding: 1em;\n    text-decoration: none;\n    display: block;\n  }\n\n  .lc-content {\n    max-width: 75em;\n    margin: auto;\n    text-align: center;\n    border-width: 0 1px 0 1px;\n    border-style: solid;\n    border-color: #dddddd;\n    background-color: #ffffff;\n  }\n\n  .lc-splash-image {\n    width: 100%;\n    margin: auto;\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n    background-position: 50% 30%;\n    height: 25em;\n  }\n\n  .lc-welcome-message {\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-column: 2/5;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 1;\n    grid-row: 4/5;\n    padding: 0;\n  }\n}\n\na, .lc-link {\n  text-decoration: none;\n  color: #c11010;\n  font-weight: bold;\n}\n\na:hover, .lc-link:hover {\n  color: #7a0a7a;\n  cursor: pointer;\n}\n\n.lc-logo img {\n  display: block;\n  max-height: 100px;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n}\n\nnav {\n  width: 100%;\n  background: #606060;\n  display: flex;\n  justify-content: flex-end;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n}\n\nnav a:hover {\n  background-color: #909090;\n  color: white;\n  text-decoration: none;\n}\n\n.lc-menu-toggle, .lc-mobile-menu {\n  display: none;\n}\n\n.lc-action-buttons {\n  padding-top: 8em;\n}\n\n.lc-action-buttons__button {\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-weight: 900;\n  min-width: 125px;\n  padding: 36px 76px;\n  opacity: .9;\n  background-color: white;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.lc-action-buttons__button:hover {\n  background-color: #e0ae75;\n  border-color: #e0ae75;\n}\n\n.lc-action-buttons__button:hover a {\n  color: white;\n}\n\n.lc-action-buttons__button a {\n  color: #c11010;\n  font-size: 200%;\n  font-weight: bold;\n  font-style: normal;\n}\n\n.lc-action-buttons__button a:hover {\n  text-decoration: none;\n  color: white;\n}\n\n.lc-action-buttons__button.primary {\n  margin-right: 215px;\n  background-color: #c11010;\n}\n\n.lc-action-buttons__button.primary:hover {\n  background-color: #e0ae75;\n}\n\n.lc-action-buttons__button.primary a {\n  color: white;\n}\n\n.lc-announcement-banner {\n  background-color: #c11010;\n  color: white;\n  padding: 1em;\n  margin: 0;\n}\n\n.lc-tagline {\n  font-family: 'Roboto Slab', serif;\n  padding: 3em 2em 1em;\n  font-size: 200%;\n}\n\n.lc-service-item {\n  padding-bottom: .7rem;\n}\n\n.lc-service-item__item {\n  font-size: 1.2em;\n}\n\n.lc-service-item__person {\n  font-style: italic;\n  padding-left: 1em;\n}\n\n.lc-service-item__subtext {\n  padding-left: 2em;\n}\n\n.lc-service-item__sermon-notes {\n  padding-left: 3em;\n}\n\n.lc-facebook-feed {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.lc-facebook-feed__post {\n  align-self: center;\n  padding: 2em;\n  background-color: #bbbbbb;\n  margin-top: 1em;\n}\n\n.lc-facebook-feed__post iframe {\n  background-color: white;\n}\n\n.lc-announcement-flyer {\n  text-align: center;\n}\n\n.lc-announcement-flyer img {\n  width: 600px;\n  border: 25px #bbbbbb solid;\n  margin-top: 10px;\n}\n\n.lc-stone-soup {\n  width: 600px;\n  margin: auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n  text-align: left;\n}\n\n.lc-order-of-worship {\n  width: 600px;\n  text-align: left;\n  margin: auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n}\n\n.lc-order-of-worship__date {\n  color: #c11010;\n  margin: 0;\n}\n\n.lc-order-of-worship__faithlife-bulletin {\n  margin-bottom: .83em;\n  font-style: italic;\n}\n\n.lc-pop-up {\n  background-color: rgba(3, 3, 3, 0.62);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 400;\n}\n\n.lc-pop-up__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.lc-pop-up__modal {\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(3, 3, 3, 0.16) 0 16px 32px 0, rgba(3, 3, 3, 0.1) 0px 0px 8px 0px;\n  box-sizing: border-box;\n  width: 600px;\n  min-height: 24px;\n  padding: 0 24px 24px 16px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n  word-break: break-word;\n  position: relative;\n}\n\n.lc-pop-up__modal br {\n\n}\n\n.lc-pop-up__close {\n  align-items:flex-start;\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  background-color:rgba(0, 0, 0, 0);\n  border: none;\n  box-sizing:border-box;\n  color:rgb(106, 110, 115);\n  font-size:16px;\n  font-stretch:100%;\n  font-weight:400;\n  height:36px;\n  letter-spacing:normal;\n  line-height:24px;\n  margin: 0;\n  padding: 6px 16px;\n  position:absolute;\n  right:16px;\n  text-align:center;\n  top:23px;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  white-space:nowrap;\n  width:48px;\n  word-spacing:0px;\n  -ms-writing-mode:lr-tb;\n      writing-mode:horizontal-tb;\n  -webkit-border-image:none;\n}\n\n.lc-scripture-decorator {\n  color: #7a0a7a;\n  font-weight: bold;\n}\n\n.lc-sermons {\n  width: 700px;\n  margin: 0 auto 20px auto;\n  opacity: 0.9;\n  background-color: #eeeeee;\n  padding: 1em;\n  text-align: left;\n}\n\n.lc-sermons__date{\n\n}\n\n.lc-sermons__video {\n  text-align: center;\n}\n\n.lc-sermons__link {\n  display: block;\n}\n\n.lc-sermons__previous {\n}\n\n.lc-calendar {\n  background-color: white;\n  padding: 1em;\n}\n\nfooter {\n  background-color: darkgray;\n  color: white;\n  padding: 2em;\n  font-size: .8em;\n  font-weight: bold;\n  height: 30px;\n}\n\n@media screen and (min-width: 999px) {\n  .lc-flex {\n    display: flex;\n    padding: 1em;\n  }\n\n}\n\n@media screen and (max-width: 1000px) {\n  .lc-logo img {\n    height: 80px;\n  }\n\n  header {\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: #dddddd;\n    background-color: #ffffff;\n    padding-top: .6em;\n  }\n\n  nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    height: auto;\n    padding-left: .2em;\n  }\n  nav a {\n    padding: 0.35rem;\n  }\n\n  .lc-action-buttons__button {\n    padding: 15px;\n  }\n\n  .lc-action-buttons__button.primary {\n    margin-right: 40px;\n  }\n\n  .lc-action-buttons__button a {\n    font-size: 170%;\n  }\n\n  .lc-content {\n    border-width: 0 1px 0 1px;\n    border-style: solid;\n    border-color: #dddddd;\n    background-color: #ffffff;\n  }\n\n  .lc-announcement-flyer img {\n    width: 80%;\n    border: 25px #bbbbbb solid;\n    margin-top: 10px;\n  }\n\n  .lc-stone-soup {\n    width: 90%;\n    margin: auto;\n    text-align: left;\n  }\n\n  .lc-order-of-worship {\n    width: 90%;\n    padding: 1em;\n  }\n\n  .lc-menu {\n    display:none;\n  }\n\n  .lc-menu-toggle {\n    display: flex;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    border-radius: 5px;\n  }\n\n  .lc-menu-toggle:hover {\n    background-color: #bbbbbb;\n  }\n\n  .lc-action-buttons {\n    margin: 0 23px 15px;\n    display: flex;\n    justify-content: center;\n    padding-top: 2em;\n  }\n\n  .lc-tagline {\n    padding: 1em;\n    font-size: 120%;\n  }\n\n  .lc-highlights {\n    height: auto;\n    display: block;\n  }\n\n  .lc-highlight-small {\n    display: block;\n    width: auto;\n    max-width: 300px;\n    float: none;\n    margin: 2.5em auto;\n  }\n\n  .lc-highlight-small a {\n    display:block;\n    width: auto;\n    text-align: center;\n  }\n\n  .lc-highlight-large {\n    margin: 0;\n    padding: 1.5em 3em;\n  }\n\n  .lc-mobile-menu {\n    display: inherit;\n    background: rgba(0,0,0,.9);\n    bottom: 0;\n    height: 100vh;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 2;\n  }\n\n  .lc-mobile-menu__close {\n    color: #fff;\n    cursor: pointer;\n    font-size: 26px;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n\n  .lc-mobile-menu ul {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: center;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .lc-mobile-menu li {\n    padding: 15px 0;\n  }\n\n  .lc-mobile-menu li a {\n    color: #fff;\n    font-size: 22px;\n    font-weight: 900;\n    text-decoration: none;\n    text-transform: uppercase;\n  }\n\n  .lc-live-stream-link a {\n    color: #c11010 !important;\n  }\n\n  .lc-live-stream-link a:hover {\n    color: #7a0a7a !important;\n  }\n\n  .lc-pop-up__modal {\n    max-height:calc(100% - 48px);\n    max-width:calc(100% - 32px);\n  }\n\n  h1.lc-scripture-decorator {\n    font-size: 150%;\n    margin-top: 25px;\n  }\n\n  h2.lc-scripture-decorator {\n    font-size: 120%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .lc-logo img {\n    height: 50px;\n  }\n\n  header {\n    height: 4em;\n  }\n\n  .lc-splash-image {\n    height: 10em;\n    background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n    background-position: 50% 30%;\n    background-repeat: no-repeat;\n  }\n}", ""]);



/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/worship_indoor.123850ce.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/playground.3b7cbc81.jpeg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/preaching.1f1f759b.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/outdoors.09f54de6.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/outdoors_small.32cda7df.jpg";

/***/ })
/******/ ]);
});