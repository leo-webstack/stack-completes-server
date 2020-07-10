(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/ts-app/src/App.css":
/*!***********************************!*\
  !*** ./assets/ts-app/src/App.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/ts-app/src/App.js":
/*!**********************************!*\
  !*** ./assets/ts-app/src/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./assets/ts-app/src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/dashboard */ "./assets/ts-app/src/container/dashboard.js");




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "HG - Titan Shop"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./assets/ts-app/src/common/action-validator.js":
/*!******************************************************!*\
  !*** ./assets/ts-app/src/common/action-validator.js ***!
  \******************************************************/
/*! exports provided: validateAction, requirePayload, throwInvalidState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAction", function() { return validateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requirePayload", function() { return requirePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidState", function() { return throwInvalidState; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare */ "./assets/ts-app/src/common/compare.js");




var validateAction = function validateAction(action, validActions) {
  if (!Object(_compare__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(action, "type")) {
    console.error(action);
    throw new Error("The type property must be defined when dispatching an action.");
  }

  if (!validActions.values().contains(action.type)) {
    console.table(validActions);
    throw new Error("\"".concat(action.type, "\" has not been defined. The above table contains available actions."));
  }
};
var requirePayload = function requirePayload(action) {
  if (!Object(_compare__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(action, "payload")) {
    console.error(action);
    throw new Error("The payload property is REQUIRED when dispatching action \"".concat(action.type, ".\""));
  }
};
var throwInvalidState = function throwInvalidState(state, action, reducer) {
  console.error(state);
  console.error(action);
  throw new Error("INVALID STATE!!! SEE THE ABOVE STATE & DISPATCHED ACTION IN REDUCER: ".concat(reducer));
};

/***/ }),

/***/ "./assets/ts-app/src/common/compare.js":
/*!*********************************************!*\
  !*** ./assets/ts-app/src/common/compare.js ***!
  \*********************************************/
/*! exports provided: isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
var isDefined = function isDefined(object, value) {
  return typeof object[value] !== 'undefined';
};

/***/ }),

/***/ "./assets/ts-app/src/common/formatter.js":
/*!***********************************************!*\
  !*** ./assets/ts-app/src/common/formatter.js ***!
  \***********************************************/
/*! exports provided: FORMAT_PATTERN, formatAllValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT_PATTERN", function() { return FORMAT_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAllValues", function() { return formatAllValues; });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./assets/ts-app/node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

var FORMAT_PATTERN = {
  READABLE_FLOAT: "0,0.00",
  READABLE_INT: "0,0"
};
/**
 * Return a new object with the same keys and all values formatted as readable string.
 * @param {*} valueObject
 */

var formatAllValues = function formatAllValues(valueObject, formatPattern, keys) {
  var formattedValues = {};

  for (var prop in keys) {
    formattedValues[prop] = numeral__WEBPACK_IMPORTED_MODULE_0___default()(valueObject[prop]).format(formatPattern);
  }

  return formattedValues;
};

/***/ }),

/***/ "./assets/ts-app/src/common/transition-intro.js":
/*!******************************************************!*\
  !*** ./assets/ts-app/src/common/transition-intro.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "./assets/ts-app/node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_10__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var duration = 3000;
var defaultStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0
};
var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

var TransitionIntro = function TransitionIntro(_ref) {
  var children = _ref.children,
      inProp = _ref["in"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
    "in": inProp,
    timeout: duration
  }, function (state) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, defaultStyle), transitionStyles[state])
    }, children);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TransitionIntro);

/***/ }),

/***/ "./assets/ts-app/src/component/blueprint/blueprint-details.js":
/*!********************************************************************!*\
  !*** ./assets/ts-app/src/component/blueprint/blueprint-details.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./assets/ts-app/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _helper_numeral_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/numeral-helper */ "./assets/ts-app/src/helper/numeral-helper.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./assets/ts-app/node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6__);








var BlueprintDetails = function BlueprintDetails(_ref) {
  var blueprint = _ref.blueprint,
      onClose = _ref.onClose;
  var plainName = blueprint.name.replace(/ /g, "");
  var imgSrc = "https://playshoptitans.com/images/assets/items/".concat(plainName, ".png");
  var baseValue = "Base Value: ".concat(Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(blueprint.value));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      "aria-label": "blueprint"
    }, "B"),
    title: blueprint.name,
    subheader: blueprint.type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
    component: "img",
    height: "140",
    alt: blueprint.name,
    image: imgSrc,
    title: blueprint.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    color: "textSecondary"
  }, baseValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body2",
    component: "p"
  }, "Some more information about this item."));
};

/* harmony default export */ __webpack_exports__["default"] = (BlueprintDetails);

/***/ }),

/***/ "./assets/ts-app/src/component/blueprint/blueprint-form-edit.js":
/*!**********************************************************************!*\
  !*** ./assets/ts-app/src/component/blueprint/blueprint-form-edit.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./assets/ts-app/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./assets/ts-app/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! formik */ "./assets/ts-app/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../reducer/blueprint-edit-reducer */ "./assets/ts-app/src/reducer/blueprint-edit-reducer.js");
/* harmony import */ var _blueprint_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blueprint-table */ "./assets/ts-app/src/component/blueprint/blueprint-table.js");
/* harmony import */ var _blueprint_details__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blueprint-details */ "./assets/ts-app/src/component/blueprint/blueprint-details.js");


























function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var formValidation = function formValidation(values) {
  var errors = {};
  return errors;
};

var BlueprintFormEdit = function BlueprintFormEdit() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_25___default.a.useContext(_blueprint_table__WEBPACK_IMPORTED_MODULE_29__["BlueprintFormContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_25___default.a.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHovering = _React$useState2[0],
      setHovering = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_25___default.a.useEffect(function () {
    var hoveringStates = state.blueprints.map(function (blueprint) {
      return _defineProperty({}, blueprint.id, false);
    });
    setHovering(hoveringStates);
  }, [state.blueprints]);

  var onFormSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values, formikAction) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formikAction.setSubmitting(true);
              dispatch({
                type: _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_28__["ACTIONS"].SUBMIT,
                payload: {
                  blueprints: values.blueprints,
                  dialog: false
                }
              });
              formikAction.setSubmitting(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onFormSubmit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var renderBlueprintDetails = function renderBlueprintDetails(blueprint) {
    if (isHovering[blueprint.id] === true) {
      var key = "blueprint-details-".concat(blueprint.id);

      var hideDetails = function hideDetails() {
        setHovering(_objectSpread(_objectSpread({}, isHovering), {}, _defineProperty({}, blueprint.id, false)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Card"], {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_blueprint_details__WEBPACK_IMPORTED_MODULE_30__["default"], {
        blueprint: blueprint,
        onClose: hideDetails
      })));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_26__["Formik"], {
    initialValues: state,
    validate: function validate(values) {
      return formValidation(values);
    },
    onSubmit: function onSubmit(values, actions) {
      return onFormSubmit(values, actions);
    }
  }, function (_ref3) {
    var values = _ref3.values,
        handleSubmit = _ref3.handleSubmit,
        validateField = _ref3.validateField,
        touched = _ref3.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_26__["Form"], {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
      item: true,
      md: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_26__["FieldArray"], {
      name: "blueprints",
      render: function render(arrayHelper) {
        return state.blueprints.map(function (blueprint, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
            item: true,
            md: 3,
            xs: 2,
            key: blueprint.id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_26__["FastField"], {
            as: _material_ui_core__WEBPACK_IMPORTED_MODULE_27__["TextField"],
            variant: "outlined",
            type: "text",
            name: "blueprints[".concat(i, "].marketValue"),
            label: "Market Value",
            helperText: blueprint.name,
            onFocus: function onFocus() {
              setHovering.apply(void 0, _toConsumableArray(isHovering).concat([_defineProperty({}, blueprint.id, true)]));
            }
          }));
        });
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
      item: true,
      md: 3
    }, state.blueprints.map(function (blueprint, i) {
      return renderBlueprintDetails(blueprint);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Button"], {
      type: "submit"
    }, "Submit"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlueprintFormEdit);

/***/ }),

/***/ "./assets/ts-app/src/component/blueprint/blueprint-table.js":
/*!******************************************************************!*\
  !*** ./assets/ts-app/src/component/blueprint/blueprint-table.js ***!
  \******************************************************************/
/*! exports provided: BlueprintFormContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueprintFormContext", function() { return BlueprintFormContext; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-data-table-component */ "./assets/ts-app/node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _model_blueprint_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../model/blueprint-model */ "./assets/ts-app/src/model/blueprint-model.js");
/* harmony import */ var _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../reducer/blueprint-edit-reducer */ "./assets/ts-app/src/reducer/blueprint-edit-reducer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _form_blueprint_form_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../form/blueprint-form-modal */ "./assets/ts-app/src/form/blueprint-form-modal.js");
/* harmony import */ var _repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../repository/BlueprintRepository */ "./assets/ts-app/src/repository/BlueprintRepository.js");
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var BlueprintFormContext = react__WEBPACK_IMPORTED_MODULE_15___default.a.createContext(null);

var BlueprintTable = function BlueprintTable(_ref) {
  var tiers = _ref.tiers,
      itemTypes = _ref.itemTypes;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_15___default.a.useReducer(_reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_18__["STATES"], _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_18__["INITIAL_STATE"]),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tableData = _React$useState2[0],
      setTableData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      totalRows = _React$useState6[0],
      setTotalRows = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(10),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      itemsPerPage = _React$useState8[0],
      setItemsPerPage = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isLoading = _React$useState10[0],
      setLoading = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      selectedRows = _React$useState12[0],
      setSelectedRows = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      toggleCleared = _React$useState14[0],
      setToggleCleared = _React$useState14[1];

  react__WEBPACK_IMPORTED_MODULE_15___default.a.useEffect(function () {
    loadBlueprint();
  }, [page, itemsPerPage, tiers, itemTypes]);

  var loadBlueprint = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, tableData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return Object(_repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_21__["fetchBlueprints"])(tiers, page, itemsPerPage, itemTypes);

            case 3:
              response = _context.sent;
              tableData = {
                data: response.data["hydra:member"],
                totalItems: response.data["hydra:totalItems"]
              };
              setTableData(tableData.data);
              setTotalRows(tableData.totalItems);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadBlueprint() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handlePageChange = function handlePageChange(newPage) {
    setPage(newPage);
  };

  var handleRowsPerPageChange = function handleRowsPerPageChange(newItemsPerPage, page) {
    setPage(page);
    setItemsPerPage(newItemsPerPage);
  };

  var handleRowsSelected = react__WEBPACK_IMPORTED_MODULE_15___default.a.useCallback(function (state) {
    setSelectedRows(state.selectedRows);
  }, []);
  var contextActions = react__WEBPACK_IMPORTED_MODULE_15___default.a.useMemo(function () {
    if (selectedRows) {
      dispatch({
        type: _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].UPDATE_BLUEPRINTS,
        payload: selectedRows
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_form_blueprint_form_modal__WEBPACK_IMPORTED_MODULE_20__["BlueprintFormModal"], null);
  }, [tableData, selectedRows, toggleCleared]);

  var BlueprintDetails = function BlueprintDetails(_ref3) {
    var data = _ref3.data;
    var speedUpEnergy = data.speedUpEnergy,
        suggestEnergy = data.suggestEnergy,
        surchargeEnergy = data.surchargeEnergy;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li", null, "Speed Up: ", speedUpEnergy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li", null, "Suggest Cost: ", suggestEnergy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li", null, "Surcharge: ", surchargeEnergy));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(BlueprintFormContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_16___default.a, {
    columns: _model_blueprint_model__WEBPACK_IMPORTED_MODULE_17__["TABLE_HEADER"],
    data: tableData,
    defaultSortField: "value",
    expandableRows: true,
    expandableRowsComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(BlueprintDetails, null),
    highlightOnHover: true,
    pagination: true,
    paginationServer: true,
    paginationTotalRows: totalRows,
    persistTableHead: true,
    progressPending: isLoading,
    progressComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      style: {
        padding: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["CircularProgress"], {
      size: 75
    })),
    selectableRows: true,
    onChangePage: handlePageChange,
    onChangeRowsPerPage: handleRowsPerPageChange,
    onSelectedRowsChange: handleRowsSelected,
    contextActions: contextActions,
    clearSelectedRows: toggleCleared
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlueprintTable);

/***/ }),

/***/ "./assets/ts-app/src/component/blueprint/checkbox-dialog.js":
/*!******************************************************************!*\
  !*** ./assets/ts-app/src/component/blueprint/checkbox-dialog.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./assets/ts-app/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./assets/ts-app/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./assets/ts-app/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./assets/ts-app/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducer/blueprint-view-reducer */ "./assets/ts-app/src/reducer/blueprint-view-reducer.js");
/* harmony import */ var _container_view_blueprint_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../container/view/blueprint-view */ "./assets/ts-app/src/container/view/blueprint-view.js");










function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CheckBoxDialog = function CheckBoxDialog(_ref) {
  var name = _ref.name,
      valueKey = _ref.valueKey,
      dialogName = _ref.dialogName,
      label = _ref.label;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.useContext(_container_view_blueprint_view__WEBPACK_IMPORTED_MODULE_13__["BlueprintViewContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var onFormSubmit = function onFormSubmit() {
    dispatch({
      type: _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_12__["ACTIONS"].DIALOG,
      payload: _defineProperty({}, dialogName, false)
    });
  };

  var handleDialogOpen = function handleDialogOpen() {
    dispatch({
      type: _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_12__["ACTIONS"].DIALOG,
      payload: _defineProperty({}, dialogName, true)
    });
  };

  var renderTriggerButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: handleDialogOpen
  }, label);

  var renderCheckbox = function renderCheckbox(arrayHelpers, option, index) {
    var label = option.name;
    var key = "".concat(option.key, "-").concat(option.name);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
      key: key,
      label: label,
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Switch"], {
        color: "primary",
        value: option.name,
        checked: option.value,
        onChange: function onChange(e) {
          option.value = e.target.checked;
          arrayHelpers.replace(index, option);
        }
      })
    });
  };

  var renderForm = function renderForm(handleSubmit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["FieldArray"], {
      name: name,
      render: function render(arrayHelpers) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, state[valueKey].map(function (option, index) {
          return renderCheckbox(arrayHelpers, option, index);
        }));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      type: "submit",
      variant: "contained",
      color: "primary"
    }, "Apply")));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, renderTriggerButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Dialog"], {
    open: state.dialog[dialogName],
    onClose: function onClose() {
      return dispatch({
        type: _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_12__["ACTIONS"].DIALOG,
        payload: _defineProperty({}, dialogName, false)
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["DialogTitle"], {
    id: dialogName + "-dialog"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: state[valueKey],
    onSubmit: function onSubmit(values, actions) {
      return onFormSubmit();
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return renderForm(handleSubmit);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckBoxDialog);

/***/ }),

/***/ "./assets/ts-app/src/component/copyright.js":
/*!**************************************************!*\
  !*** ./assets/ts-app/src/component/copyright.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./assets/ts-app/node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "./assets/ts-app/node_modules/@material-ui/core/esm/Link/index.js");





var Copyright = function Copyright() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Halp Gaming | Halp Gaming TS"), " ", new Date().getFullYear(), ".");
};

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./assets/ts-app/src/component/energy-calculator.js":
/*!**********************************************************!*\
  !*** ./assets/ts-app/src/component/energy-calculator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./assets/ts-app/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! formik */ "./assets/ts-app/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _model_energy_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../model/energy-model */ "./assets/ts-app/src/model/energy-model.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! recharts */ "./assets/ts-app/node_modules/recharts/es6/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _helper_color_gradient_generator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../helper/color-gradient-generator */ "./assets/ts-app/src/helper/color-gradient-generator.js");
/* harmony import */ var _schema_energy_form_schema__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../schema/energy-form-schema */ "./assets/ts-app/src/schema/energy-form-schema.js");
/* harmony import */ var _common_formatter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../common/formatter */ "./assets/ts-app/src/common/formatter.js");
/* harmony import */ var _common_transition_intro__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../common/transition-intro */ "./assets/ts-app/src/common/transition-intro.js");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./feedback */ "./assets/ts-app/src/component/feedback.js");
/* harmony import */ var _helper_numeral_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../helper/numeral-helper */ "./assets/ts-app/src/helper/numeral-helper.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var colorGenerator = Object(_helper_color_gradient_generator__WEBPACK_IMPORTED_MODULE_19__["default"])("#1C3041", "#18F2B2", 100);

var EnergyCalculator = function EnergyCalculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentEnergy = _useState2[0],
      setCurrentEnergy = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(200),
      _useState4 = _slicedToArray(_useState3, 2),
      maxEnergy = _useState4[0],
      setMaxEnergy = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      smallTalkEnergy = _useState6[0],
      setSmallTalkEnergy = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      smallTalkData = _useState8[0],
      setSmallTalkData = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    setSmallTalkEnergy(Object(_model_energy_model__WEBPACK_IMPORTED_MODULE_16__["calculateSmallTalkEnergy"])(currentEnergy, maxEnergy));
    setSmallTalkData(Object(_model_energy_model__WEBPACK_IMPORTED_MODULE_16__["calculateSmallTalkEffciencyData"])(maxEnergy, maxEnergy / 20));
  }, [currentEnergy, maxEnergy]);

  var getFillColor = function getFillColor(uv) {
    var i = Math.floor(uv);
    return "#" + colorGenerator.colorAt(i);
  };

  var renderForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Formik"], {
    initialValues: {
      currentEnergy: 0,
      maxEnergy: 200
    },
    validationSchema: _schema_energy_form_schema__WEBPACK_IMPORTED_MODULE_20__["EnergyFormSchema"]
  }, function (_ref) {
    var values = _ref.values,
        errors = _ref.errors,
        validateField = _ref.validateField;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
      m: 12,
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_18__["TextField"],
      inputProps: {
        maxLength: 6
      },
      variant: "outlined",
      type: "text",
      name: "currentEnergy",
      label: "Current Energy",
      required: true,
      error: errors.currentEnergy ? true : false,
      helperText: errors.currentEnergy,
      onFocus: function onFocus(e) {
        e.target.select();
      },
      onBlur: function onBlur(e) {
        validateField("currentEnergy").then(function (e) {
          console.log(errors);
          setCurrentEnergy(values.currentEnergy);
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
      m: 12,
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_18__["TextField"],
      inputProps: {
        maxLength: 6
      },
      variant: "outlined",
      type: "text",
      name: "maxEnergy",
      label: "Maximum Energy",
      required: true,
      error: errors.maxEnergy ? true : false,
      helperText: errors.maxEnergy,
      onFocus: function onFocus(e) {
        e.target.select();
      },
      onBlur: function onBlur(e) {
        validateField("maxEnergy").then(function (e) {
          setMaxEnergy(values.maxEnergy);
        });
      }
    })));
  });
  var renderResult = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_common_transition_intro__WEBPACK_IMPORTED_MODULE_22__["default"], {
    "in": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Typography"], {
    variant: "h3"
  }, smallTalkEnergy.isEfficient ? "You should small talk." : "Do not small talk.", !smallTalkEnergy.isEfficient && smallTalkEnergy.feelingLucky ? "Give it a shot if you're feeling lucky." : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Box"], {
    textAlign: "left",
    m: 2
  }, "The efficiency ratio is", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("b", null, Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_24__["toPercentage"])(smallTalkEnergy.efficiency)), ". This mean that in the long run you will probably", " ", smallTalkEnergy.isEfficient ? "gain more than you lose!" : "lose more than gain.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "If successful, you will gain", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("b", null, Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_24__["toNumber"])(smallTalkEnergy.gain), " energy"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "However the NPC can backfire for", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("b", null, Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_24__["toNumber"])(smallTalkEnergy.backfire), " energy"), ".")));
  var renderResultChart = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["BarChart"], {
    height: 400,
    width: 800,
    data: smallTalkData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["CartesianGrid"], {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["XAxis"], {
    dataKey: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["YAxis"], {
    domain: [0, 100]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["Bar"], {
    dataKey: "gain",
    fill: "#82ca9d"
  }, smallTalkData.map(function (data, i) {
    var color = getFillColor(data.gain);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_17__["Cell"], {
      key: i,
      fill: color
    });
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "Should I small talk to this NPC?"), renderForm, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    xs: 3
  }, renderResult), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    xs: true
  }, renderResultChart)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    container: true
  }, _feedback__WEBPACK_IMPORTED_MODULE_23__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (EnergyCalculator);

