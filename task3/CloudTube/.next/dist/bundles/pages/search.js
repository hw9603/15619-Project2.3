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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hover_observer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hover_observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hover_observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils__ = __webpack_require__(10);






var VideoItem = function VideoItem(_ref) {
  var video = _ref.video,
      source = _ref.source,
      isHovering = _ref.isHovering;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
    {
      route: 'video',
      params: {
        slug: video.slug,
        source: source,
        query: video.query,
        timecodes: video.timecodes && video.timecodes.length > 0 ? video.timecodes.join('_') : undefined
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'video-item' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: 'content-container',
        style: {
          backgroundImage: 'url(' + Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["f" /* getThumbnailUrlFromKey */])(video.slug, source) + ')',
          display: '' + (isHovering ? 'none' : 'block')
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: 'content-container',
        style: {
          backgroundImage: 'url(' + Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["c" /* getPreviewUrlFromKey */])(video.slug, source) + ')',
          display: '' + (isHovering ? 'block' : 'none')
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'title' },
        Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["h" /* getTitleFromSlug */])(video.slug)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'channel' },
        Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["b" /* getChannelFromSlug */])(video.slug)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'caption' },
        Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["a" /* getCaptionFromSlug */])(video.slug)
      )
    )
  );
};

var GallerySection = function GallerySection(_ref2) {
  var videos = _ref2.videos,
      header = _ref2.header,
      source = _ref2.source;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"],
    { className: 'section-container' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'section-header' },
      header
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"],
      { container: true, columns: 4, stackable: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row,
        null,
        videos.length > 0 ? videos.map(function (video) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column,
            { key: video.slug },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_hover_observer___default.a,
              { hoverDelayInMs: 300 },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(VideoItem, { video: video, source: source })
            )
          );
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'placeholder' },
          'No videos found'
        )
      )
    )
  );
};

var GalleryPage = function GalleryPage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'gallery-container' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GallerySection, {
      header: 'Trending',
      videos: props.trendingVideos,
      source: 'SAMPLE'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GallerySection, {
      header: 'Your Videos',
      videos: props.yourVideos,
      source: 'USER'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (GalleryPage);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-hover-observer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/GalleryPage.js
var GalleryPage = __webpack_require__(11);

// EXTERNAL MODULE: ./components/SingleHeaderLayout.js + 1 modules
var SingleHeaderLayout = __webpack_require__(6);

// EXTERNAL MODULE: ./hoc/DefaultPage.js + 1 modules
var DefaultPage = __webpack_require__(7);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(13);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./helpers/utils.js
var utils = __webpack_require__(10);

// CONCATENATED MODULE: ./helpers/CloudSearchClient.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CloudSearchClient_CloudSearchClient = function () {
  function CloudSearchClient(searchEndpoint) {
    _classCallCheck(this, CloudSearchClient);

    this.searchEndpoint = searchEndpoint;
  }

  _createClass(CloudSearchClient, [{
    key: 'search',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(searchQuery, size) {
        var results, uniqueVideos, videos, key, video;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                results = void 0;
                _context.prev = 1;

                if (!process.browser) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return external__axios__default.a.get('/dev/searchproxy?q=' + searchQuery + '&size=' + size + '&searchEndpoint=' + this.searchEndpoint);

              case 5:
                results = _context.sent.data;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return external__axios__default.a.get('http://' + this.searchEndpoint + '/2013-01-01/search?q=' + searchQuery + '&size=' + size);

              case 10:
                results = _context.sent.data.hits;

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](1);

                console.error('Error connecting to ' + this.searchEndpoint);
                return _context.abrupt('return', []);

              case 17:

                // filter down the results so we only have unique videos
                uniqueVideos = {};


                if (results.hit) {
                  results.hit.map(function (hit) {
                    var key = hit.id;
                    var slug = Object(utils["e" /* getSlugFromKey */])(key);
                    if (!(slug in uniqueVideos)) {
                      uniqueVideos[slug] = {
                        slug: slug,
                        timecodes: [parseInt(Object(utils["g" /* getTimecodeFromKey */])(key))]
                      };
                    } else {
                      // collect all the timecodes that contain this label
                      uniqueVideos[slug].timecodes.push(parseInt(Object(utils["g" /* getTimecodeFromKey */])(key)));
                    }
                    // if it happens to be a keyword match on the title of the
                    // video, do not append timecodes
                    if (hit.fields.title && hit.fields.title.toLowerCase().indexOf(searchQuery) >= 0) {
                      uniqueVideos[slug].timecodes = [];
                    }
                  });
                }

                videos = [];

                for (key in uniqueVideos) {
                  video = uniqueVideos[key];

                  videos.push({
                    slug: video.slug,
                    timecodes: video.timecodes.sort(function (a, b) {
                      return a - b;
                    }),
                    query: searchQuery
                  });
                }

                return _context.abrupt('return', videos);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      function search(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return search;
    }()
  }]);

  return CloudSearchClient;
}();

/* harmony default export */ var helpers_CloudSearchClient = (CloudSearchClient_CloudSearchClient);
// CONCATENATED MODULE: ./pages/search.js


var search__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function search__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function search__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var search_SearchResultsView = function (_React$Component) {
  _inherits(SearchResultsView, _React$Component);

  function SearchResultsView() {
    search__classCallCheck(this, SearchResultsView);

    return _possibleConstructorReturn(this, (SearchResultsView.__proto__ || Object.getPrototypeOf(SearchResultsView)).apply(this, arguments));
  }

  search__createClass(SearchResultsView, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        SingleHeaderLayout["a" /* default */],
        { searchQuery: this.props.searchQuery },
        external__react__default.a.createElement(GalleryPage["a" /* default */], this.props)
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = search__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(ctx) {
        var searchQuery, sampleClient, userClient, trendingVideos, yourVideos;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searchQuery = ctx.query.q;
                sampleClient = new helpers_CloudSearchClient(config_default.a.CLOUDSEARCH_ENDPOINT.SAMPLE);
                userClient = new helpers_CloudSearchClient(config_default.a.CLOUDSEARCH_ENDPOINT.USER);
                _context.next = 5;
                return sampleClient.search(searchQuery, 16);

              case 5:
                trendingVideos = _context.sent;
                _context.next = 8;
                return userClient.search(searchQuery, 16);

              case 8:
                yourVideos = _context.sent;
                return _context.abrupt('return', { trendingVideos: trendingVideos, yourVideos: yourVideos, searchQuery: searchQuery });

              case 10:
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

  return SearchResultsView;
}(external__react__default.a.Component);

/* harmony default export */ var pages_search = __webpack_exports__["default"] = (Object(DefaultPage["a" /* default */])(search_SearchResultsView));

/***/ })
/******/ ]);