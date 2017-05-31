//>>built
define("dgrid/Keyboard","dojo/_base/declare dojo/aspect dojo/on dojo/_base/lang dojo/has put-selector/put ./util/misc dojo/_base/Deferred dojo/_base/sniff".split(" "),function(v,m,p,r,q,w,x,y){function z(a){a.preventDefault()}var H={checkbox:1,radio:1,button:1},A=/\bdgrid-cell\b/,B=/\bdgrid-row\b/,e=v(null,{pageSkip:10,tabIndex:0,keyMap:null,headerKeyMap:null,postMixInProperties:function(){this.inherited(arguments);this.keyMap||(this.keyMap=r.mixin({},e.defaultKeyMap));this.headerKeyMap||(this.headerKeyMap=
r.mixin({},e.defaultHeaderKeyMap))},postCreate:function(){function a(a){var b=a.target;return b.type&&(!H[b.type]||32==a.keyCode)}function c(c){function d(){b._focusedHeaderNode&&(b._focusedHeaderNode.tabIndex=-1);if(b.showHeader){if(h)for(var a=0,c,d=b.headerNode.getElementsByTagName("th");c=d[a];++a){if(e.test(c.className)){b._focusedHeaderNode=g=c;break}}else b._focusedHeaderNode=g=b.headerNode;g&&(g.tabIndex=b.tabIndex)}}var h=b.cellNavigation,e=h?A:B,f=c===b.headerNode,g=c;f?(d(),m.after(b,"renderHeader",
d,!0)):m.after(b,"renderArray",function(a){return y.when(a,function(a){var d=b._focusedNode||g;if(e.test(d.className)&&x.contains(c,d))return a;for(var h=0,f=c.getElementsByTagName("*"),k;k=f[h];++h)if(e.test(k.className)){d=b._focusedNode=k;break}d.tabIndex=b.tabIndex;return a})});b._listeners.push(p(c,"mousedown",function(c){a(c)||b._focusOnNode(c.target,f,c)}));b._listeners.push(p(c,"keydown",function(c){if(!c.metaKey&&!c.altKey){var d=b[f?"headerKeyMap":"keyMap"][c.keyCode];d&&!a(c)&&d.call(b,
c)}}))}this.inherited(arguments);var b=this;this.tabableHeader&&(c(this.headerNode),p(this.headerNode,"dgrid-cellfocusin",function(){b.scrollTo({x:this.scrollLeft})}));c(this.contentNode);this._debouncedEnsureScroll=x.debounce(this._ensureScroll,this)},removeRow:function(a){if(!this._focusedNode)return this.inherited(arguments);var c=this,b=document.activeElement===this._focusedNode,h=this[this.cellNavigation?"cell":"row"](this._focusedNode),d=h.row||h,e;a=a.element||a;a===d.element&&((e=this.down(d,
!0))&&e.element!==a||(e=this.up(d,!0)),this._removedFocus={active:b,rowId:d.id,columnId:h.column&&h.column.id,siblingId:e&&e.element!==a?e.id:void 0},setTimeout(function(){c._removedFocus&&c._restoreFocus(d.id)},0),this._focusedNode=null);this.inherited(arguments)},insertRow:function(a){var c=this.inherited(arguments);this._removedFocus&&!this._removedFocus.wait&&this._restoreFocus(c);return c},_restoreFocus:function(a){var c=this._removedFocus,b;if((a=(a=a&&this.row(a))&&a.element&&a.id===c.rowId?
a:"undefined"!==typeof c.siblingId&&this.row(c.siblingId))&&a.element){if(!a.element.parentNode.parentNode){c.wait=!0;return}"undefined"!==typeof c.columnId&&(b=this.cell(a,c.columnId))&&b.element&&(a=b);c.active&&0!==a.element.offsetHeight?this._focusOnNode(a,!1,null):(w(a.element,".dgrid-focus"),a.element.tabIndex=this.tabIndex,this._focusedNode=a.element)}delete this._removedFocus},addKeyHandler:function(a,c,b){return m.after(this[b?"headerKeyMap":"keyMap"],a,c,!0)},_ensureRowScroll:function(a){var c=
this.getScrollPosition().y;c>a.offsetTop?this.scrollTo({y:a.offsetTop}):c+this.contentNode.offsetHeight<a.offsetTop+a.offsetHeight&&this.scrollTo({y:a.offsetTop-this.contentNode.offsetHeight+a.offsetHeight})},_ensureColumnScroll:function(a){var c=this.getScrollPosition().x,b=a.offsetLeft;if(c>b)this.scrollTo({x:b});else{var e=this.bodyNode.clientWidth;a=a.offsetWidth;var d=b+a;c+e<d&&this.scrollTo({x:e>a?d-e:b})}},_ensureScroll:function(a,c){this.cellNavigation&&(this.columnSets||1<this.subRows.length)&&
!c&&this._ensureRowScroll(a.row.element);this.bodyNode.clientWidth<this.contentNode.offsetWidth&&this._ensureColumnScroll(a.element)},_focusOnNode:function(a,c,b){var e="_focused"+(c?"Header":"")+"Node",d=this[e],n=this.cellNavigation?"cell":"row",l=this[n](a),f,g,k,m,t;if(a=l&&l.element){if(this.cellNavigation)for(f=a.getElementsByTagName("input"),t=0,k=f.length;t<k;t++)if(g=f[t],(-1!=g.tabIndex||"_dgridLastValue"in g)&&!g.disabled){8>q("ie")&&(g.style.position="relative");g.focus();8>q("ie")&&(g.style.position=
"");m=!0;break}null!==b&&(b=r.mixin({grid:this},b),b.type&&(b.parentType=b.type),b.bubbles||(b.bubbles=!0));d&&(w(d,"!dgrid-focus[!tabIndex]"),8>q("ie")&&(d.style.position=""),b&&(b[n]=this[n](d),p.emit(d,"dgrid-cellfocusout",b)));d=this[e]=a;b&&(b[n]=l);e=this.cellNavigation?A:B;!m&&e.test(a.className)&&(8>q("ie")&&(a.style.position="relative"),a.tabIndex=this.tabIndex,a.focus());w(a,".dgrid-focus");b&&p.emit(d,"dgrid-cellfocusin",b);this._debouncedEnsureScroll(l,c)}},focusHeader:function(a){this._focusOnNode(a||
this._focusedHeaderNode,!0)},focus:function(a){(a=a||this._focusedNode)?this._focusOnNode(a,!1):this.contentNode.focus()}}),u=e.moveFocusVertical=function(a,c){var b=this.cellNavigation,e=this[b?"cell":"row"](a),e=b&&e.column.id,d=this.down(this._focusedNode,c,!0);b&&(d=this.cell(d,e));this._focusOnNode(d,!1,a);a.preventDefault()};v=e.moveFocusUp=function(a){u.call(this,a,-1)};var I=e.moveFocusDown=function(a){u.call(this,a,1)},J=e.moveFocusPageUp=function(a){u.call(this,a,-this.pageSkip)},K=e.moveFocusPageDown=
function(a){u.call(this,a,this.pageSkip)},C=e.moveFocusHorizontal=function(a,c){if(this.cellNavigation){var b=!this.row(a);this._focusOnNode(this.right(this["_focused"+(b?"Header":"")+"Node"],c),b,a);a.preventDefault()}},D=e.moveFocusLeft=function(a){C.call(this,a,-1)},E=e.moveFocusRight=function(a){C.call(this,a,1)},F=e.moveHeaderFocusEnd=function(a,c){var b;this.cellNavigation&&(b=this.headerNode.getElementsByTagName("th"),this._focusOnNode(b[c?0:b.length-1],!0,a));a.preventDefault()},L=e.moveHeaderFocusHome=
function(a){F.call(this,a,!0)},G=e.moveFocusEnd=function(a,c){var b=this,e=this.cellNavigation,d=this.contentNode,n=d.scrollTop+(c?0:d.scrollHeight),d=d[c?"firstChild":"lastChild"],l=-1<d.className.indexOf("dgrid-preload"),f=l?d[(c?"next":"previous")+"Sibling"]:d,g=f.offsetTop+(c?0:f.offsetHeight),k;if(l){for(;f&&0>f.className.indexOf("dgrid-row");)f=f[(c?"next":"previous")+"Sibling"];if(!f)return}!l||1>d.offsetHeight?(e&&(f=this.cell(f,this.cell(a).column.id)),this._focusOnNode(f,!1,a)):(q("dom-addeventlistener")||
(a=r.mixin({},a)),k=m.after(this,"renderArray",function(d){k.remove();return y.when(d,function(d){d=d[c?0:d.length-1];e&&(d=b.cell(d,b.cell(a).column.id));b._focusOnNode(d,!1,a)})}));n===g&&a.preventDefault()},M=e.moveFocusHome=function(a){G.call(this,a,!0)};e.defaultKeyMap={32:z,33:J,34:K,35:G,36:M,37:D,38:v,39:E,40:I};e.defaultHeaderKeyMap={32:z,35:F,36:L,37:D,39:E};return e});
//# sourceMappingURL=Keyboard.js.map