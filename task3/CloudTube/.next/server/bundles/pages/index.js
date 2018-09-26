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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(5)();

routes.add('gallery', '/', 'index').add('video', '/view/:source/:slug/q/:query?/:timecodes?', 'video').add('upload', '/upload', 'upload').add('search', '/search', 'search');

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.state = {
      query: props.searchQuery
    };
    return _this;
  }

  _createClass(Header, [{
    key: "handleQueryChange",
    value: function handleQueryChange(event) {
      this.setState({
        query: event.target.value
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      routes["Router"].pushRoute('search', {
        q: this.state.query
      });
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(event) {
      if (event.key === 'Enter') {
        routes["Router"].pushRoute('search', {
          q: this.state.query
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("header", {
        className: "youtube"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"], {
        inverted: true,
        color: "black",
        fixed: "top",
        borderless: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
        size: "large",
        name: "content"
      })), external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
        className: "clickable"
      }, external__react__default.a.createElement(routes["Link"], {
        route: "gallery"
      }, external__react__default.a.createElement("img", {
        src: "/static/youtube.png"
      }))), external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        value: this.state.query,
        inverted: true,
        onChange: this.handleQueryChange.bind(this),
        onKeyPress: this.handleKeypress.bind(this),
        action: {
          icon: 'search',
          onClick: this.handleSearch.bind(this)
        },
        placeholder: "Search..."
      })), external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Menu, {
        position: "right"
      }, external__react__default.a.createElement(routes["Link"], {
        route: "upload"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
        className: "clickable"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
        size: "large",
        name: "cloud upload"
      }), "Upload")))));
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/SingleHeaderLayout.js


/* harmony default export */ var SingleHeaderLayout = __webpack_exports__["a"] = (function (props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(components_Header, props), external__react__default.a.createElement("div", {
    className: "main-container"
  }, props.children));
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
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
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "CloudTube"), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900",
    rel: "stylesheet"
  }), external__react__default.a.createElement("link", {
    href: "/static/video-react.css",
    rel: "stylesheet"
  }), external__react__default.a.createElement("link", {
    href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css",
    rel: "stylesheet"
  }), external__react__default.a.createElement("link", {
    href: "/static/main.css",
    rel: "stylesheet"
  }), external__react__default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    crossOrigin: "anonymous"
  }), external__react__default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.js"
  }));
});
// CONCATENATED MODULE: ./hoc/DefaultPage.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ var hoc_DefaultPage = __webpack_exports__["a"] = (function (BarePage) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(DefaultPage, _React$Component);

      function DefaultPage() {
        _classCallCheck(this, DefaultPage);

        return _possibleConstructorReturn(this, (DefaultPage.__proto__ || Object.getPrototypeOf(DefaultPage)).apply(this, arguments));
      }

      _createClass(DefaultPage, [{
        key: "render",
        value: function render() {
          return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Head, null), external__react__default.a.createElement(BarePage, this.props));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(ctx) {
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
                    return _context.abrupt("return", _objectSpread({}, pageProps));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return DefaultPage;
    }(external__react__default.a.Component)
  );
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
}; // These functions generate fake stuff that looks real
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
  return "".concat(__WEBPACK_IMPORTED_MODULE_0__config___default.a.STORAGE_DOMAIN, "/").concat(__WEBPACK_IMPORTED_MODULE_0__config___default.a.S3_ENDPOINTS[source].THUMBNAIL_BUCKET, "/").concat(key, "_1.png");
};

