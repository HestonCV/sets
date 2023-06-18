/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  height: 100vh;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgb(245, 245, 245);\n  font-size: 1.6rem;\n  background-color: #db3f59;\n  flex: 1;\n}\n\n.content {\n  font-size: 1.3rem;\n  background-color: rgb(239, 239, 239);\n  padding: 5%;\n  padding-bottom: 2%;\n  flex: 8;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.set-container {\n  overflow: auto;\n  flex: 5;\n  background-color: rgb(239, 239, 239);\n  margin-bottom: 10px;\n}\n\n.set {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: rgb(25, 25, 25);\n  font-weight: 900;\n  padding: 2px;\n}\n\n.set input {\n  width: 50px;\n}\n\n.add-element,\n.delete-set,\n.add-set {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  background-color: #db3f59;\n  color: white;\n  flex: 0;\n  width: 25px;\n  min-width: 25px;\n  max-width: 25px;\n  height: 25px;\n  min-height: 25px;\n  max-height: 25px;\n  border-radius: 50%;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.add-element:hover,\n.delete-set:hover,\n.add-set:hover {\n  background-color: #e4425d;\n  transform: scale(0.98);\n}\n\n.add-element:active,\n.delete-set:active,\n.add-set:active {\n  background-color: #e4425d;\n  transform: scale(0.96);\n}\n\n.delete-set {\n  width: 15px;\n  min-width: 15px;\n  max-width: 15px;\n  height: 15px;\n  min-height: 15px;\n  max-height: 15px;\n}\n\n.add-set-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-set-container > form {\n  display: none;\n  gap: 10px;\n  font-size: 1rem;\n  background-color: white;\n  width: 250px;\n  border-radius: 2px;\n  padding: 10px;\n}\n\n.add-set {\n  font-size: 1rem;\n  border-radius: 3px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n  height: 30px;\n  min-height: 30px;\n  max-height: 30px;\n}\n\n/* display styles */\n.display {\n  display: flex;\n  padding: 10px;\n  padding-left: 25px;\n  justify-content: space-between;\n  align-items: center;\n  flex: 2;\n  align-self: center;\n  border-radius: 5px;\n  width: min(90%, 900px);\n  background-color: white;\n}\n\n.display-button-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.display-button-container > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 3px;\n  gap: 3px;\n  font-size: 0.7rem;\n  background-color: #db3f59;\n  color: white;\n  cursor: pointer;\n}\n\n.display-button-container > span:hover {\n  background-color: #e4425d;\n  transform: scale(0.97);\n}\n\n.display-button-container > span:active {\n  background-color: #e4425d;\n  transform: scale(0.95);\n}\n\n/* keyboard styles */\n\n.keyboard-container {\n  background-color: #db3f59;\n  flex: 4;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.keyboard {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  width: max(30%, 300px);\n  height: 70%;\n  gap: 5px;\n}\n\n.keyboard > div {\n  background-color: rgb(245, 245, 245);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.keyboard > div:hover {\n  background-color: white;\n  transform: scale(0.99);\n}\n\n.keyboard > div:active {\n  background-color: white;\n  transform: scale(0.98);\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid rgb(149, 149, 149);\n  background-color: #db3f59;\n  color: rgb(245, 245, 245);\n  flex: 1;\n}\n\n/* sets under keyboard styles */\n.sets {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  width: max(45%, 300px);\n}\n\n.sets > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background-color: rgb(245, 245, 245);\n  border-radius: 5px;\n  height: 45px;\n  max-width: 70px;\n}\n\n.sets > span:hover {\n  background-color: white;\n  transform: scale(0.98);\n}\n\n.sets > span:active {\n  background-color: white;\n  transform: scale(0.95);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sets/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://sets/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://sets/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sets/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sets/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement({\n  element,\n  className = null,\n  id = null,\n  textContent = null,\n  parent = null,\n}) {\n  const newElement = document.createElement(element);\n  if (className) {\n    newElement.classList.add(className);\n  }\n  if (id) {\n    newElement.id = id;\n  }\n  if (textContent) {\n    newElement.textContent = textContent;\n  }\n  if (parent) {\n    parent.appendChild(newElement);\n  }\n\n  return newElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n\n//# sourceURL=webpack://sets/./src/createElement.js?");

/***/ }),

