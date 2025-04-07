(()=>{var Be=Object.create;var ke=Object.defineProperty,Je=Object.defineProperties,We=Object.getOwnPropertyDescriptor,je=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,Fe=Object.getPrototypeOf,Ne=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var Oe=(y,_,C)=>_ in y?ke(y,_,{enumerable:!0,configurable:!0,writable:!0,value:C}):y[_]=C,he=(y,_)=>{for(var C in _||(_={}))Ne.call(_,C)&&Oe(y,C,_[C]);if(Ae)for(var C of Ae(_))Xe.call(_,C)&&Oe(y,C,_[C]);return y},ve=(y,_)=>Je(y,je(_));var oe=(y,_)=>()=>(y&&(_=y(y=0)),_);var Te=(y,_)=>()=>(_||y((_={exports:{}}).exports,_),_.exports);var Ye=(y,_,C,X)=>{if(_&&typeof _=="object"||typeof _=="function")for(let J of He(_))!Ne.call(y,J)&&J!==C&&ke(y,J,{get:()=>_[J],enumerable:!(X=We(_,J))||X.enumerable});return y};var Ie=(y,_,C)=>(C=y!=null?Be(Fe(y)):{},Ye(_||!y||!y.__esModule?ke(C,"default",{value:y,enumerable:!0}):C,y));var B=(y,_,C)=>new Promise((X,J)=>{var ce=P=>{try{S(C.next(P))}catch(G){J(G)}},E=P=>{try{S(C.throw(P))}catch(G){J(G)}},S=P=>P.done?X(P.value):Promise.resolve(P.value).then(ce,E);S((C=C.apply(y,_)).next())});var Ce,Ee=oe(()=>{Ce="WebPixel::Render"});var xe,Pe=oe(()=>{Ee();xe=function(_){return shopify.extend(Ce,_)}});var Re=oe(()=>{});var Le=oe(()=>{});var De=oe(()=>{});var Ge=oe(()=>{Re();Le();De()});var Me=oe(()=>{Pe();Ge()});var qe=oe(()=>{Me()});var Ue=Te((_e,ye)=>{(function(y,_){"use strict";var C="1.0.38",X="",J="?",ce="function",E="undefined",S="object",P="string",G="major",r="model",o="name",i="type",t="vendor",c="version",V="architecture",Q="console",k="mobile",v="tablet",D="smarttv",O="wearable",ne="embedded",R=500,ee="Amazon",M="Apple",be="ASUS",Y="BlackBerry",j="Browser",de="Chrome",we="Edge",ie="Firefox",ae="Google",le="Huawei",fe="LG",ue="Microsoft",pe="Motorola",se="Opera",$="Samsung",me="Sharp",ge="Sony",Z="Xiaomi",z="Zebra",W="Facebook",te="Chromium OS",a="Mac OS",b=function(m,f){var s={};for(var h in m)f[h]&&f[h].length%2===0?s[h]=f[h].concat(m[h]):s[h]=m[h];return s},u=function(m){for(var f={},s=0;s<m.length;s++)f[m[s].toUpperCase()]=m[s];return f},l=function(m,f){return typeof m===P?x(f).indexOf(x(m))!==-1:!1},x=function(m){return m.toLowerCase()},N=function(m){return typeof m===P?m.replace(/[^\d\.]/g,X).split(".")[0]:_},L=function(m,f){if(typeof m===P)return m=m.replace(/^\s\s*/,X),typeof f===E?m:m.substring(0,R)},U=function(m,f){for(var s=0,h,A,I,w,d,F;s<f.length&&!d;){var K=f[s],re=f[s+1];for(h=A=0;h<K.length&&!d&&K[h];)if(d=K[h++].exec(m),d)for(I=0;I<re.length;I++)F=d[++A],w=re[I],typeof w===S&&w.length>0?w.length===2?typeof w[1]==ce?this[w[0]]=w[1].call(this,F):this[w[0]]=w[1]:w.length===3?typeof w[1]===ce&&!(w[1].exec&&w[1].test)?this[w[0]]=F?w[1].call(this,F,w[2]):_:this[w[0]]=F?F.replace(w[1],w[2]):_:w.length===4&&(this[w[0]]=F?w[3].call(this,F.replace(w[1],w[2])):_):this[w]=F||_;s+=2}},H=function(m,f){for(var s in f)if(typeof f[s]===S&&f[s].length>0){for(var h=0;h<f[s].length;h++)if(l(f[s][h],m))return s===J?_:s}else if(l(f[s],m))return s===J?_:s;return m},q={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},e={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},p={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[c,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[c,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,c],[/opios[\/ ]+([\w\.]+)/i],[c,[o,se+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[c,[o,se+" GX"]],[/\bopr\/([\w\.]+)/i],[c,[o,se]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[c,[o,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[o,c],[/\bddg\/([\w\.]+)/i],[c,[o,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[c,[o,"UC"+j]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[c,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[c,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[c,[o,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[c,[o,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[c,[o,"Smart Lenovo "+j]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+j],c],[/\bfocus\/([\w\.]+)/i],[c,[o,ie+" Focus"]],[/\bopt\/([\w\.]+)/i],[c,[o,se+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[c,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[c,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[c,[o,se+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[c,[o,"MIUI "+j]],[/fxios\/([-\w\.]+)/i],[c,[o,ie]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+j]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+j],c],[/samsungbrowser\/([\w\.]+)/i],[c,[o,$+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],c],[/metasr[\/ ]?([\d\.]+)/i],[c,[o,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[o,"Sogou Mobile"],c],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[o,c],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,W],c],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[o,c],[/\bgsa\/([\w\.]+) .*safari\//i],[c,[o,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[c,[o,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[c,[o,de+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,de+" WebView"],c],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[c,[o,"Android "+j]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,c],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[c,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[c,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[c,H,q]],[/(webkit|khtml)\/([\w\.]+)/i],[o,c],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],c],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[c,[o,ie+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[o,c],[/(cobalt)\/([\w\.]+)/i],[o,[c,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[V,"amd64"]],[/(ia32(?=;))/i],[[V,x]],[/((?:i[346]|x)86)[;\)]/i],[[V,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[V,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[V,"armhf"]],[/windows (ce|mobile); ppc;/i],[[V,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[V,/ower/,X,x]],[/(sun4\w)[;\)]/i],[[V,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[V,x]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[r,[t,$],[i,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[r,[t,$],[i,k]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[r,[t,M],[i,k]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[r,[t,M],[i,v]],[/(macintosh);/i],[r,[t,M]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[r,[t,me],[i,k]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[r,[t,le],[i,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[r,[t,le],[i,k]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[r,/_/g," "],[t,Z],[i,k]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[r,/_/g," "],[t,Z],[i,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[r,[t,"OPPO"],[i,k]],[/\b(opd2\d{3}a?) bui/i],[r,[t,"OPPO"],[i,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[r,[t,"Vivo"],[i,k]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[r,[t,"Realme"],[i,k]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[r,[t,pe],[i,k]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[r,[t,pe],[i,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[r,[t,fe],[i,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[r,[t,fe],[i,k]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[r,[t,"Lenovo"],[i,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[r,/_/g," "],[t,"Nokia"],[i,k]],[/(pixel c)\b/i],[r,[t,ae],[i,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[r,[t,ae],[i,k]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[r,[t,ge],[i,k]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[r,"Xperia Tablet"],[t,ge],[i,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[r,[t,"OnePlus"],[i,k]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[r,[t,ee],[i,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[r,/(.+)/g,"Fire Phone $1"],[t,ee],[i,k]],[/(playbook);[-\w\),; ]+(rim)/i],[r,t,[i,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[r,[t,Y],[i,k]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[r,[t,be],[i,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[r,[t,be],[i,k]],[/(nexus 9)/i],[r,[t,"HTC"],[i,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[t,[r,/_/g," "],[i,k]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[r,[t,"Acer"],[i,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[r,[t,"Meizu"],[i,k]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[r,[t,"Ulefone"],[i,k]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[t,r,[i,k]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[t,r,[i,v]],[/(surface duo)/i],[r,[t,ue],[i,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[r,[t,"Fairphone"],[i,k]],[/(u304aa)/i],[r,[t,"AT&T"],[i,k]],[/\bsie-(\w*)/i],[r,[t,"Siemens"],[i,k]],[/\b(rct\w+) b/i],[r,[t,"RCA"],[i,v]],[/\b(venue[\d ]{2,7}) b/i],[r,[t,"Dell"],[i,v]],[/\b(q(?:mv|ta)\w+) b/i],[r,[t,"Verizon"],[i,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[r,[t,"Barnes & Noble"],[i,v]],[/\b(tm\d{3}\w+) b/i],[r,[t,"NuVision"],[i,v]],[/\b(k88) b/i],[r,[t,"ZTE"],[i,v]],[/\b(nx\d{3}j) b/i],[r,[t,"ZTE"],[i,k]],[/\b(gen\d{3}) b.+49h/i],[r,[t,"Swiss"],[i,k]],[/\b(zur\d{3}) b/i],[r,[t,"Swiss"],[i,v]],[/\b((zeki)?tb.*\b) b/i],[r,[t,"Zeki"],[i,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[t,"Dragon Touch"],r,[i,v]],[/\b(ns-?\w{0,9}) b/i],[r,[t,"Insignia"],[i,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[r,[t,"NextBook"],[i,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[t,"Voice"],r,[i,k]],[/\b(lvtel\-)?(v1[12]) b/i],[[t,"LvTel"],r,[i,k]],[/\b(ph-1) /i],[r,[t,"Essential"],[i,k]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[r,[t,"Envizen"],[i,v]],[/\b(trio[-\w\. ]+) b/i],[r,[t,"MachSpeed"],[i,v]],[/\btu_(1491) b/i],[r,[t,"Rotor"],[i,v]],[/(shield[\w ]+) b/i],[r,[t,"Nvidia"],[i,v]],[/(sprint) (\w+)/i],[t,r,[i,k]],[/(kin\.[onetw]{3})/i],[[r,/\./g," "],[t,ue],[i,k]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[r,[t,z],[i,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[r,[t,z],[i,k]],[/smart-tv.+(samsung)/i],[t,[i,D]],[/hbbtv.+maple;(\d+)/i],[[r,/^/,"SmartTV"],[t,$],[i,D]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[t,fe],[i,D]],[/(apple) ?tv/i],[t,[r,M+" TV"],[i,D]],[/crkey/i],[[r,de+"cast"],[t,ae],[i,D]],[/droid.+aft(\w+)( bui|\))/i],[r,[t,ee],[i,D]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[r,[t,me],[i,D]],[/(bravia[\w ]+)( bui|\))/i],[r,[t,ge],[i,D]],[/(mitv-\w{5}) bui/i],[r,[t,Z],[i,D]],[/Hbbtv.*(technisat) (.*);/i],[t,r,[i,D]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[t,L],[r,L],[i,D]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,D]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[t,r,[i,Q]],[/droid.+; (shield) bui/i],[r,[t,"Nvidia"],[i,Q]],[/(playstation [345portablevi]+)/i],[r,[t,ge],[i,Q]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[r,[t,ue],[i,Q]],[/((pebble))app/i],[t,r,[i,O]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[r,[t,M],[i,O]],[/droid.+; (glass) \d/i],[r,[t,ae],[i,O]],[/droid.+; (wt63?0{2,3})\)/i],[r,[t,z],[i,O]],[/(quest( \d| pro)?)/i],[r,[t,W],[i,O]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[t,[i,ne]],[/(aeobc)\b/i],[r,[t,ee],[i,ne]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[r,[i,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[r,[i,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,k]],[/(android[-\w\. ]{0,9});.+buil/i],[r,[t,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[c,[o,we+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[o,c],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[c,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,c],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[o,[c,H,e]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,H,e],[o,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[c,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,a],[c,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[c,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,c],[/\(bb(10);/i],[c,[o,Y]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[c,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[c,[o,ie+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[c,[o,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[c,[o,"watchOS"]],[/crkey\/([\d\.]+)/i],[c,[o,de+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[o,te],c],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,c],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],c],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[o,c]]},n=function(m,f){if(typeof m===S&&(f=m,m=_),!(this instanceof n))return new n(m,f).getResult();var s=typeof y!==E&&y.navigator?y.navigator:_,h=m||(s&&s.userAgent?s.userAgent:X),A=s&&s.userAgentData?s.userAgentData:_,I=f?b(p,f):p,w=s&&s.userAgent==h;return this.getBrowser=function(){var d={};return d[o]=_,d[c]=_,U.call(d,h,I.browser),d[G]=N(d[c]),w&&s&&s.brave&&typeof s.brave.isBrave==ce&&(d[o]="Brave"),d},this.getCPU=function(){var d={};return d[V]=_,U.call(d,h,I.cpu),d},this.getDevice=function(){var d={};return d[t]=_,d[r]=_,d[i]=_,U.call(d,h,I.device),w&&!d[i]&&A&&A.mobile&&(d[i]=k),w&&d[r]=="Macintosh"&&s&&typeof s.standalone!==E&&s.maxTouchPoints&&s.maxTouchPoints>2&&(d[r]="iPad",d[i]=v),d},this.getEngine=function(){var d={};return d[o]=_,d[c]=_,U.call(d,h,I.engine),d},this.getOS=function(){var d={};return d[o]=_,d[c]=_,U.call(d,h,I.os),w&&!d[o]&&A&&A.platform&&A.platform!="Unknown"&&(d[o]=A.platform.replace(/chrome os/i,te).replace(/macos/i,a)),d},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return h},this.setUA=function(d){return h=typeof d===P&&d.length>R?L(d,R):d,this},this.setUA(h),this};n.VERSION=C,n.BROWSER=u([o,c,G]),n.CPU=u([V]),n.DEVICE=u([r,t,i,Q,k,D,v,O,ne]),n.ENGINE=n.OS=u([o,c]),typeof _e!==E?(typeof ye!==E&&ye.exports&&(_e=ye.exports=n),_e.UAParser=n):typeof define===ce&&define.amd?define(function(){return n}):typeof y!==E&&(y.UAParser=n);var g=typeof y!==E&&(y.jQuery||y.Zepto);if(g&&!g.ua){var T=new n;g.ua=T.getResult(),g.ua.get=function(){return T.getUA()},g.ua.set=function(m){T.setUA(m);var f=T.getResult();for(var s in f)g.ua[s]=f[s]}}})(typeof window=="object"?window:_e)});var ze=Te(Se=>{qe();var Ve=Ie(Ue());xe(ce=>B(Se,[ce],function*({analytics:y,browser:_,settings:C,init:X,customerPrivacy:J}){var ue;var E=y,S=_,P=C,G=X,r=J;let o=(0,Ve.UAParser)(G.context.navigator.userAgent);var i=P.google_analytics_tracking_tag||0,t=parseInt(P.account_ID)||0,c=P.shop_settings;c=JSON.parse(c);var V=c.shopify_store||"";let Q=1;if(V==""){let pe=function(a,b=""){var u="",l=b=="float"?"0123456789":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let x=l.length,N=0;for(;N<a;)b=="float"&&N==10?u+=".":u+=l.charAt(Math.floor(Math.random()*x)),N+=1;return u},se=function(){var a={};return document.cookie.split(";").forEach(function(b){var u=b.split("="),l=u[0].trim(),x=u[1];a[l]=x}),typeof a._ga!="undefined"&&a._ga?a._ga.substring(6):!1},$=function(){var a=G.context.navigator.userAgent;return a.match(/mobile/i)?"mobile":a.match(/iPad|Android|Touch/i)?"tablet":"desktop"},me=function(a){if(a){var b=a.split("/"),u=b.pop();return u}else return a},ge=function(a){var b=a.context,u=b.document.location.pathname,l="";return u=="/"?l="Homepage":u.includes("/products")?l="Product":u.includes("/collections")?l="Collection":u.includes("/page")?l="Page":u.includes("/cart")?l="Cart":u.includes("/search")&&(l="Search"),l},Z=function(a){var b=[];for(var u in a){var l=a[u],x={},N={product_id:l.variant.product.id,variant_id:l.variant.id,sku:l.variant.sku},L=Y(N);l.variant.product&&(x.item_id=L,x.item_name=l.variant.product.title,x.item_brand=l.variant.product.vendor,x.item_category=l.variant.product.type),l.variant.price&&(x.price=l.variant.price.amount,x.currency=l.variant.price.currencyCode),l.variant&&(x.item_variant_id=l.variant.id,x.item_variant=l.variant.title,x.item_sku=l.variant.sku),l.quantity&&(x.quantity=l.quantity),b.push(x)}return b},z=function(a,b,u,l="",x=""){var N=P.api_secret,L=P.measurement_id,U="?measurement_id="+L+"&api_secret="+N+"&tid="+L,H="https://www.google-analytics.com/mp/collect?measurement_id="+L+"&api_secret="+N,q=l!=""?l:N,e=x!=""?x:N,p={};p.device_category={value:$()};var n={client_id:q,events:[{name:b,params:u}]};Object.keys(p).length>0&&(n.user_properties=p),fetch(H,{method:"POST",body:JSON.stringify(n),keepalive:!0}).then(g=>{console.log("GA4 response:",JSON.stringify(g)),te(a,n,q,"success")}).catch(g=>{console.log("GA4 error:",g),n.exception=JSON.stringify(g.message),te(a,n,q,"exception")})},W=function(a,b=[],u="db"){if(u=="txt"){var l="https://conversions-gsf.simpshopifyapps.com/record-conversion-logs",x={event_request:a,event_response:b};fetch(l,{method:"POST",body:JSON.stringify(x),keepalive:!0}).then(K=>{console.log("GA4 response:",JSON.stringify(K))}).catch(K=>{console.log("GA4 error:",K)})}else{var N=P.measurement_id,L=P.api_secret,U=a.context,H=U.document.location.host,q=U.document.location.href,e=q!=""?q:location.href,p=a.data||"",n=p.checkout||"",g=n.order||"",T=n.totalPrice||"",m="extension",f=H,s=encodeURIComponent(e),h=g.id||"",A=T.amount||"",I=n.currencyCode||"",w=L,d=N,F="?order_id="+h+"&order_value="+A+"&order_currency="+I+"&label="+w+"&url="+s+"&shop="+f+"&ad_id="+d+"&order_from="+m,l="https://conversions-gsf.simpshopifyapps.com/record-conversion"+F;fetch(l,{method:"POST",keepalive:!0}).then(re=>{console.log("GA4 Record response:",JSON.stringify(re))}).catch(re=>{console.log("GA4 Record error:",re)})}},te=function(a,b,u,l=""){var x=[2,117708,5126],N=a.context,L=N.document.location.host,U={shop_id:t,shop_domain:L,client_id:u,event_data:a,event_request:b,event_status:l};U=JSON.stringify(U);var H="https://conversions-gsf.simpshopifyapps.com/record-web-pixels";fetch(H,{method:"POST",body:U,keepalive:!0}).then(q=>{console.log("GA4 WebPixels Record response:",JSON.stringify(q))}).catch(q=>{console.log("GA4 WebPixels Record error:",q)})};var k=c.excluded_view_event_shops||[],v=c.target_country||"",D=c.sku_as_product_id||-1;G.context.window.dataLayer=G.context.window.dataLayer||[];var O=yield S.localStorage.getItem("gsfga4cid");if(!O&&(t==117708||t==250055||t==431730?O=se():O=yield S.localStorage.getItem("gsfga4cid"),!O)){var ne=pe(22);S.localStorage.setItem("gsfga4cid",ne),O=yield S.localStorage.getItem("gsfga4cid")}var R=yield S.localStorage.getItem("gsfga4sid");if(!R){var ee=pe(32);S.localStorage.setItem("gsfga4sid",ee),R=yield S.localStorage.getItem("gsfga4sid")}var M=yield S.localStorage.getItem("gsfga4uid");if(!M){var be=pe(32);S.localStorage.setItem("gsfga4uid",be),M=yield S.localStorage.getItem("gsfga4uid")}var Y=function(a,b="google"){if(v=="")return a.product_id;var u="shopify_"+v+"_"+a.product_id+"_"+a.variant_id;return parseInt(D)===1?u=a.sku:parseInt(D)===2&&(u=a.variant_id),u};E.subscribe("page_viewed",a=>{if(i==1){var b=a.context,u=b.document.location.pathname,l=b.window.innerWidth<768?"Mobile "+b.window.innerWidth:"Desktop "+b.window.innerWidth,x=ge(a),N=c.excluded_page_view_event_shops||[];if(N.indexOf(t)===-1&&x){var L={page_type:x,page_location:b.document.location.href,previous_page:b.document.referrer,page_title:b.document.title,language:b.language,screen:l,session_id:R,engagement_time_msec:"100"};z(a,"page_view",L,O,M)}if(0){var U;if(U)var L}}}),E.subscribe("collection_viewed",a=>{if(k.indexOf(t)===-1&&i==1){var b={item_list_id:a.data.collection.id,item_list_name:a.data.collection.title,items:a.data.collection.productVariants.map((u,l)=>{var x={product_id:u.product.id,variant_id:u.id,sku:u.sku},N=Y(x);return{item_id:N,item_name:u.product.title,item_brand:u.product.vendor,item_category:u.product.type,item_sku:u.sku,item_variant_id:u.id,item_variant:u.title,index:l,price:u.price.amount,currency:u.price.currencyCode}}),session_id:R,engagement_time_msec:"100"};z(a,"view_item_list",b,O,M)}}),E.subscribe("product_viewed",a=>{if(k.indexOf(t)===-1&&i==1){var b={product_id:a.data.productVariant.product.id,variant_id:a.data.productVariant.id,sku:a.data.productVariant.sku},u=Y(b),l={value:a.data.productVariant.price.amount,currency:a.data.productVariant.price.currencyCode,items:[{item_id:u,item_name:a.data.productVariant.product.title,item_brand:a.data.productVariant.product.vendor,item_category:a.data.productVariant.product.type,item_sku:a.data.productVariant.sku,item_variant_id:a.data.productVariant.id,item_variant:a.data.productVariant.title,price:a.data.productVariant.price.amount,currency:a.data.productVariant.price.currencyCode}],session_id:R,engagement_time_msec:"100"};z(a,"view_item",l,O,M)}}),E.subscribe("product_variant_viewed",a=>{}),E.subscribe("product_added_to_cart",a=>{if(i==1){var b={product_id:a.data.cartLine.merchandise.product.id,variant_id:a.data.cartLine.merchandise.id,sku:a.data.cartLine.merchandise.sku},u=Y(b),l={value:a.data.cartLine.merchandise.price.amount,currency:a.data.cartLine.merchandise.price.currencyCode,items:[{item_id:u,item_name:a.data.cartLine.merchandise.product.title,item_brand:a.data.cartLine.merchandise.product.vendor,item_category:a.data.cartLine.merchandise.product.type,item_sku:a.data.cartLine.merchandise.sku,item_variant_id:a.data.cartLine.merchandise.id,item_variant:a.data.cartLine.merchandise.title,price:a.data.cartLine.merchandise.price.amount,currency:a.data.cartLine.merchandise.price.currencyCode,quantity:a.data.cartLine.quantity}],session_id:R,engagement_time_msec:"100"};z(a,"add_to_cart",l,O,M)}}),E.subscribe("cart_viewed",a=>{var b=a.data||"";if(k.indexOf(t)===-1&&i==1){var u={value:b.cart.cost.totalAmount.amount,currency:b.cart.cost.totalAmount.currencyCode,items:b.cart.lines.map((l,x)=>{var N={product_id:l.merchandise.product.id,variant_id:l.merchandise.id,sku:l.merchandise.sku},L=Y(N);return{item_id:L,item_name:l.merchandise.product.title,item_brand:l.merchandise.product.vendor,item_category:l.merchandise.product.type,item_sku:l.merchandise.sku,item_variant_id:l.merchandise.id,item_variant:l.merchandise.title,index:x,price:l.merchandise.price.amount,currency:l.merchandise.price.currencyCode,quantity:l.quantity}}),session_id:R,engagement_time_msec:"100"};z(a,"view_cart",u,O,M)}}),E.subscribe("checkout_started",a=>{if(i==1){var b={value:a.data.checkout.totalPrice.amount,currency:a.data.checkout.currencyCode,items:Z(a.data.checkout.lineItems),session_id:R,engagement_time_msec:"100"};z(a,"begin_checkout",b,O,M)}}),E.subscribe("search_submitted",a=>{if(i==1){var b={search_term:a.data.searchResult.query,session_id:R,engagement_time_msec:"100"};z(a,"search",b,O,M)}}),E.subscribe("checkout_address_info_submitted",a=>{}),E.subscribe("checkout_contact_info_submitted",a=>{}),E.subscribe("checkout_shipping_info_submitted",a=>{if(i==1){var b={value:a.data.checkout.totalPrice.amount,currency:a.data.checkout.currencyCode,items:Z(a.data.checkout.lineItems),session_id:R,engagement_time_msec:"100"};z(a,"add_shipping_info",b,O,M)}}),E.subscribe("payment_info_submitted",a=>{if(i==1){var b={value:a.data.checkout.totalPrice.amount,currency:a.data.checkout.currencyCode,items:Z(a.data.checkout.lineItems),session_id:R,engagement_time_msec:"100"};z(a,"add_payment_info",b,O,M)}}),E.subscribe("checkout_completed",a=>{var b=a.data||"",u=b.checkout||"",l=u.discountApplications.map(N=>{if(N.type==="DISCOUNT_CODE"||N.type==="AUTOMATIC")return N.title});if(i==1){var x={value:u.totalPrice.amount,currency:u.currencyCode,transaction_id:me(u.order.id),shipping:u.shippingLine.price.amount,tax:u.totalTax.amount,items:Z(u.lineItems),session_id:R,engagement_time_msec:"100"};l.length>0&&typeof l[0]!="undefined"&&l[0]&&(x.coupon=l[0]),z(a,"purchase",x,O,M)}})}else{let $=function(e,p=""){var n="",g=p=="float"?"0123456789":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let T=g.length,m=0;for(;m<e;)p=="float"&&m==10?n+=".":n+=g.charAt(Math.floor(Math.random()*T)),m+=1;return n},me=function(){return le.match(/mobile/i)?"mobile":le.match(/iPad|Android|Touch/i)?"tablet":"desktop"},Z=function(e){if(e){var p=e.split("/"),n=p.pop();return n}else return e},z=function(e){var p=e.context,n=p.document.location.pathname,g="";return n=="/"?g="Homepage":n.includes("/products")?g="Product":n.includes("/collections")?g="Collection":n.includes("/page")?g="Page":n.includes("/cart")?g="Cart":n.includes("/search")&&(g="Search"),g},W=function(e,p=0){var g;let n=[];Array.isArray(e)==!1&&(e=[e]);for(let T in e){let m=e[T],f=m.merchandise||m.variant||m,s={},h=(g=m.discountAllocations)==null?void 0:g.map(w=>{if(w.discountApplication.type==="DISCOUNT_CODE"||w.discountApplication.type==="AUTOMATIC")return{coupon:w.discountApplication.title,discount:w.amount.amount}}),A={product_id:f.product.id,variant_id:f.id,sku:f.sku},I=Y(A);if(f.product){s.item_id=I,s.item_name=f.product.title,s.item_brand=f.product.vendor;let d=(f.product.type||"").split(">");typeof d[0]!="undefined"&&d[0]!=""&&(s.item_category=d[0].trim()),typeof d[1]!="undefined"&&(s.item_category2=d[1].trim()),typeof d[2]!="undefined"&&(s.item_category3=d[2].trim()),typeof d[3]!="undefined"&&(s.item_category4=d[3].trim()),typeof d[4]!="undefined"&&(s.item_category5=d[4].trim())}f.price&&(s.price=f.price.amount,s.currency=f.price.currencyCode),f&&f.title!=""&&f.title!=null&&(s.item_variant=f.title),(m.quantity||p)&&(s.quantity=m.quantity||p),s.index=parseInt(T),typeof h!="undefined"&&h.length>0&&h[0]&&(s=ve(he({},s),{coupon:h[0].coupon,discount:h[0].discount})),n.push(s)}return n},x=function(e){return!(!e||e.charAt(0)!=="+"||e.length>15||!/^\+\d+$/.test(e))},q=function(){let e={};return e.device_category={value:me()},typeof o.device.model!="undefined"&&(e.device_model={value:o.device.model}),typeof o.browser.name!="undefined"&&(e.browser={value:o.browser.name}),typeof o.device.vendor!="undefined"&&(e.device_brand={value:o.device.vendor}),typeof o.os.name!="undefined"&&(e.operating_system={value:o.os.name}),typeof o.os.version!="undefined"&&(e.os_version={value:o.os.version}),typeof o.os.name!="undefined"&&typeof o.os.version!="undefined"&&(e.os_with_version={value:o.os.name+" "+o.os.version}),e.screen_resolution={value:G.context.window.screen.width+"x"+G.context.window.screen.height},e};console.log("New Code testing");var v=c.target_country||"",D=c.sku_as_product_id||-1,j=c.consent_mode||-1,de=c.is_submit_subtotal||-1,we=((ue=G.data.customer)==null?void 0:ue.id)||-1,ie=G.data.shop.myshopifyDomain||"";if(j>0){var ae=G.customerPrivacy;r.subscribe("visitorConsentCollected",e=>{ae=e.customerPrivacy})}var le=G.context.navigator.userAgent,fe=["jaydip-simprosys-test.myshopify.com","born-copenhagen.myshopify.com","spraygroundeu.myshopify.com","reborns-world-8811.myshopify.com","motoquipe-new-zealand.myshopify.com","buymobilerapidco.myshopify.com","buy-mobile-new-zealand.myshopify.com","yandiya-australiya.myshopify.com"];if(fe.includes(ie)){let e="gsfga4cid",p="gsfga4sid";G.context.document.location.pathname.includes("/checkout")&&(e="gsfga4cid_2",p="gsfga4sid_2");function g(){return B(this,null,function*(){let s=yield S.localStorage.getItem(e);return s?(yield S.localStorage.removeItem("gsfga4cid"),s):yield g()})}var O=yield g();function m(){return B(this,null,function*(){let s=yield S.localStorage.getItem(p);return s?(yield S.localStorage.removeItem("gsfga4sid"),Number(s)):yield m()})}var R=yield m()}else{var O=yield S.localStorage.getItem("gsfga4cid");if(!O){var ne=$(22);S.localStorage.setItem("gsfga4cid",ne),O=yield S.localStorage.getItem("gsfga4cid")}var R=yield S.localStorage.getItem("gsfga4sid");if(!R){var ee=$(10,"float");S.localStorage.setItem("gsfga4sid",ee),R=yield S.localStorage.getItem("gsfga4sid")}}var Y=function(e){return parseInt(D)===1?e.sku:parseInt(D)===2?e.variant_id:parseInt(D)===3?e.product_id+"_"+e.variant_id:v==""?e.product_id:"shopify_"+v+"_"+e.product_id+"_"+e.variant_id};function te(e,p,n,g=""){return B(this,null,function*(){var m,f,s;var T={shopify_store:V,order_id:(s=(f=(m=e.data)==null?void 0:m.checkout)==null?void 0:f.order)==null?void 0:s.id,shop_domain:ie,client_id:n,event_data:e,event_request:p,event_status:g,user_agent:le};e.name=="checkout_completed"&&(T.landing_page=yield S.cookie.get("_landing_page"),T.orig_referrer=yield S.cookie.get("_orig_referrer"),T=JSON.stringify(T),fetch("https://conversions-gsf.simpshopifyapps.com/store-event-logs",{method:"POST",body:T}).then(A=>{console.log("GA4 WebPixels Store Web Pixel Logs response:",JSON.stringify(A))}).catch(A=>{console.log("GA4 WebPixels Store Web Pixel Logs error:",A.message)}))})}function a(e,p,n){return B(this,null,function*(){var m,f,s;var g={shopify_store:V,order_id:(s=(f=(m=e.data)==null?void 0:m.checkout)==null?void 0:f.order)==null?void 0:s.id,shop_domain:ie,client_id:n,event_data:e,init_data:p,user_properties:q(),campaign_data:yield H()};fetch("https://conversions-gsf.simpshopifyapps.com/store-checkout-event-logs",{method:"POST",body:JSON.stringify(g)}).then(h=>{console.log("GA4 WebPixels Store Event Logs response:",JSON.stringify(h))}).catch(h=>{console.log("GA4 WebPixels Store Event Logs error:",h.message)})})}let b=e=>crypto.subtle.digest("SHA-256",new TextEncoder("utf-8").encode(e)).then(p=>{let n=[],g=new DataView(p);for(let T=0;T<g.byteLength;T+=4)n.push(("00000000"+g.getUint32(T).toString(16)).slice(-8));return n.join("")});function u(e,p=!1){return B(this,null,function*(){let n=e.toLowerCase();return p===!0?n=n.replace(/ /g,""):n=n.trim(),yield b(n)})}function l(e){return B(this,null,function*(){let p=e.toLowerCase(),n=p.split("@");return n.length>1&&/^(gmail|googlemail)\.com\s*/.test(n[1])&&(n[0]=n[0].replace(/\./g,""),p=`${n[0]}@${n[1]}`),yield u(p,!0)})}function N(e){return B(this,null,function*(){let p={};e.email!=null&&(p.sha256_email_address=yield l(e.email)),e.phone!=null&&x(e.phone)&&(p.sha256_phone_number=yield u(e.phone));let n=yield L(e.billingAddress);return e.shippingAddress.address1!=null&&e.shippingAddress.address1!=e.billingAddress.address1?p.address=[n,yield L(e.shippingAddress)]:p.address=n,p})}function L(e){return B(this,null,function*(){let p={};return e.firstName&&typeof e.firstName!="undefined"&&(p.sha256_first_name=yield u(e.firstName)),e.lastName&&typeof e.lastName!="undefined"&&(p.sha256_last_name=yield u(e.lastName)),e.city&&typeof e.city!="undefined"&&(p.city=e.city),e.province&&typeof e.province!="undefined"&&(p.region=e.province),e.zip&&typeof e.zip!="undefined"&&(p.postal_code=e.zip),e.countryCode&&typeof e.countryCode!="undefined"&&(p.country=e.countryCode),p})}E.subscribe("all_standard_events",e=>B(Se,null,function*(){var T,m,f;if(i==1){let s="";switch(e.name){case"page_viewed":let h=yield S.localStorage.getItem("gsfga4dt");{let w=new Date().getTime();yield S.localStorage.setItem("gsf_engagement_time_msec",w)}break;case"collection_viewed":s="view_item_list";let A=e.data.collection.id;A==""&&(A=e.data.collection.title,A=A.toLowerCase().replace(/ /g,"_"));var g={item_list_id:A,item_list_name:e.data.collection.title,items:W(e.data.collection.productVariants)};break;case"search_submitted":s="search";var g={search_term:e.data.searchResult.query};break;case"product_viewed":s="view_item";var g={value:e.data.productVariant.price.amount,currency:e.data.productVariant.price.currencyCode,items:W(e.data.productVariant)};break;case"product_added_to_cart":s="add_to_cart";var g={value:e.data.cartLine.merchandise.price.amount,currency:e.data.cartLine.merchandise.price.currencyCode,items:W(e.data.cartLine.merchandise,e.data.cartLine.quantity)};break;case"product_removed_from_cart":s="remove_from_cart";var g={value:e.data.cartLine.merchandise.price.amount,currency:e.data.cartLine.merchandise.price.currencyCode,items:W(e.data.cartLine.merchandise,e.data.cartLine.quantity)};break;case"cart_viewed":if(s="view_cart",e.data.cart)var g={value:e.data.cart.cost.totalAmount.amount,currency:e.data.cart.cost.totalAmount.currencyCode,items:W(e.data.cart.lines)};break;case"checkout_started":s="begin_checkout";var n=(T=e.data.checkout.discountApplications)==null?void 0:T.map(w=>{if(w.type==="DISCOUNT_CODE"||w.type==="AUTOMATIC")return w.title}),g={value:e.data.checkout.totalPrice.amount,currency:e.data.checkout.currencyCode,items:W(e.data.checkout.lineItems)};typeof n!="undefined"&&n.length>0&&n[0]&&(g.coupon=n[0]);break;case"checkout_address_info_submitted":break;case"checkout_contact_info_submitted":break;case"checkout_shipping_info_submitted":s="add_shipping_info";var g={value:e.data.checkout.totalPrice.amount,currency:e.data.checkout.currencyCode,items:W(e.data.checkout.lineItems),shipping_tier:((f=(m=e.data.checkout.delivery)==null?void 0:m.selectedDeliveryOptions[0])==null?void 0:f.title)||""};break;case"payment_info_submitted":s="add_payment_info";var g={value:e.data.checkout.totalPrice.amount,currency:e.data.checkout.currencyCode,items:W(e.data.checkout.lineItems)};break;case"checkout_completed":yield a(e,G,O),s="purchase";var p=(e.data||"").checkout||"",n=p.discountApplications.map(w=>{if(w.type==="DISCOUNT_CODE"||w.type==="AUTOMATIC")return w.title}),g={value:de=="1"?e.data.checkout.subtotalPrice.amount:e.data.checkout.totalPrice.amount,currency:e.data.checkout.currencyCode,transaction_id:Z(p.order.id).toString(),shipping:p.shippingLine.price.amount,tax:p.totalTax.amount,items:W(p.lineItems)};n.length>0&&typeof n[0]!="undefined"&&n[0]&&(g.coupon=n[0]);break;default:break}if(typeof g!="undefined"){let h="100",A=yield S.localStorage.getItem("gsfga4dt");A=yield S.localStorage.getItem("gsf_engagement_time_msec"),A!=""&&typeof A=="string"&&(h=new Date().getTime()-parseInt(A),typeof h=="number"&&(h=""+h)),g=ve(he({},g),{session_id:R,engagement_time_msec:h,debug_mode:!0}),yield U(e,s,g,O)}}}));function U(e,p,n,g=""){return B(this,null,function*(){var T=P.api_secret,m=P.measurement_id,f="https://www.google-analytics.com/mp/collect?measurement_id="+m+"&api_secret="+T,s=g!=""?g:T,h=q();let A={};if(p==="purchase"){let d=yield H();Object.keys(d).length!==0&&(A={name:"campaign_details",params:ve(he({},d),{session_id:n.session_id,engagement_time_msec:n.engagement_time_msec,debug_mode:!0})}),S.localStorage.removeItem("gsfga4dt")}var I={client_id:s,events:Object.keys(A).length!==0?[A,{name:p,params:n}]:[{name:p,params:n}]};if(Object.keys(h).length>0&&(I.user_properties=h),j>0){let d=ae.marketingAllowed?"GRANTED":"DENIED";I.consent={ad_user_data:d,ad_personalization:d}}if(p=="purchase"&&(j>0&&ae.marketingAllowed||j<1)){var w=(e.data||"").checkout||"";I.user_data=yield N(w),I.user_id=w.order.customer.id}we!==-1&&p!=="purchase"&&(I.user_id=we),fetch(f,{method:"POST",body:JSON.stringify(I),keepalive:!0}).then(d=>{console.log("GA4 response:",JSON.stringify(d)),te(e,I,s,"success")}).catch(d=>{Q<4&&p==="purchase"&&setTimeout(()=>B(this,null,function*(){return yield U(e,p,n,g)}),Q++*5e3),console.log("GA4 error:",d),I.exception=JSON.stringify(d.message),te(e,I,s,JSON.stringify(d.message))})})}function H(){return B(this,null,function*(){let e={},p=yield S.cookie.get("_landing_page");if(p!=""){let n=new URLSearchParams(p);n.get("utm_source")&&(e.source=n.get("utm_source")),n.get("utm_medium")&&(e.medium=n.get("utm_medium")),n.get("utm_campaign")&&(e.campaign=n.get("utm_campaign"))}if(typeof e.source=="undefined"){let n=yield S.cookie.get("_orig_referrer");n!=""&&(e.source=n.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").split("/")[0])}return e})}}}))});var gi=Ie(ze());})();
