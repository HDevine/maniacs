//>>built
define("dgrid/util/touch",["dojo/on","dojo/query"],function(h,m){function l(b,d,a,c){if(!(1<a.targetTouches.length)){var e=a.changedTouches[0],k=e.screenX,n=e.screenY;c&&a.preventDefault();var f=h(b,"touchend",function(a){var b=a.changedTouches[0];a.targetTouches.length||(Math.abs(b.screenX-k)<g.tapRadius&&Math.abs(b.screenY-n)<g.tapRadius&&(c&&a.preventDefault(),d.call(this,a)),f.remove())})}}var g={tapRadius:10,dbltapTime:250,selector:function(b,d,a){return function(c,e){var k=d.bubble;k?d=k:!1!==
a&&(a=!0);return h(c,d,function(d){var f=d.target;3==f.nodeType&&(f=f.parentNode);for(;!m.matches(f,b,c);)if(f==c||!a||!(f=f.parentNode))return;return e.call(f,d)})}},countCurrentTouches:function(b,d){if(!("touches"in b))return-1;var a,c,e;for(c=a=0;e=b.touches[a];++a)d.contains(e.target)&&++c;return c},tap:function(b,d){return h(b,"touchstart",function(a){l(b,d,a)})},dbltap:function(b,d){var a,c;return h(b,"touchstart",function(e){a?l(b,function(b){if(a){var e=b.changedTouches[0];Math.abs(e.screenX-
a.screenX)<g.tapRadius&&Math.abs(e.screenY-a.screenY)<g.tapRadius&&(c&&clearTimeout(c),a=c=null,d.call(this,b))}},e,!0):l(b,function(b){a=b.changedTouches[0];c=setTimeout(function(){a=c=null},g.dbltapTime)},e)})}};return g});
//# sourceMappingURL=touch.js.map