//>>built
define("dojox/lang/functional/array",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","./lambda"],function(k,h,n,g){var l={};h.mixin(g,{filter:function(a,d,c){"string"==typeof a&&(a=a.split(""));c=c||k.global;d=g.lambda(d);var b=[],f,e,m;if(h.isArray(a))for(e=0,m=a.length;e<m;++e)f=a[e],d.call(c,f,e,a)&&b.push(f);else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(e=0;a.hasNext();)f=a.next(),d.call(c,f,e++,a)&&b.push(f);else for(e in a)e in l||(f=a[e],d.call(c,f,e,a)&&b.push(f));
return b},forEach:function(a,d,c){"string"==typeof a&&(a=a.split(""));c=c||k.global;d=g.lambda(d);var b,f;if(h.isArray(a))for(b=0,f=a.length;b<f;d.call(c,a[b],b,a),++b);else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(b=0;a.hasNext();d.call(c,a.next(),b++,a));else for(b in a)b in l||d.call(c,a[b],b,a);return c},map:function(a,d,c){"string"==typeof a&&(a=a.split(""));c=c||k.global;d=g.lambda(d);var b,f,e;if(h.isArray(a))for(b=Array(f=a.length),e=0;e<f;b[e]=d.call(c,a[e],e,a),++e);
else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(b=[],e=0;a.hasNext();b.push(d.call(c,a.next(),e++,a)));else for(e in b=[],a)e in l||b.push(d.call(c,a[e],e,a));return b},every:function(a,d,c){"string"==typeof a&&(a=a.split(""));c=c||k.global;d=g.lambda(d);var b,f;if(h.isArray(a))for(b=0,f=a.length;b<f;++b){if(!d.call(c,a[b],b,a))return!1}else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(b=0;a.hasNext();){if(!d.call(c,a.next(),b++,a))return!1}else for(b in a)if(!(b in
l||d.call(c,a[b],b,a)))return!1;return!0},some:function(a,d,c){"string"==typeof a&&(a=a.split(""));c=c||k.global;d=g.lambda(d);var b,f;if(h.isArray(a))for(b=0,f=a.length;b<f;++b){if(d.call(c,a[b],b,a))return!0}else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(b=0;a.hasNext();){if(d.call(c,a.next(),b++,a))return!0}else for(b in a)if(!(b in l)&&d.call(c,a[b],b,a))return!0;return!1}});return g});
//# sourceMappingURL=array.js.map