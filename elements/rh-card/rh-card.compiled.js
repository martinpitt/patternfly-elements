!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"));else{t(e.rhelementCompiled),e.rhCard={}}}(this,function(e){"use strict";var t,r=(t=e)&&t.__esModule?t:{default:t};var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),n(t,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block;\n  padding: var(--rhe-theme--spacer, 1rem);\n  border: var(--rhe-theme--border--BorderWidth, 1px) var(--rhe-theme--border--BorderStyle, solid) transparent; }\n\n:host([theme="dark"]) {\n  background: var(--rhe-theme--bg-color--shade7, #252527);\n  color: var(--rhe-theme--text-color--shade7, #fff); }\n\n:host([theme="light"]) {\n  background: var(--rhe-theme--bg-color--shade2, #e7e7e7);\n  color: var(--rhe-theme--text-color--shade2, #333); }\n\n:host .rh-card__header::slotted(h1:first-child),\n:host .rh-card__header::slotted(h2:first-child),\n:host .rh-card__header::slotted(h3:first-child),\n:host .rh-card__header::slotted(h4:first-child),\n:host .rh-card__header::slotted(h5:first-child),\n:host .rh-card__header::slotted(h6:first-child) {\n  margin-top: 0 !important; }\n</style>\n\n<slot class="rh-card__header" name="header"></slot>\n<slot class="rh-card__body"></slot>\n<slot class="rh-card__footer" name="footer"></slot>'}},{key:"styleUrl",get:function(){return"rh-card.scss"}},{key:"templateUrl",get:function(){return"rh-card.html"}}],[{key:"tag",get:function(){return"rh-card"}}]),t}();r.default.create(o)});