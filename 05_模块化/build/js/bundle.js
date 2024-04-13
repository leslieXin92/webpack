// 模块映射
var __webpack_modules__ = ({
  './src/js/math.js':
    ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // 调用r，记录当前为一个esModule
      __webpack_require__.r(__webpack_exports__)
      // 调用d，给exports设置代理definition
      __webpack_require__.d(__webpack_exports__, {
        mul: () => (mul),
        sum: () => (sum)
      })
      const sum = (a, b) => {
        return a + b
      }
      const mul = (a, b) => {
        return a * b
      }
    })
})

// 模块缓存
var __webpack_module_cache__ = {}

// 加载模块工具函数
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}

// 给__webpack_require__追加d函数
(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
      }
    }
  }
})();

// 给__webpack_require__追加o函数
(() => {
  __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();

// 给__webpack_require__追加r函数，判断当前为esModule
(() => {
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
})()

var __webpack_exports__ = {};

(() => {
  __webpack_require__.r(__webpack_exports__)
  var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/js/math.js')
  console.log('1 + 2 = ', (0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 2))
  console.log('2 * 3 = ', (0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(2, 3))
})()
