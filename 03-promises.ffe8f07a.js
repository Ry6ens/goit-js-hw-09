!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc");function c(e,n){return new Promise((function(o,t){var r={position:e,delay:n};setTimeout((function(){Math.random()>.3?o(r):t(r)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.currentTarget.elements,t=o.delay,r=o.step,a=o.amount,u=Number(t.value),l=Number(a.value),s=Number(r.value),f=0;f<l;f++)c(f+1,u+s*f).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}));n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.ffe8f07a.js.map
