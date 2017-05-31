//>>built
define("dojo/selector/acme",["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],function(O,m,F,G,y){var P=G.trim,L=F.forEach,Q="BackCompat"==y.doc.compatMode,u=!1,z=function(){return!0},M=function(b){b=0<="\x3e~+".indexOf(b.slice(-1))?b+" * ":b+" ";for(var a=function(a,c){return P(b.slice(a,c))},c=[],d=-1,e=-1,f=-1,h=-1,k=-1,r=-1,A=-1,H,B="",n="",m,l=0,t=b.length,g=null,p=null,q=function(){0<=r&&(g.id=a(r,l).replace(/\\/g,""),r=-1);if(0<=A){var b=A==l?null:a(A,l);g[0>"\x3e~+".indexOf(b)?
"tag":"oper"]=b;A=-1}0<=k&&(g.classes.push(a(k+1,l).replace(/\\/g,"")),k=-1)};B=n,n=b.charAt(l),l<t;l++)"\\"!=B&&(g||(m=l,g={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return u?this.otag:this.tag}},A=l),H?n==H&&(H=null):"'"==n||'"'==n?H=n:0<=d?"]"==n?(p.attr?p.matchFor=a(f||d+1,l):p.attr=a(d+1,l),!(d=p.matchFor)||'"'!=d.charAt(0)&&"'"!=d.charAt(0)||(p.matchFor=d.slice(1,-1)),p.matchFor&&(p.matchFor=p.matchFor.replace(/\\/g,"")),g.attrs.push(p),p=null,d=
f=-1):"\x3d"==n&&(f=0<="|~^$*".indexOf(B)?B:"",p.type=f+n,p.attr=a(d+1,l-f.length),f=l+1):0<=e?")"==n&&(0<=h&&(p.value=a(e+1,l)),h=e=-1):"#"==n?(q(),r=l+1):"."==n?(q(),k=l):":"==n?(q(),h=l):"["==n?(q(),d=l,p={}):"("==n?(0<=h&&(p={name:a(h+1,l),value:null},g.pseudos.push(p)),e=l):" "==n&&B!=n&&(q(),0<=h&&g.pseudos.push({name:a(h+1,l)}),g.loops=g.pseudos.length||g.attrs.length||g.classes.length,g.oquery=g.query=a(m,l),g.otag=g.tag=g.oper?null:g.tag||"*",g.tag&&(g.tag=g.tag.toUpperCase()),c.length&&
c[c.length-1].oper&&(g.infixOper=c.pop(),g.query=g.infixOper.query+" "+g.query),c.push(g),g=null));return c},v=function(b,a){return b?a?function(){return b.apply(window,arguments)&&a.apply(window,arguments)}:b:a},C=function(b,a){var c=a||[];b&&c.push(b);return c},I=function(b){return 1==b.nodeType},w=function(b,a){return b?"class"==a?b.className||"":"for"==a?b.htmlFor||"":"style"==a?b.style.cssText||"":(u?b.getAttribute(a):b.getAttribute(a,2))||"":""},R={"*\x3d":function(b,a){return function(c){return 0<=
w(c,b).indexOf(a)}},"^\x3d":function(b,a){return function(c){return 0==w(c,b).indexOf(a)}},"$\x3d":function(b,a){return function(c){c=" "+w(c,b);var d=c.lastIndexOf(a);return-1<d&&d==c.length-a.length}},"~\x3d":function(b,a){var c=" "+a+" ";return function(a){return 0<=(" "+w(a,b)+" ").indexOf(c)}},"|\x3d":function(b,a){var c=a+"-";return function(d){d=w(d,b);return d==a||0==d.indexOf(c)}},"\x3d":function(b,a){return function(c){return w(c,b)==a}}};G=y.doc.documentElement;var J=!(G.nextElementSibling||
"nextElementSibling"in G),D=J?"nextSibling":"nextElementSibling",ea=J?"previousSibling":"previousElementSibling",E=J?I:z,S=function(b){for(;b=b[ea];)if(E(b))return!1;return!0},T=function(b){for(;b=b[D];)if(E(b))return!1;return!0},K=function(b){var a=b.parentNode,a=7!=a.nodeType?a:a.nextSibling,c=0,d=a.children||a.childNodes,e=b._i||b.getAttribute("_i")||-1,f=a._l||("undefined"!==typeof a.getAttribute?a.getAttribute("_l"):-1);if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;m("ie")&&"undefined"!==
typeof a.setAttribute?a.setAttribute("_l",d):a._l=d;e=-1;for(a=a.firstElementChild||a.firstChild;a;a=a[D])E(a)&&(m("ie")?a.setAttribute("_i",++c):a._i=++c,b===a&&(e=c));return e},fa=function(b){return!(K(b)%2)},ga=function(b){return K(b)%2},U={checked:function(b,a){return function(a){return!("checked"in a?!a.checked:!a.selected)}},disabled:function(b,a){return function(a){return a.disabled}},enabled:function(b,a){return function(a){return!a.disabled}},"first-child":function(){return S},"last-child":function(){return T},
"only-child":function(b,a){return function(a){return S(a)&&T(a)}},empty:function(b,a){return function(a){var b=a.childNodes;for(a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===c||3==c)return!1}return!0}},contains:function(b,a){var c=a.charAt(0);if('"'==c||"'"==c)a=a.slice(1,-1);return function(b){return 0<=b.innerHTML.indexOf(a)}},not:function(b,a){var c=M(a)[0],d={el:1};"*"!=c.tag&&(d.tag=1);c.classes.length||(d.classes=1);var e=t(c,d);return function(a){return!e(a)}},"nth-child":function(b,
a){var c=parseInt;if("odd"==a)return ga;if("even"==a)return fa;if(-1!=a.indexOf("n")){var d=a.split("n",2),e=d[0]?"-"==d[0]?-1:c(d[0]):1,f=d[1]?c(d[1]):0,h=0,k=-1;0<e?0>f?f=f%e&&e+f%e:0<f&&(f>=e&&(h=f-f%e),f%=e):0>e&&(e*=-1,0<f&&(k=f,f%=e));if(0<e)return function(a){a=K(a);return a>=h&&(0>k||a<=k)&&a%e==f};a=f}var r=c(a);return function(a){return K(a)==r}}},ha=9>m("ie")||9==m("ie")&&m("quirks")?function(b){var a=b.toLowerCase();"class"==a&&(b="className");return function(c){return u?c.getAttribute(b):
c[b]||c[a]}}:function(b){return function(a){return a&&a.getAttribute&&a.hasAttribute(b)}},t=function(b,a){if(!b)return z;a=a||{};var c=null;"el"in a||(c=v(c,I));"tag"in a||"*"!=b.tag&&(c=v(c,function(a){return a&&(u?a.tagName:a.tagName.toUpperCase())==b.getTag()}));"classes"in a||L(b.classes,function(a,b,f){var d=new RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=v(c,function(a){return d.test(a.className)});c.count=b});"pseudos"in a||L(b.pseudos,function(a){var b=a.name;U[b]&&(c=v(c,U[b](b,a.value)))});"attrs"in
a||L(b.attrs,function(a){var b,d=a.attr;a.type&&R[a.type]?b=R[a.type](d,a.matchFor):d.length&&(b=ha(d));b&&(c=v(c,b))});"id"in a||b.id&&(c=v(c,function(a){return!!a&&a.id==b.id}));c||"default"in a||(c=z);return c},ia=function(b){return function(a,c,d){for(;a=a[D];)if(!J||I(a)){d&&!x(a,d)||!b(a)||c.push(a);break}return c}},ja=function(b){return function(a,c,d){for(a=a[D];a;){if(E(a)){if(d&&!x(a,d))break;b(a)&&c.push(a)}a=a[D]}return c}},V=function(b,a){var c=function(a){var b=[];try{b=Array.prototype.slice.call(a)}catch(k){for(var c=
0,d=a.length;c<d;c++)b.push(a[c])}return b};b=b||z;return function(d,e,f){var h=0,k=[],k=c(d.children||d.childNodes);for(a&&F.forEach(k,function(a){1===a.nodeType&&(k=k.concat(c(a.getElementsByTagName("*"))))});d=k[h++];)E(d)&&(!f||x(d,f))&&b(d,h)&&e.push(d);return e}},W=function(b,a){for(var c=b.parentNode;c&&c!=a;)c=c.parentNode;return!!c},X={},Y=function(b){var a=X[b.query];if(a)return a;var c=b.infixOper,c=c?c.oper:"",d=t(b,{el:1}),e="*"==b.tag,f=y.doc.getElementsByClassName;if(c)f={el:1},e&&
(f.tag=1),d=t(b,f),"+"==c?a=ia(d):"~"==c?a=ja(d):"\x3e"==c&&(a=V(d));else if(b.id)d=!b.loops&&e?z:t(b,{el:1,id:1}),a=function(a,c){var e=O.byId(b.id,a.ownerDocument||a);a.ownerDocument&&!W(a,a.ownerDocument)&&F.some(11===a.nodeType?a.childNodes:[a],function(a){a=V(function(a){return a.id===b.id},!0)(a,[]);if(a.length)return e=a[0],!1});if(e&&d(e)&&(9==a.nodeType||W(e,a)))return C(e,c)};else if(f&&/\{\s*\[native code\]\s*\}/.test(String(f))&&b.classes.length&&!Q)var d=t(b,{el:1,classes:1,id:1}),h=
b.classes.join(" "),a=function(a,b,c){b=C(0,b);for(var e,f=0,k=a.getElementsByClassName(h);e=k[f++];)d(e,a)&&x(e,c)&&b.push(e);return b};else e||b.loops?(d=t(b,{el:1,tag:1,id:1}),a=function(a,c,e){c=C(0,c);for(var f,k=0,h=(f=b.getTag())?a.getElementsByTagName(f):[];f=h[k++];)d(f,a)&&x(f,e)&&c.push(f);return c}):a=function(a,c,d){c=C(0,c);for(var e=0,f=b.getTag(),f=f?a.getElementsByTagName(f):[];a=f[e++];)x(a,d)&&c.push(a);return c};return X[b.query]=a},Z={},aa={},ba=function(b){var a=M(P(b));if(1==
a.length){var c=Y(a[0]);return function(a){if(a=c(a,[]))a.nozip=!0;return a}}return function(b){b=C(b);for(var c,d,h=a.length,k,r,m=0;m<h;m++){r=[];c=a[m];d=b.length-1;0<d&&(k={},r.nozip=!0);d=Y(c);for(var q=0;c=b[q];q++)d(c,r,k);if(!r.length)break;b=r}return r}},ka=m("ie")?"commentStrip":"nozip",ca=!!y.doc.querySelectorAll,la=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,ma=function(b,a,c,d){return c?(a?a+" ":"")+c+(d?" "+d:""):b},na=/([^[]*)([^\]]*])?/g,oa=function(b,a,c){return a.replace(la,ma)+(c||
"")},da=function(b,a){b=b.replace(na,oa);if(ca){var c=aa[b];if(c&&!a)return c}if(c=Z[b])return c;var c=b.charAt(0),d=-1==b.indexOf(" ");0<=b.indexOf("#")&&d&&(a=!0);if(!ca||a||-1!="\x3e~+".indexOf(c)||m("ie")&&-1!=b.indexOf(":")||Q&&0<=b.indexOf(".")||-1!=b.indexOf(":contains")||-1!=b.indexOf(":checked")||-1!=b.indexOf("|\x3d")){var e=b.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);return Z[b]=2>e.length?ba(b):function(a){for(var b=0,c=[],d;d=e[b++];)c=c.concat(ba(d)(a));return c}}var f=
0<="\x3e~+".indexOf(b.charAt(b.length-1))?b+" *":b;return aa[b]=function(a){if(9==a.nodeType||d)try{var c=a.querySelectorAll(f);c[ka]=!0;return c}catch(r){}return da(b,!0)(a)}},q=0,pa=m("ie")?function(b){return u?b.getAttribute("_uid")||b.setAttribute("_uid",++q)||q:b.uniqueID}:function(b){return b._uid||(b._uid=++q)},x=function(b,a){if(!a)return 1;var c=pa(b);return a[c]?0:a[c]=1},qa=function(b){if(b&&b.nozip)return b;if(!b||!b.length)return[];if(2>b.length)return[b[0]];var a=[];q++;var c,d;if(m("ie")&&
u){var e=q+"";for(c=0;c<b.length;c++)(d=b[c])&&d.getAttribute("_zipIdx")!=e&&(a.push(d),d.setAttribute("_zipIdx",e))}else if(m("ie")&&b.commentStrip)try{for(c=0;c<b.length;c++)(d=b[c])&&I(d)&&a.push(d)}catch(f){}else for(c=0;c<b.length;c++)(d=b[c])&&d._zipIdx!=q&&(a.push(d),d._zipIdx=q);return a},N=function(b,a){a=a||y.doc;u="div"===(a.ownerDocument||a).createElement("div").tagName;var c=da(b)(a);return c&&c.nozip?c:qa(c)};N.filter=function(b,a,c){for(var d=[],e=M(a),e=1!=e.length||/[^\w#\.]/.test(a)?
function(b){return-1!=F.indexOf(N(a,O.byId(c)),b)}:t(e[0]),f=0,h;h=b[f];f++)e(h)&&d.push(h);return d};return N});
//# sourceMappingURL=acme.js.map