var getPreviewUrlFromKey = function getPreviewUrlFromKey(key, source) {
  return "".concat(__WEBPACK_IMPORTED_MODULE_0__config___default.a.STORAGE_DOMAIN, "/").concat(__WEBPACK_IMPORTED_MODULE_0__config___default.a.S3_ENDPOINTS[source].PREVIEW_BUCKET, "/").concat(key, ".gif");
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
    route: "video",
    params: {
      slug: video.slug,
      source: source,
      query: video.query,
      timecodes: video.timecodes && video.timecodes.length > 0 ? video.timecodes.join('_') : undefined
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "video-item"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content-container",
    style: {
      backgroundImage: "url(".concat(Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["f" /* getThumbnailUrlFromKey */])(video.slug, source), ")"),
      display: "".concat(isHovering ? 'none' : 'block')
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content-container",
    style: {
      backgroundImage: "url(".concat(Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["c" /* getPreviewUrlFromKey */])(video.slug, source), ")"),
      display: "".concat(isHovering ? 'block' : 'none')
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "title"
  }, Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["h" /* getTitleFromSlug */])(video.slug)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "channel"
  }, Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["b" /* getChannelFromSlug */])(video.slug)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "caption"
  }, Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["a" /* getCaptionFromSlug */])(video.slug))));
};

var GallerySection = function GallerySection(_ref2) {
  var videos = _ref2.videos,
      header = _ref2.header,
      source = _ref2.source;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    className: "section-container"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "section-header"
  }, header), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
    container: true,
    columns: 4,
    stackable: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, null, videos.length > 0 ? videos.map(function (video) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
      key: video.slug
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_hover_observer___default.a, {
      hoverDelayInMs: 300
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(VideoItem, {
      video: video,
      source: source
    })));
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "placeholder"
  }, "No videos found"))));
};

var GalleryPage = function GalleryPage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gallery-container"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GallerySection, {
    header: "Trending",
    videos: props.trendingVideos,
    source: "SAMPLE"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GallerySection, {
    header: "Your Videos",
    videos: props.yourVideos,
    source: "USER"
  }));
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
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

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(13);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "xml-parse"
var external__xml_parse_ = __webpack_require__(17);
var external__xml_parse__default = /*#__PURE__*/__webpack_require__.n(external__xml_parse_);

