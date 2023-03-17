/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box !important;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 14px;\\r\\n  background-color: #222222;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  padding-bottom: 48px;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n.item-view,\\r\\n.item-test {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 1200px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-view h2 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\r\\n\\r\\n.item-list {\\r\\n  display: grid;\\r\\n  margin: 48px 0;\\r\\n  grid-template-columns: repeat(4, 180px);\\r\\n  grid-column-gap: 160px;\\r\\n  grid-row-gap: 48px;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item-thumbnail {\\r\\n  border-radius: 8px;\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.item-score {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.item-score::after {\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.item-title.skeleton::after,\\r\\n.item-score.skeleton::after {\\r\\n  font-size: 0;\\r\\n  content: 'loading';\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\nbutton.btn {\\r\\n  border: 0;\\r\\n  border-radius: 8px;\\r\\n  height: 30px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nbutton.primary {\\r\\n  background: #f33f3f;\\r\\n}\\r\\n\\r\\n.item-card .skeleton {\\r\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\r\\n  background-size: 400%;\\r\\n  animation: skeleton-animation 5s infinite ease-out;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-animation {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\nheader {\\r\\n  width: 100%;\\r\\n  height: 72px;\\r\\n  background-color: #222;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 48px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: -0.1rem;\\r\\n  color: #f33f3f;\\r\\n}\\r\\n\\r\\nheader > .search-box {\\r\\n  background: #fff;\\r\\n  padding: 8px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader .search-box > input {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader .search-box > .search-button {\\r\\n  width: 14px;\\r\\n  border: 0;\\r\\n  text-indent: -1000rem;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainPage */ \"./src/components/MainPage.ts\");\n\r\n\r\nfunction App() {\r\n    return `\r\n      ${(0,_Header__WEBPACK_IMPORTED_MODULE_0__.Header)()}\r\n      ${(0,_MainPage__WEBPACK_IMPORTED_MODULE_1__.MainPage)()}\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ \"./src/components/Search.ts\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n\r\n\r\nfunction Header() {\r\n    return `\r\n    <header>\r\n        <h1><img src='${_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__}' alt=\"MovieList 로고\" /></h1>\r\n        ${(0,_Search__WEBPACK_IMPORTED_MODULE_0__.Search)()}\r\n    </header>\r\n   `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/MainPage.ts":
/*!************************************!*\
  !*** ./src/components/MainPage.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPage\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader */ \"./src/components/PageHeader.ts\");\n/* harmony import */ var _ViewMoreButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewMoreButton */ \"./src/components/ViewMoreButton.ts\");\n\r\n\r\nfunction MainPage() {\r\n    return `\r\n    <section class=\"item-view\">\r\n        ${(0,_PageHeader__WEBPACK_IMPORTED_MODULE_0__.PageHeader)()}\r\n        <ul class=\"item-list\">\r\n        </ul>\r\n        ${(0,_ViewMoreButton__WEBPACK_IMPORTED_MODULE_1__.ViewMoreButton)()}\r\n    </section>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MainPage.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieItem\": function() { return /* binding */ MovieItem; }\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _utils_makeImagePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/makeImagePath */ \"./src/utils/makeImagePath.ts\");\n\r\n\r\nfunction MovieItem({ poster_path, title, vote_average }) {\r\n    return `\r\n  <li>\r\n        <a href=\"#\">\r\n            <div class=\"item-card\">\r\n                <img\r\n                class=\"item-thumbnail\"\r\n                src=${(0,_utils_makeImagePath__WEBPACK_IMPORTED_MODULE_1__.makeImagePath)(poster_path)}\r\n                loading=\"lazy\"\r\n                alt=${title}\r\n                />\r\n                <p class=\"item-title\">${title}</p>\r\n                <p class=\"item-score\"><img src=\"${_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />${vote_average}</p>\r\n            </div>\r\n        </a>\r\n    </li>`;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteSkeletonList\": function() { return /* binding */ deleteSkeletonList; },\n/* harmony export */   \"renderMoreMovieList\": function() { return /* binding */ renderMoreMovieList; },\n/* harmony export */   \"renderMoreSkeletonList\": function() { return /* binding */ renderMoreSkeletonList; },\n/* harmony export */   \"renderPopularMovieList\": function() { return /* binding */ renderPopularMovieList; },\n/* harmony export */   \"renderSearchMovieList\": function() { return /* binding */ renderSearchMovieList; },\n/* harmony export */   \"renderSkeletonList\": function() { return /* binding */ renderSkeletonList; }\n/* harmony export */ });\n/* harmony import */ var _MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skeleton */ \"./src/components/Skeleton.ts\");\n\r\n\r\n\r\n\r\nasync function renderSkeletonList() {\r\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\r\n    parentElem.insertAdjacentHTML('beforeend', (0,_Skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton)());\r\n    await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.usePopularMovie)().then(({ values }) => renderPopularMovieList(values.results));\r\n}\r\nasync function renderMoreSkeletonList() {\r\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\r\n    parentElem.insertAdjacentHTML('beforeend', (0,_Skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton)());\r\n    if ((0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.getPageStatus)() === 'popular') {\r\n        await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.usePopularMovie)().then(({ values }) => {\r\n            renderMoreMovieList(values.results);\r\n            deleteSkeletonList();\r\n        });\r\n    }\r\n    else {\r\n        await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.useSearchedMovie)((0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.getRecentKeyword)()).then(({ values }) => {\r\n            renderMoreMovieList(values.results);\r\n            deleteSkeletonList();\r\n        });\r\n    }\r\n}\r\nfunction deleteSkeletonList() {\r\n    const skeletonList = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$$)('.skeleton-item');\r\n    skeletonList?.forEach((item) => item.remove());\r\n}\r\nasync function renderPopularMovieList(results) {\r\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\r\n    parentElem.innerHTML = `\r\n    ${results.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}\r\n  \r\n  `;\r\n}\r\nasync function renderSearchMovieList(searchResults) {\r\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\r\n    parentElem.innerHTML =\r\n        searchResults.length === 0\r\n            ? '검색 결과가 없습니다.'\r\n            : `\r\n    ${searchResults.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}\r\n  \r\n  `;\r\n}\r\nasync function renderMoreMovieList(moreResults) {\r\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\r\n    parentElem.insertAdjacentHTML('beforeend', `${moreResults.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}`);\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/PageHeader.ts":
