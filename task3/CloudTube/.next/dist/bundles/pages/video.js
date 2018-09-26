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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 4 */
/***/ (function(module, exports) {

var config = {

  // Domain of the Cloud Service Provider's storage service
  STORAGE_DOMAIN: 'https://s3.amazonaws.com',

  S3_ENDPOINTS: {
    SAMPLE: {
      /** We have provided some sample buckets hosting some sample videos so you can see how the app should work. You do not have to change these fields. **/
      INPUT_BUCKET: 'cloudtube-video-input-bucket',
      PREVIEW_BUCKET: 'cloudtube-preview-gif-bucket',
      THUMBNAIL_BUCKET: 'cloudtube-thumbnail-bucket'
    },

    USER: {
      /** TODO: Change these fields to point to your own S3 buckets, so that the app can download/upload to them **/
      INPUT_BUCKET: 'video-input-bucket-cc',
      PREVIEW_BUCKET: 'process-gif-serverless',
      THUMBNAIL_BUCKET: 'thumbnail-serverless'
    }
  },

  CLOUDSEARCH_ENDPOINT: {
    SAMPLE: 'search-cloudtube-rwaa3wrvhjculftmhacrtoqfrm.us-east-1.cloudsearch.amazonaws.com',

    /** TODO: Change this to your cloudsearch domain, you can find this on your cloudsearch domain dashboard **/
    USER: 'search-video-labels-serverless-p235ftl32vr4pb5mqn2qogzpge.us-east-1.cloudsearch.amazonaws.com'
  }

};

module.exports = config;

/***/ }),
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSlugFromKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimecodeFromKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTitleFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getChannelFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCaptionFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRankFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getViewsFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getThumbnailUrlFromKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPreviewUrlFromKey; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config__);


var getSlugFromKey = function getSlugFromKey(key) {
  return key.substring(0, key.lastIndexOf('_'));
};

// These functions generate fake stuff that looks real
// given a video slug

var getTimecodeFromKey = function getTimecodeFromKey(key) {
  return key.substring(key.lastIndexOf('_') + 1, key.length);
};

var getTitleFromSlug = function getTitleFromSlug(slug) {
  return slug.replace(/_/g, ' ');
};

var getChannelFromSlug = function getChannelFromSlug(slug) {
  return 'CloudComputing';
};

var getCaptionFromSlug = function getCaptionFromSlug(slug) {
  return '1M Views · 14 hours ago';
};

var getRankFromSlug = function getRankFromSlug(slug) {
  return '27';
};

var getViewsFromSlug = function getViewsFromSlug(slug) {
  return '6,103,127';
};

var getThumbnailUrlFromKey = function getThumbnailUrlFromKey(key, source) {
  return __WEBPACK_IMPORTED_MODULE_0__config___default.a.STORAGE_DOMAIN + '/' + __WEBPACK_IMPORTED_MODULE_0__config___default.a.S3_ENDPOINTS[source].THUMBNAIL_BUCKET + '/' + key + '_1.png';
};

var getPreviewUrlFromKey = function getPreviewUrlFromKey(key, source) {
  return __WEBPACK_IMPORTED_MODULE_0__config___default.a.STORAGE_DOMAIN + '/' + __WEBPACK_IMPORTED_MODULE_0__config___default.a.S3_ENDPOINTS[source].PREVIEW_BUCKET + '/' + key + '.gif';
};



/***/ }),
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
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

// EXTERNAL MODULE: ./helpers/utils.js
var utils = __webpack_require__(10);

