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
        content: window.location.href,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 22
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Shud atta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:site_name",
        content: "IMDb",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale",
        content: "en_US",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "en_GB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "cn_CN",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image",
        content: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image:height",
        content: "800",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }), __jsx("meta", {
        name: "description",
        content: "Seo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "porduct",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "product-detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }, this.state.product.map(function (post) {
        return __jsx("div", {
          className: "item-select",
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: post.image,
          alt: "product image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 37
          }
        }), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RkZXRhaWwiLCJwcm9kdWN0IiwicHJvZHVjdFRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJpZCIsInByb2R1Y3ROYW1lIiwiZGVzaXJlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwibWFydmVsSGVyb2VzIiwic3RhdGUiLCJmaWx0ZXIiLCJoZXJvIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJocmVmIiwibWFwIiwicG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsYUFBTyxFQUFFLEVBREw7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLFdBQUssRUFBRSxFQUhIO0FBSUpDLGlCQUFXLEVBQUUsRUFKVDtBQUtKQyxVQUFJLEVBQUcsQ0FDSDtBQUFFQyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLE1BQXhCO0FBQWdDSixhQUFLLEVBQUU7QUFBdkMsT0FERyxFQUVIO0FBQUVHLFVBQUUsRUFBRSxHQUFOO0FBQVdDLG1CQUFXLEVBQUUsYUFBeEI7QUFBdUNKLGFBQUssRUFBRTtBQUE5QyxPQUZHLEVBR0g7QUFBRUcsVUFBRSxFQUFFLEdBQU47QUFBV0MsbUJBQVcsRUFBRSxhQUF4QjtBQUF1Q0osYUFBSyxFQUFFO0FBQTlDLE9BSEcsRUFJSDtBQUFFRyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLGVBQXhCO0FBQXlDSixhQUFLLEVBQUU7QUFBaEQsT0FKRztBQUxILEs7Ozs7Ozs7d0NBWVk7QUFDaEIsVUFBSUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRC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QUFuQixDQUF1QixVQUFDQyxJQUFEO0FBQUEsZUFDcEI7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBRyxFQUFFQSxJQUFJLENBQUNmLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxhQUFHLEVBQUVlLElBQUksQ0FBQ2xCLEtBQWY7QUFBc0IsYUFBRyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSWtCLElBQUksQ0FBQ2QsV0FBVCxDQUZKLENBREosQ0FEb0I7QUFBQSxPQUF2QixDQURMLENBREosQ0FoQkosQ0FESjtBQStCSDs7OztFQXREdUJlLDRDQUFLLENBQUNDLFM7O0FBd0RuQnZCLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9kdWN0LmpzLjUwNDgxNzgyY2ZkZWU0YjZmZGU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNsYXNzIFByb2R1Y3RkZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcHJvZHVjdDogW10sXHJcbiAgICAgICAgcHJvZHVjdFRpdGxlOiAnJyxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGRhdGEgOiBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICcxJywgcHJvZHVjdE5hbWU6ICdBdHRhJywgaW1hZ2U6ICdodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L0xML0xML1NURFBSRC0xMTUzL2Fhc2hpcnZhYWQtd2hvbGUtd2hlYXQtYXR0YS01MDB4NTAwLmpwZycgfSxcclxuICAgICAgICAgICAgeyBpZDogJzInLCBwcm9kdWN0TmFtZTogJ0NoYWtraSBBdHRhJywgaW1hZ2U6ICdodHRwczovL3d3dy5vbmxpbmVidXkucGsvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvU3VucmlkZ2UtQ2hha2tpLUF0dGEtMTAtS0ctT25saW5lYnV5LXBrLmpwZycgfSxcclxuICAgICAgICAgICAgeyBpZDogJzMnLCBwcm9kdWN0TmFtZTogJ1B1bmphYiBhdHRhJywgaW1hZ2U6ICdodHRwczovL3d3dy5vbmxpbmVidXkucGsvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvUHVuamFiLUF0dGEtTm8uMS0yMEtnLU9ubGluZWJ1eS1way02MDB4NjAwLmpwZycgfSxcclxuICAgICAgICAgICAgeyBpZDogJzQnLCBwcm9kdWN0TmFtZTogJ1N1Z2FyIGNvbnRyb2wnLCBpbWFnZTogJ2h0dHBzOi8vcGljdHVyZXMuZ3JvY2VyYXBwcy5jb20vb3JpZ2luYWwvZ3JvY2VyYXBwLWxvdy1kaWJlLXN1Z2FyLWNvbnRyb2wtYXR0YS01ZWIzYjIyZDdmNjI2LmpwZWcnIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgZGVzaXJlID0gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKVswXS5zcGxpdChcIj1cIilbMV07XHJcbiAgICAgICAgdmFyIG1hcnZlbEhlcm9lcyA9IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGhlcm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhlcm8uaWQgPT0gZGVzaXJlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBtYXJ2ZWxIZXJvZXMgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RUaXRsZTogbWFydmVsSGVyb2VzWzBdLnByb2R1Y3ROYW1lIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbWFydmVsSGVyb2VzWzBdLmltYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e3RoaXMuc3RhdGUucHJvZHVjdFRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aGlzLnN0YXRlLnByb2R1Y3RUaXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt3aW5kb3cubG9jYXRpb24uaHJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuIGNvbnRlbnQ9XCJTaHVkIGF0dGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIklNRGJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZTphbHRlcm5hdGVcIiBjb250ZW50PVwiZW5fR0JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlOmFsdGVybmF0ZVwiIGNvbnRlbnQ9XCJjbl9DTlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiODAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2VvXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3JkdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0Lm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdFwiIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2V9IGFsdD1cInByb2R1Y3QgaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnByb2R1Y3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdGRldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9