/*!**************************************!*\
  !*** ./src/components/PageHeader.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageHeader\": function() { return /* binding */ PageHeader; }\n/* harmony export */ });\nfunction PageHeader() {\r\n    return `\r\n        <h2 class=\"page-header\">지금 인기 있는 영화</h2>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/PageHeader.ts?");

/***/ }),

/***/ "./src/components/Search.ts":
/*!**********************************!*\
  !*** ./src/components/Search.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _utils_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formData */ \"./src/utils/formData.ts\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n\r\n\r\n\r\nfunction Search() {\r\n    _utils_index__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('submit', '.search-box', async (event) => {\r\n        event.preventDefault();\r\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.togglePageStatus)();\r\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.resetPage)();\r\n        const formEl = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.search-box');\r\n        const formData = (0,_utils_formData__WEBPACK_IMPORTED_MODULE_1__.getFormFields)(formEl);\r\n        const { handlers: { handlePageHeader, handleSearchResult }, } = await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.useSearchedMovie)(String(formData.keyword));\r\n        handlePageHeader();\r\n        handleSearchResult();\r\n    });\r\n    return `\r\n        <form class=\"search-box\">\r\n            <input type=\"text\" placeholder=\"검색\" name=\"keyword\"/>\r\n            <button type=\"submit\" class=\"search-button\">검색</button>\r\n        </form>\r\n     `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Search.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skeleton\": function() { return /* binding */ Skeleton; }\n/* harmony export */ });\nfunction Skeleton() {\r\n    const template = `\r\n    <li class=\"skeleton-item\">\r\n        <a href=\"#\">\r\n            <div class=\"item-card\">\r\n            <div class=\"item-thumbnail skeleton\"></div>\r\n            <div class=\"item-title skeleton\"></div>\r\n            <div class=\"item-score skeleton\"></div>\r\n            </div>\r\n        </a>\r\n    </li>`;\r\n    return `${template.repeat(20)}`;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/components/ViewMoreButton.ts":
/*!******************************************!*\
  !*** ./src/components/ViewMoreButton.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewMoreButton\": function() { return /* binding */ ViewMoreButton; }\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieList */ \"./src/components/MovieList.ts\");\n\r\n\r\n\r\nfunction ViewMoreButton() {\r\n    _utils_index__WEBPACK_IMPORTED_MODULE_0__.Event.addEvent('click', '.view-more-button', async () => {\r\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.plusPage)();\r\n        (0,_MovieList__WEBPACK_IMPORTED_MODULE_2__.renderMoreSkeletonList)();\r\n    });\r\n    return `\r\n        <button class=\"btn primary full-width view-more-button\">더 보기</button>\r\n      `;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ViewMoreButton.ts?");

