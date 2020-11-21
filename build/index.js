(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

var RichText = wp.editor.RichText;
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

var output = function output(headers) {
  var rootLevel,
      subRootLevel,
      currentLevel,
      prevLevel,
      nextLevel,
      array = [],
      lastElement;
  var root = document.createElement('ol'),
      ol,
      li,
      a,
      childLi,
      childOl,
      els = [],
      prevEl,
      elId;

  var _loop = function _loop(i) {
    currentLevel = headers[i].attributes.level;
    els.push(headers[i].attributes.content);

    if (i === 0) {
      rootLevel = currentLevel;
      array.push(headers[i]);
      li = document.createElement("li");
      elId = string_to_slug(headers[i].attributes.content);

      if (els.includes("li-".concat(elId))) {
        elId = string_to_slug(headers[i].attributes.content + i);
      }

      li.id = "li-".concat(elId);
      els.push("li-".concat(elId));
      a = document.createElement("a");
      a.href = "#".concat(elId);
      headers[i].attributes.headingID = elId;
      a.innerHTML = headers[i].attributes.content;
      li.append(a);
      root.append(li);
      return "continue";
    }

    prevLevel = headers[i - 1].attributes.level;

    if (currentLevel <= rootLevel) {
      array.push(headers[i]);
      li = document.createElement("li");
      elId = string_to_slug(headers[i].attributes.content);

      if (els.includes("li-".concat(elId))) {
        elId = string_to_slug(headers[i].attributes.content + i);
      }

      li.id = "li-".concat(elId);
      els.push("li-".concat(elId));
      a = document.createElement("a");
      a.href = "#".concat(elId);
      headers[i].attributes.headingID = elId;
      a.innerHTML = headers[i].attributes.content;
      li.append(a);
      root.append(li);
      return "continue";
    }

    if (currentLevel > prevLevel) {
      prevEl = els[els.length - 2];
      root.querySelectorAll("li").forEach(function (elem) {
        if (elem.id == prevEl) {
          ol = document.createElement("ol");
          li = document.createElement("li");
          elId = string_to_slug(headers[i].attributes.content);

          if (els.includes("li-".concat(elId))) {
            elId = string_to_slug(headers[i].attributes.content + i);
          }

          li.id = "li-".concat(elId);
          els.push("li-".concat(elId));
          a = document.createElement("a");
          a.href = "#".concat(elId);
          headers[i].attributes.headingID = elId;
          a.innerHTML = headers[i].attributes.content;
          li.append(a);
          ol.append(li);
          elem.append(ol);
        }
      });
    } else if (currentLevel === prevLevel) {
      prevEl = els[els.length - 2];
      root.querySelectorAll("li").forEach(function (elem) {
        if (elem.id == prevEl) {
          li = document.createElement("li");
          elId = string_to_slug(headers[i].attributes.content);

          if (els.includes("li-".concat(elId))) {
            elId = string_to_slug(headers[i].attributes.content + i);
          }

          li.id = "li-".concat(elId);
          els.push("li-".concat(elId));
          a = document.createElement("a");
          a.href = "#".concat(elId);
          headers[i].attributes.headingID = elId;
          a.innerHTML = headers[i].attributes.content;
          li.append(a);
          elem.parentNode.append(li);
        }
      });
    } else if (currentLevel < prevLevel) {
      var diff = prevLevel - currentLevel;

      if (diff === 1) {
        ol = li.parentNode.parentNode.parentNode;
      } else if (diff === 2) {
        ol = li.parentNode.parentNode.parentNode.parentNode.parentNode;
      } else if (diff === 3) {
        ol = li.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      } else if (diff === 4) {
        ol = li.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      }

      li = document.createElement("li");
      elId = string_to_slug(headers[i].attributes.content);

      if (els.includes("li-".concat(elId))) {
        elId = string_to_slug(headers[i].attributes.content + i);
      }

      li.id = "li-".concat(elId);
      els.push("li-".concat(elId));
      a = document.createElement("a");
      a.href = "#".concat(elId);
      headers[i].attributes.headingID = elId;
      a.innerHTML = headers[i].attributes.content;
      li.append(a);
      ol.append(li);
    }
  };

  for (var i = 0; i < headers.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  var rootDiv = document.createElement('div');
  rootDiv.append(root);
  return rootDiv;
};

var string_to_slug = function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim

  str = str.toLowerCase(); // remove accents, swap ñ for n, etc

  var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
  var to = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace('.', '-') // replace a dot by a dash
  .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
  .replace(/-+/g, '-') // collapse dashes
  .replace(/\//g, ''); // collapse all forward-slashes

  return str;
};

function Edit(props) {
  var _props$attributes = props.attributes,
      content = _props$attributes.content,
      title = _props$attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
  var allBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    return select("core/block-editor").getBlocks();
  });
  var headers = [];
  allBlocks.forEach(function (block, index) {
    if (block.name === 'core/heading' && block.attributes.isInToc) {
      headers.push(block);
    }
  });
  var html = output(headers).innerHTML;
  setAttributes({
    content: html
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "h2",
    onChange: function onChange(newValue) {
      return setAttributes({
        title: newValue
      });
    },
    value: title ? title : 'Table of Contents'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "op-toc",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}
;

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/save.js");



var addFilter = wp.hooks.addFilter;

 // import './op-toc-sidebar.js';



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('create-block/op-table-of-contents', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('OP Table Of Contents', 'op-table-of-contents'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Insert Table of Contents on your posts/pages and enhance user experience on your WordPress website.', 'op-table-of-contents'),
  category: 'widgets',
  keywords: ['toc'],
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: '.op-toc'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: 'h2',
      default: 'Table of Contents'
    }
  },
  icon: 'editor-ul',
  supports: {
    html: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

var filterBlocks = function filterBlocks(settings, name) {
  if (name !== 'core/heading') {
    return settings;
  }

  settings.attributes = Object.assign(settings.attributes, {
    isInToc: {
      type: 'boolean',
      default: true
    },
    headingID: {
      type: 'string',
      source: 'attribute',
      attribute: 'id',
      selector: '*',
      default: ''
    }
  });
  return settings;
};

addFilter('blocks.registerBlockType', 'op-dev/custom-attributes', filterBlocks);
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (props.name !== 'core/heading') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var isInToc = attributes.isInToc;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Included in TOC'),
      checked: !!isInToc,
      onChange: function onChange() {
        return setAttributes({
          isInToc: !isInToc
        });
      }
    })));
  };
}, 'withAdvancedControls');
addFilter('editor.BlockEdit', 'op-dev/heading-id-control', withAdvancedControls);

function coverApplyExtraClass(extraProps, blockType, attributes) {
  if (blockType.name !== 'core/heading') {
    return extraProps;
  }

  if (typeof attributes.anchor === 'undefined' || attributes.anchor === '') {
    extraProps.id = attributes.headingID;
  } else {
    extraProps.id = attributes.anchor;
  }

  return extraProps;
}

addFilter('blocks.getSaveContent.extraProps', 'op-dev/update-id', coverApplyExtraClass);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, props.attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "op-toc",
    dangerouslySetInnerHTML: {
      __html: props.attributes.content
    }
  }));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map