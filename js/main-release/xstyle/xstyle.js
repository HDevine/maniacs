//>>built
"undefined"==typeof define&&function(){var t={};define=function(k,h,m){for(var l=0;l<h.length;l++)h[l]=t[h[l]];t[k]=m.apply(this,h)};require=function(k){define("",k,factory)}}();
define("xstyle/xstyle",["require"],function(t){function k(f){f=document.getElementsByTagName(f);for(var b=0;b<f.length;b++)h(f[b])}function h(f,b,l){function x(){t(["./load-imports"],function(g){g(f,function(){h(f,b,!0)})})}var g=f.sheet||f.styleSheet,p=g.needsParsing,k=g.rules||g.cssRules;if(g.imports&&!l&&g.imports.length)return x();if(!p)for(var u=0;u<k.length;u++){var q=k[u];if(q.href&&!l)return x();q.selectorText&&"x-"==q.selectorText.substring(0,2)&&(p=!0)}p&&m(g.source||g.ownerElement.innerHTML,
g,b)}function m(f,b,k){function h(a,d,e){(n[a]||(n[a]={}))[d]=e}function g(a){n[a]||(n[a]={});h("selector","x-"+a,{onRule:function(d){d.eachProperty(function(e,d){do{var b=d.match(/require\s*\((.+)\)|([^, ]+)([, ]+(.+))?/);if(b[1])return h(a,e,b[1]);var c=b[2];if("default"==c){if("property"==a&&"string"==typeof l.style[e])break;if("pseudo"==a)try{document.querySelectorAll("x:"+e);break}catch(w){}}else if("prefix"==c){if("string"==typeof l.style[v+e])return h(a,e,"xstyle/xstyle")}else return h(a,e,
function(){return d})}while(d=b[4])})}})}function p(){}function r(a,d){var e=a;do{var b=n.property[a];if(b)return q(b,"onProperty",e,d);a=a.substring(0,a.lastIndexOf("-"))}while(a)}function u(a,b){var d=n.selector[a];d&&q(d,"onRule",b)}function q(a,d,e,f){if(a){var g=c,h=function(a){a&&b.addRule(g.fullSelector(),a);0==--m&&k&&k(b)};m++;var w=function(a){(a=a[d](e,f,g,b))&&a.then?a.then(h):h(a)};"string"==typeof a?t([a],w):w(a)}}b.addRule||(b.addRule=function(a,b,e){return this.insertRule(a+"{"+b+
"}",0<=e?e:this.cssRules.length)});b.deleteRule||(b.deleteRule=sheet.removeRule);var n={property:{}};g("property");g("value");g("pseudo");var m=1;(b.href||location.href).replace(/[^\/]+$/,"");var y=/(?:^|\W)()(?:$|\W)/;p.prototype={eachProperty:function(a,b){this.cssText.replace(/\s*([^;:]+)\s*:\s*([^;]+)?/g,function(b,d,c){a(d,c)});if(this.children)for(var d=0;d<this.children.length;d++){var c=this.children[d];c.selector||a(c.property,c)}},fullSelector:function(){return(this.parent?this.parent.fullSelector():
"")+(this.selector||"")+" "},add:function(a,d){d&&(b.addRule?b.addRule(a,d):b.insertRule(a+"{"+d+"}",b.cssRules.length))},cssText:""};var c=new p;c.css=f;f.replace(/\s*(?:([^{;\s]+)\s*{)?\s*([^{}]+;)?\s*(};?)?/g,function(a,b,e,f){b&&(a=new p,(c.children||(c.children=[])).push(a),a.parent=c,":"==b.charAt(b.length-1)?a.property=b.substring(0,b.length-1):a.selector=b,c=a);e&&(c.cssText+=e);if(f){c.cssText.replace(/\s*([^;:]+)\s*:\s*([^;]+)?/g,function(a,b,c){r(b,c);c.replace(y,function(b,a){})});if(c.children)for(b=
0;b<c.children.length;b++)e=c.children[b],e.selector||r(e.property,e);u(c.selector,c);c.selector&&c.selector.replace(/:([-\w]+)/,function(b,a){var d=n.pseudo[a];d&&q(d,"onPseudo",a,c)});c=c.parent}});0==--m&&k&&k(b)}var l=document.createElement("div"),r=navigator.userAgent,v=-1<r.indexOf("WebKit")?"-webkit-":-1<r.indexOf("Firefox")?"-moz-":-1<r.indexOf("MSIE")?"-ms-":-1<r.indexOf("Opera")?"-o-":"";k("link");k("style");return{process:h,vendorPrefix:v,onProperty:function(f,b){return"opacity"==f&&"-ms-"==
v?"filter: alpha(opacity\x3d"+100*b+"); zoom: 1;":v+f+":"+b+";"}}});
//# sourceMappingURL=xstyle.js.map