import{bk as E,bl as w,bm as I,aX as k,bn as M,a7 as T}from"./app.ZXowmuNl.js";const v=()=>{const{myshopifyDomain:e}=E(),{checkoutSessionIdentifier:a}=w(),o=I();return{exchangeSessionTokenForCookie:k(async({token:u,origin:d,analytics_trace_id:i,in_checkout_profile_preview:t})=>{const{primary:h}=M(),n=new URLSearchParams({token:u,origin:d,shopify_domain:e});a&&n.set("checkout_token",a),i&&n.set("analytics_trace_id",i),t&&n.set("in_checkout_profile_preview",t),await fetch(`https://${h}${o.shopPaySession()}?${n.toString()}`,{method:"POST",keepalive:!0})},[a,e,o])}},_="shopify_pay",c=":";var r=(e=>(e.Closed="closed",e.EmailChanged="emailChanged",e.Error="error",e.Hidden="hidden",e.Loaded="loaded",e.LoggedIn="loggedIn",e.Ready="ready",e.RedirectWithEmailOnly="redirectWithEmailOnly",e.Resized="resized",e.ShareCaptchaToken="shareCaptchaToken",e))(r||{}),L=(e=>(e.AllowNoInitialEmail="allowNoInitialEmail",e.Create="create",e.Hidden="hidden",e.OriginChanged="originChanged",e.Ready="ready",e.CheckoutQueueToken="checkoutQueueToken",e))(L||{}),N=(e=>(e.ShopifyPayUserNotFound="shopify_pay_user_not_found",e))(N||{}),x=(e=>(e.FraudGuard="fraud_guard",e.InvalidEmail="invalid_email",e.InvalidPhone="invalid_phone",e.LimitExceeded="limit_exceeded",e.PhoneBlocked="phone_blocked",e.RecordNotFound="record_not_found",e))(x||{});function F(e,a={delimiter:c,messageKey:_}){return[a.messageKey,a.delimiter,JSON.stringify(e)].join("")}function O(e){return F(e)}function z(e,a){e&&e.contentWindow?.postMessage(O(a),"*")}function $({hostname:e,targetId:a,onLoaded:o,onClosed:m,onHidden:u,onError:d,onLoggedIn:i,onReady:t,onResized:h,onRedirectUserWithEmailOnly:n,onShareCaptchaToken:g,onEmailChange:y}){const f=k(s=>{switch(s.action){case r.Closed:return m?.();case r.Hidden:return u?.();case r.Error:return d?.(s.message,s.apiError,s.email);case r.Loaded:return o?.();case r.LoggedIn:return i?.(s.token,s.in_checkout_profile_preview,s.shop_pay_access_token);case r.Ready:return t?.(s.phoneNumber);case r.Resized:return h?.(parseInt(s.height,10));case r.RedirectWithEmailOnly:return n?.(s.email);case r.ShareCaptchaToken:return g?.(s.token);case r.EmailChanged:return y?.(s.email,s.isUserFound)}},[m,u,d,o,i,t,h,n,g,y]);T(()=>{const s=({data:l,origin:S})=>{if(S!==`https://${e}`||!l||typeof l!="string"||!l.includes(c))return;const[b,...C]=l.split(c);if(b===_)try{const p=JSON.parse(C.join(c));(a&&p.targetId===a||!a)&&f(p)}catch{}};return window.addEventListener("message",s),()=>{window.removeEventListener("message",s)}},[f,e,a])}export{x as A,N as M,L as S,$ as a,z as p,v as u};
