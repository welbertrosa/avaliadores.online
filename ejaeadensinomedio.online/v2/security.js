(()=>{var e=[,(e,t,n)=>{var o=n(2),i={injectContext:function(e){void 0!==e.authenticated?e.context=o.contexts.authenticated:e.context=o.contexts.anonymous}};e.exports=i},e=>{e.exports={contexts:{authenticated:"AUTHENTICATED",anonymous:"ANONYMOUS"}}},(e,t,n)=>{var o=n(4),i=n(5),r=n(2),u="https://api.mercadopago.com/v1/device_sessions",c="",s=document.currentScript&&document.currentScript.getAttribute("view")||"",a=document.currentScript&&document.currentScript.getAttribute("output")||"",d={getDeviceSessionURI:function(e){return"".concat(u,"/web_device")},getDeviceSessionBody:function(){return{section:"unknown",view:s}},getAnonymousURI:function(e){return"".concat(u,"/anonymous_device_session")},getAnonymousBody:function(e){return{device_id:e,view:s}},getAnonymousCallback:function(e){return function(t){var o=JSON.parse(t);n.g.MP_DEVICE_SESSION_ID=o.id;var r=document.getElementById("deviceId");null!=r&&(r.value=o.id),""!=a&&(i.build(a,o.id),i.defineGetterDeviceSessionId(a)),void 0!==e.out&&i.build(e.out,o.id)}},getDeviceSessionCallback:function(e){var t=this;return function(u){var s=JSON.parse(u),a=document.createElement("script");if(a.appendChild(document.createTextNode(s.widget.replace(/<script\b[^<]*">/gi,"").replace(/<\/script>[\s\S]*/gi,""))),i.addElement("head",a),c=s.id,n.g.MP_DEVICE_SESSION_ID=c,e.context===r.contexts.anonymous){n.g.MP_DEVICE_SESSION_ID=void 0;var d=t;setTimeout((function(){o.post({uri:d.getAnonymousURI(e),body:d.getAnonymousBody(c),then:d.getAnonymousCallback(e)})}),3e3)}}},execute:function(e){o.post({uri:this.getDeviceSessionURI(e),body:this.getDeviceSessionBody(),then:this.getDeviceSessionCallback(e)})}};e.exports=d},e=>{var t={post:function(e){var t=new XMLHttpRequest;t.open("POST",e.uri),t.setRequestHeader("Content-type","application/json"),t.withCredentials=false,t.send(JSON.stringify(e.body)),t.onreadystatechange=function(){4===t.readyState&&200===t.status&&void 0!==e.then&&e.then(t.responseText)}}};e.exports=t},(e,t,n)=>{var o={addElement:function(e,t){document.querySelector(e).appendChild(t)},addInputHidden:function(e,t,n){document.addEventListener("DOMContentLoaded",(function(){var o=document.createElement("input");o.id=t,o.name=t,o.type="hidden",o.value=n;var i=document.querySelector(e);null!=i?i.appendChild(o):document.body.appendChild(o)}))},build:function(e,t){this.recursiveBuild(n.g.window,e.split("."),t)},recursiveBuild:function(e,t,n){t.length>1?(e[t[0]]=e[t[0]]||{},this.recursiveBuild(e[t[0]],t.slice(1),n)):1===t.length&&(e[t[0]]=n)},defineGetterDeviceSessionId:function(e){this.recursiveDefineGetter(n.g.window,e.split("."))},recursiveDefineGetter:function(e,t){1!=t.length&&(t.length>2?this.recursiveDefineGetter(e[t[0]],t.slice(1)):2===t.length&&Object.defineProperty(e[t[0]],t[1],{get:function(){return window.MP_DEVICE_SESSION_ID}}))}};e.exports=o}],t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,u=void 0,u=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(r,"string"),"symbol"===e(u)?u:String(u)),i)}var r,u}function i(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}n.r(o),n.d(o,{default:()=>c});var r=n(1),u=n(3),c=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.injectContext(t),u.execute(t)}));new c({})})()})();