/***/ }),

/***/ "./assets/ts-app/src/component/feedback.js":
/*!*************************************************!*\
  !*** ./assets/ts-app/src/component/feedback.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./assets/ts-app/node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./assets/ts-app/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./assets/ts-app/node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/SentimentDissatisfied */ "./assets/ts-app/node_modules/@material-ui/icons/SentimentDissatisfied.js");
/* harmony import */ var _material_ui_icons_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_SentimentSatisfied__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/SentimentSatisfied */ "./assets/ts-app/node_modules/@material-ui/icons/SentimentSatisfied.js");
/* harmony import */ var _material_ui_icons_SentimentSatisfied__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SentimentSatisfied__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/SentimentVerySatisfied */ "./assets/ts-app/node_modules/@material-ui/icons/SentimentVerySatisfied.js");
/* harmony import */ var _material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_21__);
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var customIcons = {
  1: {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_19___default.a, null),
    label: "Dissatisfied"
  },
  2: {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_SentimentSatisfied__WEBPACK_IMPORTED_MODULE_20___default.a, null),
    label: "Neutral"
  },
  3: {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_21___default.a, null),
    label: "Very Satisfied"
  }
};

function IconContainer(props) {
  var value = props.value,
      other = _objectWithoutProperties(props, ["value"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", other, customIcons[value].icon);
}

IconContainer.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number.isRequired
};

var Feedback = function Feedback(_ref) {
  var label = _ref.label;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(2),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      submitted = _useState6[0],
      isSubmitted = _useState6[1];

  var renderRating = function renderRating() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, "FEEDBACk", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Typography"], {
      component: "legend"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17__["default"], {
      name: "customized-icons",
      defaultValue: 2,
      getLabelText: function getLabelText(value) {
        return customIcons[value].label;
      },
      max: 3,
      IconContainerComponent: IconContainer,
      onChange: function onChange(event, newValue) {
        console.log(newValue);
        setValue(newValue);
        isSubmitted(true);
      },
      onChangeActive: function onChangeActive(event, newHover) {
        setHover(newHover);
      }
    }), value !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Box"], {
      ml: 2
    }, customIcons[hover !== -1 ? hover : value].label)); // return <p>Thank you for your feedback!</p>;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, renderRating, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Box"], {
    component: "fieldset",
    mb: 3,
    borderColor: "transparent"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ }),

/***/ "./assets/ts-app/src/component/not-found.js":
/*!**************************************************!*\
  !*** ./assets/ts-app/src/component/not-found.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");



var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "p"
  }, "Oops, the requested page does not exist or is broken."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./assets/ts-app/src/container/dashboard.js":
/*!**************************************************!*\
  !*** ./assets/ts-app/src/container/dashboard.js ***!
  \**************************************************/
/*! exports provided: RecentlyViewedContext, DashboardThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyViewedContext", function() { return RecentlyViewedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardThemeContext", function() { return DashboardThemeContext; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clsx */ "./assets/ts-app/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _reducer_stack_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../reducer/stack-reducer */ "./assets/ts-app/src/reducer/stack-reducer.js");
/* harmony import */ var _component_copyright__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../component/copyright */ "./assets/ts-app/src/component/copyright.js");
/* harmony import */ var _route_HomeRoute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../route/HomeRoute */ "./assets/ts-app/src/route/HomeRoute.js");
/* harmony import */ var _route_HomeLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../route/HomeLink */ "./assets/ts-app/src/route/HomeLink.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./assets/ts-app/node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./assets/ts-app/node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./assets/ts-app/node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _theme_example_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../theme/example-theme */ "./assets/ts-app/src/theme/example-theme.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var RecentlyViewedContext = react__WEBPACK_IMPORTED_MODULE_13___default.a.createContext(null);
var DashboardThemeContext = react__WEBPACK_IMPORTED_MODULE_13___default.a.createContext(null);

var Dashboard = function Dashboard(_ref) {
  var title = _ref.title;
  var classes = Object(_theme_example_theme__WEBPACK_IMPORTED_MODULE_23__["useStyles"])();

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_13___default.a.useReducer(_reducer_stack_reducer__WEBPACK_IMPORTED_MODULE_16__["REDUCER"], _reducer_stack_reducer__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"]),
      state = _React$useReducer.state,
      dispatch = _React$useReducer.dispatch; // const [classes, setClasses] = React.useState(useStyles());


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    return setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    return setOpen(false);
  };

  var drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Drawer"], {
    variant: "permanent",
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])(classes.drawerPaper, !open && classes.drawerPaperClose)
    },
    open: open,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: classes.toolbarIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["IconButton"], {
    onClick: handleDrawerClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_20___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_route_HomeLink__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["List"], null, "Some more list items"));
  var appbar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["AppBar"], {
    position: "absolute",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])(classes.appBar, open && classes.appBarShift)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["IconButton"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])(classes.menuButton, open && classes.menuButtonHidden)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["IconButton"], {
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Badge"], {
    badgeContent: 4,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22___default.a, null)))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(DashboardThemeContext.Provider, {
    value: {
      classes: classes
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(RecentlyViewedContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["CssBaseline"], null), appbar, drawer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: classes.appBarSpacer
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Container"], {
    maxWidth: "lg",
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Paper"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_route_HomeRoute__WEBPACK_IMPORTED_MODULE_18__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Box"], {
    pt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_component_copyright__WEBPACK_IMPORTED_MODULE_17__["default"], null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./assets/ts-app/src/container/expanded-card.js":
/*!******************************************************!*\
  !*** ./assets/ts-app/src/container/expanded-card.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./assets/ts-app/node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! clsx */ "./assets/ts-app/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Card */ "./assets/ts-app/node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./assets/ts-app/node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./assets/ts-app/node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./assets/ts-app/node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./assets/ts-app/node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./assets/ts-app/node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./assets/ts-app/node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./assets/ts-app/node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Typography */ "./assets/ts-app/node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/colors */ "./assets/ts-app/node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./assets/ts-app/node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/Share */ "./assets/ts-app/node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./assets/ts-app/node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./assets/ts-app/node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30__);















function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["makeStyles"])(function (theme) {
  return {
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_26__["red"][500]
    }
  };
});

var ExpandedCard = function ExpandedCard(_ref) {
  var children = _ref.children,
      body = _ref.body,
      action = _ref.action,
      title = _ref.title,
      subtitle = _ref.subtitle;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_14___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__["default"], {
      "aria-label": "settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30___default.a, null)),
    title: title,
    subheader: subtitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_21__["default"], {
    disableSpacing: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__["default"], {
    "aria-label": "add to favorites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_27___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__["default"], {
    "aria-label": "share"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_16__["default"])(classes.expand, _defineProperty({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_29___default.a, null, "Here's why..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_22__["default"], {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ExpandedCard);

/***/ }),

/***/ "./assets/ts-app/src/container/favorite-view.js":
/*!******************************************************!*\
  !*** ./assets/ts-app/src/container/favorite-view.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-data-table-component */ "./assets/ts-app/node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _model_blueprint_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../model/blueprint-model */ "./assets/ts-app/src/model/blueprint-model.js");
/* harmony import */ var _repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../repository/BlueprintRepository */ "./assets/ts-app/src/repository/BlueprintRepository.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _repository_FavoriteRepository__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../repository/FavoriteRepository */ "./assets/ts-app/src/repository/FavoriteRepository.js");
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var FavoriteView = function FavoriteView() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tableData = _React$useState4[0],
      setTableData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      errors = _React$useState6[0],
      setErrors = _React$useState6[1];

  var fetchTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ids, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return Object(_repository_FavoriteRepository__WEBPACK_IMPORTED_MODULE_20__["fetchUserFavorite"])();

            case 3:
              ids = _context.sent;
              _context.next = 6;
              return Object(_repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_18__["fetchBlueprintByIds"])(ids);

            case 6:
              response = _context.sent;
              setTableData(response);
              setLoading(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchTableData() {
      return _ref.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_15___default.a.useEffect(function () {
    fetchTableData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h2", null, "Favorite List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_16___default.a, {
    columns: _model_blueprint_model__WEBPACK_IMPORTED_MODULE_17__["TABLE_HEADER"],
    data: tableData,
    defaultSortField: "value",
    highlightOnHover: true,
    persistTableHead: true,
    progressPending: isLoading,
    progressComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      style: {
        padding: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["CircularProgress"], {
      size: 75
    })),
    selectableRows: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FavoriteView);

/***/ }),

/***/ "./assets/ts-app/src/container/form/login-form.js":
/*!********************************************************!*\
  !*** ./assets/ts-app/src/container/form/login-form.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "./assets/ts-app/node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "./assets/ts-app/node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _service_security_UserAuthentication__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../service/security/UserAuthentication */ "./assets/ts-app/src/service/security/UserAuthentication.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var userAuth = yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required(),
  password: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required()
});

var LoginForm = function LoginForm() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isAuthorized = _React$useState2[0],
      setAuthorized = _React$useState2[1];

  var handleFormSubmit = function handleFormSubmit(values, actions) {
    actions.setSubmitting(true);
    var response = Object(_service_security_UserAuthentication__WEBPACK_IMPORTED_MODULE_17__["AuthenticateUser"])(values);
    setAuthorized(true);
    actions.setSubmitting(false); // window.location.reload(false);
  };

  var renderLoginMessage = function renderLoginMessage() {
    if (isAuthorized) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", null, "Logged in!");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, renderLoginMessage(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_14__["Formik"], {
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: userAuth,
    onSubmit: function onSubmit(values, actions) {
      return handleFormSubmit(values, actions);
    }
  }, function (_ref) {
    var values = _ref.values,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors,
        validateField = _ref.validateField,
        isSubmitting = _ref.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_14__["Form"], {
      onSubmit: handleSubmit,
      action: "/api/login",
      method: "post"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_14__["Field"], {
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"],
      inputProps: {
        maxLength: 64
      },
      variant: "outlined",
      type: "text",
      name: "username",
      label: "Username",
      required: true,
      error: errors.username ? true : false,
      helperText: errors.username
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_14__["Field"], {
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"],
      inputProps: {
        maxLength: 64
      },
      variant: "outlined",
      type: "password",
      name: "password",
      label: "Password",
      required: true,
      error: errors.password ? true : false,
      helperText: errors.password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./assets/ts-app/src/container/view/blueprint-view.js":
/*!************************************************************!*\
  !*** ./assets/ts-app/src/container/view/blueprint-view.js ***!
  \************************************************************/
/*! exports provided: BlueprintViewContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueprintViewContext", function() { return BlueprintViewContext; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./assets/ts-app/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./assets/ts-app/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./assets/ts-app/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./assets/ts-app/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _component_blueprint_blueprint_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../component/blueprint/blueprint-table */ "./assets/ts-app/src/component/blueprint/blueprint-table.js");
/* harmony import */ var _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../reducer/blueprint-view-reducer */ "./assets/ts-app/src/reducer/blueprint-view-reducer.js");
/* harmony import */ var _repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../repository/BlueprintRepository */ "./assets/ts-app/src/repository/BlueprintRepository.js");
/* harmony import */ var _component_blueprint_checkbox_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../component/blueprint/checkbox-dialog */ "./assets/ts-app/src/component/blueprint/checkbox-dialog.js");
/* harmony import */ var _component_blueprint_blueprint_details__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../component/blueprint/blueprint-details */ "./assets/ts-app/src/component/blueprint/blueprint-details.js");
/* harmony import */ var _expanded_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../expanded-card */ "./assets/ts-app/src/container/expanded-card.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../dashboard */ "./assets/ts-app/src/container/dashboard.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var BlueprintViewContext = Object(react__WEBPACK_IMPORTED_MODULE_14__["createContext"])(null);

var BlueprintView = function BlueprintView() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_14__["useReducer"])(_reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_17__["STATES"], _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_14___default.a.useContext(_dashboard__WEBPACK_IMPORTED_MODULE_22__["DashboardThemeContext"]),
      classes = _React$useContext.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])({
    tiers: [],
    itemTypes: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tableFilters = _useState2[0],
      setTableFilters = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    Object(_repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_18__["fetchItemTypes"])().then(function (response) {
      dispatch({
        type: _reducer_blueprint_view_reducer__WEBPACK_IMPORTED_MODULE_17__["ACTIONS"].UPDATE_ITEM_LIST,
        payload: response
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {}, [tableFilters]);

  var renderFilterDialog = function renderFilterDialog() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_component_blueprint_checkbox_dialog__WEBPACK_IMPORTED_MODULE_19__["default"], {
      name: "itemType",
      valueKey: "itemTypes",
      dialogName: "itemType",
      label: "Item Type"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_component_blueprint_checkbox_dialog__WEBPACK_IMPORTED_MODULE_19__["default"], {
      name: "tiers",
      valueKey: "tiers",
      dialogName: "tierList",
      label: "Tiers"
    }));
  };

  var handleSearchSubmit = function handleSearchSubmit() {
    setTableFilters({
      tiers: state.tiers.filter(function (tier) {
        return tier.value === true;
      }),
      itemTypes: state.itemTypes.filter(function (tier) {
        return tier.value === true;
      })
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(BlueprintViewContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_expanded_card__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: classes.card,
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
      onClick: handleSearchSubmit
    }, "Search")
  }, renderFilterDialog())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_component_blueprint_blueprint_table__WEBPACK_IMPORTED_MODULE_16__["default"], {
    tiers: tableFilters.tiers,
    itemTypes: tableFilters.itemTypes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, "* Value:Exp, higher is better."))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlueprintView);

/***/ }),

/***/ "./assets/ts-app/src/form/blueprint-form-modal.js":
/*!********************************************************!*\
  !*** ./assets/ts-app/src/form/blueprint-form-modal.js ***!
  \********************************************************/
/*! exports provided: BlueprintFormModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueprintFormModal", function() { return BlueprintFormModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./assets/ts-app/node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_blueprint_blueprint_form_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/blueprint/blueprint-form-edit */ "./assets/ts-app/src/component/blueprint/blueprint-form-edit.js");
/* harmony import */ var _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducer/blueprint-edit-reducer */ "./assets/ts-app/src/reducer/blueprint-edit-reducer.js");
/* harmony import */ var _component_blueprint_blueprint_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../component/blueprint/blueprint-table */ "./assets/ts-app/src/component/blueprint/blueprint-table.js");






var BlueprintFormModal = function BlueprintFormModal() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_component_blueprint_blueprint_table__WEBPACK_IMPORTED_MODULE_5__["BlueprintFormContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var renderActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return dispatch({
        type: _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"].DIALOG,
        payload: false
      });
    },
    variant: "contained",
    color: "secondary"
  }, "Close"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return dispatch({
        type: _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"].DIALOG,
        payload: true
      });
    }
  }, "Edit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: state.dialog,
    onClose: function onClose() {
      return dispatch({
        type: _reducer_blueprint_edit_reducer__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"].DIALOG,
        payload: false
      });
    },
    fullWidth: true,
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], null, "Edit Market Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_blueprint_blueprint_form_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blueprints: state.blueprints
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], null, renderActions)));
};
/* harmony default export */ __webpack_exports__["default"] = (BlueprintFormModal);

/***/ }),

/***/ "./assets/ts-app/src/helper/color-gradient-generator.js":
/*!**************************************************************!*\
  !*** ./assets/ts-app/src/helper/color-gradient-generator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rainbowvis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rainbowvis.js */ "./assets/ts-app/node_modules/rainbowvis.js/rainbowvis.js");
/* harmony import */ var rainbowvis_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rainbowvis_js__WEBPACK_IMPORTED_MODULE_0__);


var ColorGradientGenerator = function ColorGradientGenerator(colorFrom, colorTo, size) {
  var rainbow = new rainbowvis_js__WEBPACK_IMPORTED_MODULE_0__();
  rainbow.setSpectrum(colorFrom, colorTo);
  rainbow.setNumberRange(0, size);
  return rainbow;
};

/* harmony default export */ __webpack_exports__["default"] = (ColorGradientGenerator);

/***/ }),

/***/ "./assets/ts-app/src/helper/numeral-helper.js":
/*!****************************************************!*\
  !*** ./assets/ts-app/src/helper/numeral-helper.js ***!
  \****************************************************/
/*! exports provided: readable, toNumber, toPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPercentage", function() { return toPercentage; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./assets/ts-app/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./assets/ts-app/node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./assets/ts-app/node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);



var readable = {
  number: "0,0",
  percentage: "0,0.00"
};

var getPercentageFormat = function getPercentageFormat() {
  var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
  var precisionSymbol = "0";
  return "0".concat(seperator, "0.").concat(precisionSymbol.repeat(precision));
};

var toNumber = function toNumber(value) {
  return numeral__WEBPACK_IMPORTED_MODULE_2___default()(value).format(readable.number);
};
var toPercentage = function toPercentage(value, precision) {
  return numeral__WEBPACK_IMPORTED_MODULE_2___default()(value * 100).format(getPercentageFormat(precision)) + "%";
};

/***/ }),

/***/ "./assets/ts-app/src/index.css":
/*!*************************************!*\
  !*** ./assets/ts-app/src/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/ts-app/src/index.js":
/*!************************************!*\
  !*** ./assets/ts-app/src/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./assets/ts-app/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./assets/ts-app/src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./assets/ts-app/src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./assets/ts-app/node_modules/react-router-dom/esm/react-router-dom.js");



 // import * as serviceWorker from "./serviceWorker";


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ "./assets/ts-app/src/model/blueprint-model.js":
/*!****************************************************!*\
  !*** ./assets/ts-app/src/model/blueprint-model.js ***!
  \****************************************************/
/*! exports provided: TABLE_HEADER, TIER_LIST, ITEM_TYPE_GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER", function() { return TABLE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIER_LIST", function() { return TIER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_TYPE_GROUP", function() { return ITEM_TYPE_GROUP; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/numeral-helper */ "./assets/ts-app/src/helper/numeral-helper.js");


