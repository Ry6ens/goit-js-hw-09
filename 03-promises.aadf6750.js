function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var i=r("eWCmQ");function l(e,o){return new Promise(((t,n)=>{const r={position:e,delay:o};setTimeout((()=>{Math.random()>.3?t(r):n(r)}),o)}))}document.querySelector(".form").addEventListener("submit",(o=>{o.preventDefault();const{elements:{delay:t,step:n,amount:r}}=o.currentTarget,s=Number(t.value),u=Number(r.value),a=Number(n.value);for(let o=0;o<u;o++)l(o+1,s+a*o).then((({position:o,delay:t})=>{console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{console.log(`❌ Rejected promise ${o} in ${t}ms`),e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}));o.currentTarget.reset()}));
//# sourceMappingURL=03-promises.aadf6750.js.map