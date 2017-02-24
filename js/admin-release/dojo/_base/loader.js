//>>built
define("dojo/_base/loader","./kernel ../has require module ../json ./lang ./array".split(" "),function(f,w,k,J,x,l,y){var q=function(a){return a.replace(/\./g,"/")},K=/\/\/>>built/,u=[],L=[],t=function(a,c,b){u.push(b);y.forEach(a.split(","),function(a){a=p(a,c.module);L.push(a);z(a)});A()},A=function(){var a,c;for(c in B)if(a=B[c],void 0===a.noReqPluginCheck&&(a.noReqPluginCheck=/loadInit\!/.test(c)||/require\!/.test(c)?1:0),!a.executed&&!a.noReqPluginCheck&&a.injected==M)return;N(function(){var a=
u;u=[];y.forEach(a,function(a){a(1)})})},O=function(a,c,b){var e=/\(|\)/g,g=1;for(e.lastIndex=c;(c=e.exec(a))&&(g=")"==c[0]?g-1:g+1,0!=g););if(0!=g)throw"unmatched paren around character "+e.lastIndex+" in: "+a;return[f.trim(a.substring(b,e.lastIndex))+";\n",e.lastIndex]},P=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,r=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,v=/(^|\s)(require|define)\s*\(/m,D=function(a,c){var b,e,g,C=[],d=[];b=[];for(c=
c||a.replace(P,function(a){r.lastIndex=v.lastIndex=0;return r.test(a)||v.test(a)?"":a});b=r.exec(c);)e=r.lastIndex,g=e-b[0].length,e=O(c,e,g),"loadInit"==b[2]?C.push(e[0]):d.push(e[0]),r.lastIndex=e[1];b=C.concat(d);return b.length||!v.test(c)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),b.join(""),b]:0},d=k.initSyncLoader(t,A,function(a,c){var b,e,g=[],d=[];if(K.test(c)||!(b=D(c)))return 0;e=a.mid+"-*loadInit";for(var f in p("dojo",a).result.scopeMap)g.push(f),d.push('"'+
f+'"');return"// xdomain rewrite of "+a.mid+"\ndefine('"+e+"',{\n\tnames:"+x.stringify(g)+",\n\tdef:function("+g.join(",")+"){"+b[1]+"}});\n\ndefine("+x.stringify(g.concat(["dojo/loadInit!"+e]))+", function("+g.join(",")+"){\n"+b[0]+"});"}),Q=d.sync,M=d.requested,R=d.arrived,E=d.nonmodule,S=d.executing,F=d.executed,h=d.syncExecStack,B=d.modules,G=d.execQ,p=d.getModule,z=d.injectModule,H=d.setArrived,T=d.signal,U=d.finishExec,V=d.execModule,I=d.getLegacyMode,N=d.guardCheckComplete,t=d.dojoRequirePlugin;
f.provide=function(a){var c=h[0],b=l.mixin(p(q(a),k.module),{executed:S,result:l.getObject(a,!0)});H(b);c&&(c.provides||(c.provides=[])).push(function(){b.result=l.getObject(a);delete b.provides;b.executed!==F&&U(b)});return b.result};w.add("config-publishRequireResult",1,0,0);f.require=function(a,c){var b=function(a,c){var b=p(q(a),k.module);if(h.length&&h[0].finish)h[0].finish.push(a);else{if(b.executed)return b.result;c&&(b.result=E);var e=I();z(b);e=I();b.executed!==F&&b.injected===R&&d.guardCheckComplete(function(){V(b)});
if(b.executed)return b.result;e==Q?b.cjs?G.unshift(b):h.length&&(h[0].finish=[a]):G.push(b)}}(a,c);w("config-publishRequireResult")&&!l.exists(a)&&void 0!==b&&l.setObject(a,b);return b};f.loadInit=function(a){a()};f.registerModulePath=function(a,c){var b={};b[a.replace(/\./g,"/")]=c;k({paths:b})};f.platformRequire=function(a){a=(a.common||[]).concat(a[f._name]||a["default"]||[]);for(var c;a.length;)l.isArray(c=a.shift())?f.require.apply(f,c):f.require(c)};f.requireIf=f.requireAfterIf=function(a,c,
b){a&&f.require(c,b)};f.requireLocalization=function(a,c,b){k(["../i18n"],function(e){e.getLocalization(a,c,b)})};return{extractLegacyApiApplications:D,require:t,loadInit:function(a,c,b){c([a],function(a){c(a.names,function(){for(var d="",e=[],m=0;m<arguments.length;m++)d+="var "+a.names[m]+"\x3d arguments["+m+"]; ",e.push(arguments[m]);eval(d);var l=c.module,h=[],k,d={provide:function(a){a=q(a);a=p(a,l);a!==l&&H(a)},require:function(a,b){a=q(a);b&&(p(a,l).result=E);h.push(a)},requireLocalization:function(a,
b,c){k||(k=["dojo/i18n"]);c=(c||f.locale).toLowerCase();a=q(a)+"/nls/"+(/root/i.test(c)?"":c+"/")+q(b);p(a,l).isXd&&k.push("dojo/i18n!"+a)},loadInit:function(a){a()}},m={},n;try{for(n in d)m[n]=f[n],f[n]=d[n];a.def.apply(null,e)}catch(W){T("error",[{src:J.id,id:"failedDojoLoadInit"},W])}finally{for(n in d)f[n]=m[n]}k&&(h=h.concat(k));h.length?t(h.join(","),c,b):b()})})}}});
//# sourceMappingURL=loader.js.map