var TABLE_HEADER = [{
  name: "Name",
  selector: "name",
  sortable: true,
  cell: function cell(row) {
    return row.name;
  }
}, {
  name: "Type",
  selector: "type",
  sortable: true,
  cell: function cell(row) {
    return row.type;
  }
}, {
  name: "Tier",
  selector: "tier",
  sortable: true,
  cell: function cell(row) {
    return row.tier;
  }
}, {
  name: "Base Value",
  selector: "value",
  sortable: true,
  cell: function cell(row) {
    return Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(row.value);
  }
}, {
  name: "Market Value",
  selector: "marketValue",
  sortable: true,
  cell: function cell(row) {
    return Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(row.marketValue);
  }
}, {
  name: "Merchant Exp",
  selector: "merchantXp",
  sortable: true,
  cell: function cell(row) {
    return Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(row.merchantXp);
  }
}, {
  name: "Value:Exp",
  selector: "ratioValueXp",
  sortable: true,
  cell: function cell(row) {
    return Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__["toPercentage"])(row.ratioValueXp);
  }
}, {
  name: "Energy:Speed Up",
  selector: "ratioSpeedUpTime",
  sortable: true,
  cell: function cell(row) {
    return Object(_helper_numeral_helper__WEBPACK_IMPORTED_MODULE_1__["toPercentage"])(row.ratioSpeedUpTime);
  }
}];
var TIER_LIST = [{
  name: "1",
  value: false
}, {
  name: "2",
  value: false
}, {
  name: "3",
  value: false
}, {
  name: "4",
  value: false
}, {
  name: "5",
  value: false
}, {
  name: "6",
  value: false
}, {
  name: "7",
  value: false
}, {
  name: "8",
  value: false
}, {
  name: "9",
  value: false
}];
var ITEM_TYPE_GROUP = {
  accessories: {
    label: "Accessories",
    value: ["SHIELD", "RING"]
  },
  armor: {
    label: "Armor",
    value: ["HEAVY ARMOR", "LIGHT ARMOR", "CLOTHES", "HELMET", "ROGUE HAT", "MAGICIAN HAT", "GAUNTLETS", "GLOVES", "HEAVY FOOTWEAR", "LIGHT FOOTWEAR"]
  },
  enchantment: {
    label: "Enchantment",
    value: []
  },
  herbal: {
    label: "Herbal/Potion",
    value: ["POTION", "SPELL", "HERBAL MEDICINE"]
  },
  weapon: {
    label: "Weapon",
    value: ["SWORD", "AXE", "DAGGER", "MACE", "SPEAR", "BOW", "STAFF", "WAND", "CROSSBOW", "GUN"]
  }
};

/***/ }),

/***/ "./assets/ts-app/src/model/energy-model.js":
/*!*************************************************!*\
  !*** ./assets/ts-app/src/model/energy-model.js ***!
  \*************************************************/
/*! exports provided: calculateSmallTalkEnergy, calculateSmallTalkEffciencyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSmallTalkEnergy", function() { return calculateSmallTalkEnergy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSmallTalkEffciencyData", function() { return calculateSmallTalkEffciencyData; });
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./assets/ts-app/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);

var SMALL_TALK_SUCCESS_RATE = 0.75;
var LUCK_RATE = 0.8;
var DISCOUNT_COST_RATE = 0.5;
/**
 * The amount of energy gained.
 */

var calculateEnergyGain = function calculateEnergyGain(currentEnergy, maxEnergy) {
  currentEnergy = parseInt(currentEnergy);
  maxEnergy = parseInt(maxEnergy);
  return currentEnergy >= maxEnergy ? 0 : (maxEnergy - currentEnergy) / 10;
};

var calculateBackfireEnergy = function calculateBackfireEnergy(currentEnergy, maxEnergy) {
  if (maxEnergy > 0) {
    var maxBackfireEnergy = Math.floor(maxEnergy / 7);
    var backfireEnergy = maxBackfireEnergy >= currentEnergy ? currentEnergy : maxBackfireEnergy;
    return backfireEnergy;
  }

  return 0;
};
/**
 * The maximum amount of of energy to be gained is based on your max energy.
 *
 * @param {*} maxEnergy
 */


var calculateMaxEnergyGain = function calculateMaxEnergyGain(maxEnergy) {
  if (maxEnergy < 1) {
    return 0;
  }

  return maxEnergy / 10;
};

var calculateFirstAttemptEfficiency = function calculateFirstAttemptEfficiency(successRate, gainEnergy, backfireEnergy) {
  var gainEfficiency = gainEnergy * successRate;
  var backfireEfficiency = backfireEnergy * (1 - successRate);
  var exactEfficiency = gainEfficiency / (gainEfficiency + backfireEfficiency);
  return exactEfficiency * 100;
};

var calculateSmallTalkEnergy = function calculateSmallTalkEnergy(currentEnergy, maxEnergy) {
  var gain = calculateEnergyGain(currentEnergy, maxEnergy);
  var maxGain = calculateMaxEnergyGain(maxEnergy);
  var backfire = calculateBackfireEnergy(currentEnergy, maxEnergy);
  var efficiency = calculateFirstAttemptEfficiency(SMALL_TALK_SUCCESS_RATE, gain, backfire);
  var luckEfficiency = calculateFirstAttemptEfficiency(LUCK_RATE, gain, backfire);
  return {
    currentEnergy: currentEnergy,
    maxEnergy: maxEnergy,
    gain: gain,
    maxGain: maxGain,
    backfire: backfire,
    isEfficient: efficiency > 49.99,
    feelingLucky: luckEfficiency > 49.99,
    efficiency: efficiency
  };
};
var calculateSmallTalkEffciencyData = function calculateSmallTalkEffciencyData(maxEnergy, stepSize) {
  maxEnergy = parseInt(maxEnergy);
  stepSize = parseInt(stepSize);
  var data = [];
  var smallTalkEnergy = {};

  for (var i = 0; i <= maxEnergy; i += stepSize) {
    smallTalkEnergy = calculateSmallTalkEnergy(i, maxEnergy);
    data.push({
      name: i,
      backfire: 100 - smallTalkEnergy.efficiency,
      gain: smallTalkEnergy.efficiency
    });
  }

  return data;
};

/***/ }),

/***/ "./assets/ts-app/src/reducer/blueprint-edit-reducer.js":
/*!*************************************************************!*\
  !*** ./assets/ts-app/src/reducer/blueprint-edit-reducer.js ***!
  \*************************************************************/
/*! exports provided: ACTIONS, INITIAL_STATE, STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../repository/BlueprintRepository */ "./assets/ts-app/src/repository/BlueprintRepository.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ACTIONS = {
  SUBMITTING: "setSubmitting",
  SUBMIT: "formSubmit",
  RESET: "reset",
  DIALOG: "updateDialog",
  UPDATE_BLUEPRINTS: "updateBlueprints"
};
var INITIAL_STATE = {
  dialog: false,
  isSubmitting: false,
  blueprints: []
};
var STATES = function STATES(state, action) {
  var payload = action.payload;

  switch (action.type) {
    case ACTIONS.UPDATE_BLUEPRINTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        blueprints: payload
      });

    case ACTIONS.SUBMITTING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: payload
      });

    case ACTIONS.RESET:
      return INITIAL_STATE;

    case ACTIONS.DIALOG:
      return _objectSpread(_objectSpread({}, state), {}, {
        dialog: payload
      });

    case ACTIONS.SUBMIT:
      for (var i = 0; i < payload.blueprints.length; i++) {
        if (JSON.stringify(payload.blueprints[i]) !== JSON.stringify(state.blueprints[i])) {
          Object(_repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_10__["patchBlueprint"])(payload.blueprints[i]);
          console.log('patching: ' + payload.blueprints[i].name);
        }
      }

      return _objectSpread(_objectSpread({}, state), payload);

    default:
      throw new Error();
  }
};

/***/ }),

/***/ "./assets/ts-app/src/reducer/blueprint-view-reducer.js":
/*!*************************************************************!*\
  !*** ./assets/ts-app/src/reducer/blueprint-view-reducer.js ***!
  \*************************************************************/
/*! exports provided: ACTIONS, INITIAL_STATE, resetFilter, STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFilter", function() { return resetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _model_blueprint_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../model/blueprint-model */ "./assets/ts-app/src/model/blueprint-model.js");
/* harmony import */ var _repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../repository/BlueprintRepository */ "./assets/ts-app/src/repository/BlueprintRepository.js");













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ACTIONS = {
  UPDATE_TIER_LIST: "updateTierList",
  UPDATE_ITEM_LIST: "updateItemList",
  RESET: "reset",
  DIALOG: "updateDialog"
};
var INITIAL_STATE = {
  tiers: _model_blueprint_model__WEBPACK_IMPORTED_MODULE_12__["TIER_LIST"],
  itemTypes: [],
  dialog: {
    itemType: false,
    tierList: false
  }
};
var resetFilter = function resetFilter() {
  var getItemTypes = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var itemTypes;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_repository_BlueprintRepository__WEBPACK_IMPORTED_MODULE_13__["fetchItemTypes"])();

            case 2:
              itemTypes = _context.sent;
              return _context.abrupt("return", {
                tiers: _model_blueprint_model__WEBPACK_IMPORTED_MODULE_12__["TIER_LIST"],
                itemTypes: itemTypes,
                dialog: {
                  itemType: false,
                  tierList: false
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getItemTypes() {
      return _ref.apply(this, arguments);
    };
  }();

  var response = getItemTypes();
  return response;
};
var STATES = function STATES(state, action) {
  var payload = action.payload;

  switch (action.type) {
    case ACTIONS.UPDATE_TIER_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        tiers: payload
      });

    case ACTIONS.UPDATE_ITEM_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        itemTypes: payload
      });

    case ACTIONS.RESET:
      return resetFilter();

    case ACTIONS.DIALOG:
      return _objectSpread(_objectSpread({}, state), {}, {
        dialog: _objectSpread(_objectSpread({}, state.dialog), payload)
      });

    default:
      throw new Error();
  }
};

/***/ }),

/***/ "./assets/ts-app/src/reducer/stack-reducer.js":
/*!****************************************************!*\
  !*** ./assets/ts-app/src/reducer/stack-reducer.js ***!
  \****************************************************/
/*! exports provided: ACTIONS, INITIAL_STATE, REDUCER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER", function() { return REDUCER; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./assets/ts-app/node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_action_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../common/action-validator */ "./assets/ts-app/src/common/action-validator.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ACTIONS = {
  PUSH: "PUSH",
  POP: "POP",
  CLEAR: "CLEAR"
};
var INITIAL_STATE = {
  data: [],
  size: 0,
  capacity: 10
};
var Stack = {
  push: function push(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      data: _objectSpread(_objectSpread({}, state.data), action.payload),
      size: state.size + 1
    });
  },
  pop: function pop(state) {
    if (state.data.size > 0) {
      return state.data.splice(-1, 1);
    }

    return state;
  }
};
var REDUCER = function REDUCER(state, action) {
  Object(_common_action_validator__WEBPACK_IMPORTED_MODULE_10__["validateAction"])(action, ACTIONS);

  switch (action.type) {
    case ACTIONS.PUSH:
      Object(_common_action_validator__WEBPACK_IMPORTED_MODULE_10__["requirePayload"])(action);
      Stack.push(state, action);
      return;

    case ACTIONS.POP:
      Object(_common_action_validator__WEBPACK_IMPORTED_MODULE_10__["requirePayload"])(action);
      Stack.pop(state);
      return state;

    case ACTIONS.CLEAR:
      // Payload should be a function [TODO]
      if (action.payload && state.data.length > 0) {
        state.data.forEach(function (item, i) {
          action.payload(item, i);
        });
      }

      return INITIAL_STATE;

    default:
      Object(_common_action_validator__WEBPACK_IMPORTED_MODULE_10__["throwInvalidState"])(state, action, __filename);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./assets/ts-app/src/repository/BlueprintRepository.js":
/*!*************************************************************!*\
  !*** ./assets/ts-app/src/repository/BlueprintRepository.js ***!
  \*************************************************************/
/*! exports provided: updateBlueprint, getTierParams, getBlueprintTypeParams, fetchBlueprints, fetchBlueprintByIds, fetchBlueprint, patchBlueprint, fetchItemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlueprint", function() { return updateBlueprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTierParams", function() { return getTierParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlueprintTypeParams", function() { return getBlueprintTypeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBlueprints", function() { return fetchBlueprints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBlueprintByIds", function() { return fetchBlueprintByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBlueprint", function() { return fetchBlueprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchBlueprint", function() { return patchBlueprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItemTypes", function() { return fetchItemTypes; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./assets/ts-app/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./assets/ts-app/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./assets/ts-app/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./assets/ts-app/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./assets/ts-app/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_blueprint_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/blueprint-model */ "./assets/ts-app/src/model/blueprint-model.js");









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var updateBlueprint = function updateBlueprint(id, newData) {};
var getTierParams = function getTierParams(tiers) {
  return tiers.filter(function (tier) {
    return tier.value === true;
  }).reduce(function (params, tier) {
    return params + "&tier[]=".concat(tier.name);
  }, "");
};
var getBlueprintTypeParams = function getBlueprintTypeParams(types) {
  return types.filter(function (type) {
    return type.value === true;
  }).reduce(function (params, type) {
    return params + "&type[]=".concat(type.name);
  }, "");
};
/**
 * @param {*} tiers
 * @param {*} page
 */

var fetchBlueprints = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tiers, page, itemsPerPage, itemType) {
    var typesParams, tierParams, url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            typesParams = itemType.length > 0 ? getBlueprintTypeParams(itemType) : "";
            tierParams = tiers.length > 0 ? getTierParams(tiers) : "";
            url = "http://localhost:80/api/v1/blueprints?order[merchant_xp]=desc".concat(tierParams).concat(typesParams, "&page=").concat(page, "&itemsPerPage=").concat(itemsPerPage);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url);

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchBlueprints(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var fetchBlueprintByIds = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ids) {
    var idParams, url, response, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idParams = ids.reduce(function (params, id) {
              return params + "&id[]=".concat(id);
            }, "");
            url = "http://localhost:80/api/v1/blueprints?order[merchant_xp]=desc".concat(idParams);
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url);

          case 4:
            response = _context2.sent;
            result = response.data["hydra:member"];
            return _context2.abrupt("return", result);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchBlueprintByIds(_x5) {
    return _ref2.apply(this, arguments);
  };
}();
var fetchBlueprint = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "http://localhost:80/api/v1/blueprints/".concat(id);
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url);

          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchBlueprint(_x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 *
 * @param {*} id
 * @param {*} marketValue
 */

var patchBlueprint = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(blueprint) {
    var url;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = "http://localhost:80/api/v1/blueprints/".concat(blueprint.id);
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.patch(url, blueprint, {
              headers: {
                "content-type": "application/merge-patch+json"
              }
            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function patchBlueprint(_x7) {
    return _ref4.apply(this, arguments);
  };
}();
var fetchItemTypes = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var url, response, responseData, itemTypes;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = "http://localhost:80/api/v1/item_types";
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url);

          case 3:
            response = _context5.sent;
            responseData = response.data["hydra:member"];
            itemTypes = responseData.map(function (item) {
              return {
                name: item.name,
                value: false
              };
            });
            return _context5.abrupt("return", itemTypes);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function fetchItemTypes() {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/ts-app/src/repository/FavoriteRepository.js":
/*!************************************************************!*\
  !*** ./assets/ts-app/src/repository/FavoriteRepository.js ***!
  \************************************************************/
/*! exports provided: fetchUserFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserFavorite", function() { return fetchUserFavorite; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./assets/ts-app/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var fetchUserFavorite = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost/api/user/favorite');

          case 2:
            response = _context.sent;
            console.log(response);
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchUserFavorite() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/ts-app/src/route/HomeLink.js":
/*!*********************************************!*\
  !*** ./assets/ts-app/src/route/HomeLink.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./assets/ts-app/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./assets/ts-app/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Subject */ "./assets/ts-app/node_modules/@material-ui/icons/Subject.js");
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChatBubbleOutline */ "./assets/ts-app/node_modules/@material-ui/icons/ChatBubbleOutline.js");
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./assets/ts-app/node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);







var LINKS = [{
  uri: "/shop-titans",
  label: "Blueprints",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4___default.a, null)
}, {
  uri: "/shop-titans/small-talk",
  label: "Small Talk",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_5___default.a, null)
}, {
  uri: "/shop-titans/favorite",
  label: "Favorite",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default.a, null)
}, {
  uri: "/shop-titans/login",
  label: "Login",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default.a, null)
}];

var HomeLink = function HomeLink(_ref) {
  var wrapper = _ref.wrapper;

  var renderLink = function renderLink() {
    return LINKS.map(function (item, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        key: i,
        to: item.uri
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], null, item.icon, " ", item.label)));
    });
  };

  return renderLink();
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLink);

/***/ }),

/***/ "./assets/ts-app/src/route/HomeRoute.js":
/*!**********************************************!*\
  !*** ./assets/ts-app/src/route/HomeRoute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./assets/ts-app/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./assets/ts-app/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_energy_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../component/energy-calculator */ "./assets/ts-app/src/component/energy-calculator.js");
/* harmony import */ var _component_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../component/not-found */ "./assets/ts-app/src/component/not-found.js");
/* harmony import */ var _container_favorite_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/favorite-view */ "./assets/ts-app/src/container/favorite-view.js");
/* harmony import */ var _container_view_blueprint_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../container/view/blueprint-view */ "./assets/ts-app/src/container/view/blueprint-view.js");
/* harmony import */ var _container_form_login_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../container/form/login-form */ "./assets/ts-app/src/container/form/login-form.js");








var HomeRoute = function HomeRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/shop-titans",
    component: _container_view_blueprint_view__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/shop-titans/small-talk",
    component: _component_energy_calculator__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/shop-titans/favorite",
    component: _container_favorite_view__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/shop-titans/login",
    component: _container_form_login_form__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _component_not_found__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeRoute);

/***/ }),

/***/ "./assets/ts-app/src/schema/energy-form-schema.js":
/*!********************************************************!*\
  !*** ./assets/ts-app/src/schema/energy-form-schema.js ***!
  \********************************************************/
/*! exports provided: EnergyFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyFormSchema", function() { return EnergyFormSchema; });
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./assets/ts-app/node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./assets/ts-app/node_modules/yup/es/index.js");



function transformEmptyStringToNull(value, originalValue) {
  return originalValue.trim() === "" || originalValue.trim() === "*" ? null : value;
}

var EnergyFormSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
  currentEnergy: yup__WEBPACK_IMPORTED_MODULE_1__["number"]().typeError("Only digits.").nullable().transform(transformEmptyStringToNull).positive("Negative value is not allowed.").integer("Integers only!").min(0).max(yup__WEBPACK_IMPORTED_MODULE_1__["ref"]("maxEnergy"), "Must be less than max energy.").required("Required"),
  maxEnergy: yup__WEBPACK_IMPORTED_MODULE_1__["number"]().typeError("Only digits.").nullable().transform(transformEmptyStringToNull).positive("Negative value is not allowed.").integer("Integers only!").min(yup__WEBPACK_IMPORTED_MODULE_1__["ref"]("currentEnergy"), "Must be greater than current energy.").max(100000, "Try using a smaller number.").required("Required")
});

/***/ }),

/***/ "./assets/ts-app/src/service/security/UserAuthentication.js":
/*!******************************************************************!*\
  !*** ./assets/ts-app/src/service/security/UserAuthentication.js ***!
  \******************************************************************/
