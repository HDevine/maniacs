//>>built
define("dgrid/OnDemandList","./List ./_StoreMixin dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/dom dojo/on ./util/misc put-selector/put".split(" "),function(H,I,J,E,u,K,v,w,q){return J([H,I],{minRowsPerPage:25,maxRowsPerPage:250,maxEmptySpace:Infinity,bufferRows:10,farOffRemoval:2E3,queryRowsOverlap:0,pagingMethod:"debounce",pagingDelay:w.defaultDelay,keepScrollPosition:!1,rowHeight:22,postCreate:function(){this.inherited(arguments);var c=this;v(this.bodyNode,"scroll",w[this.pagingMethod](function(f){c._processScroll(f)},
null,this.pagingDelay))},destroy:function(){this.inherited(arguments);this._refreshTimeout&&clearTimeout(this._refreshTimeout)},renderQuery:function(c,f){function h(a){q(t,"!");if(a)throw d._refreshDeferred&&(d._refreshDeferred.reject(a),delete d._refreshDeferred),a;}var d=this,a=f&&f.container||this.contentNode,g={query:c,count:0,options:f},m,e=this.preload,b,z={node:q(a,"div.dgrid-preload",{rowIndex:0}),count:0,query:c,next:g,options:f};z.node.style.height="0";g.node=m=q(a,"div.dgrid-preload");
g.previous=z;m.rowIndex=this.minRowsPerPage;e?((g.next=e.next)&&m.offsetTop>=e.node.offsetTop?g.previous=e:(g.next=e,g.previous=e.previous),g.previous.next=g,g.next.previous=g):this.preload=g;var t=q(m,"-div.dgrid-loading");q(t,"div.dgrid-below").innerHTML=this.loadingMessage;f=E.mixin(this.get("queryOptions"),f,{start:0,count:this.minRowsPerPage},"level"in c?{queryLevel:c.level}:null);this._trackError(function(){return b=c(f)});if("undefined"===typeof b)h();else return u.when(d.renderArray(b,m,f),
function(a){return u.when("undefined"===typeof b.total?b.length:b.total,function(c){var h=a.length,e=m.parentNode,p=d.noDataNode;q(t,"!");"queryLevel"in f||(d._total=c);0===c&&e&&(p&&(q(p,"!"),delete d.noDataNode),d.noDataNode=p=q("div.dgrid-no-data"),e.insertBefore(p,d._getFirstRowSibling(e)),p.innerHTML=d.noDataMessage);for(p=e=0;p<h;p++)e+=d._calcRowHeight(a[p]);h&&e&&(d.rowHeight=e/h);c-=h;g.count=c;m.rowIndex=h;c?m.style.height=Math.min(c*d.rowHeight,d.maxEmptySpace)+"px":(m.style.display="none",
f.count++);d._previousScrollPosition&&(d.scrollTo(d._previousScrollPosition),delete d._previousScrollPosition);d._processScroll();d._refreshDeferred&&(d._refreshDeferred.resolve(b),delete d._refreshDeferred);return a},h)},h),b},refresh:function(c){var f=this,h=c&&c.keepScrollPosition,d;"undefined"===typeof h&&(h=this.keepScrollPosition);h&&(this._previousScrollPosition=this.getScrollPosition());this.inherited(arguments);if(this.store)return h=this._refreshDeferred=new u,d=f.renderQuery(function(a){return f.store.query(f.query,
a)}),"undefined"===typeof d&&h.reject(),h.then(function(a){f._refreshTimeout=setTimeout(function(){v.emit(f.domNode,"dgrid-refresh-complete",{bubbles:!0,cancelable:!1,grid:f,results:a});f._refreshTimeout=null},0);delete f._refreshDeferred;return a},function(a){delete f._refreshDeferred;throw a;})},resize:function(){this.inherited(arguments);this._processScroll()},_getFirstRowSibling:function(c){return c.lastChild},_calcRowHeight:function(c){var f=c.nextSibling;return f&&!/\bdgrid-preload\b/.test(f.className)?
f.offsetTop-c.offsetTop:c.offsetHeight},lastScrollTop:0,_processScroll:function(c){function f(b,c,d,e){var f=a.farOffRemoval,g=b.node;if(c>2*f){for(var k,l=g[d],m=0,C=0,n=[];k=l;){var p=a._calcRowHeight(k);if(m+p+f>c||0>l.className.indexOf("dgrid-row")&&0>l.className.indexOf("dgrid-loading"))break;l=k[d];m+=p;C+=k.count||1;a.removeRow(k,!0);n.push(k)}b.count+=C;e?(g.rowIndex-=C,h(b)):g.style.height=g.offsetHeight+m+"px";var r=q("div",n);setTimeout(function(){q(r,"!")},1)}}function h(b,c){b.node.style.height=
Math.min(b.count*a.rowHeight,c?Infinity:a.maxEmptySpace)+"px"}function d(a,b){do a=b?a.next:a.previous;while(a&&!a.node.offsetWidth);return a}var a=this,g=a.bodyNode;c=c&&c.scrollTop||this.getScrollPosition().y;var g=g.offsetHeight+c,m,e,b=a.preload,z=a.lastScrollTop,t=a.bufferRows*a.rowHeight,v=t-a.rowHeight,w,F,B,p=!0;for(a.lastScrollTop=c;b&&!b.node.offsetWidth;)b=b.previous;for(;b&&b!=m;){m=a.preload;a.preload=b;e=b.node;var k=e.offsetTop;if(g+1+v<k)b=d(b,p=!1);else if(c-1-v>k+e.offsetHeight)b=
d(b,p=!0);else{var l=((e.rowIndex?c-t:g)-k)/a.rowHeight,k=(g-c+2*t)/a.rowHeight,k=k+Math.min(Math.abs(Math.max(Math.min((c-z)*a.rowHeight,a.maxRowsPerPage/2),a.maxRowsPerPage/-2)),10);0==e.rowIndex&&(l-=k);l=Math.max(l,0);10>l&&0<l&&k+l<a.maxRowsPerPage&&(k+=Math.max(0,l),l=0);k=Math.min(Math.max(k,a.minRowsPerPage),a.maxRowsPerPage,b.count);if(0==k)b=d(b,p);else{var k=Math.ceil(k),l=Math.min(Math.floor(l),b.count-k),n=E.mixin(a.get("queryOptions"),b.options);b.count-=k;var r=e,A,x=a.queryRowsOverlap,
D=(0<e.rowIndex||e.offsetTop>c)&&b;if(D){var y=b.previous;y&&(f(y,c-(y.node.offsetTop+y.node.offsetHeight),"nextSibling"),0<l&&y.node==e.previousSibling?(l=Math.min(b.count,l),b.previous.count+=l,h(b.previous,!0),e.rowIndex+=l,x=0):k+=l,b.count-=l);n.start=e.rowIndex-x;n.count=Math.min(k+x,a.maxRowsPerPage);e.rowIndex=n.start+n.count}else b.next&&(f(b.next,b.next.node.offsetTop-g,"previousSibling",!0),r=e.nextSibling,r==b.next.node?(b.next.count+=b.count-l,b.next.node.rowIndex=l+k,h(b.next),b.count=
l,x=0):A=!0),n.start=b.count,n.count=Math.min(k+x,a.maxRowsPerPage);A&&r&&r.offsetWidth&&(A=r.offsetTop);h(b);"level"in b.query&&(n.queryLevel=b.query.level);if("queryLevel"in n||!(n.start>a._total||0>n.count)){e=q(r,"-div.dgrid-loading[style\x3dheight:"+k*a.rowHeight+"px]");q(e,"div.dgrid-"+(D?"below":"above")).innerHTML=a.loadingMessage;e.count=k;var G=b.query(n);if(void 0===a._trackError(function(){return G})){q(e,"!");return}(function(b,c,d,e){B=u.when(a.renderArray(e,b,n),function(f){F=e;r=b.nextSibling;
q(b,"!");if(d&&r&&r.offsetWidth){var g=a.getScrollPosition();a.scrollTo({x:g.x,y:g.y+r.offsetTop-d,preserveMomentum:!0})}u.when(e.total||e.length,function(b){"queryLevel"in n||(a._total=b);c&&(c.count=b-c.node.rowIndex,0===c.count&&n.count++,h(c))});a._processScroll();return f},function(a){q(b,"!");throw a;})}).call(this,e,D,A,G);b=b.previous}}}}B&&(w=this._refreshDeferred)&&(delete this._refreshDeferred,u.when(B,function(){w.resolve(F)}))},removeRow:function(c,f){if(c){var h=c.previousSibling,d=
c.nextSibling,a;if(a=h)a=h.observerIndex,a=null!=a?a:h.previousObserverIndex;h=a;if(a=d)a=d.observerIndex,a=null!=a?a:d.nextObserverIndex;d=c.observerIndex;c.observerIndex=void 0;f&&(c.nextObserverIndex=a,c.previousObserverIndex=h);if(this.cleanEmptyObservers&&-1<d&&d!==h&&d!==a&&(h=this.observers,a=h[d])){if(!f)for(var g=a.rows,m=0;m<g.length;m++)if(g[m]!=c&&K.isDescendant(g[m],this.domNode))return this.inherited(arguments);a.cancel();this._numObservers--;h[d]=0}}this.inherited(arguments)}})});
//# sourceMappingURL=OnDemandList.js.map