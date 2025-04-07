var GP=function(t){"use strict";let e=t=>{let e;let n=new Set,o=(t,o)=>{let i="function"==typeof t?t(e):t;if(!Object.is(i,e)){let t=e;e=(null!=o?o:"object"!=typeof i)?i:Object.assign({},e,i),n.forEach(n=>n(e,t))}},i=()=>e,r={setState:o,getState:i,subscribe:t=>(n.add(t),()=>n.delete(t)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(o,i,r),r},n=t=>t?e(t):e,o=({query:t,container:e})=>{let n=null;try{n=(e||document).querySelector(t||"")}catch(t){console.info("querySelector error",t)}return n};function i(t,e){let n=t.getBoundingClientRect().top+window.pageYOffset,o=window.pageYOffset,i=n-o,r=null;requestAnimationFrame(function t(n){var a;null===r&&(r=n);let s=n-r,l=(a=s/(e/2))<1?i/2*a*a+o:-i/2*(--a*(a-2)-1)+o;window.scrollTo(0,l),s<e&&requestAnimationFrame(t)})}let r=t=>t.substring(1),a=(t,e)=>{if(t){if(e){i(t,e);return}!function(t,e=700){if(!t)return;let{startPosition:n,distance:o}=function(t){let e=t.getBoundingClientRect().top+window.pageYOffset,n=window.pageYOffset;return{targetPosition:e,startPosition:n,distance:e-n}}(t),i=t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,r=null;requestAnimationFrame(function t(a){null===r&&(r=a);let s=a-r,l=i(Math.min(s/e,1));window.scrollTo(0,n+o*l),s<e&&requestAnimationFrame(t)})}(t)}},s=t=>{t&&t.scrollIntoView({behavior:"smooth"})},l=(t,e,n,o)=>{try{if(t&&"DIALOG"===t.tagName){var i;null===(i=t.parentNode)||void 0===i||i.openModal()}"scroll-to-top"===e&&c(n),o&&(a(o,n),setTimeout(()=>{window.location.hash=`#${e}`},300))}catch(t){console.info("Handle link clicked error",t)}},c=t=>{let e=document.documentElement;if(t){i(e,t);return}window.scrollTo({top:0,behavior:"smooth"})};function u(t,e){var n=function(t,e,n){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e,0);return n.get?n.get.call(t):n.value}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(()=>{let t=window.location.hash;if(t){window.history.scrollRestoration="manual";let e=()=>{let n=o({query:`[id='${r(t)}']`});setTimeout(()=>s(n),100),document.removeEventListener("DOMContentLoaded",e)};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}})(),(()=>{let t=document.querySelectorAll('a[href^="#"]');t.forEach(t=>{let e=t.getAttribute("href");if(!e||"#"===e)return;let n=r(e),i=o({query:`[data-gp-dialog-id='${n}']`}),a=o({query:`[id='${n}']`}),s=Number(t.getAttribute("data-scroll-speed"));t.addEventListener("click",t=>{t.preventDefault(),l(i,n,s,a)})})})(),window.Shopify=window.Shopify||{},window.Shopify.formatMoney||(window.Shopify.formatMoney=function(t,e){let n="",o=/\{\{\s*(\w+)\s*\}\}/,i=e||this.money_format;function r(t,e){return void 0===t?e:t}function a(t,e,n,o){var i;if(e=r(e,2),n=r(n,","),o=r(o,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(Number(e));let a=t.split("."),s=null===(i=a[0])||void 0===i?void 0:i.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n),l=a[1]?o+a[1]:"";return s+l}switch("string"==typeof t&&(t=t.replace(".","")),i.match(o)[1]){case"amount":n=a(t,2);break;case"amount_no_decimals":n=a(t,0);break;case"amount_with_comma_separator":n=a(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=a(t,0,".",",");break;case"amount_with_apostrophe_separator":n=a(t,2,"'",".");break;case"amount_no_decimals_with_space_separator":n=a(t,0," ");break;case"amount_with_space_separator":n=a(t,2," ",",");break;case"amount_with_period_and_space_separator":n=a(t,2," ",".")}return i.replace(o,n)});var h=new WeakMap;class f extends HTMLElement{constructor(){super(),d(this,"context",void 0),d(this,"store",void 0),function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,h),h.set(this,{writable:!0,value:t=>{if(!t)return{};try{var e;let n=null!==(e=JSON.parse(t))&&void 0!==e?e:{};return n}catch(t){return{}}}}),d(this,"getState",t=>{let e=this.store.getState();return t?e[t]:e}),d(this,"setState",(t,e)=>{this.store.setState({[t]:e})}),d(this,"subscribeState",t=>this.store.subscribe(t)),d(this,"subscribe",this.subscribeState),d(this,"getStoreContext",()=>this.context),d(this,"getContext",t=>{let e=this.context.getState();return t?e[t]:e}),d(this,"setContext",(t,e)=>{this.context.setState({[t]:e})}),d(this,"subscribeContext",t=>this.context.subscribe(t)),d(this,"trigger",({event:t,data:e})=>{let n=this.getState("uid"),o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:{uid:n,data:e}});this.dispatchEvent(o)}),d(this,"onTrigger",({event:t},e)=>{this.addEventListener(t,t=>{let n=t.detail;e&&e(n)})});let t=this.getAttribute("gp-data"),e=this.getAttribute("gp-context");if(this.store=n(()=>u(this,h).call(this,t)),e)this.context=n(()=>u(this,h).call(this,e));else{let t=this.closest("[gp-context]");t&&t.getStoreContext?this.context=t.getStoreContext():this.context=n(()=>({}))}}}return t.Component=f,t}({});
const gpGlobalLoaded = new CustomEvent('gp-global-loaded');window.dispatchEvent(gpGlobalLoaded);window.gpReadyState = 'completed';