// CONCATENATED MODULE: ./helpers/S3Client.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var S3Client_S3Client =
/*#__PURE__*/
function () {
  function S3Client(bucketName) {
    _classCallCheck(this, S3Client);

    this.bucketName = bucketName;
  }

  _createClass(S3Client, [{
    key: "listKeys",
    value: function () {
      var _listKeys = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var xmlResponse, xmlObject, keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _element, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _child, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _gchild, fullKey;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!process.browser) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return external__axios__default.a.get("/s3proxy?bucket=".concat(this.bucketName));

              case 4:
                xmlResponse = _context.sent.data;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return external__axios__default.a.get("".concat(config_default.a.STORAGE_DOMAIN, "/").concat(this.bucketName));

              case 9:
                xmlResponse = _context.sent.data;

              case 10:
                xmlObject = external__xml_parse__default.a.parse(xmlResponse);
                keys = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 15;
                _iterator = xmlObject[Symbol.iterator]();

              case 17:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 77;
                  break;
                }

                _element = _step.value;

                if (!(_element.tagName === 'ListBucketResult')) {
                  _context.next = 74;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 23;
                _iterator2 = _element.childNodes[Symbol.iterator]();

              case 25:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 59;
                  break;
                }

                _child = _step2.value;

                if (!(_child.tagName === 'Contents')) {
                  _context.next = 56;
                  break;
                }

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context.prev = 31;
                _iterator3 = _child.childNodes[Symbol.iterator]();

              case 33:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context.next = 42;
                  break;
                }

                _gchild = _step3.value;

                if (!(_gchild.tagName === 'Key')) {
                  _context.next = 39;
                  break;
                }

                fullKey = _gchild.innerXML;
                keys.push(fullKey.substring(0, fullKey.indexOf('.')));
                return _context.abrupt("break", 42);

              case 39:
                _iteratorNormalCompletion3 = true;
                _context.next = 33;
                break;

              case 42:
                _context.next = 48;
                break;

              case 44:
                _context.prev = 44;
                _context.t0 = _context["catch"](31);
                _didIteratorError3 = true;
                _iteratorError3 = _context.t0;

              case 48:
                _context.prev = 48;
                _context.prev = 49;

                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }

              case 51:
                _context.prev = 51;

                if (!_didIteratorError3) {
                  _context.next = 54;
                  break;
                }

                throw _iteratorError3;

              case 54:
                return _context.finish(51);

              case 55:
                return _context.finish(48);

              case 56:
                _iteratorNormalCompletion2 = true;
                _context.next = 25;
                break;

              case 59:
                _context.next = 65;
                break;

              case 61:
                _context.prev = 61;
                _context.t1 = _context["catch"](23);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

              case 65:
                _context.prev = 65;
                _context.prev = 66;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 68:
                _context.prev = 68;

                if (!_didIteratorError2) {
                  _context.next = 71;
                  break;
                }

                throw _iteratorError2;

              case 71:
                return _context.finish(68);

              case 72:
                return _context.finish(65);

              case 73:
                return _context.abrupt("break", 77);

              case 74:
                _iteratorNormalCompletion = true;
                _context.next = 17;
                break;

              case 77:
                _context.next = 83;
                break;

              case 79:
                _context.prev = 79;
                _context.t2 = _context["catch"](15);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 83:
                _context.prev = 83;
                _context.prev = 84;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 86:
                _context.prev = 86;

                if (!_didIteratorError) {
                  _context.next = 89;
                  break;
                }

                throw _iteratorError;

              case 89:
                return _context.finish(86);

              case 90:
                return _context.finish(83);

              case 91:
                return _context.abrupt("return", keys);

              case 94:
                _context.prev = 94;
                _context.t3 = _context["catch"](0);
                console.error("Error fetching objects from ".concat(config_default.a.STORAGE_DOMAIN, "/").concat(this.bucketName));
                console.error(_context.t3);
                return _context.abrupt("return", []);

              case 99:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 94], [15, 79, 83, 91], [23, 61, 65, 73], [31, 44, 48, 56], [49,, 51, 55], [66,, 68, 72], [84,, 86, 90]]);
      }));

      return function listKeys() {
        return _listKeys.apply(this, arguments);
      };
    }()
  }]);

  return S3Client;
}();

/* harmony default export */ var helpers_S3Client = (S3Client_S3Client);
// CONCATENATED MODULE: ./pages/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function pages__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var pages_GalleryView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GalleryView, _React$Component);

  function GalleryView() {
    pages__classCallCheck(this, GalleryView);

    return _possibleConstructorReturn(this, (GalleryView.__proto__ || Object.getPrototypeOf(GalleryView)).apply(this, arguments));
  }

  pages__createClass(GalleryView, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(SingleHeaderLayout["a" /* default */], null, external__react__default.a.createElement(GalleryPage["a" /* default */], this.props));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = pages__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(ctx) {
        var sampleClient, userClient, sampleKeys, userKeys, trendingVideos, yourVideos;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sampleClient = new helpers_S3Client(config_default.a.S3_ENDPOINTS.SAMPLE.INPUT_BUCKET);
                userClient = new helpers_S3Client(config_default.a.S3_ENDPOINTS.USER.INPUT_BUCKET);
                _context.next = 4;
                return sampleClient.listKeys();

              case 4:
                sampleKeys = _context.sent;
                _context.next = 7;
                return userClient.listKeys();

              case 7:
                userKeys = _context.sent;
                trendingVideos = sampleKeys.map(function (key) {
                  return {
                    slug: key
                  };
                });
                yourVideos = userKeys.map(function (key) {
                  return {
                    slug: key
                  };
                });
                return _context.abrupt("return", {
                  trendingVideos: trendingVideos,
                  yourVideos: yourVideos
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return GalleryView;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(DefaultPage["a" /* default */])(pages_GalleryView));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("xml-parse");

/***/ })
/******/ ]);