/***/ }),

/***/ "./src/data/api.ts":
/*!*************************!*\
  !*** ./src/data/api.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": function() { return /* binding */ getMovies; },\n/* harmony export */   \"getSearchMovie\": function() { return /* binding */ getSearchMovie; }\n/* harmony export */ });\n//import { API_KEY } from '../constants/constants';\r\nconst API_KEY = '040ef8ffb4bf681809f3c88b6d22a354';\r\nconst BASE_PATH = 'https://api.themoviedb.org/3';\r\nconst getMovies = async (page) => {\r\n    try {\r\n        const response = await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`);\r\n        if (!response.ok)\r\n            throw Error(response.statusText);\r\n        return await response.json();\r\n    }\r\n    catch (err) {\r\n        console.log(err);\r\n        return [];\r\n    }\r\n};\r\nconst getSearchMovie = async (keyword, page) => {\r\n    const response = await fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=${page}`);\r\n    if (!response.ok)\r\n        return [];\r\n    return response.json();\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/api.ts?");

/***/ }),

/***/ "./src/data/useMovie.ts":
/*!******************************!*\
  !*** ./src/data/useMovie.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageStatus\": function() { return /* binding */ getPageStatus; },\n/* harmony export */   \"getRecentKeyword\": function() { return /* binding */ getRecentKeyword; },\n/* harmony export */   \"plusPage\": function() { return /* binding */ plusPage; },\n/* harmony export */   \"resetPage\": function() { return /* binding */ resetPage; },\n/* harmony export */   \"togglePageStatus\": function() { return /* binding */ togglePageStatus; },\n/* harmony export */   \"usePopularMovie\": function() { return /* binding */ usePopularMovie; },\n/* harmony export */   \"useSearchedMovie\": function() { return /* binding */ useSearchedMovie; }\n/* harmony export */ });\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MovieList */ \"./src/components/MovieList.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/data/api.ts\");\n\r\n\r\n\r\nlet moviePage = 1;\r\nfunction plusPage() {\r\n    moviePage++;\r\n}\r\nfunction resetPage() {\r\n    moviePage = 1;\r\n}\r\nconst movieList = [];\r\nasync function usePopularMovie() {\r\n    const popularMovieResponse = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getMovies)(moviePage);\r\n    const { page, results } = popularMovieResponse;\r\n    movieList.push(results);\r\n    function handlePageHeader() {\r\n        const $pageHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.page-header');\r\n        $pageHeader.innerText = '지금 인기 있는 영화';\r\n    }\r\n    function handlePopularResult() {\r\n        //renderPopularMovieList();\r\n    }\r\n    function handleMoreMovieList() {\r\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderMoreMovieList)(results);\r\n    }\r\n    return {\r\n        values: { page, results },\r\n        handlers: { handlePageHeader, handlePopularResult: handlePopularResult, handleMoreMovieList },\r\n    };\r\n}\r\nlet recentKeyword;\r\nasync function useSearchedMovie(keyword) {\r\n    const { page, results } = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getSearchMovie)(keyword, moviePage);\r\n    recentKeyword = keyword;\r\n    const val = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.view-more-button');\r\n    val.style.display = 'inline-block';\r\n    if (results.length < 20) {\r\n        val.style.display = 'none';\r\n    }\r\n    function handlePageHeader() {\r\n        const $pageHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.page-header');\r\n        $pageHeader.innerText = `\"${keyword}\" 검색 결과`;\r\n    }\r\n    function handleSearchResult() {\r\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderSearchMovieList)(results);\r\n    }\r\n    function handleMoreMovieList() {\r\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderMoreMovieList)(results);\r\n    }\r\n    return {\r\n        values: { page, results },\r\n        handlers: { handlePageHeader, handleSearchResult, handleMoreMovieList },\r\n    };\r\n}\r\nlet pageStatus = 'popular';\r\nfunction togglePageStatus() {\r\n    pageStatus = pageStatus === 'popular' ? 'search' : 'popular';\r\n}\r\nfunction getPageStatus() {\r\n    return pageStatus;\r\n}\r\nfunction getRecentKeyword() {\r\n    return recentKeyword;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/useMovie.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_search_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/search_button.png */ \"./src/assets/search_button.png\");\n/* harmony import */ var _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.render)((0,_components_App__WEBPACK_IMPORTED_MODULE_6__.App)());\r\n(0,_components_MovieList__WEBPACK_IMPORTED_MODULE_7__.renderSkeletonList)();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/utils/formData.ts":
