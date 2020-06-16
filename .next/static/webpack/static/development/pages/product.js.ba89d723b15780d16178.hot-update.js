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
          lineNumber: 35,
          columnNumber: 22
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Shud atta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:site_name",
        content: "IMDb",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale",
        content: "en_US",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "en_GB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:locale:alternate",
        content: "cn_CN",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image",
        content: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }), __jsx("meta", {
        property: "og:image:height",
        content: "800",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }), __jsx("meta", {
        name: "description",
        content: "Seo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "porduct",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "product-detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, this.state.product.map(function (post) {
        return __jsx("div", {
          className: "item-select",
          key: post.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: post.image,
          alt: "product image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 37
          }
        }), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RkZXRhaWwiLCJwcm9kdWN0IiwicHJvZHVjdFRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJpZCIsInByb2R1Y3ROYW1lIiwiZGVzaXJlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwibWFydmVsSGVyb2VzIiwic3RhdGUiLCJmaWx0ZXIiLCJoZXJvIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJocmVmIiwibWFwIiwicG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsYUFBTyxFQUFFLEVBREw7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLFdBQUssRUFBRSxFQUhIO0FBSUpDLGlCQUFXLEVBQUUsRUFKVDtBQUtKQyxVQUFJLEVBQUcsQ0FDSDtBQUFFQyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLE1BQXhCO0FBQWdDSixhQUFLLEVBQUU7QUFBdkMsT0FERyxFQUVIO0FBQUVHLFVBQUUsRUFBRSxHQUFOO0FBQVdDLG1CQUFXLEVBQUUsYUFBeEI7QUFBdUNKLGFBQUssRUFBRTtBQUE5QyxPQUZHLEVBR0g7QUFBRUcsVUFBRSxFQUFFLEdBQU47QUFBV0MsbUJBQVcsRUFBRSxhQUF4QjtBQUF1Q0osYUFBSyxFQUFFO0FBQTlDLE9BSEcsRUFJSDtBQUFFRyxVQUFFLEVBQUUsR0FBTjtBQUFXQyxtQkFBVyxFQUFFLGVBQXhCO0FBQXlDSixhQUFLLEVBQUU7QUFBaEQsT0FKRztBQUxILEs7Ozs7Ozs7d0NBWVk7QUFDaEIsVUFBSUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQyxDQUFwQyxFQUF1Q0EsS0FBdkMsQ0FBNkMsR0FBN0MsRUFBa0QsQ0FBbEQsQ0FBYjtBQUNBLFVBQUlDLFlBQVksR0FBRyxLQUFLQyxLQUFMLENBQVdULElBQVgsQ0FBZ0JVLE1BQWhCLENBQXVCLFVBQVVDLElBQVYsRUFBZ0I7QUFDdEQsZUFBT0EsSUFBSSxDQUFDVixFQUFMLElBQVdFLE1BQWxCO0FBQ0gsT0FGa0IsQ0FBbkI7QUFHQSxXQUFLUyxRQUFMLENBQWM7QUFBRWhCLGVBQU8sRUFBRVk7QUFBWCxPQUFkO0FBQ0EsV0FBS0ksUUFBTCxDQUFjO0FBQUVmLG9CQUFZLEVBQUVXLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JOO0FBQWhDLE9BQWQ7QUFDQSxXQUFLVSxRQUFMLENBQWM7QUFBRWQsYUFBSyxFQUFFVSxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCVjtBQUF6QixPQUFkO0FBQ0g7Ozs2QkFDUTtBQUFBOztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUSxLQUFLVyxLQUFMLENBQVdaLFlBQW5CLENBREosRUFFSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBR0k7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFLEtBQUtZLEtBQUwsQ0FBV1osWUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLEVBS0s7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxFQUFFZ0IsTUFBTSxDQUFDVCxRQUFQLENBQWdCVSxJQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEwsRUFNSTtBQUFNLGdCQUFRLEVBQUMsZ0JBQWY7QUFDSSxlQUFPLEVBQUMsV0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosRUFRSTtBQUFNLGdCQUFRLEVBQUMsY0FBZjtBQUE4QixlQUFPLEVBQUMsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLEVBU0k7QUFBTSxnQkFBUSxFQUFDLFdBQWY7QUFBMkIsZUFBTyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFUSixFQVVJO0FBQU0sZ0JBQVEsRUFBQyxxQkFBZjtBQUFxQyxlQUFPLEVBQUMsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZKLEVBV0k7QUFBTSxnQkFBUSxFQUFDLHFCQUFmO0FBQXFDLGVBQU8sRUFBQyxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEosRUFZSTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUUsS0FBS0wsS0FBTCxDQUFXWCxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWkosRUFhSTtBQUFNLGdCQUFRLEVBQUMsaUJBQWY7QUFBaUMsZUFBTyxFQUFDLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFiSixFQWNJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFkSixDQURKLEVBaUJJO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtXLEtBQUwsQ0FBV2IsT0FBWCxDQUFtQm1CLEdBQW5CLENBQXVCLFVBQUNDLElBQUQ7QUFBQSxlQUNwQjtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFHLEVBQUVBLElBQUksQ0FBQ2YsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFLLGFBQUcsRUFBRWUsSUFBSSxDQUFDbEIsS0FBZjtBQUFzQixhQUFHLEVBQUMsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJa0IsSUFBSSxDQUFDZCxXQUFULENBRkosQ0FESixDQURvQjtBQUFBLE9BQXZCLENBREwsQ0FESixDQWpCSixDQURKO0FBZ0NIOzs7O0VBdkR1QmUsNENBQUssQ0FBQ0MsUzs7QUF5RG5CdkIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3QuanMuYmE4OWQ3MjNiMTU3ODBkMTYxNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY2xhc3MgUHJvZHVjdGRldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBwcm9kdWN0OiBbXSxcclxuICAgICAgICBwcm9kdWN0VGl0bGU6ICcnLFxyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgZGF0YSA6IFtcclxuICAgICAgICAgICAgeyBpZDogJzEnLCBwcm9kdWN0TmFtZTogJ0F0dGEnLCBpbWFnZTogJ2h0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvTEwvTEwvU1REUFJELTExNTMvYWFzaGlydmFhZC13aG9sZS13aGVhdC1hdHRhLTUwMHg1MDAuanBnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnMicsIHByb2R1Y3ROYW1lOiAnQ2hha2tpIEF0dGEnLCBpbWFnZTogJ2h0dHBzOi8vd3d3Lm9ubGluZWJ1eS5way93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9TdW5yaWRnZS1DaGFra2ktQXR0YS0xMC1LRy1PbmxpbmVidXktcGsuanBnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnMycsIHByb2R1Y3ROYW1lOiAnUHVuamFiIGF0dGEnLCBpbWFnZTogJ2h0dHBzOi8vd3d3Lm9ubGluZWJ1eS5way93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9QdW5qYWItQXR0YS1Oby4xLTIwS2ctT25saW5lYnV5LXBrLTYwMHg2MDAuanBnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnNCcsIHByb2R1Y3ROYW1lOiAnU3VnYXIgY29udHJvbCcsIGltYWdlOiAnaHR0cHM6Ly9waWN0dXJlcy5ncm9jZXJhcHBzLmNvbS9vcmlnaW5hbC9ncm9jZXJhcHAtbG93LWRpYmUtc3VnYXItY29udHJvbC1hdHRhLTVlYjNiMjJkN2Y2MjYuanBlZycgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBkZXNpcmUgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoXCImXCIpWzBdLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgICB2YXIgbWFydmVsSGVyb2VzID0gdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoaGVybykge1xyXG4gICAgICAgICAgICByZXR1cm4gaGVyby5pZCA9PSBkZXNpcmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IG1hcnZlbEhlcm9lcyB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdFRpdGxlOiBtYXJ2ZWxIZXJvZXNbMF0ucHJvZHVjdE5hbWUgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBtYXJ2ZWxIZXJvZXNbMF0uaW1hZ2UgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGhpcy5zdGF0ZS5wcm9kdWN0VGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUucHJvZHVjdFRpdGxlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt3aW5kb3cubG9jYXRpb24uaHJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlNodWQgYXR0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiSU1EYlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlOmFsdGVybmF0ZVwiIGNvbnRlbnQ9XCJlbl9HQlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGU6YWx0ZXJuYXRlXCIgY29udGVudD1cImNuX0NOXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17dGhpcy5zdGF0ZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI4MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTZW9cIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcmR1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3QubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0XCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gYWx0PVwicHJvZHVjdCBpbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QucHJvZHVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0ZGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=