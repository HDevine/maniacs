//>>built
define("dojox/grid/enhanced/plugins/Rearrange","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/connect ../../EnhancedGrid ../_Plugin ./_RowMapLayer".split(" "),function(t,v,w,m,q,y,z,A){t=w("dojox.grid.enhanced.plugins.Rearrange",z,{name:"rearrange",constructor:function(a,b){this.grid=a;this.setArgs(b);var e=new A(a);dojox.grid.enhanced.plugins.wrap(a,"_storeLayerFetch",e)},setArgs:function(a){this.args=v.mixin(this.args||{},a||{});this.args.setIdentifierForNewItem=
this.args.setIdentifierForNewItem||function(b){return b}},destroy:function(){this.inherited(arguments);this.grid.unwrap("rowmap")},onSetStore:function(a){this.grid.layer("rowmap").clearMapping()},_hasIdentity:function(a){var b=this.grid,e=b.store,g=b.layout.cells;return e.getFeatures()["dojo.data.api.Identity"]&&m.some(a,function(a){return e.getIdentityAttributes(b._by_idx[a.r].item)==g[a.c].field})?!0:!1},moveColumns:function(a,b){var e=this.grid,g=e.layout,f=g.cells,h,c,d=0,l=!0;h={};var k={};a.sort(function(a,
b){return a-b});for(c=0;c<a.length;++c)h[a[c]]=c,a[c]<b&&++d;var n=0,p=0,m=Math.max(a[a.length-1],b);m==f.length&&--m;var u=Math.min(a[0],b);for(c=u;c<=m;++c){var r=h[c];0<=r?k[c]=b-d+r:c<b?(k[c]=u+n,++n):c>=b&&(k[c]=b+a.length-d+p,++p)}d=0;b==f.length&&(--b,l=!1);e._notRefreshSelection=!0;for(c=0;c<a.length;++c)h=a[c],h<b&&(h-=d),++d,h!=b&&(g.moveColumn(f[h].view.idx,f[b].view.idx,h,b,l),f=g.cells),b<=h&&++b;delete e._notRefreshSelection;q.publish("dojox/grid/rearrange/move/"+e.id,["col",k,a])},
moveRows:function(a,b){var e=this.grid,g={},f=[],h=[],c=a.length,d,l,k;for(d=0;d<c;++d){h=a[d];if(h>=b)break;f.push(h)}h=a.slice(d);d=f;if(c=d.length)for(l={},m.forEach(d,function(a){l[a]=!0}),g[d[0]]=b-c,f=0,d=d[f]+1,k=d-1;d<b;++d)l[d]?(++f,g[d]=b-c+f):(g[d]=k,++k);d=h;if(c=d.length)for(l={},m.forEach(d,function(a){l[a]=!0}),g[d[c-1]]=b+c-1,f=c-1,d=d[f]-1,k=d+1;d>=b;--d)l[d]?(--f,g[d]=b+f):(g[d]=k,--k);var n=v.clone(g);e.layer("rowmap").setMapping(g);e.forEachLayer(function(a){return"rowmap"!=a.name()?
(a.invalidate(),!0):!1},!1);e.selection.selected=[];e._noInternalMapping=!0;e._refresh();setTimeout(function(){q.publish("dojox/grid/rearrange/move/"+e.id,["row",n,a]);e._noInternalMapping=!1},0)},moveCells:function(a,b){var e=this.grid,g=e.store;if(g.getFeatures()["dojo.data.api.Write"]&&(a.min.row!=b.min.row||a.min.col!=b.min.col)){var f=e.layout.cells,h,c,d,l,k=[],n=[];h=a.min.row;for(d=b.min.row;h<=a.max.row;++h,++d)for(c=a.min.col,l=b.min.col;c<=a.max.col;++c,++l){for(;f[c]&&f[c].hidden;)++c;
for(;f[l]&&f[l].hidden;)++l;k.push({r:h,c:c});n.push({r:d,c:l,v:f[c].get(h,e._by_idx[h].item)})}this._hasIdentity(k.concat(n))||(m.forEach(k,function(a){g.setValue(e._by_idx[a.r].item,f[a.c].field,"")}),m.forEach(n,function(a){g.setValue(e._by_idx[a.r].item,f[a.c].field,a.v)}),g.save({onComplete:function(){q.publish("dojox/grid/rearrange/move/"+e.id,["cell",{from:a,to:b}])}}))}},copyCells:function(a,b){var e=this.grid,g=e.store;if(g.getFeatures()["dojo.data.api.Write"]&&(a.min.row!=b.min.row||a.min.col!=
b.min.col)){var f=e.layout.cells,h,c,d,l,k=[];h=a.min.row;for(d=b.min.row;h<=a.max.row;++h,++d)for(c=a.min.col,l=b.min.col;c<=a.max.col;++c,++l){for(;f[c]&&f[c].hidden;)++c;for(;f[l]&&f[l].hidden;)++l;k.push({r:d,c:l,v:f[c].get(h,e._by_idx[h].item)})}this._hasIdentity(k)||(m.forEach(k,function(a){g.setValue(e._by_idx[a.r].item,f[a.c].field,a.v)}),g.save({onComplete:function(){setTimeout(function(){q.publish("dojox/grid/rearrange/copy/"+e.id,["cell",{from:a,to:b}])},0)}}))}},changeCells:function(a,
b,e){var g=this.grid,f=g.store;if(f.getFeatures()["dojo.data.api.Write"]){var h=g.layout.cells,c=a.layout.cells,d,l,k,n,p=[];d=b.min.row;for(k=e.min.row;d<=b.max.row;++d,++k)for(l=b.min.col,n=e.min.col;l<=b.max.col;++l,++n){for(;c[l]&&c[l].hidden;)++l;for(;h[n]&&h[n].hidden;)++n;p.push({r:k,c:n,v:c[l].get(d,a._by_idx[d].item)})}this._hasIdentity(p)||(m.forEach(p,function(a){f.setValue(g._by_idx[a.r].item,h[a.c].field,a.v)}),f.save({onComplete:function(){q.publish("dojox/grid/rearrange/change/"+g.id,
["cell",e])}}))}},clearCells:function(a){var b=this.grid,e=b.store;if(e.getFeatures()["dojo.data.api.Write"]){var g=b.layout.cells,f,h,c=[];for(f=a.min.row;f<=a.max.row;++f)for(h=a.min.col;h<=a.max.col;++h){for(;g[h]&&g[h].hidden;)++h;c.push({r:f,c:h})}this._hasIdentity(c)||(m.forEach(c,function(a){e.setValue(b._by_idx[a.r].item,g[a.c].field,"")}),e.save({onComplete:function(){q.publish("dojox/grid/rearrange/change/"+b.id,["cell",a])}}))}},insertRows:function(a,b,e){try{var g=this.grid,f=g.store,
h=g.rowCount,c={},d=0,l=[],k,n=0>e,p=this,t=b.length;if(n)e=0;else for(k=e;k<g.rowCount;++k)c[k]=k+t;if(f.getFeatures()["dojo.data.api.Write"]){if(a){var u=a.store,r,x;if(n)x=m.filter(m.map(g.layout.cells,function(a){return a.field}),function(a){return a});else{for(k=0;!r;++k)r=g._by_idx[k];x=f.getAttributes(r.item)}var w=[];m.forEach(b,function(b,g){var k={},n=a._by_idx[b];if(n){m.forEach(x,function(a){k[a]=u.getValue(n.item,a)});k=p.args.setIdentifierForNewItem(k,f,h+d)||k;try{f.newItem(k),l.push(e+
g),c[h+d]=e+g,++d}catch(D){}}else w.push(b)})}else if(b.length&&v.isObject(b[0]))m.forEach(b,function(a,b){var g=p.args.setIdentifierForNewItem(a,f,h+d)||a;try{f.newItem(g),l.push(e+b),c[h+d]=e+b,++d}catch(C){}});else return;g.layer("rowmap").setMapping(c);f.save({onComplete:function(){g._refresh();setTimeout(function(){q.publish("dojox/grid/rearrange/insert/"+g.id,["row",l])},0)}})}}catch(B){}},removeRows:function(a){var b=this.grid,e=b.store;try{m.forEach(m.map(a,function(a){return b._by_idx[a]}),
function(a){a&&e.deleteItem(a.item)}),e.save({onComplete:function(){q.publish("dojox/grid/rearrange/remove/"+b.id,["row",a])}})}catch(g){}},_getPageInfo:function(){var a=this.grid.scroller,b=a.page,e=a.page,g=a.firstVisibleRow,f=a.lastVisibleRow,h=a.rowsPerPage,c,d,l,k=[];m.forEach(a.pageNodes[0],function(a,m){a&&(l=!1,c=m*h,d=(m+1)*h-1,g>=c&&g<=d&&(b=m,l=!0),f>=c&&f<=d&&(e=m,l=!0),!l&&(c>f||d<g)&&k.push(m))});return{topPage:b,bottomPage:e,invalidPages:k}}});y.registerPlugin(t);return t});
//# sourceMappingURL=Rearrange.js.map