// EXTERNAL MODULE: external "video-react"
var external__video_react_ = __webpack_require__(25);
var external__video_react__default = /*#__PURE__*/__webpack_require__.n(external__video_react_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./components/VideoPage.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var VideoPage_ThumbnailPreview = function ThumbnailPreview(_ref) {
  var timecode = _ref.timecode,
      thumbnail = _ref.thumbnail,
      handleSeek = _ref.handleSeek,
      source = _ref.source;
  return external__react__default.a.createElement(
    'div',
    { className: 'thumbnail-container', onClick: handleSeek },
    external__react__default.a.createElement('img', { src: config_default.a.STORAGE_DOMAIN + '/' + config_default.a.S3_ENDPOINTS[source].THUMBNAIL_BUCKET + '/' + thumbnail + '.png' }),
    external__react__default.a.createElement(
      'div',
      { className: 'overlay' },
      timecode
    )
  );
};

var VideoPage_VideoPage = function (_React$Component) {
  _inherits(VideoPage, _React$Component);

  function VideoPage() {
    _classCallCheck(this, VideoPage);

    return _possibleConstructorReturn(this, (VideoPage.__proto__ || Object.getPrototypeOf(VideoPage)).apply(this, arguments));
  }

  _createClass(VideoPage, [{
    key: 'handleSeek',
    value: function handleSeek(seconds) {
      // start a little earlier, since there is some error translating
      // from fps to seconds
      this.refs.player.seek(seconds - 1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(
        'div',
        { className: 'video-container' },
        external__react__default.a.createElement(
          external__semantic_ui_react_["Grid"],
          { centered: true },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Grid"].Column,
            { width: 14 },
            external__react__default.a.createElement(
              external__semantic_ui_react_["Grid"].Row,
              null,
              external__react__default.a.createElement(
                external__react_no_ssr__default.a,
                null,
                external__react__default.a.createElement(
                  external__video_react_["Player"],
                  { autoPlay: true, ref: 'player' },
                  external__react__default.a.createElement('source', {
                    src: config_default.a.STORAGE_DOMAIN + '/' + config_default.a.S3_ENDPOINTS[this.props.source].INPUT_BUCKET + '/' + this.props.slug + '.mp4'
                  }),
                  external__react__default.a.createElement(
                    external__video_react_["ControlBar"],
                    null,
                    external__react__default.a.createElement(external__video_react_["CurrentTimeDisplay"], { order: 4.1 }),
                    external__react__default.a.createElement(external__video_react_["TimeDivider"], { order: 4.2 }),
                    external__react__default.a.createElement(external__video_react_["PlaybackRateMenuButton"], {
                      rates: [5, 2, 1, 0.5, 0.1],
                      order: 7.1
                    }),
                    external__react__default.a.createElement(external__video_react_["VolumeMenuButton"], null)
                  )
                )
              )
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Grid"].Row,
              null,
              external__react__default.a.createElement('br', null),
              external__react__default.a.createElement(
                external__semantic_ui_react_["Container"],
                { fluid: true },
                external__react__default.a.createElement(
                  'p',
                  { className: 'ranking' },
                  '#',
                  Object(utils["d" /* getRankFromSlug */])(this.props.slug),
                  ' ON TRENDING'
                ),
                external__react__default.a.createElement(
                  'p',
                  { className: 'title' },
                  Object(utils["h" /* getTitleFromSlug */])(this.props.slug)
                ),
                external__react__default.a.createElement(
                  'p',
                  { className: 'views' },
                  Object(utils["i" /* getViewsFromSlug */])(this.props.slug),
                  ' views'
                )
              ),
              this.props.timecodes.length > 0 ? external__react__default.a.createElement(
                external__semantic_ui_react_["Container"],
                { fluid: true, className: 'search-labels' },
                external__react__default.a.createElement(
                  'p',
                  { className: 'title' },
                  'Video Content Search Results: ',
                  this.props.query.toUpperCase()
                ),
                this.props.timecodes.map(function (timecode) {
                  return external__react__default.a.createElement(VideoPage_ThumbnailPreview, {
                    key: _this2.props.slug + '_' + timecode,
                    timecode: timecode,
                    source: _this2.props.source,
                    thumbnail: _this2.props.slug + '_' + timecode,
                    handleSeek: _this2.handleSeek.bind(_this2, timecode)
                  });
                })
              ) : false
            )
          )
        )
      );
    }
  }]);

  return VideoPage;
}(external__react__default.a.Component);

/* harmony default export */ var components_VideoPage = (VideoPage_VideoPage);
// EXTERNAL MODULE: ./components/SingleHeaderLayout.js + 1 modules
var SingleHeaderLayout = __webpack_require__(6);

// EXTERNAL MODULE: ./hoc/DefaultPage.js + 1 modules
var DefaultPage = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/video.js


var video__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function video__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function video__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function video__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var video_VideoView = function (_React$Component) {
  video__inherits(VideoView, _React$Component);

  function VideoView() {
    video__classCallCheck(this, VideoView);

    return video__possibleConstructorReturn(this, (VideoView.__proto__ || Object.getPrototypeOf(VideoView)).apply(this, arguments));
  }

  video__createClass(VideoView, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        SingleHeaderLayout["a" /* default */],
        { searchQuery: this.props.query },
        external__react__default.a.createElement(components_VideoPage, this.props)
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
                return _context.abrupt('return', {
                  slug: query.slug,
                  source: query.source,
                  query: query.query,
                  timecodes: query.timecodes ? query.timecodes.split('_') : []
                });

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

  return VideoView;
}(external__react__default.a.Component);

/* harmony default export */ var video = __webpack_exports__["default"] = (Object(DefaultPage["a" /* default */])(video_VideoView));

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("video-react");

/***/ })
/******/ ]);