//>>built
define("xstyle/css-builder",[],function(){var d,e={};return{load:function(b,a,c,d){e[b]="undefined"!=typeof readFile?readFile(a.toUrl(b),"utf-8"):require.nodeRequire("fs").readFileSync(a.toUrl(b),"utf-8");c({})},write:function(b,a,c){d||(d=!0,c("_css_cache\x3d{};"));c("_css_cache["+JSON.stringify(a)+"]\x3d"+JSON.stringify(e[a])+";")}}});
//# sourceMappingURL=css-builder.js.map