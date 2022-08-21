"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{5425:function(t,e,n){n.d(e,{Z:function(){return C}});var o=n(7294),i=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}()}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,s="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),c="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],u="undefined"!==typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function r(){n&&(n=!1,t()),o&&a()}function s(){c(r)}function a(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},l=b(0,0,0,0);function p(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function _(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var o=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=p(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,c=p(o.width),a=p(o.height);if("border-box"===o.boxSizing&&(Math.round(c+r)!==e&&(c-=v(o,"left","right")+r),Math.round(a+s)!==n&&(a-=v(o,"top","bottom")+s)),!function(t){return t===d(t).document.documentElement}(t)){var u=Math.round(c+r)-e,f=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(f)&&(a-=f)}return b(i.left,i.top,c,a)}var m="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"===typeof t.getBBox};function y(t){return r?m(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):_(t):l}function b(t,e,n,o){return{x:t,y:e,width:n,height:o}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=y(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n=function(t){var e=t.x,n=t.y,o=t.width,i=t.height,r="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(r.prototype);return h(s,{x:e,y:n,width:o,height:i,top:n,right:e+o,bottom:i+n,left:e}),s}(e);h(this,{target:t,contentRect:n})},E=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!==typeof WeakMap?new WeakMap:new i,T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),o=new E(e,n,this);O.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){T.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));var k="undefined"!==typeof s.ResizeObserver?s.ResizeObserver:T,M=t=>{let e=t.parentNode;for(;e;){if("contents"!==getComputedStyle(e,null).getPropertyValue("display"))break;e=e.parentNode}return e||window},x=null;"undefined"!==typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?x="sticky":CSS.supports("position","-webkit-sticky")&&(x="-webkit-sticky"));var B,S=!1;try{B=Object.defineProperty({},"passive",{get(){S={passive:!0}}}),window.addEventListener("testPassive",null,B),window.removeEventListener("testPassive",null,B)}catch(R){}var A=(t,{offsetTop:e,offsetBottom:n,bottom:o})=>{const i=(t=>{let e=t;for(;e=e.parentElement;){const t=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===t||"scroll"===t)return e}return window})(t);let r=i===window?window.scrollY:i.scrollTop;const s=[];let c,a,u,f,h,d,l;const p=()=>"relative"===c?a:"stickyTop"===c?Math.max(0,d+r-f+e):"stickyBottom"===c?Math.max(0,d+r+l-(f+u+n)):void 0,v=t=>{t+d+l>=f+u+a+n&&_("stickyBottom")},_=i=>{if(c=i,"relative"===i)if(t.style.position="relative",o){const e=Math.max(0,h-u-a);t.style.bottom=`${e}px`}else t.style.top=`${a}px`;else t.style.position=x,"stickyBottom"===i?o?t.style.bottom=`${n}px`:t.style.top=l-u-n+"px":o?t.style.bottom=l-u-n+"px":t.style.top=`${e}px`;a=p()},m=()=>{o?"stickyBottom"!==c&&_("stickyBottom"):"stickyTop"!==c&&_("stickyTop")},y=(t,e,n,o)=>{t.addEventListener(e,n,o),s.push((()=>t.removeEventListener(e,n)))},b=()=>{const t=i===window?window.scrollY:i.scrollTop;if(t===r)return;if(u+e+n<=l)return m(),void(r=t);const o=t-r;a=p(),o>0?"stickyTop"===c?t+d+e>f&&_(t+d+l<=f+u+a+n?"relative":"stickyBottom"):"relative"===c&&v(t):"stickyBottom"===c?d+t+l<f+h+n&&_(d+t+e>=f+a?"relative":"stickyTop"):"relative"===c&&d+t+e<f+a&&_("stickyTop"),r=t},w=()=>{l=window.innerHeight,d=0,b()},g=()=>{l=i.offsetHeight,0===l&&console.warn("react-sticky-box's scroll pane has a height of 0. This seems odd. Please check this node:",i),d=i.firstChild.offsetParent===i?i.getBoundingClientRect().top:0,b()},E=()=>{const e=M(t),n=getComputedStyle(e,null),s=parseInt(n.getPropertyValue("padding-top"),10),a=s+parseInt(n.getPropertyValue("padding-bottom"),10);f=((t,e)=>{let n=t,o=0;e.firstChild&&e.firstChild.offsetParent!==e&&(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o})(e,i)+s+d;const u=h;h=e.getBoundingClientRect().height-a,"relative"===c&&(o?_("relative"):u>h&&v(r)),u!==h&&"relative"===c&&(r=Number.POSITIVE_INFINITY,b())},O=({initial:i}={})=>{const r=u;if(u=t.getBoundingClientRect().height,!i&&r!==u){if(u+e+n<=l)return c=void 0,void m();{const t=r-u,e=h-u,n=Math.min(e,p()+(o?t:0));a=Math.max(0,n),o&&"stickyBottom"===c||_("relative")}}},T=(t,e)=>{const n=new k(e);n.observe(t),s.push((()=>n.disconnect()))};return y(i,"scroll",b,S),y(i,"mousewheel",b,S),i===window?(y(window,"resize",w),w()):(T(i,g),g()),T(M(t),E),E(),T(t,O),O({initial:!0}),m(),()=>s.forEach((t=>t()))},C=({offsetTop:t,offsetBottom:e,bottom:n,children:i,className:r,style:s})=>{const c=(({offsetTop:t=0,offsetBottom:e=0,bottom:n=!1}={})=>{const[i,r]=(0,o.useState)(null),s=(0,o.useRef)({offsetTop:t,offsetBottom:e,bottom:n});return(0,o.useEffect)((()=>{s.current={offsetTop:t,offsetBottom:e,bottom:n}})),(0,o.useEffect)((()=>{if(i)return A(i,s.current)}),[i]),r})({offsetTop:t,offsetBottom:e,bottom:n});return o.createElement("div",{className:r,style:s,ref:c},i)}}}]);