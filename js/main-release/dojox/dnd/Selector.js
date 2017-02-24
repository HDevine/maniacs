//>>built
define("dojox/dnd/Selector",["dojo","dojox","dojo/dnd/Selector"],function(g,t){return g.declare("dojox.dnd.Selector",g.dnd.Selector,{conservative:!0,isSelected:function(a){a=g.isString(a)?a:a.id;return this.getItem(a)&&this.selected[a]},selectNode:function(a,d){d||this.selectNone();var b=g.isString(a)?a:a.id;this.getItem(b)&&(this._removeAnchor(),this.anchor=g.byId(a),this._addItemClass(this.anchor,"Anchor"),this.selection[b]=1,this._addItemClass(this.anchor,"Selected"));return this},deselectNode:function(a){var d=
g.isString(a)?a:a.id;this.getItem(d)&&this.selection[d]&&(this.anchor===g.byId(a)&&this._removeAnchor(),delete this.selection[d],this._removeItemClass(this.anchor,"Selected"));return this},selectByBBox:function(a,d,b,f,e){e||this.selectNone();this.forInItems(function(c,e){var h=g.byId(e);h&&this._isBoundedByBox(h,a,d,b,f)&&this.selectNode(e,!0)},this);return this},_isBoundedByBox:function(a,d,b,f,e){return this.conservative?this._conservativeBBLogic(a,d,b,f,e):this._liberalBBLogic(a,d,b,f,e)},shift:function(a,
d){var b=this.getSelectedNodes();b&&b.length&&this.selectNode(this._getNodeId(b[b.length-1].id,a),d)},_getNodeId:function(a,d){for(var b=this.getAllNodes(),f=a,e=0,c=b.length;e<c;++e)if(b[e].id==a){c=Math.min(c-1,Math.max(0,e+(d?1:-1)));e!=c&&(f=b[c].id);break}return f},_conservativeBBLogic:function(a,d,b,f,e){a=g.coords(a);var c;d>f&&(c=d,d=f,f=c);b>e&&(c=b,b=e,e=c);return a.x>=d&&a.x+a.w<=f&&a.y>=b&&a.y+a.h<=e},_liberalBBLogic:function(a,d,b,f,e){var c=g.position(a),l,h,k,p=a=!1,m=c.x,q=c.y,n=c.x+
c.w,r=c.y+c.h;d<f?(c=d,l=b):(a=!0,c=f,l=e);b<e?(p=!0,h=f,k=e):(h=d,k=b,c=f,l=e);a&&p&&(h=d,k=e,c=f,l=b);return((m>=c||n<=h)&&c<=n&&h>=m||m<=c&&n>=h)&&(l<=r&&k>=q||r>=k&&q<=k)}})});
//# sourceMappingURL=Selector.js.map