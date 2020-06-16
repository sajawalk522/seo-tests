webpackHotUpdate("static\\development\\pages\\product.js",{

/***/ "./pages/components/product-detail/index.js":
/*!**************************************************!*\
  !*** ./pages/components/product-detail/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\sajawal khan\\Desktop\\seo-nxt\\pages\\components\\product-detail\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Productdetail = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Productdetail, _React$Component);

  var _super = _createSuper(Productdetail);

  function Productdetail() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Productdetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      product: [],
      productTitle: '',
      image: '',
      description: '',
      data: [{
        id: '1',
        productName: 'Atta',
        image: 'https://5.imimg.com/data5/LL/LL/STDPRD-1153/aashirvaad-whole-wheat-atta-500x500.jpg'
      }, {
        id: '2',
        productName: 'Chakki Atta',
        image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Sunridge-Chakki-Atta-10-KG-Onlinebuy-pk.jpg'
      }, {
        id: '3',
        productName: 'Punjab atta',
        image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Punjab-Atta-No.1-20Kg-Onlinebuy-pk-600x600.jpg'
      }, {
        id: '4',
        productName: 'Sugar control',
        image: 'https://pictures.grocerapps.com/original/grocerapp-low-dibe-sugar-control-atta-5eb3b22d7f626.jpeg'
      }]
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Productdetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var desire = location.search.slice(1).split("&")[0].split("=")[1];
      var marvelHeroes = this.state.data.filter(function (hero) {
        return hero.id == desire;
      });
      this.setState({
        product: marvelHeroes
      });
      this.setState({
        productTitle: marvelHeroes[0].productName
      });
      this.setState({
        image: marvelHeroes[0].image
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, this.state.productTitle), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:title",
        content: this.state.productTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:url",
        content: "http://localhost:3000/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:url",
        content: window.location.href,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 22
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Shud atta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:site_name",
        content: "IMDb",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale",
        content: "en_US",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "en_GB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "cn_CN",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image",
        content: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image:height",
        content: "800",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }), __jsx("meta", {
        name: "description",
        content: "Seo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "porduct",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "product-detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }, this.state.product.map(function (post) {
        return __jsx("div", {
          className: "item-select",
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 29
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: post.image,
          alt: "product image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 37
          }
        }), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 37
          }
        }, post.productName)));
      }))));
    }
  }]);

  return Productdetail;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Productdetail);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RkZXRhaWwiLCJwcm9kdWN0IiwicHJvZHVjdFRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJpZCIsInByb2R1Y3ROYW1lIiwiZGVzaXJlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwibWFydmVsSGVyb2VzIiwic3RhdGUiLCJmaWx0ZXIiLCJoZXJvIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJocmVmIiwibWFwIiwicG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsYUFBTyxFQUFFLEVBREw7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLFdBQUssRUFBRSxFQUhIO0FBSUpDLGlCQUFXLEVBQUUsRUFKVDtBQUtKQyxVQUFJLEVBQUcsQ0FDSDtBQUFFQyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLE1BQXhCO0FBQWdDSixhQUFLLEVBQUU7QUFBdkMsT0FERyxFQUVIO0FBQUVHLFVBQUUsRUFBRSxHQUFOO0FBQVdDLG1CQUFXLEVBQUUsYUFBeEI7QUFBdUNKLGFBQUssRUFBRTtBQUE5QyxPQUZHLEVBR0g7QUFBRUcsVUFBRSxFQUFFLEdBQU47QUFBV0MsbUJBQVcsRUFBRSxhQUF4QjtBQUF1Q0osYUFBSyxFQUFFO0FBQTlDLE9BSEcsRUFJSDtBQUFFRyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLGVBQXhCO0FBQXlDSixhQUFLLEVBQUU7QUFBaEQsT0FKRztBQUxILEs7Ozs7Ozs7d0NBWVk7QUFDaEIsVUFBSUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRC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aUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS1csS0FBTCxDQUFXYixPQUFYLENBQW1CbUIsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRDtBQUFBLGVBQ3BCO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUcsRUFBRUEsSUFBSSxDQUFDZixFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUssYUFBRyxFQUFFZSxJQUFJLENBQUNsQixLQUFmO0FBQXNCLGFBQUcsRUFBQyxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUlrQixJQUFJLENBQUNkLFdBQVQsQ0FGSixDQURKLENBRG9CO0FBQUEsT0FBdkIsQ0FETCxDQURKLENBbEJKLENBREo7QUFpQ0g7Ozs7RUF4RHVCZSw0Q0FBSyxDQUFDQyxTOztBQTBEbkJ2Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZHVjdC5qcy5lM2I4OGM4MjNiMzQ2NzU2NGNhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jbGFzcyBQcm9kdWN0ZGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHByb2R1Y3Q6IFtdLFxyXG4gICAgICAgIHByb2R1Y3RUaXRsZTogJycsXHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBkYXRhIDogW1xyXG4gICAgICAgICAgICB7IGlkOiAnMScsIHByb2R1Y3ROYW1lOiAnQXR0YScsIGltYWdlOiAnaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9MTC9MTC9TVERQUkQtMTE1My9hYXNoaXJ2YWFkLXdob2xlLXdoZWF0LWF0dGEtNTAweDUwMC5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICcyJywgcHJvZHVjdE5hbWU6ICdDaGFra2kgQXR0YScsIGltYWdlOiAnaHR0cHM6Ly93d3cub25saW5lYnV5LnBrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1N1bnJpZGdlLUNoYWtraS1BdHRhLTEwLUtHLU9ubGluZWJ1eS1way5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICczJywgcHJvZHVjdE5hbWU6ICdQdW5qYWIgYXR0YScsIGltYWdlOiAnaHR0cHM6Ly93d3cub25saW5lYnV5LnBrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1B1bmphYi1BdHRhLU5vLjEtMjBLZy1PbmxpbmVidXktcGstNjAweDYwMC5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICc0JywgcHJvZHVjdE5hbWU6ICdTdWdhciBjb250cm9sJywgaW1hZ2U6ICdodHRwczovL3BpY3R1cmVzLmdyb2NlcmFwcHMuY29tL29yaWdpbmFsL2dyb2NlcmFwcC1sb3ctZGliZS1zdWdhci1jb250cm9sLWF0dGEtNWViM2IyMmQ3ZjYyNi5qcGVnJyB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGRlc2lyZSA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdChcIiZcIilbMF0uc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgICAgIHZhciBtYXJ2ZWxIZXJvZXMgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChoZXJvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoZXJvLmlkID09IGRlc2lyZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogbWFydmVsSGVyb2VzIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGl0bGU6IG1hcnZlbEhlcm9lc1swXS5wcm9kdWN0TmFtZSB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG1hcnZlbEhlcm9lc1swXS5pbWFnZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnN0YXRlLnByb2R1Y3RUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGhpcy5zdGF0ZS5wcm9kdWN0VGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU2h1ZCBhdHRhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJJTURiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGU6YWx0ZXJuYXRlXCIgY29udGVudD1cImVuX0dCXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZTphbHRlcm5hdGVcIiBjb250ZW50PVwiY25fQ05cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXt0aGlzLnN0YXRlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNlb1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9yZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdC5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3RcIiBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSBhbHQ9XCJwcm9kdWN0IGltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5wcm9kdWN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RkZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==