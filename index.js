!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Revue=e():t.Revue=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return t[n].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var u=function(){function t(t,e){var r=[],n=!0,u=!1,i=void 0;try{for(var o,f=t[Symbol.iterator]();!(n=(o=f.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){u=!0,i=c}finally{try{!n&&f.return&&f.return()}finally{if(u)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=e.store,n=/([a-zA-Z0-9\._-]+)\s{1,2}as\s{1,2}([a-zA-Z0-9\._-]+)/i;Object.defineProperties(t.prototype,{$revue:{value:r},$subscribe:{value:function(){var t=this;this.$unsubscribe(),this.unsubscriber=[];for(var e=arguments.length,i=Array(e),f=0;e>f;f++)i[f]=arguments[f];i.forEach(function(e){var i=e,f=e;if(n.test(e)){var s=e.match(n),a=u(s,3);f=a[1],i=a[2]}var l=r.getState()[f],p=function(){var e=l;l=o.default.get(r.getState(),f),(0,c.default)(e,l)||o.default.set(t._data,i,l)};t.unsubscriber.push(r.subscribe(p))})}},$unsubscribe:{value:function(){this.unsubscriber&&this.unsubscriber.length>0&&this.unsubscriber.forEach(function(t){return t()})}}}),t.mixin({beforeDestroy:function(){this.$unsubscribe()}})};var i=r(3),o=n(i),f=r(2),c=n(f)},function(t,e){"use strict";function r(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function n(t,e){if("object"===("undefined"==typeof t?"undefined":r(t))){if(t===e)return!0;var n=Object.keys(t),u=Object.keys(e);if(n.length!==u.length)return!1;for(var i=Object.prototype.hasOwnProperty,o=0;o<n.length;o++)if(!i.call(e,n[o])||t[n[o]]!==e[n[o]])return!1;return!0}return t===e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,r){var n,u,i;!function(r,o){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=o():(u=[],n=o,i="function"==typeof n?n.apply(e,u):n,!(void 0!==i&&(t.exports=i)))}(this,function(){"use strict";function t(t){if(!t)return!0;if(i(t)&&0===t.length)return!0;if(!n(t)){for(var e in t)if(l.call(t,e))return!1;return!0}return!1}function e(t){return a.call(t)}function r(t){return"number"==typeof t||"[object Number]"===e(t)}function n(t){return"string"==typeof t||"[object String]"===e(t)}function u(t){return"object"==typeof t&&"[object Object]"===e(t)}function i(t){return"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===e(t)}function o(t){return"boolean"==typeof t||"[object Boolean]"===e(t)}function f(t){var e=parseInt(t);return e.toString()===t?e:t}function c(e,u,i,o){if(r(u)&&(u=[u]),t(u))return e;if(n(u))return c(e,u.split(".").map(f),i,o);var s=u[0];if(1===u.length){var a=e[s];return void 0!==a&&o||(e[s]=i),a}return void 0===e[s]&&(r(u[1])?e[s]=[]:e[s]={}),c(e[s],u.slice(1),i,o)}function s(e,u){if(r(u)&&(u=[u]),!t(e)){if(t(u))return e;if(n(u))return s(e,u.split("."));var o=f(u[0]),c=e[o];if(1===u.length)void 0!==c&&(i(e)?e.splice(o,1):delete e[o]);else if(void 0!==e[o])return s(e[o],u.slice(1));return e}}var a=Object.prototype.toString,l=Object.prototype.hasOwnProperty,p=function(t){return Object.keys(p).reduce(function(e,r){return"function"==typeof p[r]&&(e[r]=p[r].bind(p,t)),e},{})};return p.has=function(e,o){if(t(e))return!1;if(r(o)?o=[o]:n(o)&&(o=o.split(".")),t(o)||0===o.length)return!1;for(var f=0;f<o.length;f++){var c=o[f];if(!u(e)&&!i(e)||!l.call(e,c))return!1;e=e[c]}return!0},p.ensureExists=function(t,e,r){return c(t,e,r,!0)},p.set=function(t,e,r,n){return c(t,e,r,n)},p.insert=function(t,e,r,n){var u=p.get(t,e);n=~~n,i(u)||(u=[],p.set(t,e,u)),u.splice(n,0,r)},p.empty=function(e,f){if(t(f))return e;if(!t(e)){var c,s;if(!(c=p.get(e,f)))return e;if(n(c))return p.set(e,f,"");if(o(c))return p.set(e,f,!1);if(r(c))return p.set(e,f,0);if(i(c))c.length=0;else{if(!u(c))return p.set(e,f,null);for(s in c)l.call(c,s)&&delete c[s]}}},p.push=function(t,e){var r=p.get(t,e);i(r)||(r=[],p.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},p.coalesce=function(t,e,r){for(var n,u=0,i=e.length;i>u;u++)if(void 0!==(n=p.get(t,e[u])))return n;return r},p.get=function(e,u,i){if(r(u)&&(u=[u]),t(u))return e;if(t(e))return i;if(n(u))return p.get(e,u.split("."),i);var o=f(u[0]);return 1===u.length?void 0===e[o]?i:e[o]:p.get(e[o],u.slice(1),i)},p.del=function(t,e){return s(t,e)},p})}])});