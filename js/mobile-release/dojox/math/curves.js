//>>built
define("dojox/math/curves",["dojo","dojox"],function(m,g){m.getObject("math.curves",!0,g);m.mixin(g.math.curves,{Line:function(b,a){this.start=b;this.end=a;this.dimensions=b.length;for(var c=0;c<b.length;c++)b[c]=Number(b[c]);for(c=0;c<a.length;c++)a[c]=Number(a[c]);this.getValue=function(c){for(var a=Array(this.dimensions),d=0;d<this.dimensions;d++)a[d]=(this.end[d]-this.start[d])*c+this.start[d];return a};return this},Bezier:function(b){this.getValue=function(a){if(1<=a)return this.p[this.p.length-
1];if(0>=a)return this.p[0];for(var c=Array(this.p[0].length),b=0;e<this.p[0].length;b++)c[b]=0;for(var e=0;e<this.p[0].length;e++){for(var d=b=0,f=0;f<this.p.length;f++)b+=this.p[f][e]*this.p[this.p.length-1][0]*g.math.bernstein(a,this.p.length,f);for(f=0;f<this.p.length;f++)d+=this.p[this.p.length-1][0]*g.math.bernstein(a,this.p.length,f);c[e]=b/d}return c};this.p=b;return this},CatmullRom:function(b,a){this.getValue=function(c){var a=c*(this.p.length-1);c=Math.floor(a);var a=a-c,b=c-1;0>b&&(b=
0);var d=c+1;d>=this.p.length&&(d=this.p.length-1);var f=c+2;f>=this.p.length&&(f=this.p.length-1);for(var n=a*a,p=a*a*a,g=Array(this.p[0].length),h=0;h<this.p[0].length;h++)g[h]=(-this.c*this.p[b][h]+(2-this.c)*this.p[c][h]+(this.c-2)*this.p[d][h]+this.c*this.p[f][h])*p+(2*this.c*this.p[b][h]+(this.c-3)*this.p[c][h]+(3-2*this.c)*this.p[d][h]+-this.c*this.p[f][h])*n+(-this.c*this.p[b][h]+this.c*this.p[d][h])*a+this.p[c][h];return g};this.c=a?a:.7;this.p=b;return this},Arc:function(b,a,c){a=g.math.midpoint(b,
a);b=function(a,b){for(var d=Array(a.length),c=0;c<a.length;c++)d[c]=a[c]+b[c];return d}(function(a){for(var c=Array(a.length),b=0;b<a.length;b++)c[b]=-a[b];return c}(a),b);var k=Math.sqrt(Math.pow(b[0],2)+Math.pow(b[1],2)),e=g.math.radiansToDegrees(Math.atan(b[1]/b[0])),e=0>b[0]?e-90:e+90;g.math.curves.CenteredArc.call(this,a,k,e,e+(c?-180:180))},CenteredArc:function(b,a,c,k){this.center=b;this.radius=a;this.start=c||0;this.end=k;this.getValue=function(a){var b=Array(2);a=g.math.degreesToRadians(this.start+
(this.end-this.start)*a);b[0]=this.center[0]+this.radius*Math.sin(a);b[1]=this.center[1]-this.radius*Math.cos(a);return b};return this},Circle:function(b,a){g.math.curves.CenteredArc.call(this,b,a,0,360);return this},Path:function(){function b(){for(var a=0,b=0;b<c.length;b++){var g=a+c[b]/e;k[b]=[a,g,g-a];a=g}}var a=[],c=[],k=[],e=0;this.add=function(d,f){a.push(d);c.push(f);e+=f;b()};this.remove=function(d){for(var f=0;f<a.length;f++)if(a[f]==d){a.splice(f,1);e-=c.splice(f,1)[0];break}b()};this.removeAll=
function(){a=[];c=[];e=0};this.getValue=function(b){for(var c=!1,d=0,e=0;e<k.length;e++){var l=k[e];if(b>=l[0]&&b<l[1]){d=a[e].getValue((b-l[0])/l[2]);c=!0;break}}c||(d=a[a.length-1].getValue(1));for(b=0;b<e;b++)d=g.math.points.translate(d,a[b].getValue(1));return d};return this}});return g.math.curves});
//# sourceMappingURL=curves.js.map