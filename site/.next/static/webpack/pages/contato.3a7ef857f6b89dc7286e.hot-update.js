webpackHotUpdate_N_E("pages/contato",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Rodape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Rodape */ "./components/Rodape.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\55139\\Desktop\\semana_impersao_tres\\site\\pages\\contato.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    subject: '',
    content: ''
  }),
      contato = _useState[0],
      setContato = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setContato(_objectSpread(_objectSpread({}, contato), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var sendMsg = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setResponse({
                formSave: true
              });
              _context.prev = 2;
              _context.next = 5;
              return fetch('http://localhost:8080/contato', {
                method: 'POST',
                body: JSON.stringify(contato),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'sucess',
                  message: responseEnv.message
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: Mensagem não enviada com sucesso, tente mais tarde!'
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendMsg(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("head", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "Contato - Celke"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "description",
        content: "Contato com a empresa..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "author",
        content: "Eu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
        children: ".descr-top{\n      background-color: #000;\n      color: #fed136;\n      padding-top: 100px;\n      padding-bottom: 50px;\n      margin-bottom: 0rem !important;\n    }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "display-4",
          children: "Contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "form-contato",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
        children: ".form-contato{\n      padding-top: 80px;\n      padding-bottom: 80px;\n      background-color: #fff;\n      margin-bottom: 0rem !important;\n    }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
          onSubmit: sendMsg,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Nome Completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Digite seu Email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "subject",
              children: "Assunto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "subject",
              id: "subject",
              placeholder: "Assunto da Mensagem",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "content",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "textarea",
              name: "content",
              id: "content",
              placeholder: "Conte\xFAdo da Mensagem",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            type: "submit",
            outline: true,
            color: "warning",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 1
    }, this)]
  }, void 0, true);
}

_s(Home, "lKE9mJwYiVV1v6ovSyt1dnIWd+w=");

_c = Home;
;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhdG8uanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsImNvbnRlbnQiLCJjb250YXRvIiwic2V0Q29udGF0byIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNc2ciLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDO0FBQ25DQyxRQUFJLEVBQUUsRUFENkI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsV0FBTyxFQUFDLEVBSDJCO0FBSW5DQyxXQUFPLEVBQUM7QUFKMkIsR0FBRCxDQUZ0QjtBQUFBLE1BRVJDLE9BRlE7QUFBQSxNQUVDQyxVQUZEOztBQUFBLG1CQVVrQk4s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RUFBQyxvREFBRDtBQUFBLG9DQUNFLHFFQUFDLGdEQUFEO0FBQU8scUJBQUksU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU8sa0JBQUksRUFBQyxVQUFaO0FBQXVCLGtCQUFJLEVBQUMsU0FBNUI7QUFBc0MsZ0JBQUUsRUFBQyxTQUF6QztBQUFtRCx5QkFBVyxFQUFDLHlCQUEvRDtBQUFzRixzQkFBUSxFQUFFQTtBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkYsZUFxQkUscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSSxlQTRESixxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNURJO0FBQUEsa0JBREY7QUFnRUQ7O0dBdEhRYixJOztLQUFBQSxJO0FBc0hSO0FBRWNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhdG8uM2E3ZWY4NTdmNmI4OWRjNzI4NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuXHJcbmltcG9ydCBSb2RhcGUgZnJvbSAnLi4vY29tcG9uZW50cy9Sb2RhcGUnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBKdW1ib3Ryb24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0W2NvbnRhdG8sIHNldENvbnRhdG9dID11c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHN1YmplY3Q6JycsXHJcbiAgICBjb250ZW50OicnXHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgIHR5cGU6JycsXHJcbiAgICBtZXNzYWdlOicnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+IHNldENvbnRhdG8oey4uLmNvbnRhdG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgY29uc3Qgc2VuZE1zZyA9IGFzeW5jIGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0UmVzcG9uc2UoeyBmb3JtU2F2ZTogdHJ1ZX0pO1xyXG4gICAgdHJ5e1xyXG5cclxuICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NvbnRhdG8nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGF0byksXHJcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZUVudiA9ICBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZihyZXNwb25zZUVudi5lcnJvcil7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgdHlwZTogJ3N1Y2VzcycsXHJcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICBtZXNzYWdlOiAnRXJybzogTWVuc2FnZW0gbsOjbyBlbnZpYWRhIGNvbSBzdWNlc3NvLCB0ZW50ZSBtYWlzIHRhcmRlISdcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgPGhlYWQ+XHJcbiAgICA8dGl0bGU+Q29udGF0byAtIENlbGtlPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YXRvIGNvbSBhIGVtcHJlc2EuLi5cIi8+XHJcbiAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkV1XCIvPlxyXG4gIDwvaGVhZD5cclxuPE1lbnUgLz5cclxuPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJkZXNjci10b3BcIj5cclxuICA8c3R5bGU+XHJcbiAgICB7YC5kZXNjci10b3B7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIGNvbG9yOiAjZmVkMTM2O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9YH1cclxuICA8L3N0eWxlPlxyXG4gIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Db250YXRvPC9oMT5cclxuICAgXHJcblxyXG4gIDwvQ29udGFpbmVyPlxyXG48L0p1bWJvdHJvbj5cclxuXHJcbjxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZm9ybS1jb250YXRvXCI+XHJcbiAgPHN0eWxlPlxyXG4gICAge2AuZm9ybS1jb250YXRve1xyXG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgIH1gfVxyXG4gIDwvc3R5bGU+XHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTXNnfT5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU8L0xhYmVsPlxyXG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIENvbXBsZXRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgRW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgPExhYmVsIGZvcj1cInN1YmplY3RcIj5Bc3N1bnRvPC9MYWJlbD5cclxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiQXNzdW50byBkYSBNZW5zYWdlbVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8TGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlw7pkbzwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCIgcGxhY2Vob2xkZXI9XCJDb250ZcO6ZG8gZGEgTWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCI+RW52aWFyPC9CdXR0b24+XHJcblxyXG4gICAgPC9mb3JtPlxyXG4gIDwvQ29udGFpbmVyPlxyXG48L0p1bWJvdHJvbj5cclxuPFJvZGFwZS8+XHJcbjwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=