/***/ "./src/customSet.js":
/*!**************************!*\
  !*** ./src/customSet.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomSet)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _setCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setCalculator */ \"./src/setCalculator.js\");\n\n\n\nclass CustomSet {\n  constructor(name, create) {\n    // if create is true, html elements will be created\n    // this is false when used for calculations only\n    this.create = create;\n    this.name = name;\n    this.items = [];\n    this.element = null;\n    this.keyboardElement = null;\n    this.init();\n  }\n\n  init() {\n    if (this.create) {\n      this.createSetElement();\n      this.addKeyboardSetButton();\n    }\n  }\n\n  createSetElement() {\n    // create set element\n    this.element = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ element: \"div\", className: \"set\" });\n\n    // create delete button and add event listener\n    const deleteButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"span\",\n      className: \"delete-set\",\n      textContent: \"-\",\n      parent: this.element,\n    });\n    deleteButton.addEventListener(\"click\", () => {\n      this.element.remove();\n      this.keyboardElement.remove();\n    });\n\n    // create set name element\n    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"span\",\n      className: \"set-name\",\n      textContent: this.name,\n      parent: this.element,\n    });\n    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ element: \"span\", textContent: \"=\", parent: this.element });\n\n    // create set elements list\n    const setElementsDisplay = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"span\",\n      className: \"set-elements\",\n      textContent: \"{}\",\n      parent: this.element,\n    });\n\n    // create add element button\n    const addElementButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"span\",\n      className: \"add-element\",\n      textContent: \"+\",\n      parent: this.element,\n    });\n    // create add element modal\n    const addElementForm = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"form\",\n      parent: this.element,\n    });\n    addElementForm.style.display = \"none\";\n    const addElementInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"input\",\n      parent: addElementForm,\n    });\n    addElementInput.type = \"text\";\n\n    addElementForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const input = this.element.querySelector(\"input\");\n      this.add(input.value);\n      setElementsDisplay.textContent = `{ ${this.items.join(\", \")} }`;\n      input.value = \"\";\n    });\n    addElementButton.addEventListener(\"click\", () => {\n      addElementForm.style.display =\n        addElementForm.style.display === \"none\" ? \"flex\" : \"none\";\n    });\n\n    const setContainer = document.querySelector(\".set-container\");\n    setContainer.appendChild(this.element);\n  }\n\n  addKeyboardSetButton() {\n    const keyboardSets = document.querySelector(\".sets\");\n    this.keyboardElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      element: \"span\",\n      textContent: this.name,\n      parent: keyboardSets,\n    });\n    this.keyboardElement.addEventListener(\"click\", () => {\n      const displayElement = document.getElementById(\"display-text\");\n\n      // if the display element shows calculation or error, clear it\n      if (\n        displayElement.textContent.includes(\"=\") ||\n        displayElement.textContent.includes(\"E\")\n      ) {\n        displayElement.textContent = \"\";\n      }\n      displayElement.textContent += this.name;\n      _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addInput(this);\n    });\n  }\n\n  add(value) {\n    if (!this.has(value)) {\n      this.items.push(value);\n    }\n  }\n\n  has(value) {\n    return this.items.includes(value);\n  }\n}\n\n\n//# sourceURL=webpack://sets/./src/customSet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _uiController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiController */ \"./src/uiController.js\");\n\n\n\n_uiController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initEventListeners();\n\n\n//# sourceURL=webpack://sets/./src/index.js?");

/***/ }),

/***/ "./src/setCalculator.js":
/*!******************************!*\
  !*** ./src/setCalculator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _customSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customSet */ \"./src/customSet.js\");\n/* eslint-disable class-methods-use-this */\n\n\nclass SetCalculator {\n  constructor() {\n    this.inputs = [];\n  }\n\n  clear() {\n    this.inputs.length = 0;\n  }\n\n  backspace() {\n    this.inputs.pop();\n  }\n\n  addInput(input) {\n    this.inputs.push(input);\n  }\n\n  calculate() {\n    // checks for open all open parenthesis and replaces it with\n    // a set object if found\n    for (let i = 0; i < this.inputs.length; i += 1) {\n      if (this.inputs[i] === \"open-parenthesis\") {\n        // computes using the middle term, which should be an operator\n        const result = this.compute(i + 2);\n        this.inputs.splice(i, i + 5, result);\n        i = 0;\n      }\n    }\n    // continue computing until the inputs has only the final result left\n    while (this.inputs.length !== 1) {\n      const result = this.compute(1);\n      this.inputs.splice(0, 3, result);\n    }\n\n    // if the remaining item is a set, return it.\n    // else return null\n    if (this.inputs[0] !== null) {\n      console.log(this.inputs[0].items);\n      return this.inputs[0].items;\n    }\n    return null;\n  }\n\n  // compute takes the index of the operator, then performs the relevant\n  // calculation on the left and right sets\n  compute(i) {\n    const operators = [\n      \"union\",\n      \"intersection\",\n      \"difference\",\n      \"symmetrical-difference\",\n    ];\n    if (operators.includes(this.inputs[i])) {\n      switch (this.inputs[i]) {\n        case \"union\":\n          return this.computeUnion(this.inputs[i - 1], this.inputs[i + 1]);\n        case \"intersection\":\n          return this.computeIntersection(\n            this.inputs[i - 1],\n            this.inputs[i + 1]\n          );\n        case \"difference\":\n          return this.computeDifference(this.inputs[i - 1], this.inputs[i + 1]);\n        case \"symmetrical-difference\":\n          return this.computeSymmetricalDifference(\n            this.inputs[i - 1],\n            this.inputs[i + 1]\n          );\n        default:\n      }\n    }\n    return null;\n  }\n\n  computeUnion(setA, setB) {\n    // if the sets exists\n    if (setA.items && setB.items) {\n      const setC = new _customSet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"C\", false);\n\n      // add all items from A and B to C\n      setA.items.forEach((item) => {\n        setC.add(item);\n      });\n      setB.items.forEach((item) => {\n        setC.add(item);\n      });\n      return setC;\n    }\n    return null;\n  }\n\n  computeIntersection(setA, setB) {\n    // if sets exist\n    if (setA.items && setB.items) {\n      const setC = new _customSet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"C\", false);\n\n      // add item to C if it is found in both A and B\n      setA.items.forEach((itemA) => {\n        if (setB.has(itemA)) {\n          setC.add(itemA);\n        }\n      });\n      return setC;\n    }\n    return null;\n  }\n\n  computeDifference(setA, setB) {\n    // if sets exist\n    if (setA.items && setB.items) {\n      const setC = new _customSet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"C\", false);\n\n      // for each item in A, if not found in B, add to C\n      setA.items.forEach((itemA) => {\n        if (!setB.has(itemA)) {\n          setC.add(itemA);\n        }\n      });\n      return setC;\n    }\n    return null;\n  }\n\n  computeSymmetricalDifference(setA, setB) {\n    // if sets exist\n    if (setA.items && setB.items) {\n      // symmetrical difference = (A-B) U (B-A)\n      return this.computeUnion(\n        this.computeDifference(setA, setB),\n        this.computeDifference(setB, setA)\n      );\n    }\n    return null;\n  }\n}\n\nconst setCalculator = new SetCalculator();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCalculator);\n\n\n//# sourceURL=webpack://sets/./src/setCalculator.js?");