/*!*******************************!*\
  !*** ./src/utils/formData.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFormFields\": function() { return /* binding */ getFormFields; }\n/* harmony export */ });\nfunction getFormFields(form) {\r\n    const formaData = new FormData(form);\r\n    return Object.fromEntries(formaData);\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/formData.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": function() { return /* binding */ $; },\n/* harmony export */   \"$$\": function() { return /* binding */ $$; },\n/* harmony export */   \"Event\": function() { return /* binding */ Event; },\n/* harmony export */   \"isTarget\": function() { return /* binding */ isTarget; },\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\nconst $ = (selector, parentNode = document) => parentNode && parentNode.querySelector(selector);\r\nconst $$ = (selector, parentNode = document) => parentNode && parentNode.querySelectorAll(selector);\r\nconst isTarget = (target, { targetSelector, parentSelector }) => {\r\n    const children = $$(targetSelector, $(parentSelector));\r\n    if (target instanceof Element && children)\r\n        return [...children].includes(target) || target.closest(targetSelector);\r\n    return false;\r\n};\r\nconst render = (template) => {\r\n    const bodyElem = $('#app');\r\n    bodyElem.innerHTML = template;\r\n    Event.setAllEvents();\r\n};\r\nconst events = [];\r\nconst Event = {\r\n    addEvent(event, targetSelector, callback, parentSelector) {\r\n        events.push(parentSelector\r\n            ? { event, targetSelector, callback, parentSelector }\r\n            : { event, targetSelector, callback });\r\n    },\r\n    setAllEvents() {\r\n        events.forEach(({ parentSelector, targetSelector, event, callback }) => {\r\n            if (parentSelector) {\r\n                $(parentSelector)?.addEventListener(event, (e) => {\r\n                    const $parent = $(parentSelector);\r\n                    if (isTarget(e.target, { targetSelector, parentSelector }) && $parent)\r\n                        callback.call($parent, e);\r\n                });\r\n            }\r\n            else {\r\n                $(targetSelector)?.addEventListener(event, callback);\r\n            }\r\n        });\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/makeImagePath.ts":
/*!************************************!*\
  !*** ./src/utils/makeImagePath.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeImagePath\": function() { return /* binding */ makeImagePath; }\n/* harmony export */ });\nfunction makeImagePath(id, format) {\r\n    return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/makeImagePath.ts?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ }),

/***/ "./src/assets/star_empty.png":
/*!***********************************!*\
  !*** ./src/assets/star_empty.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.png?");

/***/ }),

/***/ "./src/assets/star_filled.png":
/*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;