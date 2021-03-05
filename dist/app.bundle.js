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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calc__ = __webpack_require__(1);


window.onload = new __WEBPACK_IMPORTED_MODULE_0__calc__["a" /* Calc */]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Calc {
  constructor() {
    this.buttons = document.querySelectorAll(".button").forEach(button => button.addEventListener("click", () => this[`${button.dataset.type}ClickHandler`](button)));
    this.result = document.querySelector("#result");
    this.activeResult = false;
  }

  numberClickHandler(button) {
    if (this.activeResult) {
      this.result.value = button.value;
      this.activeResult = false;
    } else {
      this.result.value += button.value;
    }
  }

  operatorClickHandler(button) {
    this.result.value !== "" && (this.result.value += button.value);
  }

  zeroClickHandler(button) {
    this.result.value !== "0" && (this.result.value += button.value);
  }

  dotClickHandler() {
    this.result.value === "" ? this.result.value = "0." : this.result.value += ".";
  }

  equalClickHandler() {
    if (this.result.value !== "") {
      this.result.value = eval(this.result.value);
      this.activeResult = true;
    }
  }

  deleteClickHandler() {
    this.result.value = "";
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Calc;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTNjMzA5MDc3NmZhMTk2MTRhNTEiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jYWxjLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIkNhbGMiLCJjb25zdHJ1Y3RvciIsImJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGFzZXQiLCJ0eXBlIiwicmVzdWx0IiwicXVlcnlTZWxlY3RvciIsImFjdGl2ZVJlc3VsdCIsIm51bWJlckNsaWNrSGFuZGxlciIsInZhbHVlIiwib3BlcmF0b3JDbGlja0hhbmRsZXIiLCJ6ZXJvQ2xpY2tIYW5kbGVyIiwiZG90Q2xpY2tIYW5kbGVyIiwiZXF1YWxDbGlja0hhbmRsZXIiLCJldmFsIiwiZGVsZXRlQ2xpY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixJQUFJQyxtREFBSixFQUFoQixDOzs7Ozs7O0FDRk8sTUFBTUEsSUFBTixDQUFXO0FBQ2hCQyxnQkFBYztBQUNaLFNBQUtDLE9BQUwsR0FBZUMsU0FDWkMsZ0JBRFksQ0FDSyxTQURMLEVBRVpDLE9BRlksQ0FFSEMsTUFBRCxJQUFZQSxPQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxNQUFNLEtBQU0sR0FBRUQsT0FBT0UsT0FBUCxDQUFlQyxJQUFLLGNBQTVCLEVBQTJDSCxNQUEzQyxDQUF2QyxDQUZSLENBQWY7QUFHQSxTQUFLSSxNQUFMLEdBQWNQLFNBQVNRLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDRDs7QUFFREMscUJBQW1CUCxNQUFuQixFQUEyQjtBQUN6QixRQUFJLEtBQUtNLFlBQVQsRUFBdUI7QUFDckIsV0FBS0YsTUFBTCxDQUFZSSxLQUFaLEdBQW9CUixPQUFPUSxLQUEzQjtBQUNBLFdBQUtGLFlBQUwsR0FBb0IsS0FBcEI7QUFDRCxLQUhELE1BR087QUFDTCxXQUFLRixNQUFMLENBQVlJLEtBQVosSUFBcUJSLE9BQU9RLEtBQTVCO0FBQ0Q7QUFDRjs7QUFFREMsdUJBQXFCVCxNQUFyQixFQUE2QjtBQUMzQixTQUFLSSxNQUFMLENBQVlJLEtBQVosS0FBc0IsRUFBdEIsS0FBNkIsS0FBS0osTUFBTCxDQUFZSSxLQUFaLElBQXFCUixPQUFPUSxLQUF6RDtBQUNEOztBQUVERSxtQkFBaUJWLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQUtJLE1BQUwsQ0FBWUksS0FBWixLQUFzQixHQUF0QixLQUE4QixLQUFLSixNQUFMLENBQVlJLEtBQVosSUFBcUJSLE9BQU9RLEtBQTFEO0FBQ0Q7O0FBRURHLG9CQUFrQjtBQUNoQixTQUFLUCxNQUFMLENBQVlJLEtBQVosS0FBc0IsRUFBdEIsR0FBNEIsS0FBS0osTUFBTCxDQUFZSSxLQUFaLEdBQW9CLElBQWhELEdBQXlELEtBQUtKLE1BQUwsQ0FBWUksS0FBWixJQUFxQixHQUE5RTtBQUNEOztBQUVESSxzQkFBb0I7QUFDbEIsUUFBSSxLQUFLUixNQUFMLENBQVlJLEtBQVosS0FBc0IsRUFBMUIsRUFBOEI7QUFDNUIsV0FBS0osTUFBTCxDQUFZSSxLQUFaLEdBQW9CSyxLQUFLLEtBQUtULE1BQUwsQ0FBWUksS0FBakIsQ0FBcEI7QUFDQSxXQUFLRixZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7QUFDRjs7QUFFRFEsdUJBQXFCO0FBQ25CLFNBQUtWLE1BQUwsQ0FBWUksS0FBWixHQUFvQixFQUFwQjtBQUNEO0FBdkNlLEMiLCJmaWxlIjoiLi9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTNjMzA5MDc3NmZhMTk2MTRhNTEiLCJpbXBvcnQgeyBDYWxjIH0gZnJvbSBcIi4vY2FsY1wiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IG5ldyBDYWxjKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiLCJleHBvcnQgY2xhc3MgQ2FsYyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIilcclxuICAgICAgLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzW2Ake2J1dHRvbi5kYXRhc2V0LnR5cGV9Q2xpY2tIYW5kbGVyYF0oYnV0dG9uKSkpO1xyXG4gICAgdGhpcy5yZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcclxuICAgIHRoaXMuYWN0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBudW1iZXJDbGlja0hhbmRsZXIoYnV0dG9uKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVSZXN1bHQpIHtcclxuICAgICAgdGhpcy5yZXN1bHQudmFsdWUgPSBidXR0b24udmFsdWU7XHJcbiAgICAgIHRoaXMuYWN0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc3VsdC52YWx1ZSArPSBidXR0b24udmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRvckNsaWNrSGFuZGxlcihidXR0b24pIHtcclxuICAgIHRoaXMucmVzdWx0LnZhbHVlICE9PSBcIlwiICYmICh0aGlzLnJlc3VsdC52YWx1ZSArPSBidXR0b24udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgemVyb0NsaWNrSGFuZGxlcihidXR0b24pIHtcclxuICAgIHRoaXMucmVzdWx0LnZhbHVlICE9PSBcIjBcIiAmJiAodGhpcy5yZXN1bHQudmFsdWUgKz0gYnV0dG9uLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRvdENsaWNrSGFuZGxlcigpIHtcclxuICAgIHRoaXMucmVzdWx0LnZhbHVlID09PSBcIlwiID8gKHRoaXMucmVzdWx0LnZhbHVlID0gXCIwLlwiKSA6ICh0aGlzLnJlc3VsdC52YWx1ZSArPSBcIi5cIik7XHJcbiAgfVxyXG5cclxuICBlcXVhbENsaWNrSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnJlc3VsdC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnJlc3VsdC52YWx1ZSA9IGV2YWwodGhpcy5yZXN1bHQudmFsdWUpO1xyXG4gICAgICB0aGlzLmFjdGl2ZVJlc3VsdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVDbGlja0hhbmRsZXIoKSB7XHJcbiAgICB0aGlzLnJlc3VsdC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NhbGMuanMiXSwic291cmNlUm9vdCI6IiJ9