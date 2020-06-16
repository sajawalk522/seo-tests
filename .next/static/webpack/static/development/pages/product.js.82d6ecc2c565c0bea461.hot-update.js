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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RkZXRhaWwiLCJwcm9kdWN0IiwicHJvZHVjdFRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJpZCIsInByb2R1Y3ROYW1lIiwiZGVzaXJlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwibWFydmVsSGVyb2VzIiwic3RhdGUiLCJmaWx0ZXIiLCJoZXJvIiwic2V0U3RhdGUiLCJtYXAiLCJwb3N0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxhQUFPLEVBQUUsRUFETDtBQUVKQyxrQkFBWSxFQUFFLEVBRlY7QUFHSkMsV0FBSyxFQUFFLEVBSEg7QUFJSkMsaUJBQVcsRUFBRSxFQUpUO0FBS0pDLFVBQUksRUFBRyxDQUNIO0FBQUVDLFVBQUUsRUFBRSxHQUFOO0FBQVdDLG1CQUFXLEVBQUUsTUFBeEI7QUFBZ0NKLGFBQUssRUFBRTtBQUF2QyxPQURHLEVBRUg7QUFBRUcsVUFBRSxFQUFFLEdBQU47QUFBV0MsbUJBQVcsRUFBRSxhQUF4QjtBQUF1Q0osYUFBSyxFQUFFO0FBQTlDLE9BRkcsRUFHSDtBQUFFRyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLGFBQXhCO0FBQXVDSixhQUFLLEVBQUU7QUFBOUMsT0FIRyxFQUlIO0FBQUVHLFVBQUUsRUFBRSxHQUFOO0FBQVdDLG1CQUFXLEVBQUUsZUFBeEI7QUFBeUNKLGFBQUssRUFBRTtBQUFoRCxPQUpHO0FBTEgsSzs7Ozs7Ozt3Q0FZWTtBQUNoQixVQUFJSyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUJDLEtBQXpCLENB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QVMsRUFBQyxhQUFmO0FBQTZCLGFBQUcsRUFBRUEsSUFBSSxDQUFDYixFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUssYUFBRyxFQUFFYSxJQUFJLENBQUNoQixLQUFmO0FBQXNCLGFBQUcsRUFBQyxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUlnQixJQUFJLENBQUNaLFdBQVQsQ0FGSixDQURKLENBRG9CO0FBQUEsT0FBdkIsQ0FETCxDQURKLENBbEJKLENBREo7QUFpQ0g7Ozs7RUF4RHVCYSw0Q0FBSyxDQUFDQyxTOztBQTBEbkJyQiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZHVjdC5qcy44MmQ2ZWNjMmM1NjVjMGJlYTQ2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jbGFzcyBQcm9kdWN0ZGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHByb2R1Y3Q6IFtdLFxyXG4gICAgICAgIHByb2R1Y3RUaXRsZTogJycsXHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBkYXRhIDogW1xyXG4gICAgICAgICAgICB7IGlkOiAnMScsIHByb2R1Y3ROYW1lOiAnQXR0YScsIGltYWdlOiAnaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9MTC9MTC9TVERQUkQtMTE1My9hYXNoaXJ2YWFkLXdob2xlLXdoZWF0LWF0dGEtNTAweDUwMC5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICcyJywgcHJvZHVjdE5hbWU6ICdDaGFra2kgQXR0YScsIGltYWdlOiAnaHR0cHM6Ly93d3cub25saW5lYnV5LnBrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1N1bnJpZGdlLUNoYWtraS1BdHRhLTEwLUtHLU9ubGluZWJ1eS1way5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICczJywgcHJvZHVjdE5hbWU6ICdQdW5qYWIgYXR0YScsIGltYWdlOiAnaHR0cHM6Ly93d3cub25saW5lYnV5LnBrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL1B1bmphYi1BdHRhLU5vLjEtMjBLZy1PbmxpbmVidXktcGstNjAweDYwMC5qcGcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICc0JywgcHJvZHVjdE5hbWU6ICdTdWdhciBjb250cm9sJywgaW1hZ2U6ICdodHRwczovL3BpY3R1cmVzLmdyb2NlcmFwcHMuY29tL29yaWdpbmFsL2dyb2NlcmFwcC1sb3ctZGliZS1zdWdhci1jb250cm9sLWF0dGEtNWViM2IyMmQ3ZjYyNi5qcGVnJyB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGRlc2lyZSA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdChcIiZcIilbMF0uc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgICAgIHZhciBtYXJ2ZWxIZXJvZXMgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChoZXJvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoZXJvLmlkID09IGRlc2lyZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogbWFydmVsSGVyb2VzIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGl0bGU6IG1hcnZlbEhlcm9lc1swXS5wcm9kdWN0TmFtZSB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG1hcnZlbEhlcm9lc1swXS5pbWFnZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnN0YXRlLnByb2R1Y3RUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGhpcy5zdGF0ZS5wcm9kdWN0VGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlNodWQgYXR0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiSU1EYlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlOmFsdGVybmF0ZVwiIGNvbnRlbnQ9XCJlbl9HQlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGU6YWx0ZXJuYXRlXCIgY29udGVudD1cImNuX0NOXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17dGhpcy5zdGF0ZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI4MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTZW9cIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcmR1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3QubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0XCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gYWx0PVwicHJvZHVjdCBpbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QucHJvZHVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0ZGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=