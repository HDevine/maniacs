//>>built
define("dojox/mobile/app/_Widget",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase"],function(a,b,e){a.provide("dojox.mobile.app._Widget");a.experimental("dojox.mobile.app._Widget");a.require("dijit._WidgetBase");a.declare("dojox.mobile.app._Widget",b._WidgetBase,{getScroll:function(){return{x:a.global.scrollX,y:a.global.scrollY}},connect:function(b,c,d){return"dblclick"!=c.toLowerCase()&&"ondblclick"!=c.toLowerCase()||!a.global.Mojo?this.inherited(arguments):this.connect(b,Mojo.Event.tap,
d)}})});
//# sourceMappingURL=_Widget.js.map