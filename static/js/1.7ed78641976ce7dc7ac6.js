webpackJsonp([1],{"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"7gu3":function(t,n){},"9bBU":function(t,n,e){e("mClu");var r=e("FeBl").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},C4MV:function(t,n,e){t.exports={default:e("9bBU"),__esModule:!0}},Emfm:function(t,n){},EqjI:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},MLb3:function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1oiIC8+PC9zdmc+"},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},ON07:function(t,n,e){var r=e("EqjI"),i=e("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},ZUG5:function(t,n){},ZfQU:function(t,n){},Zrlr:function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},evD5:function(t,n,e){var r=e("77Pl"),i=e("SfB7"),o=e("MmMw"),a=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},hJx8:function(t,n,e){var r=e("evD5"),i=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},hlPV:function(t,n,e){var r;r=function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p=".",n(n.s=10)}([function(t,n){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,n,e){"use strict";function r(t){var n=document.createEvent("Event");return n.initEvent(t,!0,!0),n}var i=e(2),o=e(0),a=e.n(o);n.a=function(t,n){var o=n.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:a.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(n){if(n.isTrusted){var a=t.selectionEnd,u=t.value[a-1];for(t.value=e.i(i.a)(t.value,o.mask,!0,o.tokens);a<t.value.length&&t.value.charAt(a-1)!==u;)a++;t===document.activeElement&&(t.setSelectionRange(a,a),setTimeout(function(){t.setSelectionRange(a,a)},0)),t.dispatchEvent(r("input"))}};var s=e.i(i.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,n,e){"use strict";var r=e(6),i=e(5);n.a=function(t,n){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(n)?e.i(i.a)(r.a,n,a)(t,n,o,a):e.i(r.a)(t,n,o,a)}},function(t,n,e){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",a.a)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(1),u=e(7),s=e.n(u);e.d(n,"TheMask",function(){return s.a}),e.d(n,"mask",function(){return a.a}),e.d(n,"tokens",function(){return o.a}),e.d(n,"version",function(){return c});var c="0.11.1";n.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),i=e(0),o=e.n(i),a=e(2);n.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=e.i(a.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,n,e){"use strict";n.a=function(t,n,e){return n=n.sort(function(t,n){return t.length-n.length}),function(r,i){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<n.length;){var u=n[a],s=n[++a];if(!(s&&t(r,s,!0,e).length>u.length))return t(r,u,o,e)}return""}}},function(t,n,e){"use strict";n.a=function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",n=n||"";for(var i=0,o=0,a="";i<n.length&&o<t.length;){var u=r[l=n[i]],s=t[o];u&&!u.escape?(u.pattern.test(s)&&(a+=u.transform?u.transform(s):s,i++),o++):(u&&u.escape&&(l=n[++i]),e&&(a+=l),s===l&&o++,i++)}for(var c="";i<n.length&&e;){var l;if(r[l=n[i]]){c="";break}c+=l,i++}return a+c}},function(t,n,e){var r=e(8)(e(4),e(9),null,null);t.exports=r.exports},function(t,n){t.exports=function(t,n,e,r){var i,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,o=t.default);var u="function"==typeof o?o.options:o;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),e&&(u._scopeId=e),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var n=r[t];s[t]=function(){return n}})}return{esModule:i,exports:o,options:u}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,n,e){t.exports=e(3)}])},t.exports=r()},kM2E:function(t,n,e){var r=e("7KvD"),i=e("FeBl"),o=e("+ZMJ"),a=e("hJx8"),u=function(t,n,e){var s,c,l,f=t&u.F,d=t&u.G,p=t&u.S,v=t&u.P,m=t&u.B,h=t&u.W,y=d?i:i[n]||(i[n]={}),g=y.prototype,b=d?r:p?r[n]:(r[n]||{}).prototype;for(s in d&&(e=n),e)(c=!f&&b&&void 0!==b[s])&&s in y||(l=c?b[s]:e[s],y[s]=d&&"function"!=typeof b[s]?e[s]:m&&c?o(l,r):h&&b[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[s]=l,t&u.R&&g&&!g[s]&&a(g,s,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},mClu:function(t,n,e){var r=e("kM2E");r(r.S+r.F*!e("+E39"),"Object",{defineProperty:e("evD5").f})},rcMg:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("hlPV"),i={name:"fraction-input",directives:{mask:r.mask},props:{value:Number,disabled:Boolean},mounted:function(){this.margin=this.$el.offsetWidth-this.$el.clientWidth},methods:{onInput:function(t){t.target.style.width=null;var n=t.target,e=n.offsetWidth,r=n.scrollWidth;e<r&&(t.target.style.width=r+this.margin+"px");var i=t.target.value;this.$emit("input",""!==i?+i:void 0),this.$emit("change")}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:"################",expression:"'################'"}],staticClass:"fraction-input",attrs:{name:"denominator",disabled:this.disabled},domProps:{value:this.value},on:{input:this.onInput}})},staticRenderFns:[]};var a={name:"fraction",components:{FractionInput:e("VU/8")(i,o,!1,function(t){e("7gu3")},null,null).exports},props:{numerator:Number,denominator:Number,disabled:Boolean},data:function(){return{localNumerator:void 0,localDenominator:void 0}},watch:{numerator:{immediate:!0,handler:function(t){this.localNumerator=t}},denominator:{immediate:!0,handler:function(t){this.localDenominator=t}}},methods:{onChange:function(){void 0!==this.localNumerator&&void 0!==this.localDenominator?this.$emit("change",{numerator:this.localNumerator,denominator:this.localDenominator}):this.$emit("change")}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fraction"},[e("fraction-input",{staticClass:"fraction__input",attrs:{name:"numerator",value:t.localNumerator,disabled:t.disabled},on:{input:function(n){t.localNumerator=n},change:t.onChange}}),e("hr",{staticClass:"fraction__divider"}),e("fraction-input",{staticClass:"fraction__input",attrs:{name:"denominator",value:t.localDenominator,disabled:t.disabled},on:{input:function(n){t.localDenominator=n},change:t.onChange}})],1)},staticRenderFns:[]};var s=e("VU/8")(a,u,!1,function(t){e("vmQu")},null,null).exports,c=/[-+/*()]+/,l={name:"operands-input",props:{value:{type:String}},methods:{onInput:function(t){var n=t.target.value;!c.test(n)&&n&&(n=this.value),t.target.value=n||"",this.$emit("input",n||void 0),this.$emit("change",n||void 0)}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"operands-input",attrs:{name:"operand"},on:{input:this.onInput}})},staticRenderFns:[]};var d=e("VU/8")(l,f,!1,function(t){e("ZfQU")},null,null).exports,p=e("Zrlr"),v=e.n(p),m=e("wxAW"),h=e.n(m),y=function(){function t(n){var e=n.numerator,r=n.denominator;if(v()(this,t),0===r)throw new Error("Делитель у дроби не может быть 0");var i=e?t.getMinCommonDivider(e,r):1;this.numerator=e/i,this.denominator=r/i}return h()(t,[{key:"toString",value:function(){return this.numerator+"/"+this.denominator}}],[{key:"getMinCommonDivider",value:function(n,e){return e?t.getMinCommonDivider(e,n%e):n}},{key:"add",value:function(n,e){return new t({numerator:n.numerator*e.denominator+e.numerator*n.denominator,denominator:n.denominator*e.denominator})}},{key:"substraction",value:function(n,e){return new t({numerator:n.numerator*e.denominator-e.numerator*n.denominator,denominator:n.denominator*e.denominator})}},{key:"multiply",value:function(n,e){return new t({numerator:n.numerator*e.numerator,denominator:n.denominator*e.denominator})}},{key:"division",value:function(n,e){return new t({numerator:n.numerator*e.denominator,denominator:n.denominator*e.numerator})}}]),t}();function g(t){var n=[];return t.forEach(function(t){switch(t.type){case"number":n.push(t);break;case"operand":var e=n.pop(),r=function(t,n,e){switch(e){case"+":return y.add(new y(t),new y(n));case"-":return y.substraction(new y(t),new y(n));case"*":return y.multiply(new y(t),new y(n));case"/":return y.division(new y(t),new y(n));default:throw new Error("Calc for operation ["+e+"] is not exist")}}(n.pop().value,e.value,t.value);n.push({type:"number",value:r});break;default:console.warn("Type ["+t.type+"] is not handle")}}),n.pop().value}var b={name:"expression",components:{Fraction:s,OperandsInput:d},data:function(){return{errorMessage:null,list:[{type:"number",value:void 0},{type:"operand-list",value:void 0},{type:"number",value:void 0}],result:{}}},computed:{hasAllToken:function(){return!this.list.map(function(t){return t.value}).includes(void 0)}},methods:{onChange:function(t,n){this.errorMessage=null,this.result=null,this.list.splice(t,1,n),this.calculation()},addFraction:function(){this.errorMessage=null,this.result=null,this.list.push({type:"operand-list",value:void 0},{type:"number",value:void 0})},calculation:function(){if(this.hasAllToken){var t=this.list.reduce(function(t,n){switch(n.type){case"number":return t.concat(n);case"operand-list":var e=n.value.split("").map(function(t){return{type:"operand",value:t}});return t.concat(e);default:return console.warn("Type ["+n.type+"] is not handle"),t}},[]);try{var n=g(function(t){var n=[],e=[];return t.forEach(function(t){switch(t.type){case"number":n.push(t);break;case"operand":if(/[-+/*(]/.test(t.value))e.push(t);else if(")"===t.value){var r=void 0;do{r=e.pop(),n.push(r)}while("("!==r.value&&e.length);if("("!==(r=n.pop()).value)throw new Error("Выражение неверно")}break;default:console.warn("Type ["+t.type+"] is not handle")}}),n.concat(e)}(t));this.result=n}catch(t){this.errorMessage=t.message,console.error(t)}}}}},w={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"expression"},[r("div",{staticClass:"expression__button",on:{click:t.addFraction}},[r("img",{attrs:{src:e("MLb3")}}),r("span",[t._v("add fraction")])]),r("transition-group",{staticClass:"expression__main",attrs:{tag:"div",name:"fade"}},[t._l(t.list,function(n,e){return["number"===n.type?r("fraction",t._b({key:e,staticClass:"expression__fraction",on:{change:function(n){t.onChange(e,{type:"number",value:n})}}},"fraction",n.value,!1)):t._e(),"operand-list"===n.type?r("operands-input",{key:e,staticClass:"expression__operand",attrs:{value:n.value},on:{change:function(n){t.onChange(e,{type:"operand-list",value:n})}}}):t._e()]}),r("img",{key:"icon",staticClass:"expression__icon",attrs:{src:e("x+pj")}}),r("fraction",t._b({key:"result",staticClass:"expression__fraction",attrs:{disabled:"disabled"}},"fraction",t.result,!1))],2),r("div",{staticClass:"expression__error-message"},[t._v(t._s(t.errorMessage))])],1)},staticRenderFns:[]};var x={name:"view-fraction",components:{Expression:e("VU/8")(b,w,!1,function(t){e("ZUG5")},null,null).exports}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"view-fraction"},[n("h1",{staticClass:"view-fraction__title"},[this._v("Калькулятор дробей")]),n("section",{staticClass:"view-fraction__main"},[n("expression")],1)])},staticRenderFns:[]};var M=e("VU/8")(x,_,!1,function(t){e("Emfm")},null,null);n.default=M.exports},vmQu:function(t,n){},wxAW:function(t,n,e){"use strict";n.__esModule=!0;var r,i=e("C4MV"),o=(r=i)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},"x+pj":function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDEwSDVWOEgxOVYxME0xOSwxNkg1VjE0SDE5VjE2WiIgLz48L3N2Zz4="}});
//# sourceMappingURL=1.7ed78641976ce7dc7ac6.js.map