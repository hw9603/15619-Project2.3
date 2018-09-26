module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(5)();
routes.add('gallery', '/dev', 'index').add('video', '/dev/view/:source/:slug/q/:query?/:timecodes?', 'video').add('upload', '/dev/upload', 'upload').add('search', '/dev/search', 'search');

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(3);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// CONCATENATED MODULE: ./components/Header.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header_Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { query: props.searchQuery };
    return _this;
  }

  _createClass(Header, [{
    key: 'handleQueryChange',
    value: function handleQueryChange(event) {
      this.setState({ query: event.target.value });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      routes["Router"].pushRoute('search', { q: this.state.query });
    }
  }, {
    key: 'handleKeypress',
    value: function handleKeypress(event) {
      if (event.key === 'Enter') {
        routes["Router"].pushRoute('search', { q: this.state.query });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'header',
        { className: 'youtube' },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Menu"],
          { inverted: true, color: 'black', fixed: 'top', borderless: true },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Menu"].Item,
            null,
            external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { size: 'large', name: 'content' })
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Menu"].Item,
            { className: 'clickable' },
            external__react__default.a.createElement(
              routes["Link"],
              { route: 'gallery' },
              external__react__default.a.createElement('img', { src: 'https://i.ytimg.com/vi/m45QTcV1TNQ/maxresdefault.jpg' })
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Menu"].Item,
            null,
            external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
              value: this.state.query,
              inverted: true,
              onChange: this.handleQueryChange.bind(this),
              onKeyPress: this.handleKeypress.bind(this),
              action: {
                icon: 'search',
                onClick: this.handleSearch.bind(this)
              },
              placeholder: 'Search...'
            })
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Menu"].Menu,
            { position: 'right' },
            external__react__default.a.createElement(
              routes["Link"],
              { route: 'upload' },
              external__react__default.a.createElement(
                external__semantic_ui_react_["Menu"].Item,
                { className: 'clickable' },
                external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { size: 'large', name: 'cloud upload' }),
                'Upload'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/SingleHeaderLayout.js



/* harmony default export */ var SingleHeaderLayout = __webpack_exports__["a"] = (function (props) {
  return external__react__default.a.createElement(
    "div",
    null,
    external__react__default.a.createElement(components_Header, props),
    external__react__default.a.createElement(
      "div",
      { className: "main-container" },
      props.children
    )
  );
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(8);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head.js



/* harmony default export */ var Head = (function () {
  return external__react__default.a.createElement(
    head__default.a,
    null,
    external__react__default.a.createElement(
      'title',
      null,
      'CloudTube'
    ),
    external__react__default.a.createElement('link', {
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900',
      rel: 'stylesheet'
    }),
    external__react__default.a.createElement('link', { href: '/dev/static/video-react.css', rel: 'stylesheet' }),
    external__react__default.a.createElement('link', {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css',
      rel: 'stylesheet'
    }),
    external__react__default.a.createElement('link', { href: '/dev/static/main.css', rel: 'stylesheet' }),
    external__react__default.a.createElement('script', {
      src: 'https://code.jquery.com/jquery-3.3.1.min.js',
      integrity: 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=',
      crossOrigin: 'anonymous'
    }),
    external__react__default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.js' })
  );
});
// CONCATENATED MODULE: ./hoc/DefaultPage.js


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* harmony default export */ var hoc_DefaultPage = __webpack_exports__["a"] = (function (BarePage) {
  return function (_React$Component) {
    _inherits(DefaultPage, _React$Component);

    function DefaultPage() {
      _classCallCheck(this, DefaultPage);

      return _possibleConstructorReturn(this, (DefaultPage.__proto__ || Object.getPrototypeOf(DefaultPage)).apply(this, arguments));
    }

    _createClass(DefaultPage, [{
      key: 'render',
      value: function render() {
        return external__react__default.a.createElement(
          'div',
          null,
          external__react__default.a.createElement(Head, null),
          external__react__default.a.createElement(BarePage, this.props)
        );
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(ctx) {
          var pageProps;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = BarePage.getInitialProps;

                  if (!_context.t0) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return BarePage.getInitialProps(ctx);

                case 4:
                  _context.t0 = _context.sent;

                case 5:
                  pageProps = _context.t0;
                  return _context.abrupt('return', _extends({}, pageProps));

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return DefaultPage;
  }(external__react__default.a.Component);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-no-ssr"
var external__react_no_ssr_ = __webpack_require__(14);
var external__react_no_ssr__default = /*#__PURE__*/__webpack_require__.n(external__react_no_ssr_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "react-s3-uploader"
var external__react_s3_uploader_ = __webpack_require__(22);
var external__react_s3_uploader__default = /*#__PURE__*/__webpack_require__.n(external__react_s3_uploader_);

// CONCATENATED MODULE: ./components/UploadPage.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var UploadPage_UploadPage = function (_React$Component) {
  _inherits(UploadPage, _React$Component);

  function UploadPage(props) {
    _classCallCheck(this, UploadPage);

    var _this = _possibleConstructorReturn(this, (UploadPage.__proto__ || Object.getPrototypeOf(UploadPage)).call(this, props));

    _this.state = { complete: false, progress: 0, started: false, error: false };
    return _this;
  }

  _createClass(UploadPage, [{
    key: 'onUploadFinish',
    value: function onUploadFinish(info) {
      console.log('Upload Complete: ', info);
      this.setState({ complete: true });
    }
  }, {
    key: 'onUploadProgress',
    value: function onUploadProgress(progress) {
      if (progress % 10 === 0) {
        console.log('Upload Progress: ', progress, '%');
      }
      this.setState({ progress: progress });
    }
  }, {
    key: 'onUploadStart',
    value: function onUploadStart(file, next) {
      console.log('Start Upload: ', file);
      this.setState({ started: true, progress: 0, complete: false, fileName: file.name });
      next(file);
    }
  }, {
    key: 'onUploadError',
    value: function onUploadError(error) {
      console.error(error);
      this.setState({ error: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'upload-container' },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Grid"],
          { centered: true },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Grid"].Column,
            { width: 14 },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Grid"],
              { stackable: true, className: 'upload-status' },
              external__react__default.a.createElement(
                external__semantic_ui_react_["Grid"].Column,
                { width: 4 },
                external__react__default.a.createElement(
                  external__react_no_ssr__default.a,
                  null,
                  external__react__default.a.createElement(external__react_s3_uploader__default.a, {
                    id: 'file',
                    className: 'file-input',
                    signingUrl: '/s3/sign',
                    signingUrlMethod: 'GET',
                    s3path: '',
                    preprocess: this.onUploadStart.bind(this),
                    onProgress: this.onUploadProgress.bind(this),
                    onError: this.onUploadError.bind(this),
                    onFinish: this.onUploadFinish.bind(this),
                    uploadRequestHeaders: { 'x-amz-acl': 'public-read' } // this is the default
                    , contentDisposition: 'auto',
                    scrubFilename: function scrubFilename(filename) {
                      return filename.replace(/[^\w\d-.]+/gi, '_');
                    },
                    autoUpload: true
                  }),
                  external__react__default.a.createElement(
                    'label',
                    { 'for': 'file', className: 'clickable upload-btn' },
                    'Choose Video ',
                    external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'cloud upload' })
                  )
                )
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["Grid"].Column,
                { width: 12 },
                this.state.started ? external__react__default.a.createElement(
                  external__semantic_ui_react_["Progress"],
                  {
                    size: 'big',
                    percent: this.state.progress,
                    color: this.state.complete ? 'olive' : 'red',
                    inverted: true,
                    progress: true
                  },
                  this.state.fileName + ' - ',
                  this.state.error ? 'Error, please refresh and try again' : this.state.complete ? 'Upload Complete' : 'Uploading Video...'
                ) : false
              )
            )
          )
        )
      );
    }
  }]);

  return UploadPage;
}(external__react__default.a.Component);

/* harmony default export */ var components_UploadPage = (UploadPage_UploadPage);
// EXTERNAL MODULE: ./components/SingleHeaderLayout.js + 1 modules
var SingleHeaderLayout = __webpack_require__(6);

// EXTERNAL MODULE: ./hoc/DefaultPage.js + 1 modules
var DefaultPage = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/upload.js


var upload__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function upload__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function upload__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function upload__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var upload_UploadView = function (_React$Component) {
  upload__inherits(UploadView, _React$Component);

  function UploadView() {
    upload__classCallCheck(this, UploadView);

    return upload__possibleConstructorReturn(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).apply(this, arguments));
  }

  upload__createClass(UploadView, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        SingleHeaderLayout["a" /* default */],
        null,
        external__react__default.a.createElement(components_UploadPage, this.props)
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(_ref) {
        var query = _ref.query;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {});

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UploadView;
}(external__react__default.a.Component);

/* harmony default export */ var upload = __webpack_exports__["default"] = (Object(DefaultPage["a" /* default */])(upload_UploadView));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-s3-uploader");

/***/ })
/******/ ]);