/*! exports provided: AuthenticateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateUser", function() { return AuthenticateUser; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./assets/ts-app/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./assets/ts-app/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./assets/ts-app/node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./assets/ts-app/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var AuthenticateUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credential) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "http://localhost:80/api/login";
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, credential, {
              Accept: "application/json",
              "Content-Type": "application/json"
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function AuthenticateUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/ts-app/src/theme/example-theme.js":
/*!**************************************************!*\
  !*** ./assets/ts-app/src/theme/example-theme.js ***!
  \**************************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./assets/ts-app/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./assets/ts-app/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./assets/ts-app/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./assets/ts-app/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./assets/ts-app/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./assets/ts-app/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./assets/ts-app/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./assets/ts-app/node_modules/@material-ui/core/esm/index.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var drawerWidth = 240;
var primaryColor = "#388087";
var secondaryColor = "#6FB3B8";
var baseColor = "#EFEFEF";
var secondaryBaseColor = "#388087";
var body1BaseColor = "#333333";
var body1Color = "#FFFFFF";
var linkTextColor = "#43BEE5";
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      backgroundColor: baseColor,
      color: body1Color
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed

    },
    toolbarIcon: _objectSpread({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px"
    }, theme.mixins.toolbar),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: secondaryBaseColor
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: "none"
    },
    title: {
      flexGrow: 1
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      textAlign: "left",
      background: body1BaseColor,
      color: linkTextColor
    },
    drawerPaperClose: _defineProperty({
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(9)
    }),
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      color: body1Color,
      backgroundColor: secondaryBaseColor
    },
    fixedHeight: {
      height: 240
    },
    card: {
      color: body1Color,
      backgroundColor: secondaryBaseColor
    }
  };
});

/***/ })

},[["./assets/ts-app/src/index.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9BcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9jb21tb24vYWN0aW9uLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9jb21tb24vY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9jb21tb24vZm9ybWF0dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbW1vbi90cmFuc2l0aW9uLWludHJvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbXBvbmVudC9ibHVlcHJpbnQvYmx1ZXByaW50LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvY29tcG9uZW50L2JsdWVwcmludC9ibHVlcHJpbnQtZm9ybS1lZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbXBvbmVudC9ibHVlcHJpbnQvYmx1ZXByaW50LXRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbXBvbmVudC9ibHVlcHJpbnQvY2hlY2tib3gtZGlhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbXBvbmVudC9jb3B5cmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvY29tcG9uZW50L2VuZXJneS1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbXBvbmVudC9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9jb21wb25lbnQvbm90LWZvdW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2NvbnRhaW5lci9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvY29udGFpbmVyL2V4cGFuZGVkLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvY29udGFpbmVyL2Zhdm9yaXRlLXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvY29udGFpbmVyL2Zvcm0vbG9naW4tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9jb250YWluZXIvdmlldy9ibHVlcHJpbnQtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9mb3JtL2JsdWVwcmludC1mb3JtLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2hlbHBlci9jb2xvci1ncmFkaWVudC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvaGVscGVyL251bWVyYWwtaGVscGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9tb2RlbC9ibHVlcHJpbnQtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvbW9kZWwvZW5lcmd5LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL3JlZHVjZXIvYmx1ZXByaW50LWVkaXQtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9yZWR1Y2VyL2JsdWVwcmludC12aWV3LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvcmVkdWNlci9zdGFjay1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy1hcHAvc3JjL3JlcG9zaXRvcnkvQmx1ZXByaW50UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9yZXBvc2l0b3J5L0Zhdm9yaXRlUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9yb3V0ZS9Ib21lTGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9yb3V0ZS9Ib21lUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzLWFwcC9zcmMvc2NoZW1hL2VuZXJneS1mb3JtLXNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy9zZXJ2aWNlL3NlY3VyaXR5L1VzZXJBdXRoZW50aWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMtYXBwL3NyYy90aGVtZS9leGFtcGxlLXRoZW1lLmpzIl0sIm5hbWVzIjpbIkFwcCIsInZhbGlkYXRlQWN0aW9uIiwiYWN0aW9uIiwidmFsaWRBY3Rpb25zIiwiaXNEZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJ2YWx1ZXMiLCJjb250YWlucyIsInR5cGUiLCJ0YWJsZSIsInJlcXVpcmVQYXlsb2FkIiwidGhyb3dJbnZhbGlkU3RhdGUiLCJzdGF0ZSIsInJlZHVjZXIiLCJvYmplY3QiLCJ2YWx1ZSIsIkZPUk1BVF9QQVRURVJOIiwiUkVBREFCTEVfRkxPQVQiLCJSRUFEQUJMRV9JTlQiLCJmb3JtYXRBbGxWYWx1ZXMiLCJ2YWx1ZU9iamVjdCIsImZvcm1hdFBhdHRlcm4iLCJrZXlzIiwiZm9ybWF0dGVkVmFsdWVzIiwicHJvcCIsIm51bWVyYWwiLCJmb3JtYXQiLCJkdXJhdGlvbiIsImRlZmF1bHRTdHlsZSIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNpdGlvblN0eWxlcyIsImVudGVyaW5nIiwiZW50ZXJlZCIsImV4aXRpbmciLCJleGl0ZWQiLCJUcmFuc2l0aW9uSW50cm8iLCJjaGlsZHJlbiIsImluUHJvcCIsIkJsdWVwcmludERldGFpbHMiLCJibHVlcHJpbnQiLCJvbkNsb3NlIiwicGxhaW5OYW1lIiwibmFtZSIsInJlcGxhY2UiLCJpbWdTcmMiLCJiYXNlVmFsdWUiLCJ0b051bWJlciIsImZvcm1WYWxpZGF0aW9uIiwiZXJyb3JzIiwiQmx1ZXByaW50Rm9ybUVkaXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJCbHVlcHJpbnRGb3JtQ29udGV4dCIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJpc0hvdmVyaW5nIiwic2V0SG92ZXJpbmciLCJ1c2VFZmZlY3QiLCJob3ZlcmluZ1N0YXRlcyIsImJsdWVwcmludHMiLCJtYXAiLCJpZCIsIm9uRm9ybVN1Ym1pdCIsImZvcm1pa0FjdGlvbiIsInNldFN1Ym1pdHRpbmciLCJBQ1RJT05TIiwiU1VCTUlUIiwicGF5bG9hZCIsImRpYWxvZyIsInJlbmRlckJsdWVwcmludERldGFpbHMiLCJrZXkiLCJoaWRlRGV0YWlscyIsImFjdGlvbnMiLCJoYW5kbGVTdWJtaXQiLCJ2YWxpZGF0ZUZpZWxkIiwidG91Y2hlZCIsImFycmF5SGVscGVyIiwiaSIsIk0iLCJjcmVhdGVDb250ZXh0IiwiQmx1ZXByaW50VGFibGUiLCJ0aWVycyIsIml0ZW1UeXBlcyIsInVzZVJlZHVjZXIiLCJTVEFURVMiLCJJTklUSUFMX1NUQVRFIiwidGFibGVEYXRhIiwic2V0VGFibGVEYXRhIiwicGFnZSIsInNldFBhZ2UiLCJ0b3RhbFJvd3MiLCJzZXRUb3RhbFJvd3MiLCJpdGVtc1BlclBhZ2UiLCJzZXRJdGVtc1BlclBhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwidG9nZ2xlQ2xlYXJlZCIsInNldFRvZ2dsZUNsZWFyZWQiLCJsb2FkQmx1ZXByaW50IiwiZmV0Y2hCbHVlcHJpbnRzIiwicmVzcG9uc2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJuZXdQYWdlIiwiaGFuZGxlUm93c1BlclBhZ2VDaGFuZ2UiLCJuZXdJdGVtc1BlclBhZ2UiLCJoYW5kbGVSb3dzU2VsZWN0ZWQiLCJ1c2VDYWxsYmFjayIsImNvbnRleHRBY3Rpb25zIiwidXNlTWVtbyIsIlVQREFURV9CTFVFUFJJTlRTIiwic3BlZWRVcEVuZXJneSIsInN1Z2dlc3RFbmVyZ3kiLCJzdXJjaGFyZ2VFbmVyZ3kiLCJUQUJMRV9IRUFERVIiLCJwYWRkaW5nIiwiQ2hlY2tCb3hEaWFsb2ciLCJ2YWx1ZUtleSIsImRpYWxvZ05hbWUiLCJsYWJlbCIsIkJsdWVwcmludFZpZXdDb250ZXh0IiwiRElBTE9HIiwiaGFuZGxlRGlhbG9nT3BlbiIsInJlbmRlclRyaWdnZXJCdXR0b24iLCJyZW5kZXJDaGVja2JveCIsImFycmF5SGVscGVycyIsIm9wdGlvbiIsImluZGV4IiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJyZW5kZXJGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImlzU3VibWl0dGluZyIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNvbG9yR2VuZXJhdG9yIiwiQ29sb3JHcmFkaWVudEdlbmVyYXRvciIsIkVuZXJneUNhbGN1bGF0b3IiLCJjdXJyZW50RW5lcmd5Iiwic2V0Q3VycmVudEVuZXJneSIsIm1heEVuZXJneSIsInNldE1heEVuZXJneSIsInNtYWxsVGFsa0VuZXJneSIsInNldFNtYWxsVGFsa0VuZXJneSIsInNtYWxsVGFsa0RhdGEiLCJzZXRTbWFsbFRhbGtEYXRhIiwiY2FsY3VsYXRlU21hbGxUYWxrRW5lcmd5IiwiY2FsY3VsYXRlU21hbGxUYWxrRWZmY2llbmN5RGF0YSIsImdldEZpbGxDb2xvciIsInV2IiwiTWF0aCIsImZsb29yIiwiY29sb3JBdCIsIkVuZXJneUZvcm1TY2hlbWEiLCJUZXh0RmllbGQiLCJtYXhMZW5ndGgiLCJzZWxlY3QiLCJ0aGVuIiwibG9nIiwicmVuZGVyUmVzdWx0IiwiaXNFZmZpY2llbnQiLCJmZWVsaW5nTHVja3kiLCJ0b1BlcmNlbnRhZ2UiLCJlZmZpY2llbmN5IiwiZ2FpbiIsImJhY2tmaXJlIiwicmVuZGVyUmVzdWx0Q2hhcnQiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJjb2xvciIsIkZlZWRiYWNrIiwiY3VzdG9tSWNvbnMiLCJpY29uIiwiSWNvbkNvbnRhaW5lciIsInByb3BzIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic2V0VmFsdWUiLCJob3ZlciIsInNldEhvdmVyIiwic3VibWl0dGVkIiwiaXNTdWJtaXR0ZWQiLCJyZW5kZXJSYXRpbmciLCJldmVudCIsIm5ld1ZhbHVlIiwibmV3SG92ZXIiLCJOb3RGb3VuZCIsIlJlY2VudGx5Vmlld2VkQ29udGV4dCIsIkRhc2hib2FyZFRoZW1lQ29udGV4dCIsIkRhc2hib2FyZCIsInRpdGxlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIlN0YWNrUmVkdWNlciIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwiZHJhd2VyIiwicGFwZXIiLCJjbHN4IiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJQYXBlckNsb3NlIiwidG9vbGJhckljb24iLCJhcHBiYXIiLCJhcHBCYXIiLCJhcHBCYXJTaGlmdCIsInRvb2xiYXIiLCJtZW51QnV0dG9uIiwibWVudUJ1dHRvbkhpZGRlbiIsInJvb3QiLCJjb250ZW50IiwiYXBwQmFyU3BhY2VyIiwiY29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWF4V2lkdGgiLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJleHBhbmQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzaG9ydGVzdCIsImV4cGFuZE9wZW4iLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZWQiLCJFeHBhbmRlZENhcmQiLCJib2R5Iiwic3VidGl0bGUiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJGYXZvcml0ZVZpZXciLCJzZXRFcnJvcnMiLCJmZXRjaFRhYmxlRGF0YSIsImZldGNoVXNlckZhdm9yaXRlIiwiaWRzIiwiZmV0Y2hCbHVlcHJpbnRCeUlkcyIsInVzZXJBdXRoIiwiWXVwIiwic2hhcGUiLCJ1c2VybmFtZSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJMb2dpbkZvcm0iLCJpc0F1dGhvcml6ZWQiLCJzZXRBdXRob3JpemVkIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIkF1dGhlbnRpY2F0ZVVzZXIiLCJyZW5kZXJMb2dpbk1lc3NhZ2UiLCJCbHVlcHJpbnRWaWV3IiwiQlBWUmVkdWNlciIsInRhYmxlRmlsdGVycyIsInNldFRhYmxlRmlsdGVycyIsImZldGNoSXRlbVR5cGVzIiwiVVBEQVRFX0lURU1fTElTVCIsInJlbmRlckZpbHRlckRpYWxvZyIsImhhbmRsZVNlYXJjaFN1Ym1pdCIsImZpbHRlciIsInRpZXIiLCJjYXJkIiwiQmx1ZXByaW50Rm9ybU1vZGFsIiwicmVuZGVyQWN0aW9ucyIsImNvbG9yRnJvbSIsImNvbG9yVG8iLCJzaXplIiwicmFpbmJvdyIsIkNvbG9yIiwic2V0U3BlY3RydW0iLCJzZXROdW1iZXJSYW5nZSIsInJlYWRhYmxlIiwicGVyY2VudGFnZSIsImdldFBlcmNlbnRhZ2VGb3JtYXQiLCJwcmVjaXNpb24iLCJzZXBlcmF0b3IiLCJwcmVjaXNpb25TeW1ib2wiLCJyZXBlYXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RvciIsInNvcnRhYmxlIiwiY2VsbCIsInJvdyIsIm1hcmtldFZhbHVlIiwibWVyY2hhbnRYcCIsInJhdGlvVmFsdWVYcCIsInJhdGlvU3BlZWRVcFRpbWUiLCJUSUVSX0xJU1QiLCJJVEVNX1RZUEVfR1JPVVAiLCJhY2Nlc3NvcmllcyIsImFybW9yIiwiZW5jaGFudG1lbnQiLCJoZXJiYWwiLCJ3ZWFwb24iLCJTTUFMTF9UQUxLX1NVQ0NFU1NfUkFURSIsIkxVQ0tfUkFURSIsIkRJU0NPVU5UX0NPU1RfUkFURSIsImNhbGN1bGF0ZUVuZXJneUdhaW4iLCJwYXJzZUludCIsImNhbGN1bGF0ZUJhY2tmaXJlRW5lcmd5IiwibWF4QmFja2ZpcmVFbmVyZ3kiLCJiYWNrZmlyZUVuZXJneSIsImNhbGN1bGF0ZU1heEVuZXJneUdhaW4iLCJjYWxjdWxhdGVGaXJzdEF0dGVtcHRFZmZpY2llbmN5Iiwic3VjY2Vzc1JhdGUiLCJnYWluRW5lcmd5IiwiZ2FpbkVmZmljaWVuY3kiLCJiYWNrZmlyZUVmZmljaWVuY3kiLCJleGFjdEVmZmljaWVuY3kiLCJtYXhHYWluIiwibHVja0VmZmljaWVuY3kiLCJzdGVwU2l6ZSIsInB1c2giLCJTVUJNSVRUSU5HIiwiUkVTRVQiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0Y2hCbHVlcHJpbnQiLCJVUERBVEVfVElFUl9MSVNUIiwiaXRlbVR5cGUiLCJ0aWVyTGlzdCIsInJlc2V0RmlsdGVyIiwiZ2V0SXRlbVR5cGVzIiwiUFVTSCIsIlBPUCIsIkNMRUFSIiwiY2FwYWNpdHkiLCJTdGFjayIsInBvcCIsInNwbGljZSIsIlJFRFVDRVIiLCJmb3JFYWNoIiwiaXRlbSIsIl9fZmlsZW5hbWUiLCJ1cGRhdGVCbHVlcHJpbnQiLCJuZXdEYXRhIiwiZ2V0VGllclBhcmFtcyIsInJlZHVjZSIsInBhcmFtcyIsImdldEJsdWVwcmludFR5cGVQYXJhbXMiLCJ0eXBlcyIsInR5cGVzUGFyYW1zIiwidGllclBhcmFtcyIsInVybCIsImF4aW9zIiwiZ2V0IiwiaWRQYXJhbXMiLCJyZXN1bHQiLCJmZXRjaEJsdWVwcmludCIsInBhdGNoIiwiaGVhZGVycyIsInJlc3BvbnNlRGF0YSIsIkxJTktTIiwidXJpIiwiSG9tZUxpbmsiLCJ3cmFwcGVyIiwicmVuZGVyTGluayIsIkhvbWVSb3V0ZSIsInRyYW5zZm9ybUVtcHR5U3RyaW5nVG9OdWxsIiwib3JpZ2luYWxWYWx1ZSIsInRyaW0iLCJ0eXBlRXJyb3IiLCJudWxsYWJsZSIsInBvc2l0aXZlIiwiaW50ZWdlciIsIm1pbiIsIm1heCIsImNyZWRlbnRpYWwiLCJwb3N0IiwiQWNjZXB0IiwiZHJhd2VyV2lkdGgiLCJwcmltYXJ5Q29sb3IiLCJzZWNvbmRhcnlDb2xvciIsImJhc2VDb2xvciIsInNlY29uZGFyeUJhc2VDb2xvciIsImJvZHkxQmFzZUNvbG9yIiwiYm9keTFDb2xvciIsImxpbmtUZXh0Q29sb3IiLCJkaXNwbGF5IiwicGFkZGluZ1JpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWl4aW5zIiwiekluZGV4IiwiZWFzaW5nIiwic2hhcnAiLCJsZWF2aW5nU2NyZWVuIiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIm1hcmdpblJpZ2h0IiwiZmxleEdyb3ciLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJvdmVyZmxvdyIsInBhZGRpbmdCb3R0b20iLCJmbGV4RGlyZWN0aW9uIiwiZml4ZWRIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2Isc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyw0REFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQURGLENBREY7QUFLRDs7QUFFY0Esa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFTQyxZQUFULEVBQTBCO0FBQ3RELE1BQUksQ0FBQ0MsMERBQVMsQ0FBQ0YsTUFBRCxFQUFTLE1BQVQsQ0FBZCxFQUFnQztBQUM5QkcsV0FBTyxDQUFDQyxLQUFSLENBQWNKLE1BQWQ7QUFDQSxVQUFNLElBQUlLLEtBQUosaUVBQU47QUFHRDs7QUFFRCxNQUFJLENBQUNKLFlBQVksQ0FBQ0ssTUFBYixHQUFzQkMsUUFBdEIsQ0FBK0JQ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RSxPQUZEO0FBR1A0TCxjQUFRLEVBQUU7QUFISCxLQWpFcUM7QUFzRTlDak0sYUFBUyxFQUFFO0FBQ1RNLGdCQUFVLEVBQUVKLEtBQUssQ0FBQzRMLE9BQU4sQ0FBYyxDQUFkLENBREg7QUFFVEksbUJBQWEsRUFBRWhNLEtBQUssQ0FBQzRMLE9BQU4sQ0FBYyxDQUFkO0FBRk4sS0F0RW1DO0FBMEU5QzVNLFNBQUssRUFBRTtBQUNMNUYsYUFBTyxFQUFFNEcsS0FBSyxDQUFDNEwsT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMbEIsYUFBTyxFQUFFLE1BRko7QUFHTHFCLGNBQVEsRUFBRSxNQUhMO0FBSUxFLG1CQUFhLEVBQUUsUUFKVjtBQUtMbFAsV0FBSyxFQUFFeU4sVUFMRjtBQU1MM0oscUJBQWUsRUFBRXlKO0FBTlosS0ExRXVDO0FBa0Y5QzRCLGVBQVcsRUFBRTtBQUNYL0wsWUFBTSxFQUFFO0FBREcsS0FsRmlDO0FBcUY5QzhDLFFBQUksRUFBRTtBQUNKbEcsV0FBSyxFQUFFeU4sVUFESDtBQUVKM0oscUJBQWUsRUFBRXlKO0FBRmI7QUFyRndDLEdBQVo7QUFBQSxDQUFELENBQTVCLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb250YWluZXIvZGFzaGJvYXJkJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8RGFzaGJvYXJkIHRpdGxlPVwiSEcgLSBUaXRhbiBTaG9wXCIvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBpc0RlZmluZWQgfSBmcm9tIFwiLi9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBY3Rpb24gPSAoYWN0aW9uLCB2YWxpZEFjdGlvbnMpID0+IHtcclxuICBpZiAoIWlzRGVmaW5lZChhY3Rpb24sIFwidHlwZVwiKSkge1xyXG4gICAgY29uc29sZS5lcnJvcihhY3Rpb24pO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgVGhlIHR5cGUgcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkIHdoZW4gZGlzcGF0Y2hpbmcgYW4gYWN0aW9uLmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkQWN0aW9ucy52YWx1ZXMoKS5jb250YWlucyhhY3Rpb24udHlwZSkpIHtcclxuICAgIGNvbnNvbGUudGFibGUodmFsaWRBY3Rpb25zKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYFwiJHthY3Rpb24udHlwZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZC4gVGhlIGFib3ZlIHRhYmxlIGNvbnRhaW5zIGF2YWlsYWJsZSBhY3Rpb25zLmBcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVQYXlsb2FkID0gKGFjdGlvbikgPT4ge1xyXG4gIGlmICghaXNEZWZpbmVkKGFjdGlvbiwgXCJwYXlsb2FkXCIpKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGFjdGlvbik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBUaGUgcGF5bG9hZCBwcm9wZXJ0eSBpcyBSRVFVSVJFRCB3aGVuIGRpc3BhdGNoaW5nIGFjdGlvbiBcIiR7YWN0aW9uLnR5cGV9LlwiYFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGhyb3dJbnZhbGlkU3RhdGUgPSAoc3RhdGUsIGFjdGlvbiwgcmVkdWNlcikgPT4ge1xyXG4gIGNvbnNvbGUuZXJyb3Ioc3RhdGUpO1xyXG4gIGNvbnNvbGUuZXJyb3IoYWN0aW9uKTtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBgSU5WQUxJRCBTVEFURSEhISBTRUUgVEhFIEFCT1ZFIFNUQVRFICYgRElTUEFUQ0hFRCBBQ1RJT04gSU4gUkVEVUNFUjogJHtyZWR1Y2VyfWBcclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaXNEZWZpbmVkID0gKG9iamVjdCwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0W3ZhbHVlXSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn07IiwiaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT1JNQVRfUEFUVEVSTiA9IHtcclxuICBSRUFEQUJMRV9GTE9BVDogXCIwLDAuMDBcIixcclxuICBSRUFEQUJMRV9JTlQ6IFwiMCwwXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIGFsbCB2YWx1ZXMgZm9ybWF0dGVkIGFzIHJlYWRhYmxlIHN0cmluZy5cclxuICogQHBhcmFtIHsqfSB2YWx1ZU9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEFsbFZhbHVlcyA9ICh2YWx1ZU9iamVjdCwgZm9ybWF0UGF0dGVybiwga2V5cykgPT4ge1xyXG4gIGxldCBmb3JtYXR0ZWRWYWx1ZXMgPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgcHJvcCBpbiBrZXlzKSB7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZXNbcHJvcF0gPSBudW1lcmFsKHZhbHVlT2JqZWN0W3Byb3BdKS5mb3JtYXQoZm9ybWF0UGF0dGVybik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm9ybWF0dGVkVmFsdWVzO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcblxyXG5jb25zdCBkdXJhdGlvbiA9IDMwMDA7XHJcblxyXG5jb25zdCBkZWZhdWx0U3R5bGUgPSB7XHJcbiAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXHJcbiAgb3BhY2l0eTogMCxcclxufTtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XHJcbiAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGV4aXRpbmc6IHsgb3BhY2l0eTogMCB9LFxyXG4gIGV4aXRlZDogeyBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uSW50cm8gPSAoeyBjaGlsZHJlbiwgaW46IGluUHJvcCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cclxuICAgICAgeyhzdGF0ZSkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcclxuICAgICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvVHJhbnNpdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkludHJvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgVHlwb2dyYXBoeSxcclxuICBDYXJkTWVkaWEsXHJcbiAgQXZhdGFyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVyL251bWVyYWwtaGVscGVyXCI7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsXCI7XHJcblxyXG5jb25zdCBCbHVlcHJpbnREZXRhaWxzID0gKHsgYmx1ZXByaW50LCBvbkNsb3NlIH0pID0+IHtcclxuICBjb25zdCBwbGFpbk5hbWUgPSBibHVlcHJpbnQubmFtZS5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG4gIGNvbnN0IGltZ1NyYyA9IGBodHRwczovL3BsYXlzaG9wdGl0YW5zLmNvbS9pbWFnZXMvYXNzZXRzL2l0ZW1zLyR7cGxhaW5OYW1lfS5wbmdgO1xyXG4gIGNvbnN0IGJhc2VWYWx1ZSA9IGBCYXNlIFZhbHVlOiAke3RvTnVtYmVyKGJsdWVwcmludC52YWx1ZSl9YDtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhciBhcmlhLWxhYmVsPVwiYmx1ZXByaW50XCI+QjwvQXZhdGFyPn1cclxuICAgICAgICB0aXRsZT17Ymx1ZXByaW50Lm5hbWV9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtibHVlcHJpbnQudHlwZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgIGhlaWdodD1cIjE0MFwiXHJcbiAgICAgICAgYWx0PXtibHVlcHJpbnQubmFtZX1cclxuICAgICAgICBpbWFnZT17aW1nU3JjfVxyXG4gICAgICAgIHRpdGxlPXtibHVlcHJpbnQubmFtZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntiYXNlVmFsdWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgIFNvbWUgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIGl0ZW0uXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsdWVwcmludERldGFpbHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZEFycmF5LCBGYXN0RmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIE0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFDVElPTlMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci9ibHVlcHJpbnQtZWRpdC1yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEJsdWVwcmludEZvcm1Db250ZXh0IH0gZnJvbSBcIi4vYmx1ZXByaW50LXRhYmxlXCI7XHJcbmltcG9ydCBCbHVlcHJpbnREZXRhaWxzIGZyb20gXCIuL2JsdWVwcmludC1kZXRhaWxzXCI7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdGlvbiA9ICh2YWx1ZXMpID0+IHtcclxuICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuY29uc3QgQmx1ZXByaW50Rm9ybUVkaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoQmx1ZXByaW50Rm9ybUNvbnRleHQpO1xyXG4gIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBob3ZlcmluZ1N0YXRlcyA9IHN0YXRlLmJsdWVwcmludHMubWFwKChibHVlcHJpbnQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbYmx1ZXByaW50LmlkXTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRIb3ZlcmluZyhob3ZlcmluZ1N0YXRlcyk7XHJcbiAgfSwgW3N0YXRlLmJsdWVwcmludHNdKTtcclxuXHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlcywgZm9ybWlrQWN0aW9uKSA9PiB7XHJcbiAgICBmb3JtaWtBY3Rpb24uc2V0U3VibWl0dGluZyh0cnVlKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFDVElPTlMuU1VCTUlULFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgYmx1ZXByaW50czogdmFsdWVzLmJsdWVwcmludHMsXHJcbiAgICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1pa0FjdGlvbi5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCbHVlcHJpbnREZXRhaWxzID0gKGJsdWVwcmludCkgPT4ge1xyXG4gICAgaWYgKGlzSG92ZXJpbmdbYmx1ZXByaW50LmlkXSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBrZXkgPSBgYmx1ZXByaW50LWRldGFpbHMtJHtibHVlcHJpbnQuaWR9YDtcclxuICAgICAgY29uc3QgaGlkZURldGFpbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXJpbmcoe1xyXG4gICAgICAgICAgLi4uaXNIb3ZlcmluZyxcclxuICAgICAgICAgIFtibHVlcHJpbnQuaWRdOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE0uQ2FyZCBrZXk9e2tleX0+XHJcbiAgICAgICAgICA8TS5DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPEJsdWVwcmludERldGFpbHMgYmx1ZXByaW50PXtibHVlcHJpbnR9IG9uQ2xvc2U9e2hpZGVEZXRhaWxzfSAvPlxyXG4gICAgICAgICAgPC9NLkNhcmRDb250ZW50PlxyXG4gICAgICAgIDwvTS5DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3N0YXRlfVxyXG4gICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4gZm9ybVZhbGlkYXRpb24odmFsdWVzKX1cclxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IG9uRm9ybVN1Ym1pdCh2YWx1ZXMsIGFjdGlvbnMpfVxyXG4gICAgPlxyXG4gICAgICB7KHsgdmFsdWVzLCBoYW5kbGVTdWJtaXQsIHZhbGlkYXRlRmllbGQsIHRvdWNoZWQgfSkgPT4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPE0uR3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxNLkdyaWQgaXRlbSBtZD17OX0+XHJcbiAgICAgICAgICAgICAgPE0uR3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRBcnJheVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmx1ZXByaW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17KGFycmF5SGVscGVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJsdWVwcmludHMubWFwKChibHVlcHJpbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNLkdyaWQgaXRlbSBtZD17M30geHM9ezJ9IGtleT17Ymx1ZXByaW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFzdEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17TS5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGJsdWVwcmludHNbJHtpfV0ubWFya2V0VmFsdWVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNYXJrZXQgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17Ymx1ZXByaW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyaW5nKC4uLmlzSG92ZXJpbmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmx1ZXByaW50LmlkXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTS5HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTS5HcmlkPlxyXG4gICAgICAgICAgICA8L00uR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxNLkdyaWQgaXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAge3N0YXRlLmJsdWVwcmludHMubWFwKChibHVlcHJpbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJCbHVlcHJpbnREZXRhaWxzKGJsdWVwcmludCk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTS5HcmlkPlxyXG4gICAgICAgICAgPC9NLkdyaWQ+XHJcblxyXG4gICAgICAgICAgPE0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L00uQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbHVlcHJpbnRGb3JtRWRpdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVEFCTEVfSEVBREVSfSBmcm9tIFwiLi8uLi8uLi9tb2RlbC9ibHVlcHJpbnQtbW9kZWxcIjtcclxuaW1wb3J0IHtcclxuICBTVEFURVMsXHJcbiAgSU5JVElBTF9TVEFURSxcclxuICBBQ1RJT05TLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2JsdWVwcmludC1lZGl0LXJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIE0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJsdWVwcmludEZvcm1Nb2RhbCB9IGZyb20gXCIuLy4uLy4uL2Zvcm0vYmx1ZXByaW50LWZvcm0tbW9kYWxcIjtcclxuaW1wb3J0IHsgZmV0Y2hCbHVlcHJpbnRzIH0gZnJvbSBcIi4vLi4vLi4vcmVwb3NpdG9yeS9CbHVlcHJpbnRSZXBvc2l0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmx1ZXByaW50Rm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgQmx1ZXByaW50VGFibGUgPSAoeyB0aWVycywgaXRlbVR5cGVzIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoU1RBVEVTLCBJTklUSUFMX1NUQVRFKTtcclxuXHJcbiAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbdG90YWxSb3dzLCBzZXRUb3RhbFJvd3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1zUGVyUGFnZSwgc2V0SXRlbXNQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRSb3dzLCBzZXRTZWxlY3RlZFJvd3NdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuICBjb25zdCBbdG9nZ2xlQ2xlYXJlZCwgc2V0VG9nZ2xlQ2xlYXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQmx1ZXByaW50KCk7XHJcbiAgfSwgW3BhZ2UsIGl0ZW1zUGVyUGFnZSwgdGllcnMsIGl0ZW1UeXBlc10pO1xyXG5cclxuICBjb25zdCBsb2FkQmx1ZXByaW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hCbHVlcHJpbnRzKFxyXG4gICAgICB0aWVycyxcclxuICAgICAgcGFnZSxcclxuICAgICAgaXRlbXNQZXJQYWdlLFxyXG4gICAgICBpdGVtVHlwZXNcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdGFibGVEYXRhID0ge1xyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLFxyXG4gICAgICB0b3RhbEl0ZW1zOiByZXNwb25zZS5kYXRhW1wiaHlkcmE6dG90YWxJdGVtc1wiXSxcclxuICAgIH07XHJcblxyXG4gICAgc2V0VGFibGVEYXRhKHRhYmxlRGF0YS5kYXRhKTtcclxuICAgIHNldFRvdGFsUm93cyh0YWJsZURhdGEudG90YWxJdGVtcyk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvd3NQZXJQYWdlQ2hhbmdlID0gKG5ld0l0ZW1zUGVyUGFnZSwgcGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShwYWdlKTtcclxuICAgIHNldEl0ZW1zUGVyUGFnZShuZXdJdGVtc1BlclBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvd3NTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChzdGF0ZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKHN0YXRlLnNlbGVjdGVkUm93cyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjb250ZXh0QWN0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkUm93cykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUNUSU9OUy5VUERBVEVfQkxVRVBSSU5UUyxcclxuICAgICAgICBwYXlsb2FkOiBzZWxlY3RlZFJvd3MsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Qmx1ZXByaW50Rm9ybU1vZGFsIC8+O1xyXG4gIH0sIFt0YWJsZURhdGEsIHNlbGVjdGVkUm93cywgdG9nZ2xlQ2xlYXJlZF0pO1xyXG5cclxuICBjb25zdCBCbHVlcHJpbnREZXRhaWxzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNwZWVkVXBFbmVyZ3ksXHJcbiAgICAgIHN1Z2dlc3RFbmVyZ3ksXHJcbiAgICAgIHN1cmNoYXJnZUVuZXJneSxcclxuICAgIH0gPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+U3BlZWQgVXA6IHtzcGVlZFVwRW5lcmd5fTwvbGk+XHJcbiAgICAgICAgPGxpPlN1Z2dlc3QgQ29zdDoge3N1Z2dlc3RFbmVyZ3l9PC9saT5cclxuICAgICAgICA8bGk+U3VyY2hhcmdlOiB7c3VyY2hhcmdlRW5lcmd5fTwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qmx1ZXByaW50Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgY29sdW1ucz17VEFCTEVfSEVBREVSfVxyXG4gICAgICAgIGRhdGE9e3RhYmxlRGF0YX1cclxuICAgICAgICBkZWZhdWx0U29ydEZpZWxkPVwidmFsdWVcIlxyXG4gICAgICAgIGV4cGFuZGFibGVSb3dzXHJcbiAgICAgICAgZXhwYW5kYWJsZVJvd3NDb21wb25lbnQ9ezxCbHVlcHJpbnREZXRhaWxzIC8+fVxyXG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXJcclxuICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgcGFnaW5hdGlvblNlcnZlclxyXG4gICAgICAgIHBhZ2luYXRpb25Ub3RhbFJvd3M9e3RvdGFsUm93c31cclxuICAgICAgICBwZXJzaXN0VGFibGVIZWFkXHJcbiAgICAgICAgcHJvZ3Jlc3NQZW5kaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgcHJvZ3Jlc3NDb21wb25lbnQ9e1xyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cclxuICAgICAgICAgICAgPE0uQ2lyY3VsYXJQcm9ncmVzcyBzaXplPXs3NX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3RhYmxlUm93c1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZX1cclxuICAgICAgICBvblNlbGVjdGVkUm93c0NoYW5nZT17aGFuZGxlUm93c1NlbGVjdGVkfVxyXG4gICAgICAgIGNvbnRleHRBY3Rpb25zPXtjb250ZXh0QWN0aW9uc31cclxuICAgICAgICBjbGVhclNlbGVjdGVkUm93cz17dG9nZ2xlQ2xlYXJlZH1cclxuICAgICAgLz5cclxuICAgIDwvQmx1ZXByaW50Rm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsdWVwcmludFRhYmxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBEaWFsb2csXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dDb250ZW50LFxuICBTd2l0Y2gsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZEFycmF5IH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2JsdWVwcmludC12aWV3LXJlZHVjZXJcIjtcbmltcG9ydCB7IEJsdWVwcmludFZpZXdDb250ZXh0IH0gZnJvbSBcIi4vLi4vLi4vY29udGFpbmVyL3ZpZXcvYmx1ZXByaW50LXZpZXdcIjtcblxuY29uc3QgQ2hlY2tCb3hEaWFsb2cgPSAoeyBuYW1lLCB2YWx1ZUtleSwgZGlhbG9nTmFtZSwgbGFiZWwgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gUmVhY3QudXNlQ29udGV4dChCbHVlcHJpbnRWaWV3Q29udGV4dCk7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVElPTlMuRElBTE9HLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBbZGlhbG9nTmFtZV06IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVElPTlMuRElBTE9HLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBbZGlhbG9nTmFtZV06IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRyaWdnZXJCdXR0b24gPSAoXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVEaWFsb2dPcGVufT5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICBjb25zdCByZW5kZXJDaGVja2JveCA9IChhcnJheUhlbHBlcnMsIG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IG9wdGlvbi5uYW1lO1xuICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5rZXl9LSR7b3B0aW9uLm5hbWV9YDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICAgIGFycmF5SGVscGVycy5yZXBsYWNlKGluZGV4LCBvcHRpb24pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9Td2l0Y2g+XG4gICAgICAgIH1cbiAgICAgID48L0Zvcm1Db250cm9sTGFiZWw+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGb3JtID0gKGhhbmRsZVN1Ym1pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZpZWxkQXJyYXlcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHJlbmRlcj17KGFycmF5SGVscGVycykgPT4gKFxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAge3N0YXRlW3ZhbHVlS2V5XS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQ2hlY2tib3goYXJyYXlIZWxwZXJzLCBvcHRpb24sIGluZGV4KTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQXBwbHlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtyZW5kZXJUcmlnZ2VyQnV0dG9ufVxuXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e3N0YXRlLmRpYWxvZ1tkaWFsb2dOYW1lXX1cbiAgICAgICAgb25DbG9zZT17KCkgPT5cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkRJQUxPRyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgW2RpYWxvZ05hbWVdOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9e2RpYWxvZ05hbWUgKyBcIi1kaWFsb2dcIn0+e2xhYmVsfTwvRGlhbG9nVGl0bGU+XG5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17c3RhdGVbdmFsdWVLZXldfVxuICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IG9uRm9ybVN1Ym1pdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgIH0pID0+IHJlbmRlckZvcm0oaGFuZGxlU3VibWl0KX1cbiAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94RGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5cbmNvbnN0IENvcHlyaWdodCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAge1wiQ29weXJpZ2h0IMKpIFwifVxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxuICAgICAgICBIYWxwIEdhbWluZyB8IEhhbHAgR2FtaW5nIFRTXG4gICAgICA8L0xpbms+e1wiIFwifVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHtcIi5cIn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5cmlnaHQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHtcclxuICBjYWxjdWxhdGVTbWFsbFRhbGtFbmVyZ3ksXHJcbiAgY2FsY3VsYXRlU21hbGxUYWxrRWZmY2llbmN5RGF0YSxcclxufSBmcm9tIFwiLi8uLi9tb2RlbC9lbmVyZ3ktbW9kZWxcIjtcclxuaW1wb3J0IHtcclxuICBCYXJDaGFydCxcclxuICBCYXIsXHJcbiAgQ2VsbCxcclxuICBYQXhpcyxcclxuICBZQXhpcyxcclxuICBDYXJ0ZXNpYW5HcmlkLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJveCwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IENvbG9yR3JhZGllbnRHZW5lcmF0b3IgZnJvbSBcIi4vLi4vaGVscGVyL2NvbG9yLWdyYWRpZW50LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBFbmVyZ3lGb3JtU2NoZW1hIH0gZnJvbSBcIi4vLi4vc2NoZW1hL2VuZXJneS1mb3JtLXNjaGVtYVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRBbGxWYWx1ZXMsIEZPUk1BVF9QQVRURVJOIH0gZnJvbSBcIi4vLi4vY29tbW9uL2Zvcm1hdHRlclwiO1xyXG5pbXBvcnQgVHJhbnNpdGlvbkludHJvIGZyb20gXCIuLy4uL2NvbW1vbi90cmFuc2l0aW9uLWludHJvXCI7XHJcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiLi9mZWVkYmFja1wiO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gXCIuLi9oZWxwZXIvbnVtZXJhbC1oZWxwZXJcIjtcclxuaW1wb3J0IHsgdG9QZXJjZW50YWdlIH0gZnJvbSBcIi4vLi4vaGVscGVyL251bWVyYWwtaGVscGVyXCI7XHJcblxyXG5jb25zdCBjb2xvckdlbmVyYXRvciA9IENvbG9yR3JhZGllbnRHZW5lcmF0b3IoXCIjMUMzMDQxXCIsIFwiIzE4RjJCMlwiLCAxMDApO1xyXG5cclxuY29uc3QgRW5lcmd5Q2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudEVuZXJneSwgc2V0Q3VycmVudEVuZXJneV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbWF4RW5lcmd5LCBzZXRNYXhFbmVyZ3ldID0gdXNlU3RhdGUoMjAwKTtcclxuICBjb25zdCBbc21hbGxUYWxrRW5lcmd5LCBzZXRTbWFsbFRhbGtFbmVyZ3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzbWFsbFRhbGtEYXRhLCBzZXRTbWFsbFRhbGtEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNtYWxsVGFsa0VuZXJneShjYWxjdWxhdGVTbWFsbFRhbGtFbmVyZ3koY3VycmVudEVuZXJneSwgbWF4RW5lcmd5KSk7XHJcbiAgICBzZXRTbWFsbFRhbGtEYXRhKFxyXG4gICAgICBjYWxjdWxhdGVTbWFsbFRhbGtFZmZjaWVuY3lEYXRhKG1heEVuZXJneSwgbWF4RW5lcmd5IC8gMjApXHJcbiAgICApO1xyXG4gIH0sIFtjdXJyZW50RW5lcmd5LCBtYXhFbmVyZ3ldKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlsbENvbG9yID0gKHV2KSA9PiB7XHJcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcih1dik7XHJcbiAgICByZXR1cm4gXCIjXCIgKyBjb2xvckdlbmVyYXRvci5jb2xvckF0KGkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZvcm0gPSAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBjdXJyZW50RW5lcmd5OiAwLFxyXG4gICAgICAgIG1heEVuZXJneTogMjAwLFxyXG4gICAgICB9fVxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtFbmVyZ3lGb3JtU2NoZW1hfVxyXG4gICAgPlxyXG4gICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHZhbGlkYXRlRmllbGQgfSkgPT4gKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbT17MTJ9XHJcbiAgICAgICAgICAgICAgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IG1heExlbmd0aDogNiB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50RW5lcmd5XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgRW5lcmd5XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY3VycmVudEVuZXJneSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMuY3VycmVudEVuZXJneX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKFwiY3VycmVudEVuZXJneVwiKS50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRFbmVyZ3kodmFsdWVzLmN1cnJlbnRFbmVyZ3kpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG09ezEyfVxyXG4gICAgICAgICAgICAgIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtYXhMZW5ndGg6IDYgfX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWF4RW5lcmd5XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1heGltdW0gRW5lcmd5XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubWF4RW5lcmd5ID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5tYXhFbmVyZ3l9XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZChcIm1heEVuZXJneVwiKS50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1heEVuZXJneSh2YWx1ZXMubWF4RW5lcmd5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG5cclxuICBjb25zdCByZW5kZXJSZXN1bHQgPSAoXHJcbiAgICA8VHJhbnNpdGlvbkludHJvIGluPXt0cnVlfT5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cclxuICAgICAgICAgIHtzbWFsbFRhbGtFbmVyZ3kuaXNFZmZpY2llbnRcclxuICAgICAgICAgICAgPyBcIllvdSBzaG91bGQgc21hbGwgdGFsay5cIlxyXG4gICAgICAgICAgICA6IFwiRG8gbm90IHNtYWxsIHRhbGsuXCJ9XHJcbiAgICAgICAgICB7IXNtYWxsVGFsa0VuZXJneS5pc0VmZmljaWVudCAmJiBzbWFsbFRhbGtFbmVyZ3kuZmVlbGluZ0x1Y2t5XHJcbiAgICAgICAgICAgID8gXCJHaXZlIGl0IGEgc2hvdCBpZiB5b3UncmUgZmVlbGluZyBsdWNreS5cIlxyXG4gICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggdGV4dEFsaWduPVwibGVmdFwiIG09ezJ9PlxyXG4gICAgICAgIFRoZSBlZmZpY2llbmN5IHJhdGlvIGlze1wiIFwifVxyXG4gICAgICAgIDxiPnt0b1BlcmNlbnRhZ2Uoc21hbGxUYWxrRW5lcmd5LmVmZmljaWVuY3kpfTwvYj4uIFRoaXMgbWVhbiB0aGF0IGluIHRoZVxyXG4gICAgICAgIGxvbmcgcnVuIHlvdSB3aWxsIHByb2JhYmx5e1wiIFwifVxyXG4gICAgICAgIHtzbWFsbFRhbGtFbmVyZ3kuaXNFZmZpY2llbnRcclxuICAgICAgICAgID8gXCJnYWluIG1vcmUgdGhhbiB5b3UgbG9zZSFcIlxyXG4gICAgICAgICAgOiBcImxvc2UgbW9yZSB0aGFuIGdhaW4uXCJ9XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBJZiBzdWNjZXNzZnVsLCB5b3Ugd2lsbCBnYWlue1wiIFwifVxyXG4gICAgICAgICAgPGI+e3RvTnVtYmVyKHNtYWxsVGFsa0VuZXJneS5nYWluKX0gZW5lcmd5PC9iPi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBIb3dldmVyIHRoZSBOUEMgY2FuIGJhY2tmaXJlIGZvcntcIiBcIn1cclxuICAgICAgICAgIDxiPnt0b051bWJlcihzbWFsbFRhbGtFbmVyZ3kuYmFja2ZpcmUpfSBlbmVyZ3k8L2I+LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1RyYW5zaXRpb25JbnRybz5cclxuICApO1xyXG5cclxuICBjb25zdCByZW5kZXJSZXN1bHRDaGFydCA9IChcclxuICAgIDxCYXJDaGFydFxyXG4gICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgd2lkdGg9ezgwMH1cclxuICAgICAgZGF0YT17c21hbGxUYWxrRGF0YX1cclxuICAgICAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDMwLCBsZWZ0OiAyMCwgYm90dG9tOiA1IH19XHJcbiAgICA+XHJcbiAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XHJcbiAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIC8+XHJcbiAgICAgIDxZQXhpcyBkb21haW49e1swLCAxMDBdfSAvPlxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICA8TGVnZW5kIC8+XHJcbiAgICAgIDxCYXIgZGF0YUtleT1cImdhaW5cIiBmaWxsPVwiIzgyY2E5ZFwiPlxyXG4gICAgICAgIHtzbWFsbFRhbGtEYXRhLm1hcCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBnZXRGaWxsQ29sb3IoZGF0YS5nYWluKTtcclxuICAgICAgICAgIHJldHVybiA8Q2VsbCBrZXk9e2l9IGZpbGw9e2NvbG9yfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9CYXI+XHJcbiAgICA8L0JhckNoYXJ0PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoMj5TaG91bGQgSSBzbWFsbCB0YWxrIHRvIHRoaXMgTlBDPzwvaDI+XHJcbiAgICAgIHtyZW5kZXJGb3JtfVxyXG5cclxuICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICB7cmVuZGVyUmVzdWx0fVxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgIHtyZW5kZXJSZXN1bHRDaGFydH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj57RmVlZGJhY2t9PC9HcmlkPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW5lcmd5Q2FsY3VsYXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJhdGluZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIjtcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgU2VudGltZW50RGlzc2F0aXNmaWVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbnRpbWVudERpc3NhdGlzZmllZFwiO1xuaW1wb3J0IFNlbnRpbWVudFNhdGlzZmllZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW50aW1lbnRTYXRpc2ZpZWRcIjtcbmltcG9ydCBTZW50aW1lbnRWZXJ5U2F0aXNmaWVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbnRpbWVudFZlcnlTYXRpc2ZpZWRcIjtcblxuY29uc3QgY3VzdG9tSWNvbnMgPSB7XG4gIDE6IHtcbiAgICBpY29uOiA8U2VudGltZW50RGlzc2F0aXNmaWVkSWNvbiAvPixcbiAgICBsYWJlbDogXCJEaXNzYXRpc2ZpZWRcIixcbiAgfSxcbiAgMjoge1xuICAgIGljb246IDxTZW50aW1lbnRTYXRpc2ZpZWRJY29uIC8+LFxuICAgIGxhYmVsOiBcIk5ldXRyYWxcIixcbiAgfSxcbiAgMzoge1xuICAgIGljb246IDxTZW50aW1lbnRWZXJ5U2F0aXNmaWVkSWNvbiAvPixcbiAgICBsYWJlbDogXCJWZXJ5IFNhdGlzZmllZFwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gSWNvbkNvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IHZhbHVlLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gIHJldHVybiA8c3BhbiB7Li4ub3RoZXJ9PntjdXN0b21JY29uc1t2YWx1ZV0uaWNvbn08L3NwYW4+O1xufVxuXG5JY29uQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IEZlZWRiYWNrID0gKHsgbGFiZWwgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgaXNTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlbmRlclJhdGluZyA9ICgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICBGRUVEQkFDa1xuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxlZ2VuZFwiPntsYWJlbH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFJhdGluZ1xuICAgICAgICAgICAgbmFtZT1cImN1c3RvbWl6ZWQtaWNvbnNcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsyfVxuICAgICAgICAgICAgZ2V0TGFiZWxUZXh0PXsodmFsdWUpID0+IGN1c3RvbUljb25zW3ZhbHVlXS5sYWJlbH1cbiAgICAgICAgICAgIG1heD17M31cbiAgICAgICAgICAgIEljb25Db250YWluZXJDb21wb25lbnQ9e0ljb25Db250YWluZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2VBY3RpdmU9eyhldmVudCwgbmV3SG92ZXIpID0+IHtcbiAgICAgICAgICAgICAgc2V0SG92ZXIobmV3SG92ZXIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge3ZhbHVlICE9PSBudWxsICYmIChcbiAgICAgICAgICAgIDxCb3ggbWw9ezJ9PntjdXN0b21JY29uc1tob3ZlciAhPT0gLTEgPyBob3ZlciA6IHZhbHVlXS5sYWJlbH08L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcblxuICAgIC8vIHJldHVybiA8cD5UaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shPC9wPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtyZW5kZXJSYXRpbmd9XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZpZWxkc2V0XCIgbWI9ezN9IGJvcmRlckNvbG9yPVwidHJhbnNwYXJlbnRcIj48L0JveD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIE0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TS5UeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPk5vdCBGb3VuZDwvTS5UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPE0uVHlwb2dyYXBoeSB2YXJpYW50PVwicFwiPlxyXG4gICAgICAgIE9vcHMsIHRoZSByZXF1ZXN0ZWQgcGFnZSBkb2VzIG5vdCBleGlzdCBvciBpcyBicm9rZW4uXHJcbiAgICAgIDwvTS5UeXBvZ3JhcGh5PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0ICogYXMgTSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgU3RhY2tSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2VyL3N0YWNrLXJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSBcIi4vLi4vY29tcG9uZW50L2NvcHlyaWdodFwiO1xyXG5pbXBvcnQgSG9tZVJvdXRlIGZyb20gXCIuLi9yb3V0ZS9Ib21lUm91dGVcIjtcclxuaW1wb3J0IEhvbWVMaW5rIGZyb20gXCIuLi9yb3V0ZS9Ib21lTGlua1wiO1xyXG5cclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi4vdGhlbWUvZXhhbXBsZS10aGVtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2VudGx5Vmlld2VkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKHsgdGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBTdGFja1JlZHVjZXIuUkVEVUNFUixcclxuICAgIFN0YWNrUmVkdWNlci5JTklUSUFMX1NUQVRFXHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3QgW2NsYXNzZXMsIHNldENsYXNzZXNdID0gUmVhY3QudXNlU3RhdGUodXNlU3R5bGVzKCkpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGRyYXdlciA9IChcclxuICAgIDxNLkRyYXdlclxyXG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZHJhd2VyUGFwZXIsICFvcGVuICYmIGNsYXNzZXMuZHJhd2VyUGFwZXJDbG9zZSksXHJcbiAgICAgIH19XHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJJY29ufT5cclxuICAgICAgICA8TS5JY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICA8L00uSWNvbkJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNLkRpdmlkZXIgLz5cclxuICAgICAgPEhvbWVMaW5rPjwvSG9tZUxpbms+XHJcbiAgICAgIDxNLkRpdmlkZXIgLz5cclxuICAgICAgPE0uTGlzdD5Tb21lIG1vcmUgbGlzdCBpdGVtczwvTS5MaXN0PlxyXG4gICAgPC9NLkRyYXdlcj5cclxuICApO1xyXG5cclxuICBjb25zdCBhcHBiYXIgPSAoXHJcbiAgICA8TS5BcHBCYXJcclxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmFwcEJhciwgb3BlbiAmJiBjbGFzc2VzLmFwcEJhclNoaWZ0KX1cclxuICAgID5cclxuICAgICAgPE0uVG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPE0uSWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIG9wZW4gJiYgY2xhc3Nlcy5tZW51QnV0dG9uSGlkZGVuKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUljb24+PC9NZW51SWNvbj5cclxuICAgICAgICA8L00uSWNvbkJ1dHRvbj5cclxuICAgICAgICA8TS5UeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L00uVHlwb2dyYXBoeT5cclxuICAgICAgICA8TS5JY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgPE0uQmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgIDwvTS5CYWRnZT5cclxuICAgICAgICA8L00uSWNvbkJ1dHRvbj5cclxuICAgICAgPC9NLlRvb2xiYXI+XHJcbiAgICA8L00uQXBwQmFyPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGFzaGJvYXJkVGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzZXMgfX0+XHJcbiAgICAgIDxSZWNlbnRseVZpZXdlZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPE0uQ3NzQmFzZWxpbmUgLz5cclxuXHJcbiAgICAgICAgICB7YXBwYmFyfVxyXG4gICAgICAgICAge2RyYXdlcn1cclxuXHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhclNwYWNlcn0gLz5cclxuICAgICAgICAgICAgPE0uQ29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8TS5HcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgIDxNLkdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8TS5QYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb21lUm91dGUgLz5cclxuICAgICAgICAgICAgICAgICAgPC9NLlBhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9NLkdyaWQ+XHJcbiAgICAgICAgICAgICAgPC9NLkdyaWQ+XHJcblxyXG4gICAgICAgICAgICAgIDxNLkJveCBwdD17NH0+XHJcbiAgICAgICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICAgICAgPC9NLkJveD5cclxuICAgICAgICAgICAgPC9NLkNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWNlbnRseVZpZXdlZENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0Rhc2hib2FyZFRoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIjtcclxuaW1wb3J0IFNoYXJlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMCxcclxuICAgIHBhZGRpbmdUb3A6IFwiNTYuMjUlXCIsIC8vIDE2OjlcclxuICB9LFxyXG4gIGV4cGFuZDoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ0cmFuc2Zvcm1cIiwge1xyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3QsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGV4cGFuZE9wZW46IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJlZFs1MDBdLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEV4cGFuZGVkQ2FyZCA9ICh7IGNoaWxkcmVuLCBib2R5LCBhY3Rpb24sIHRpdGxlLCBzdWJ0aXRsZX0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cGFuZENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtzdWJ0aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG5cclxuICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCI+XHJcbiAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaGFyZVwiPlxyXG4gICAgICAgICAgPFNoYXJlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZXhwYW5kLCB7XHJcbiAgICAgICAgICAgIFtjbGFzc2VzLmV4cGFuZE9wZW5dOiBleHBhbmRlZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwYW5kQ2xpY2t9XHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtleHBhbmRlZH1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbj5IZXJlJ3Mgd2h5Li4uPC9FeHBhbmRNb3JlSWNvbj5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgIDxDb2xsYXBzZSBpbj17ZXhwYW5kZWR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+PC9DYXJkQ29udGVudD5cclxuICAgICAgPC9Db2xsYXBzZT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kZWRDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVEFCTEVfSEVBREVSIH0gZnJvbSBcIi4uL21vZGVsL2JsdWVwcmludC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBmZXRjaEJsdWVwcmludCB9IGZyb20gXCIuLi9yZXBvc2l0b3J5L0JsdWVwcmludFJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBmZXRjaEJsdWVwcmludEJ5SWRzIH0gZnJvbSBcIi4vLi4vcmVwb3NpdG9yeS9CbHVlcHJpbnRSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IGZldGNoVXNlckZhdm9yaXRlIH0gZnJvbSAnLi8uLi9yZXBvc2l0b3J5L0Zhdm9yaXRlUmVwb3NpdG9yeSc7XHJcblxyXG5jb25zdCBGYXZvcml0ZVZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRhYmxlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaWRzID0gYXdhaXQgZmV0Y2hVc2VyRmF2b3JpdGUoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hCbHVlcHJpbnRCeUlkcyhpZHMpO1xyXG5cclxuICAgIHNldFRhYmxlRGF0YShyZXNwb25zZSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUYWJsZURhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoMj5GYXZvcml0ZSBMaXN0PC9oMj5cclxuICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgIGNvbHVtbnM9e1RBQkxFX0hFQURFUn1cclxuICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgZGVmYXVsdFNvcnRGaWVsZD1cInZhbHVlXCJcclxuICAgICAgICBoaWdobGlnaHRPbkhvdmVyXHJcbiAgICAgICAgcGVyc2lzdFRhYmxlSGVhZFxyXG4gICAgICAgIHByb2dyZXNzUGVuZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgIHByb2dyZXNzQ29tcG9uZW50PXtcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezc1fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdGFibGVSb3dzXHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZVZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgRm9ybSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwiLi8uLi8uLi9zZXJ2aWNlL3NlY3VyaXR5L1VzZXJBdXRoZW50aWNhdGlvblwiO1xyXG5cclxuY29uc3QgdXNlckF1dGggPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHVzZXJuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbn0pO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0F1dGhvcml6ZWQsIHNldEF1dGhvcml6ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBBdXRoZW50aWNhdGVVc2VyKHZhbHVlcyk7XHJcbiAgICBzZXRBdXRob3JpemVkKHRydWUpO1xyXG4gICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJMb2dpbk1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2dnZWQgaW4hPC9wPjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7cmVuZGVyTG9naW5NZXNzYWdlKCl9XHJcblxyXG4gICAgICA8Rm9ybS5Gb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dXNlckF1dGh9XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzLCBhY3Rpb25zKX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyB2YWx1ZXMsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCB2YWxpZGF0ZUZpZWxkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0uRm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhY3Rpb249XCIvYXBpL2xvZ2luXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtYXhMZW5ndGg6IDY0IH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudXNlcm5hbWUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICA+PC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICBhcz17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWF4TGVuZ3RoOiA2NCB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wYXNzd29yZCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgID48L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm0uRm9ybWlrPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgTSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJsdWVwcmludFRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnQvYmx1ZXByaW50L2JsdWVwcmludC10YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBCUFZSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2VyL2JsdWVwcmludC12aWV3LXJlZHVjZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hJdGVtVHlwZXMgfSBmcm9tIFwiLi4vLi4vcmVwb3NpdG9yeS9CbHVlcHJpbnRSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCBDaGVja0JveERpYWxvZyBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnQvYmx1ZXByaW50L2NoZWNrYm94LWRpYWxvZ1wiO1xyXG5pbXBvcnQgQmx1ZXByaW50RGV0YWlscyBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnQvYmx1ZXByaW50L2JsdWVwcmludC1kZXRhaWxzXCI7XHJcbmltcG9ydCBFeHBhbmRlZENhcmQgZnJvbSBcIi4vLi4vZXhwYW5kZWQtY2FyZFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vZGFzaGJvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmx1ZXByaW50Vmlld0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgQmx1ZXByaW50VmlldyA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICBCUFZSZWR1Y2VyLlNUQVRFUyxcclxuICAgIEJQVlJlZHVjZXIuSU5JVElBTF9TVEFURVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gUmVhY3QudXNlQ29udGV4dChEYXNoYm9hcmRUaGVtZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBbdGFibGVGaWx0ZXJzLCBzZXRUYWJsZUZpbHRlcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdGllcnM6IFtdLFxyXG4gICAgaXRlbVR5cGVzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbVR5cGVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEJQVlJlZHVjZXIuQUNUSU9OUy5VUERBVEVfSVRFTV9MSVNULFxyXG4gICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbdGFibGVGaWx0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbHRlckRpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPENoZWNrQm94RGlhbG9nXHJcbiAgICAgICAgICBuYW1lPVwiaXRlbVR5cGVcIlxyXG4gICAgICAgICAgdmFsdWVLZXk9XCJpdGVtVHlwZXNcIlxyXG4gICAgICAgICAgZGlhbG9nTmFtZT1cIml0ZW1UeXBlXCJcclxuICAgICAgICAgIGxhYmVsPVwiSXRlbSBUeXBlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDaGVja0JveERpYWxvZ1xyXG4gICAgICAgICAgbmFtZT1cInRpZXJzXCJcclxuICAgICAgICAgIHZhbHVlS2V5PVwidGllcnNcIlxyXG4gICAgICAgICAgZGlhbG9nTmFtZT1cInRpZXJMaXN0XCJcclxuICAgICAgICAgIGxhYmVsPVwiVGllcnNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRUYWJsZUZpbHRlcnMoe1xyXG4gICAgICB0aWVyczogc3RhdGUudGllcnMuZmlsdGVyKCh0aWVyKSA9PiB0aWVyLnZhbHVlID09PSB0cnVlKSxcclxuICAgICAgaXRlbVR5cGVzOiBzdGF0ZS5pdGVtVHlwZXMuZmlsdGVyKCh0aWVyKSA9PiB0aWVyLnZhbHVlID09PSB0cnVlKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qmx1ZXByaW50Vmlld0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICA8TS5HcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgIDxFeHBhbmRlZENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfVxyXG4gICAgICAgICAgYm9keT17PE0uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaFN1Ym1pdH0+U2VhcmNoPC9NLkJ1dHRvbj59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JlbmRlckZpbHRlckRpYWxvZygpfVxyXG4gICAgICAgIDwvRXhwYW5kZWRDYXJkPlxyXG4gICAgICA8L00uR3JpZD5cclxuXHJcbiAgICAgIDxNLkdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgIDxCbHVlcHJpbnRUYWJsZVxyXG4gICAgICAgICAgdGllcnM9e3RhYmxlRmlsdGVycy50aWVyc31cclxuICAgICAgICAgIGl0ZW1UeXBlcz17dGFibGVGaWx0ZXJzLml0ZW1UeXBlc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L00uR3JpZD5cclxuXHJcbiAgICAgIDxNLkdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT4qIFZhbHVlOkV4cCwgaGlnaGVyIGlzIGJldHRlci48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvTS5HcmlkPlxyXG4gICAgPC9CbHVlcHJpbnRWaWV3Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmx1ZXByaW50VmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBNIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgQmx1ZXByaW50Rm9ybUVkaXQgZnJvbSBcIi4uL2NvbXBvbmVudC9ibHVlcHJpbnQvYmx1ZXByaW50LWZvcm0tZWRpdFwiO1xyXG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSBcIi4uL3JlZHVjZXIvYmx1ZXByaW50LWVkaXQtcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBCbHVlcHJpbnRGb3JtQ29udGV4dCB9IGZyb20gXCIuLy4uL2NvbXBvbmVudC9ibHVlcHJpbnQvYmx1ZXByaW50LXRhYmxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmx1ZXByaW50Rm9ybU1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEJsdWVwcmludEZvcm1Db250ZXh0KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQWN0aW9ucyA9IChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE0uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5ESUFMT0csXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQ2xvc2VcclxuICAgICAgPC9NLkJ1dHRvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE0uQnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRElBTE9HLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB0cnVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICBFZGl0IDxFZGl0SWNvbiAvPlxyXG4gICAgICA8L00uQnV0dG9uPlxyXG4gICAgICA8TS5EaWFsb2dcclxuICAgICAgICBvcGVuPXtzdGF0ZS5kaWFsb2d9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT5cclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5ESUFMT0csXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgIG1heFdpZHRoPVwibGdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPE0uRGlhbG9nVGl0bGU+RWRpdCBNYXJrZXQgVmFsdWU8L00uRGlhbG9nVGl0bGU+XHJcblxyXG4gICAgICAgIDxNLkRpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Qmx1ZXByaW50Rm9ybUVkaXQgYmx1ZXByaW50cz17c3RhdGUuYmx1ZXByaW50c30+PC9CbHVlcHJpbnRGb3JtRWRpdD5cclxuICAgICAgICA8L00uRGlhbG9nQ29udGVudD5cclxuXHJcbiAgICAgICAgPE0uRGlhbG9nQWN0aW9ucz57cmVuZGVyQWN0aW9uc308L00uRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9NLkRpYWxvZz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsdWVwcmludEZvcm1Nb2RhbDtcclxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAncmFpbmJvd3Zpcy5qcyc7XHJcblxyXG5jb25zdCBDb2xvckdyYWRpZW50R2VuZXJhdG9yID0gKGNvbG9yRnJvbSwgY29sb3JUbywgc2l6ZSkgPT4ge1xyXG4gICAgY29uc3QgcmFpbmJvdyA9IG5ldyBDb2xvcigpO1xyXG4gICAgcmFpbmJvdy5zZXRTcGVjdHJ1bShjb2xvckZyb20sIGNvbG9yVG8pO1xyXG4gICAgcmFpbmJvdy5zZXROdW1iZXJSYW5nZSgwLCBzaXplKTtcclxuXHJcbiAgICByZXR1cm4gcmFpbmJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JHcmFkaWVudEdlbmVyYXRvcjsiLCJpbXBvcnQgbnVtZXJhbCBmcm9tIFwibnVtZXJhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlYWRhYmxlID0ge1xyXG4gIG51bWJlcjogXCIwLDBcIixcclxuICBwZXJjZW50YWdlOiBcIjAsMC4wMFwiLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGVyY2VudGFnZUZvcm1hdCA9IChwcmVjaXNpb24gPSAzLCBzZXBlcmF0b3IgPSBcIixcIikgPT4ge1xyXG4gIGNvbnN0IHByZWNpc2lvblN5bWJvbCA9IFwiMFwiO1xyXG4gIHJldHVybiBgMCR7c2VwZXJhdG9yfTAuJHtwcmVjaXNpb25TeW1ib2wucmVwZWF0KHByZWNpc2lvbil9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b051bWJlciA9ICh2YWx1ZSkgPT4ge1xyXG4gIHJldHVybiBudW1lcmFsKHZhbHVlKS5mb3JtYXQocmVhZGFibGUubnVtYmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b1BlcmNlbnRhZ2UgPSAodmFsdWUsIHByZWNpc2lvbikgPT4ge1xyXG4gIHJldHVybiBudW1lcmFsKHZhbHVlICogMTAwKS5mb3JtYXQoZ2V0UGVyY2VudGFnZUZvcm1hdChwcmVjaXNpb24pKSArIFwiJVwiO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gXCIuL3NlcnZpY2VXb3JrZXJcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxBcHAgLz5cbiAgPC9Ccm93c2VyUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuLy8gc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XG4iLCJpbXBvcnQgeyB0b051bWJlciwgdG9QZXJjZW50YWdlIH0gZnJvbSBcIi4uL2hlbHBlci9udW1lcmFsLWhlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgVEFCTEVfSEVBREVSID0gW1xuICB7XG4gICAgbmFtZTogXCJOYW1lXCIsXG4gICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHJvdy5uYW1lLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUeXBlXCIsXG4gICAgc2VsZWN0b3I6IFwidHlwZVwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHJvdy50eXBlLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaWVyXCIsXG4gICAgc2VsZWN0b3I6IFwidGllclwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHJvdy50aWVyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYXNlIFZhbHVlXCIsXG4gICAgc2VsZWN0b3I6IFwidmFsdWVcIixcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICBjZWxsOiAocm93KSA9PiB0b051bWJlcihyb3cudmFsdWUpLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNYXJrZXQgVmFsdWVcIixcbiAgICBzZWxlY3RvcjogXCJtYXJrZXRWYWx1ZVwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHRvTnVtYmVyKHJvdy5tYXJrZXRWYWx1ZSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1lcmNoYW50IEV4cFwiLFxuICAgIHNlbGVjdG9yOiBcIm1lcmNoYW50WHBcIixcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICBjZWxsOiAocm93KSA9PiB0b051bWJlcihyb3cubWVyY2hhbnRYcCksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbHVlOkV4cFwiLFxuICAgIHNlbGVjdG9yOiBcInJhdGlvVmFsdWVYcFwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHRvUGVyY2VudGFnZShyb3cucmF0aW9WYWx1ZVhwKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW5lcmd5OlNwZWVkIFVwXCIsXG4gICAgc2VsZWN0b3I6IFwicmF0aW9TcGVlZFVwVGltZVwiLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIGNlbGw6IChyb3cpID0+IHRvUGVyY2VudGFnZShyb3cucmF0aW9TcGVlZFVwVGltZSksXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVElFUl9MSVNUID0gW1xuICB7IG5hbWU6IFwiMVwiLCB2YWx1ZTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcIjJcIiwgdmFsdWU6IGZhbHNlIH0sXG4gIHsgbmFtZTogXCIzXCIsIHZhbHVlOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiNFwiLCB2YWx1ZTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcIjVcIiwgdmFsdWU6IGZhbHNlIH0sXG4gIHsgbmFtZTogXCI2XCIsIHZhbHVlOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiN1wiLCB2YWx1ZTogZmFsc2UgfSxcbiAgeyBuYW1lOiBcIjhcIiwgdmFsdWU6IGZhbHNlIH0sXG4gIHsgbmFtZTogXCI5XCIsIHZhbHVlOiBmYWxzZSB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IElURU1fVFlQRV9HUk9VUCA9IHtcbiAgYWNjZXNzb3JpZXM6IHtcbiAgICBsYWJlbDogXCJBY2Nlc3Nvcmllc1wiLFxuICAgIHZhbHVlOiBbXCJTSElFTERcIiwgXCJSSU5HXCJdLFxuICB9LFxuICBhcm1vcjoge1xuICAgIGxhYmVsOiBcIkFybW9yXCIsXG4gICAgdmFsdWU6IFtcbiAgICAgIFwiSEVBVlkgQVJNT1JcIixcbiAgICAgIFwiTElHSFQgQVJNT1JcIixcbiAgICAgIFwiQ0xPVEhFU1wiLFxuICAgICAgXCJIRUxNRVRcIixcbiAgICAgIFwiUk9HVUUgSEFUXCIsXG4gICAgICBcIk1BR0lDSUFOIEhBVFwiLFxuICAgICAgXCJHQVVOVExFVFNcIixcbiAgICAgIFwiR0xPVkVTXCIsXG4gICAgICBcIkhFQVZZIEZPT1RXRUFSXCIsXG4gICAgICBcIkxJR0hUIEZPT1RXRUFSXCIsXG4gICAgXSxcbiAgfSxcbiAgZW5jaGFudG1lbnQ6IHtcbiAgICBsYWJlbDogXCJFbmNoYW50bWVudFwiLFxuICAgIHZhbHVlOiBbXSxcbiAgfSxcbiAgaGVyYmFsOiB7XG4gICAgbGFiZWw6IFwiSGVyYmFsL1BvdGlvblwiLFxuICAgIHZhbHVlOiBbXCJQT1RJT05cIiwgXCJTUEVMTFwiLCBcIkhFUkJBTCBNRURJQ0lORVwiXSxcbiAgfSxcbiAgd2VhcG9uOiB7XG4gICAgbGFiZWw6IFwiV2VhcG9uXCIsXG4gICAgdmFsdWU6IFtcbiAgICAgIFwiU1dPUkRcIixcbiAgICAgIFwiQVhFXCIsXG4gICAgICBcIkRBR0dFUlwiLFxuICAgICAgXCJNQUNFXCIsXG4gICAgICBcIlNQRUFSXCIsXG4gICAgICBcIkJPV1wiLFxuICAgICAgXCJTVEFGRlwiLFxuICAgICAgXCJXQU5EXCIsXG4gICAgICBcIkNST1NTQk9XXCIsXG4gICAgICBcIkdVTlwiLFxuICAgIF0sXG4gIH0sXG59O1xuIiwiY29uc3QgU01BTExfVEFMS19TVUNDRVNTX1JBVEUgPSAwLjc1O1xyXG5jb25zdCBMVUNLX1JBVEUgPSAwLjg7XHJcbmNvbnN0IERJU0NPVU5UX0NPU1RfUkFURSA9IDAuNTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYW1vdW50IG9mIGVuZXJneSBnYWluZWQuXHJcbiAqL1xyXG5jb25zdCBjYWxjdWxhdGVFbmVyZ3lHYWluID0gKGN1cnJlbnRFbmVyZ3ksIG1heEVuZXJneSkgPT4ge1xyXG4gIGN1cnJlbnRFbmVyZ3kgPSBwYXJzZUludChjdXJyZW50RW5lcmd5KTtcclxuICBtYXhFbmVyZ3kgPSBwYXJzZUludChtYXhFbmVyZ3kpO1xyXG4gIHJldHVybiBjdXJyZW50RW5lcmd5ID49IG1heEVuZXJneSA/IDAgOiAobWF4RW5lcmd5IC0gY3VycmVudEVuZXJneSkgLyAxMDtcclxufTtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZUJhY2tmaXJlRW5lcmd5ID0gKGN1cnJlbnRFbmVyZ3ksIG1heEVuZXJneSkgPT4ge1xyXG4gIGlmIChtYXhFbmVyZ3kgPiAwKSB7XHJcbiAgICBjb25zdCBtYXhCYWNrZmlyZUVuZXJneSA9IE1hdGguZmxvb3IobWF4RW5lcmd5IC8gNyk7XHJcbiAgICBjb25zdCBiYWNrZmlyZUVuZXJneSA9XHJcbiAgICAgIG1heEJhY2tmaXJlRW5lcmd5ID49IGN1cnJlbnRFbmVyZ3kgPyBjdXJyZW50RW5lcmd5IDogbWF4QmFja2ZpcmVFbmVyZ3k7XHJcblxyXG4gICAgcmV0dXJuIGJhY2tmaXJlRW5lcmd5O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDA7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIG1heGltdW0gYW1vdW50IG9mIG9mIGVuZXJneSB0byBiZSBnYWluZWQgaXMgYmFzZWQgb24geW91ciBtYXggZW5lcmd5LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG1heEVuZXJneVxyXG4gKi9cclxuY29uc3QgY2FsY3VsYXRlTWF4RW5lcmd5R2FpbiA9IChtYXhFbmVyZ3kpID0+IHtcclxuICBpZiAobWF4RW5lcmd5IDwgMSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF4RW5lcmd5IC8gMTA7XHJcbn07XHJcblxyXG5jb25zdCBjYWxjdWxhdGVGaXJzdEF0dGVtcHRFZmZpY2llbmN5ID0gKFxyXG4gIHN1Y2Nlc3NSYXRlLFxyXG4gIGdhaW5FbmVyZ3ksXHJcbiAgYmFja2ZpcmVFbmVyZ3lcclxuKSA9PiB7XHJcbiAgY29uc3QgZ2FpbkVmZmljaWVuY3kgPSBnYWluRW5lcmd5ICogc3VjY2Vzc1JhdGU7XHJcbiAgY29uc3QgYmFja2ZpcmVFZmZpY2llbmN5ID0gYmFja2ZpcmVFbmVyZ3kgKiAoMSAtIHN1Y2Nlc3NSYXRlKTtcclxuXHJcbiAgY29uc3QgZXhhY3RFZmZpY2llbmN5ID1cclxuICAgIGdhaW5FZmZpY2llbmN5IC8gKGdhaW5FZmZpY2llbmN5ICsgYmFja2ZpcmVFZmZpY2llbmN5KTtcclxuXHJcbiAgcmV0dXJuIGV4YWN0RWZmaWNpZW5jeSAqIDEwMDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVTbWFsbFRhbGtFbmVyZ3kgPSAoY3VycmVudEVuZXJneSwgbWF4RW5lcmd5KSA9PiB7XHJcbiAgY29uc3QgZ2FpbiA9IGNhbGN1bGF0ZUVuZXJneUdhaW4oY3VycmVudEVuZXJneSwgbWF4RW5lcmd5KTtcclxuICBjb25zdCBtYXhHYWluID0gY2FsY3VsYXRlTWF4RW5lcmd5R2FpbihtYXhFbmVyZ3kpO1xyXG4gIGNvbnN0IGJhY2tmaXJlID0gY2FsY3VsYXRlQmFja2ZpcmVFbmVyZ3koY3VycmVudEVuZXJneSwgbWF4RW5lcmd5KTtcclxuICBjb25zdCBlZmZpY2llbmN5ID0gY2FsY3VsYXRlRmlyc3RBdHRlbXB0RWZmaWNpZW5jeShcclxuICAgIFNNQUxMX1RBTEtfU1VDQ0VTU19SQVRFLFxyXG4gICAgZ2FpbixcclxuICAgIGJhY2tmaXJlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbHVja0VmZmljaWVuY3kgPSBjYWxjdWxhdGVGaXJzdEF0dGVtcHRFZmZpY2llbmN5KFxyXG4gICAgTFVDS19SQVRFLFxyXG4gICAgZ2FpbixcclxuICAgIGJhY2tmaXJlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJlbnRFbmVyZ3ksXHJcbiAgICBtYXhFbmVyZ3ksXHJcbiAgICBnYWluLFxyXG4gICAgbWF4R2FpbixcclxuICAgIGJhY2tmaXJlLFxyXG4gICAgaXNFZmZpY2llbnQ6IGVmZmljaWVuY3kgPiA0OS45OSxcclxuICAgIGZlZWxpbmdMdWNreTogbHVja0VmZmljaWVuY3kgPiA0OS45OSxcclxuICAgIGVmZmljaWVuY3ksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVTbWFsbFRhbGtFZmZjaWVuY3lEYXRhID0gKG1heEVuZXJneSwgc3RlcFNpemUpID0+IHtcclxuICBtYXhFbmVyZ3kgPSBwYXJzZUludChtYXhFbmVyZ3kpO1xyXG4gIHN0ZXBTaXplID0gcGFyc2VJbnQoc3RlcFNpemUpO1xyXG5cclxuICBsZXQgZGF0YSA9IFtdO1xyXG4gIGxldCBzbWFsbFRhbGtFbmVyZ3kgPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4RW5lcmd5OyBpICs9IHN0ZXBTaXplKSB7XHJcbiAgICBzbWFsbFRhbGtFbmVyZ3kgPSBjYWxjdWxhdGVTbWFsbFRhbGtFbmVyZ3koaSwgbWF4RW5lcmd5KTtcclxuXHJcbiAgICBkYXRhLnB1c2goe1xyXG4gICAgICBuYW1lOiBpLFxyXG4gICAgICBiYWNrZmlyZTogMTAwIC0gc21hbGxUYWxrRW5lcmd5LmVmZmljaWVuY3ksXHJcbiAgICAgIGdhaW46IHNtYWxsVGFsa0VuZXJneS5lZmZpY2llbmN5LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIiwiaW1wb3J0IHsgcGF0Y2hCbHVlcHJpbnQgfSBmcm9tIFwiLi4vcmVwb3NpdG9yeS9CbHVlcHJpbnRSZXBvc2l0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcclxuICBTVUJNSVRUSU5HOiBcInNldFN1Ym1pdHRpbmdcIixcclxuICBTVUJNSVQ6IFwiZm9ybVN1Ym1pdFwiLFxyXG4gIFJFU0VUOiBcInJlc2V0XCIsXHJcbiAgRElBTE9HOiBcInVwZGF0ZURpYWxvZ1wiLFxyXG4gIFVQREFURV9CTFVFUFJJTlRTOiBcInVwZGF0ZUJsdWVwcmludHNcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGRpYWxvZzogZmFsc2UsXHJcbiAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICBibHVlcHJpbnRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFURVMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05TLlVQREFURV9CTFVFUFJJTlRTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJsdWVwcmludHM6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTlMuU1VCTUlUVElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N1Ym1pdHRpbmc6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTlMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiBJTklUSUFMX1NUQVRFO1xyXG4gICAgY2FzZSBBQ1RJT05TLkRJQUxPRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkaWFsb2c6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTlMuU1VCTUlUOlxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBheWxvYWQuYmx1ZXByaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBheWxvYWQuYmx1ZXByaW50c1tpXSkgIT09XHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5ibHVlcHJpbnRzW2ldKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcGF0Y2hCbHVlcHJpbnQocGF5bG9hZC5ibHVlcHJpbnRzW2ldKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXRjaGluZzogJyArIHBheWxvYWQuYmx1ZXByaW50c1tpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgVElFUl9MSVNUIH0gZnJvbSBcIi4vLi4vbW9kZWwvYmx1ZXByaW50LW1vZGVsXCI7XHJcbmltcG9ydCB7IGZldGNoSXRlbVR5cGVzIH0gZnJvbSBcIi4uL3JlcG9zaXRvcnkvQmx1ZXByaW50UmVwb3NpdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XHJcbiAgVVBEQVRFX1RJRVJfTElTVDogXCJ1cGRhdGVUaWVyTGlzdFwiLFxyXG4gIFVQREFURV9JVEVNX0xJU1Q6IFwidXBkYXRlSXRlbUxpc3RcIixcclxuICBSRVNFVDogXCJyZXNldFwiLFxyXG4gIERJQUxPRzogXCJ1cGRhdGVEaWFsb2dcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIHRpZXJzOiBUSUVSX0xJU1QsXHJcbiAgaXRlbVR5cGVzOiBbXSxcclxuICBkaWFsb2c6IHtcclxuICAgIGl0ZW1UeXBlOiBmYWxzZSxcclxuICAgIHRpZXJMaXN0OiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0RmlsdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldEl0ZW1UeXBlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1UeXBlcyA9IGF3YWl0IGZldGNoSXRlbVR5cGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGllcnM6IFRJRVJfTElTVCxcclxuICAgICAgaXRlbVR5cGVzOiBpdGVtVHlwZXMsXHJcbiAgICAgIGRpYWxvZzoge1xyXG4gICAgICAgIGl0ZW1UeXBlOiBmYWxzZSxcclxuICAgICAgICB0aWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gZ2V0SXRlbVR5cGVzKCk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFURVMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT05TLlVQREFURV9USUVSX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGllcnM6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTlMuVVBEQVRFX0lURU1fTElTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpdGVtVHlwZXM6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTlMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiByZXNldEZpbHRlcigpO1xyXG4gICAgY2FzZSBBQ1RJT05TLkRJQUxPRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkaWFsb2c6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRpYWxvZyxcclxuICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtcclxuICB2YWxpZGF0ZUFjdGlvbixcclxuICB0aHJvd0ludmFsaWRTdGF0ZSxcclxuICByZXF1aXJlUGF5bG9hZCxcclxufSBmcm9tIFwiLi8uLi9jb21tb24vYWN0aW9uLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XHJcbiAgUFVTSDogXCJQVVNIXCIsXHJcbiAgUE9QOiBcIlBPUFwiLFxyXG4gIENMRUFSOiBcIkNMRUFSXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBkYXRhOiBbXSxcclxuICBzaXplOiAwLFxyXG4gIGNhcGFjaXR5OiAxMCxcclxufTtcclxuXHJcbmNvbnN0IFN0YWNrID0ge1xyXG4gIHB1c2g6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHN0YXRlLnNpemUgKyAxLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHBvcDogKHN0YXRlKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUuZGF0YS5zaXplID4gMCkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuZGF0YS5zcGxpY2UoLTEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFRFVDRVIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHZhbGlkYXRlQWN0aW9uKGFjdGlvbiwgQUNUSU9OUyk7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUNUSU9OUy5QVVNIOlxyXG4gICAgICByZXF1aXJlUGF5bG9hZChhY3Rpb24pO1xyXG4gICAgICBTdGFjay5wdXNoKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgY2FzZSBBQ1RJT05TLlBPUDpcclxuICAgICAgcmVxdWlyZVBheWxvYWQoYWN0aW9uKTtcclxuICAgICAgU3RhY2sucG9wKHN0YXRlKTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cclxuICAgIGNhc2UgQUNUSU9OUy5DTEVBUjpcclxuICAgICAgLy8gUGF5bG9hZCBzaG91bGQgYmUgYSBmdW5jdGlvbiBbVE9ET11cclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkICYmIHN0YXRlLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN0YXRlLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQoaXRlbSwgaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBJTklUSUFMX1NUQVRFO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93SW52YWxpZFN0YXRlKHN0YXRlLCBhY3Rpb24sIF9fZmlsZW5hbWUpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQSVBFX0NBTENVTEFUSU9OIH0gZnJvbSBcIi4uL21vZGVsL2JsdWVwcmludC1tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsdWVwcmludCA9IChpZCwgbmV3RGF0YSkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGllclBhcmFtcyA9ICh0aWVycykgPT4ge1xyXG4gIHJldHVybiB0aWVyc1xyXG4gICAgLmZpbHRlcigodGllcikgPT4gdGllci52YWx1ZSA9PT0gdHJ1ZSlcclxuICAgIC5yZWR1Y2UoKHBhcmFtcywgdGllcikgPT4gcGFyYW1zICsgYCZ0aWVyW109JHt0aWVyLm5hbWV9YCwgXCJcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Qmx1ZXByaW50VHlwZVBhcmFtcyA9ICh0eXBlcykgPT4ge1xyXG4gIHJldHVybiB0eXBlc1xyXG4gICAgLmZpbHRlcigodHlwZSkgPT4gdHlwZS52YWx1ZSA9PT0gdHJ1ZSlcclxuICAgIC5yZWR1Y2UoKHBhcmFtcywgdHlwZSkgPT4gcGFyYW1zICsgYCZ0eXBlW109JHt0eXBlLm5hbWV9YCwgXCJcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHsqfSB0aWVyc1xyXG4gKiBAcGFyYW0geyp9IHBhZ2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJsdWVwcmludHMgPSBhc3luYyAodGllcnMsIHBhZ2UsIGl0ZW1zUGVyUGFnZSwgaXRlbVR5cGUpID0+IHtcclxuICBjb25zdCB0eXBlc1BhcmFtcyA9XHJcbiAgICBpdGVtVHlwZS5sZW5ndGggPiAwID8gZ2V0Qmx1ZXByaW50VHlwZVBhcmFtcyhpdGVtVHlwZSkgOiBcIlwiO1xyXG4gIGNvbnN0IHRpZXJQYXJhbXMgPSB0aWVycy5sZW5ndGggPiAwID8gZ2V0VGllclBhcmFtcyh0aWVycykgOiBcIlwiO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwL2FwaS92MS9ibHVlcHJpbnRzP29yZGVyW21lcmNoYW50X3hwXT1kZXNjJHt0aWVyUGFyYW1zfSR7dHlwZXNQYXJhbXN9JnBhZ2U9JHtwYWdlfSZpdGVtc1BlclBhZ2U9JHtpdGVtc1BlclBhZ2V9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCbHVlcHJpbnRCeUlkcyA9IGFzeW5jIChpZHMpID0+IHtcclxuICBjb25zdCBpZFBhcmFtcyA9IGlkcy5yZWR1Y2UoKHBhcmFtcywgaWQpID0+IHBhcmFtcyArIGAmaWRbXT0ke2lkfWAsIFwiXCIpO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwL2FwaS92MS9ibHVlcHJpbnRzP29yZGVyW21lcmNoYW50X3hwXT1kZXNjJHtpZFBhcmFtc31gO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCbHVlcHJpbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MC9hcGkvdjEvYmx1ZXByaW50cy8ke2lkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gaWRcclxuICogQHBhcmFtIHsqfSBtYXJrZXRWYWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhdGNoQmx1ZXByaW50ID0gYXN5bmMgKGJsdWVwcmludCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwL2FwaS92MS9ibHVlcHJpbnRzLyR7Ymx1ZXByaW50LmlkfWA7XHJcblxyXG4gIHJldHVybiBhd2FpdCBheGlvcy5wYXRjaCh1cmwsIGJsdWVwcmludCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL21lcmdlLXBhdGNoK2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hJdGVtVHlwZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwL2FwaS92MS9pdGVtX3R5cGVzXCI7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdO1xyXG5cclxuICBjb25zdCBpdGVtVHlwZXMgPSByZXNwb25zZURhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpdGVtVHlwZXM7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvdXNlci9mYXZvcml0ZScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTGlzdCwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3ViamVjdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TdWJqZWN0XCI7XHJcbmltcG9ydCBDaGF0QnViYmxlT3V0bGluZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlT3V0bGluZVwiO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIjtcclxuXHJcbmNvbnN0IExJTktTID0gW1xyXG4gIHsgdXJpOiBcIi9zaG9wLXRpdGFuc1wiLCBsYWJlbDogXCJCbHVlcHJpbnRzXCIsIGljb246IDxTdWJqZWN0SWNvbiAvPiB9LFxyXG4gIHtcclxuICAgIHVyaTogXCIvc2hvcC10aXRhbnMvc21hbGwtdGFsa1wiLFxyXG4gICAgbGFiZWw6IFwiU21hbGwgVGFsa1wiLFxyXG4gICAgaWNvbjogPENoYXRCdWJibGVPdXRsaW5lSWNvbiAvPixcclxuICB9LFxyXG4gIHsgdXJpOiBcIi9zaG9wLXRpdGFucy9mYXZvcml0ZVwiLCBsYWJlbDogXCJGYXZvcml0ZVwiLCBpY29uOiA8RmF2b3JpdGVJY29uIC8+IH0sXHJcblxyXG4gIHsgdXJpOiBcIi9zaG9wLXRpdGFucy9sb2dpblwiLCBsYWJlbDogXCJMb2dpblwiLCBpY29uOiA8RmF2b3JpdGVJY29uIC8+IH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lTGluayA9ICh7IHdyYXBwZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlckxpbmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gTElOS1MubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3Qga2V5PXtpfT5cclxuICAgICAgICAgIDxMaW5rIGtleT17aX0gdG89e2l0ZW0udXJpfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAge2l0ZW0uaWNvbn0ge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVuZGVyTGluaygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxpbms7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIExpbmssIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgRW5lcmd5Q2FsY3VsYXRvciBmcm9tIFwiLi8uLi9jb21wb25lbnQvZW5lcmd5LWNhbGN1bGF0b3JcIjtcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLy4uL2NvbXBvbmVudC9ub3QtZm91bmRcIjtcclxuaW1wb3J0IEZhdm9yaXRlVmlldyBmcm9tIFwiLi4vY29udGFpbmVyL2Zhdm9yaXRlLXZpZXdcIjtcclxuaW1wb3J0IEJsdWVwcmludFZpZXcgZnJvbSBcIi4uL2NvbnRhaW5lci92aWV3L2JsdWVwcmludC12aWV3XCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi8uLi9jb250YWluZXIvZm9ybS9sb2dpbi1mb3JtJztcclxuXHJcbmNvbnN0IEhvbWVSb3V0ZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Nob3AtdGl0YW5zXCIgY29tcG9uZW50PXtCbHVlcHJpbnRWaWV3fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Nob3AtdGl0YW5zL3NtYWxsLXRhbGtcIiBjb21wb25lbnQ9e0VuZXJneUNhbGN1bGF0b3J9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2hvcC10aXRhbnMvZmF2b3JpdGVcIiBjb21wb25lbnQ9e0Zhdm9yaXRlVmlld30gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zaG9wLXRpdGFucy9sb2dpblwiIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvUm91dGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVSb3V0ZTtcclxuIiwiaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybUVtcHR5U3RyaW5nVG9OdWxsKHZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XHJcbiAgcmV0dXJuIG9yaWdpbmFsVmFsdWUudHJpbSgpID09PSBcIlwiIHx8IG9yaWdpbmFsVmFsdWUudHJpbSgpID09PSBcIipcIlxyXG4gICAgPyBudWxsXHJcbiAgICA6IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRW5lcmd5Rm9ybVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgY3VycmVudEVuZXJneTogWXVwLm51bWJlcigpXHJcbiAgICAudHlwZUVycm9yKFwiT25seSBkaWdpdHMuXCIpXHJcbiAgICAubnVsbGFibGUoKVxyXG4gICAgLnRyYW5zZm9ybSh0cmFuc2Zvcm1FbXB0eVN0cmluZ1RvTnVsbClcclxuICAgIC5wb3NpdGl2ZShcIk5lZ2F0aXZlIHZhbHVlIGlzIG5vdCBhbGxvd2VkLlwiKVxyXG4gICAgLmludGVnZXIoXCJJbnRlZ2VycyBvbmx5IVwiKVxyXG4gICAgLm1pbigwKVxyXG4gICAgLm1heChcclxuICAgICAgWXVwLnJlZihcIm1heEVuZXJneVwiKSxcclxuICAgICAgXCJNdXN0IGJlIGxlc3MgdGhhbiBtYXggZW5lcmd5LlwiXHJcbiAgICApXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuXHJcbiAgbWF4RW5lcmd5OiBZdXAubnVtYmVyKClcclxuICAgIC50eXBlRXJyb3IoXCJPbmx5IGRpZ2l0cy5cIilcclxuICAgIC5udWxsYWJsZSgpXHJcbiAgICAudHJhbnNmb3JtKHRyYW5zZm9ybUVtcHR5U3RyaW5nVG9OdWxsKVxyXG4gICAgLnBvc2l0aXZlKFwiTmVnYXRpdmUgdmFsdWUgaXMgbm90IGFsbG93ZWQuXCIpXHJcbiAgICAuaW50ZWdlcihcIkludGVnZXJzIG9ubHkhXCIpXHJcbiAgICAubWluKFxyXG4gICAgICBZdXAucmVmKFwiY3VycmVudEVuZXJneVwiKSxcclxuICAgICAgXCJNdXN0IGJlIGdyZWF0ZXIgdGhhbiBjdXJyZW50IGVuZXJneS5cIlxyXG4gICAgKVxyXG4gICAgLm1heCgxMDAwMDAsIFwiVHJ5IHVzaW5nIGEgc21hbGxlciBudW1iZXIuXCIpXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxufSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGVVc2VyID0gYXN5bmMgKGNyZWRlbnRpYWwpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MC9hcGkvbG9naW5gO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGNyZWRlbnRpYWwsIHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IFwiIzM4ODA4N1wiO1xyXG5jb25zdCBzZWNvbmRhcnlDb2xvciA9IFwiIzZGQjNCOFwiO1xyXG5cclxuY29uc3QgYmFzZUNvbG9yID0gXCIjRUZFRkVGXCI7XHJcbmNvbnN0IHNlY29uZGFyeUJhc2VDb2xvciA9IFwiIzM4ODA4N1wiO1xyXG5cclxuY29uc3QgYm9keTFCYXNlQ29sb3IgPSBcIiMzMzMzMzNcIjtcclxuY29uc3QgYm9keTFDb2xvciA9IFwiI0ZGRkZGRlwiO1xyXG5cclxuY29uc3QgbGlua1RleHRDb2xvciA9IFwiIzQzQkVFNVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYXNlQ29sb3IsXHJcbiAgICBjb2xvcjogYm9keTFDb2xvcixcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIHBhZGRpbmdSaWdodDogMjQsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICB9LFxyXG4gIHRvb2xiYXJJY29uOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgcGFkZGluZzogXCIwIDhweFwiLFxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlY29uZGFyeUJhc2VDb2xvcixcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIndpZHRoXCIsIFwibWFyZ2luXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICB9LFxyXG4gIG1lbnVCdXR0b25IaWRkZW46IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgYmFja2dyb3VuZDogYm9keTFCYXNlQ29sb3IsXHJcbiAgICBjb2xvcjogbGlua1RleHRDb2xvclxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXJDbG9zZToge1xyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcEJhclNwYWNlcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGNvbG9yOiBib2R5MUNvbG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnlCYXNlQ29sb3IsXHJcbiAgfSxcclxuICBmaXhlZEhlaWdodDoge1xyXG4gICAgaGVpZ2h0OiAyNDAsXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBjb2xvcjogYm9keTFDb2xvcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogc2Vjb25kYXJ5QmFzZUNvbG9yLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==