/***/ }),

/***/ "./src/uiController.js":
/*!*****************************!*\
  !*** ./src/uiController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _customSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customSet */ \"./src/customSet.js\");\n/* harmony import */ var _setCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setCalculator */ \"./src/setCalculator.js\");\n\n\n\nclass UIController {\n  constructor() {\n    this.addSetButton = document.getElementById(\"add-set\");\n    this.addSetForm = document.querySelector(\".add-set-container > form\");\n    this.displayElement = document.getElementById(\"display-text\");\n  }\n\n  initEventListeners() {\n    // add set button\n    this.addSetButton.addEventListener(\"click\", () => {\n      // modal toggle\n      this.addSetForm.style.display =\n        this.addSetForm.style.display === \"flex\" ? \"none\" : \"flex\";\n    });\n\n    // add set modal\n    this.addSetForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const input = document.querySelector(\".add-set-container > form > input\");\n      const setName = input.value;\n      // create new set with value true, so dom elements will be created\n      const setA = new _customSet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](setName, true);\n      input.value = \"\";\n      this.addSetForm.style.display = \"none\";\n    });\n\n    // display button event listeners\n    // clear button\n    const clearButton = document.getElementById(\"clear\");\n    clearButton.addEventListener(\"click\", () => {\n      this.displayElement.textContent = \"\";\n      _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear();\n    });\n    // backspace button\n    const backspaceButton = document.getElementById(\"backspace\");\n    backspaceButton.addEventListener(\"click\", () => {\n      this.displayElement.textContent = this.displayElement.textContent.slice(\n        0,\n        -1\n      );\n      _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].backspace();\n    });\n    // calculate button\n    const calculateButton = document.getElementById(\"calculate\");\n    calculateButton.addEventListener(\"click\", () => {\n      const result = _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculate();\n      if (result) {\n        this.displayElement.textContent += \" = \";\n        this.displayElement.textContent += `{ ${result.join(\", \")} }`;\n      } else {\n        // if result is null\n        this.displayElement.textContent = \"ERROR\";\n      }\n      _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear();\n    });\n    this.initKeyboardEventListeners();\n  }\n\n  initKeyboardEventListeners() {\n    // add event listeners to each keyboard button, pass them to calculator and update display when clicked\n    const unionButton = document.getElementById(\"union\");\n    const intersectionButton = document.getElementById(\"intersection\");\n    const symmetricalDifferenceButton = document.getElementById(\n      \"symmetrical-difference\"\n    );\n    const differenceButton = document.getElementById(\"difference\");\n    const openParenthesisButton = document.getElementById(\"open-parenthesis\");\n    const closeParenthesisButton = document.getElementById(\"close-parenthesis\");\n\n    const buttons = [\n      unionButton,\n      intersectionButton,\n      symmetricalDifferenceButton,\n      differenceButton,\n      openParenthesisButton,\n      closeParenthesisButton,\n    ];\n\n    buttons.forEach((button) => {\n      button.addEventListener(\"click\", () => {\n        // if display element shows calculation or error, clear it\n        if (\n          this.displayElement.textContent.includes(\"=\") ||\n          this.displayElement.textContent.includes(\"E\")\n        ) {\n          this.displayElement.textContent = \"\";\n        }\n        this.displayElement.textContent += button.textContent;\n        _setCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addInput(button.id);\n      });\n    });\n  }\n}\n\nconst uiController = new UIController();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);\n\n\n//# sourceURL=webpack://sets/./src/uiController.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;