//>>built
define("dojox/editor/plugins/BidiSupport","dojo/_base/declare dojo/_base/array dojo/aspect dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/i18n dojo/NodeList-dom dojo/NodeList-traverse dojo/dom-style dojo/sniff dojo/query dijit dojox dijit/_editor/_Plugin dijit/_editor/range dijit/_editor/plugins/EnterKeyHandling dijit/_editor/plugins/FontChoice ./NormalizeIndentOutdent dijit/form/ToggleButton dojo/i18n!./nls/BidiSupport".split(" "),function(A,q,w,p,l,B,n,C,G,H,g,m,r,I,J,x,u,
y,D,E,F){var z=A("dojox.editor.plugins.BidiSupport",x,{useDefaultCommand:!1,buttonClass:null,iconClassPrefix:"dijitAdditionalEditorIcon",command:"bidiSupport",blockMode:"DIV",shortcutonly:!1,bogusHtmlContent:"\x26nbsp;",buttonLtr:null,buttonRtl:null,_indentBy:40,_lineTextArray:"DIV P LI H1 H2 H3 H4 H5 H6 ADDRESS PRE DT DE TD".split(" "),_lineStyledTextArray:"H1 H2 H3 H4 H5 H6 ADDRESS PRE P".split(" "),_tableContainers:["TABLE","THEAD","TBODY","TR"],_blockContainers:["TABLE","OL","UL","BLOCKQUOTE"],
_initButton:function(){this.shortcutonly||(this.buttonLtr||(this.buttonLtr=this._createButton("ltr")),this.buttonRtl||(this.buttonRtl=this._createButton("rtl")))},_createButton:function(a){return F(p.mixin({label:C.getLocalization("dojox.editor.plugins","BidiSupport")[a],dir:this.editor.dir,lang:this.editor.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+("ltr"==a?"ParaLeftToRight":"ParaRightToLeft"),onClick:p.hitch(this,"_changeState",[a])},this.params||{}))},setToolbar:function(a){this.shortcutonly||
(this.editor.isLeftToRight()?(a.addChild(this.buttonLtr),a.addChild(this.buttonRtl)):(a.addChild(this.buttonRtl),a.addChild(this.buttonLtr)))},updateState:function(){if(this.editor&&this.editor.isLoaded&&!this.shortcutonly&&(this.buttonLtr.set("disabled",!!this.disabled),this.buttonRtl.set("disabled",!!this.disabled),!this.disabled)){var a=u.getSelection(this.editor.window);if(a&&0!=a.rangeCount){var b=a.getRangeAt(0);if(b.startContainer!==this.editor.editNode||b.startContainer.hasChildNodes()){a=
b.startContainer;b=b.startOffset;if(this._isBlockElement(a))for(;a.hasChildNodes();)b==a.childNodes.length&&b--,a=a.childNodes[b],b=0;a=this._getBlockAncestor(a)}else a=b.startContainer;a=g.get(a,"direction");this.buttonLtr.set("checked","ltr"==a);this.buttonRtl.set("checked","rtl"==a)}}},setEditor:function(a){this.editor=a;"P"!=this.blockMode&&"DIV"!=this.blockMode&&(this.blockMode="DIV");this._initButton();this.editor.contentPreFilters.push(this._preFilterNewLines);a=p.hitch(this,function(b){if(this.disabled||
!b.hasChildNodes())return b;this._changeStateOfBlocks(this.editor.editNode,this.editor.editNode,this.editor.editNode,"explicitdir",null);return this.editor.editNode});this.editor.contentDomPostFilters.push(a);this.editor._justifyleftImpl=p.hitch(this,function(){this._changeState("left");return!0});this.editor._justifyrightImpl=p.hitch(this,function(){this._changeState("right");return!0});this.editor._justifycenterImpl=p.hitch(this,function(){this._changeState("center");return!0});this.editor._insertorderedlistImpl=
p.hitch(this,"_insertLists","insertorderedlist");this.editor._insertunorderedlistImpl=p.hitch(this,"_insertLists","insertunorderedlist");this.editor._indentImpl=p.hitch(this,"_indentAndOutdent","indent");this.editor._outdentImpl=p.hitch(this,"_indentAndOutdent","outdent");this.editor._formatblockImpl=p.hitch(this,"_formatBlocks");this.editor.onLoadDeferred.addCallback(p.hitch(this,function(){var b=this.editor._plugins,c,a,e=b.length;c=p.hitch(this,"_changeState","mirror");a=p.hitch(this,"_changeState",
"ltr");var d=p.hitch(this,"_changeState","rtl");this.editor.addKeyHandler("9",1,0,c);this.editor.addKeyHandler("8",1,0,a);this.editor.addKeyHandler("0",1,0,d);for(c=0;c<b.length;c++)if(a=b[c])a.constructor===y?(a.destroy(),a=null,e=c):a.constructor===E?(this.editor._normalizeIndentOutdent=!0,this.editor._indentImpl=p.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=p.hitch(this,"_indentAndOutdent","outdent")):a.constructor===D&&"formatBlock"===a.command&&this.own(w.before(a.button,
"_execCommand",p.hitch(this,"_handleNoFormat")));this.editor.addPlugin({ctor:y,blockNodeForEnter:this.blockMode,blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI|DIV)$/},e);a=this.editor._plugins[e];this.own(w.after(a,"handleEnterKey",p.hitch(this,"_checkNewLine"),!0))}));this.own(w.after(this.editor,"onNormalizedDisplayChanged",p.hitch(this,"updateState"),!0))},_checkNewLine:function(){var a=u.getSelection(this.editor.window).getRangeAt(0),a=u.getBlockAncestor(a.startContainer,null,this.editor.editNode).blockNode;
a.innerHTML===this.bogusHtmlContent&&a.previousSibling?a.style.cssText=a.previousSibling.style.cssText:a.innerHTML!==this.bogusHtmlContent&&a.previousSibling&&a.previousSibling.innerHTML===this.bogusHtmlContent&&(a.previousSibling.style.cssText=a.style.cssText)},_handleNoFormat:function(a,b,c){return"noFormat"===c?[a,b,"DIV"]:arguments},_execNativeCmd:function(a,b,c){if(this._isSimpleInfo(c))return a=this.editor.document.execCommand(a,!1,b),m("webkit")&&r("table",this.editor.editNode).prev().forEach(function(b,
c,a){this._hasTag(b,"BR")&&b.parentNode.removeChild(b)},this),a;var h=u.getSelection(this.editor.window);if(!h||0==h.rangeCount)return!1;for(var e=h.getRangeAt(0),d=e.cloneRange(),k=e.startContainer,f=e.startOffset,g=e.endContainer,e=e.endOffset,l=0;l<c.groups.length;l++){var n=c.groups[l],p=n[n.length-1].childNodes.length;d.setStart(n[0],0);d.setEnd(n[n.length-1],p);h.removeAllRanges();h.addRange(d);p=this.editor.selection.getParentOfType(n[0],["TABLE"]);n=this.editor.document.execCommand(a,!1,b);
m("webkit")&&(p&&this._hasTag(p.previousSibling,"BR")&&p.parentNode.removeChild(p.previousSibling),this.editor.focus(),h=u.getSelection(this.editor.window),p=h.getRangeAt(0),0==l?(k=p.endContainer,f=p.endOffset):l==c.groups.length-1&&(g=p.endContainer,e=p.endOffset));if(!n)break;m("webkit")&&this._changeState(a)}h.removeAllRanges();try{d.setStart(k,f),d.setEnd(g,e),h.addRange(d)}catch(K){}return!0},_insertLists:function(a){var b=this._changeState("preparelists",a);if(!this._execNativeCmd(a,null,b))return!1;
m("webkit")&&!this._isSimpleInfo(b)||this._changeState(a);this._cleanLists();this._mergeLists();return!0},_indentAndOutdent:function(a){if(this.editor._normalizeIndentOutdent)return this._changeState("normalize"+a),!0;var b=this._changeState("prepare"+a);if(m("mozilla")){var c;try{c=this.editor.document.queryCommandValue("styleWithCSS")}catch(h){c=!1}this.editor.document.execCommand("styleWithCSS",!1,!0)}b=this._execNativeCmd(a,null,b);m("mozilla")&&this.editor.document.execCommand("styleWithCSS",
!1,c);if(!b)return!1;this._changeState(a);this._mergeLists();return!0},_formatBlocks:function(a){var b;if(m("mozilla")||m("webkit"))b=this._changeState("prepareformat",a);m("ie")&&a&&"\x3c"!=a.charAt(0)&&(a="\x3c"+a+"\x3e");if(!this._execNativeCmd("formatblock",a,b))return!1;m("webkit")&&!this._isSimpleInfo(b)||this._changeState("formatblock",a);this._mergeLists();return!0},_changeState:function(a,b){if(this.editor.window){this.editor.focus();var c=u.getSelection(this.editor.window);if(c&&0!=c.rangeCount){var h=
c.getRangeAt(0),e=h.cloneRange(),d,k,f;d=h.startContainer;c=h.startOffset;k=h.endContainer;f=h.endOffset;h=d===k&&c==f;if(this._isBlockElement(d)||this._hasTagFrom(d,this._tableContainers))for(;d.hasChildNodes();)c==d.childNodes.length&&c--,d=d.childNodes[c],c=0;e.setStart(d,c);d=this._getClosestBlock(d,"start",e);(c=u.getBlockAncestor(d,/li/i,this.editor.editNode).blockNode)&&c!==d&&(d=c);k=e.endContainer;f=e.endOffset;if(this._isBlockElement(k)||this._hasTagFrom(k,this._tableContainers))for(;k.hasChildNodes();)f==
k.childNodes.length&&f--,k=k.childNodes[f],f=k.hasChildNodes()?k.childNodes.length:3==k.nodeType&&k.nodeValue?k.nodeValue.length:0;e.setEnd(k,f);k=this._getClosestBlock(k,"end",e);(c=u.getBlockAncestor(k,/li/i,this.editor.editNode).blockNode)&&c!==k&&(k=c);c=u.getSelection(this.editor.window,!0);c.removeAllRanges();c.addRange(e);c=u.getCommonAncestor(d,k);d=this._changeStateOfBlocks(d,k,c,a,b,e);h&&(k=e.startContainer,f=e.startOffset,e.setEnd(k,f),c=u.getSelection(this.editor.window,!0),c.removeAllRanges(),
c.addRange(e));return d}}},_isBlockElement:function(a){if(!a||1!=a.nodeType)return!1;a=g.get(a,"display");return"block"==a||"list-item"==a||"table-cell"==a},_isInlineOrTextElement:function(a){return!this._isBlockElement(a)&&(1==a.nodeType||3==a.nodeType||8==a.nodeType)},_isElement:function(a){return a&&(1==a.nodeType||3==a.nodeType)},_isBlockWithText:function(a){return a!==this.editor.editNode&&this._hasTagFrom(a,this._lineTextArray)},_getBlockAncestor:function(a){for(;a.parentNode&&!this._isBlockElement(a);)a=
a.parentNode;return a},_getClosestBlock:function(a,b,c){if(this._isBlockElement(a))return a;var h=a.parentNode,e,d,k=!1;for(removeOffset=!1;;){for(var f=a,k=!1;this._isInlineOrTextElement(f)&&(e=f,d||(d=f)),f=f.previousSibling,f;)if(this._isBlockElement(f)||this._hasTagFrom(f,this._blockContainers)||this._hasTag(f,"BR")){k=!0;break}else if(3==f.nodeType&&3==f.nextSibling.nodeType&&(f.nextSibling.nodeValue=f.nodeValue+f.nextSibling.nodeValue,"start"==b&&f===c.startContainer?c.setStart(f.nextSibling,
0):"end"!=b||f!==c.endContainer&&f.nextSibling!==c.endContainer||c.setEnd(f.nextSibling,f.nextSibling.nodeValue.length),f=f.nextSibling,f.parentNode.removeChild(f.previousSibling),!f.previousSibling))break;for(f=a;this._isInlineOrTextElement(f)&&(e||(e=f),d=f),f=f.nextSibling,f;)if(this._isBlockElement(f)||this._hasTagFrom(f,this._blockContainers)){k=!0;break}else if(this._hasTag(f,"BR")&&f.nextSibling&&!this._isBlockElement(f.nextSibling)&&!this._hasTagFrom(f.nextSibling,this._blockContainers)){d=
f;k=!0;break}else if(3==f.nodeType&&3==f.previousSibling.nodeType&&(f.previousSibling.nodeValue+=f.nodeValue,"start"==b&&f===c.startContainer?c.setStart(f.previousSibling,0):"end"!=b||f!==c.endContainer&&f.previousSibling!==c.endContainer||c.setEnd(f.previousSibling,f.previousSibling.nodeValue.length),f=f.previousSibling,f.parentNode.removeChild(f.nextSibling),!f.nextSibling))break;if(k||this._isBlockElement(h)&&!this._isBlockWithText(h)&&e){a=c?c.startOffset:0;var k=c?c.endOffset:0,f=c?c.startContainer:
null,g=c?c.endContainer:null,h=this._repackInlineElements(e,d,h);b=h["start"==b?0:h.length-1];c&&b&&e===f&&this._hasTag(e,"BR")&&(f=b,a=0,d===e&&(g=f,k=0));c&&(c.setStart(f,a),c.setEnd(g,k));return b}if(this._isBlockElement(h))return h;a=h;removeOffset=!0;h=h.parentNode;e=d=null}},_changeStateOfBlocks:function(a,b,c,h,e,d){var k=[];if(a===this.editor.editNode){if(!a.hasChildNodes())return;this._isInlineOrTextElement(a.firstChild)&&this._rebuildBlock(a);a=this._getClosestBlock(a.firstChild,"start",
null)}if(b===this.editor.editNode){if(!b.hasChildNodes())return;this._isInlineOrTextElement(b.lastChild)&&this._rebuildBlock(b);b=this._getClosestBlock(b.lastChild,"end",null)}var f=d?d.startOffset:0,g=d?d.endOffset:0,m=d?d.startContainer:null,l=d?d.endContainer:null;a=this._collectNodes(a,b,c,d,k,m,f,l,g,h);k={nodes:k,groups:a.groups,cells:a.cells};h=h.toString();switch(h){case "mirror":case "ltr":case "rtl":case "left":case "right":case "center":case "explicitdir":this._execDirAndAlignment(k,h,
e);break;case "preparelists":this._prepareLists(k,e);break;case "insertorderedlist":case "insertunorderedlist":this._execInsertLists(k);break;case "prepareoutdent":this._prepareOutdent(k);break;case "prepareindent":this._prepareIndent(k);break;case "indent":this._execIndent(k);break;case "outdent":this._execOutdent(k);break;case "normalizeindent":this._execNormalizedIndent(k);break;case "normalizeoutdent":this._execNormalizedOutdent(k);break;case "prepareformat":this._prepareFormat(k,e);break;case "formatblock":this._execFormatBlocks(k,
e)}d&&(d.setStart(m,f),d.setEnd(l,g),sel=u.getSelection(this.editor.window,!0),sel.removeAllRanges(),sel.addRange(d),this.editor.onDisplayChanged());return k},_collectNodes:function(a,b,c,h,e,d,k,f,g,l){h=a.parentNode;f=[];var n,t=[],v=[],r=[],q=this.editor.editNode;d=p.hitch(this,function(b){e.push(b);var c=this.editor.selection.getParentOfType(b,["TD"]);if(q!==c||m("webkit")&&("prepareformat"===l||"preparelists"===l))v.length&&t.push(v),v=[],q!=c&&(q=c)&&r.push(q);v.push(b)});for(this._rebuildBlock(h);;){if(this._hasTagFrom(a,
this._tableContainers)){if(a.firstChild){h=a;a=a.firstChild;continue}}else if(this._isBlockElement(a)){if((k=u.getBlockAncestor(a,/li/i,this.editor.editNode).blockNode)&&k!==a){a=k;h=a.parentNode;continue}if(!this._hasTag(a,"LI")&&a.firstChild&&(this._rebuildBlock(a),this._isBlockElement(a.firstChild)||this._hasTagFrom(a.firstChild,this._tableContainers))){h=a;a=a.firstChild;continue}this._hasTagFrom(a,this._lineTextArray)&&d(a)}else if(this._isInlineOrTextElement(a)&&!this._hasTagFrom(a.parentNode,
this._tableContainers)){for(f=a;a;){k=a.nextSibling;if(this._isInlineOrTextElement(a)){if(n=a,this._hasTag(a,"BR")&&(!this._isBlockElement(h)||a!==h.lastChild)){f=this._repackInlineElements(f,n,h);a=f[f.length-1];for(g=0;g<f.length;g++)d(f[g]);f=n=null;k&&this._isInlineOrTextElement(k)&&(f=k)}}else if(this._isBlockElement(a))break;a=k}if(!f)continue;f=this._repackInlineElements(f,n,h);a=f[f.length-1];for(g=0;g<f.length;g++)d(f[g])}if(a===b)break;if(a.nextSibling)a=a.nextSibling;else if(h!==c){for(;!h.nextSibling&&
(a=h,h=a.parentNode,h!==c););if(h!==c&&h.nextSibling)a=h.nextSibling,h=h.parentNode;else break}else break}v.length&&(m("webkit")||q?t.push(v):t.unshift(v));return{groups:t,cells:r}},_execDirAndAlignment:function(a,b,c){switch(b){case "mirror":case "ltr":case "rtl":q.forEach(a.nodes,function(c){var a=g.getComputedStyle(c),h=a.direction,k="mirror"!=b?b:"ltr"==h?"rtl":"ltr",f=a.textAlign,n=isNaN(parseInt(a.marginLeft))?0:parseInt(a.marginLeft),a=isNaN(parseInt(a.marginRight))?0:parseInt(a.marginRight);
l.remove(c,"dir");l.remove(c,"align");g.set(c,{direction:k,textAlign:""});if(!this._hasTag(c,"CENTER"))if(0<=f.indexOf("center")&&g.set(c,"textAlign","center"),this._hasTag(c,"LI")){this._refineLIMargins(c);var n="rtl"===h?a:n,a=0,p=c.parentNode;if(h!=g.get(p,"direction")){for(;p!==this.editor.editNode;)this._hasTagFrom(p,["OL","UL"])&&a++,p=p.parentNode;n-=this._getMargins(a)}h="rtl"==k?"marginRight":"marginLeft";a=g.get(c,h);a=isNaN(a)?0:parseInt(a);g.set(c,h,""+(a+n)+"px");m("webkit")?0>f.indexOf("center")&&
g.set(c,"textAlign","rtl"==k?"right":"left"):c.firstChild&&c.firstChild.tagName&&this._hasTagFrom(c.firstChild,this._lineStyledTextArray)&&(a=g.getComputedStyle(c),f=this._refineAlignment(a.direction,a.textAlign),m("mozilla")?g.set(c.firstChild,{textAlign:f}):g.set(c.firstChild,{direction:k,textAlign:f}))}else"rtl"==k&&0!=n?g.set(c,{marginLeft:"",marginRight:""+n+"px"}):"ltr"==k&&0!=a&&g.set(c,{marginRight:"",marginLeft:""+a+"px"})},this);r("table",this.editor.editNode).forEach(function(c,e,d){e=
b;"mirror"===b&&(e="ltr"===g.get(c,"direction")?"rtl":"ltr");d=r("td",c);for(var h=!1,f=!1,l=0;l<a.cells.length;l++)if(!h&&d[0]===a.cells[l])h=!0;else if(d[d.length-1]===a.cells[l]){f=!0;break}if(h&&f)for(g.set(c,"direction",e),l=0;l<d.length;l++)g.set(d[l],"direction",e)},this);break;case "left":case "right":case "center":q.forEach(a.nodes,function(c){if(!this._hasTag(c,"CENTER")&&(l.remove(c,"align"),g.set(c,"textAlign",b),this._hasTag(c,"LI")&&c.firstChild&&c.firstChild.tagName&&this._hasTagFrom(c.firstChild,
this._lineStyledTextArray))){var a=g.getComputedStyle(c),a=this._refineAlignment(a.direction,a.textAlign);g.set(c.firstChild,"textAlign",a)}},this);break;case "explicitdir":q.forEach(a.nodes,function(b){var c=g.getComputedStyle(b).direction;l.remove(b,"dir");g.set(b,{direction:c})},this)}},_prepareLists:function(a,b){q.forEach(a.nodes,function(c,a,e){if(m("mozilla")||m("webkit")){m("mozilla")&&(a=this._getParentFrom(c,["TD"]))&&0==r("div[tempRole]",a).length&&n.create("div",{innerHTML:"\x3cspan tempRole\x3d'true'\x3e"+
this.bogusHtmlContent+"\x3c/span",tempRole:"true"},a);a=this._tag(c);var h;if(m("webkit")&&this._hasTagFrom(c,this._lineStyledTextArray)||this._hasTag(c,"LI")&&this._hasStyledTextLineTag(c.firstChild)){h=this._hasTag(c,"LI")?this._tag(c.firstChild):a;if(this._hasTag(c,"LI")){for(;c.firstChild.lastChild;)n.place(c.firstChild.lastChild,c.firstChild,"after");c.removeChild(c.firstChild)}h=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:h},c,"first")}if(m("webkit")||"DIV"==a||"P"==a||"LI"==
a)if(m("webkit")&&this._isListTypeChanged(c,b)&&c===c.parentNode.lastChild&&n.create("li",{tempRole:"true"},c,"after"),!("LI"==a&&c.firstChild&&c.firstChild.tagName&&this._hasTagFrom(c.firstChild,this._lineStyledTextArray))){var k=g.getComputedStyle(c);e=k.direction;var k=k.textAlign,k=this._refineAlignment(e,k),f=this._getLIIndent(c),f=0==f?"":""+f+"px";m("webkit")&&"LI"==a&&g.set(c,"textAlign","");c=h?c.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},c,"first");l.set(c,"bogusDir",e);
""!=k&&l.set(c,"bogusAlign",k);f&&l.set(c,"bogusMargin",f)}}else if(m("ie")&&this._hasTag(c,"LI")&&(g.getComputedStyle(c),g.set(c,"marginRight",""),g.set(c,"marginLeft",""),1==this._getLILevel(c)&&!this._isListTypeChanged(c,cmd)&&(c.firstChild&&this._hasTagFrom(c.firstChild,["P","PRE"])&&n.create("span",{bogusIEFormat:this._tag(c.firstChild)},c.firstChild,"first"),this._hasTag(c.firstChild,"PRE")))){for(h=n.create("p",null,c.firstChild,"after");c.firstChild.firstChild;)n.place(c.firstChild.firstChild,
h,"last");h.style.cssText=c.style.cssText;c.removeChild(c.firstChild)}},this);m("webkit")&&r("table",this.editor.editNode).forEach(function(b,a,e){(a=b.nextSibling)&&this._hasTagFrom(a,["UL","OL"])&&n.create("UL",{tempRole:"true"},b,"after")},this)},_execInsertLists:function(a){q.forEach(a.nodes,function(b,c){if(this._hasTag(b,"LI")){if(b.firstChild&&b.firstChild.tagName&&this._hasTagFrom(b.firstChild,this._lineStyledTextArray)){var a=g.getComputedStyle(b.firstChild),e=this._refineAlignment(a.direction,
a.textAlign);g.set(b,{direction:a.direction,textAlign:e});var d=this._getIntStyleValue(b,"marginLeft")+this._getIntStyleValue(b.firstChild,"marginLeft"),k=this._getIntStyleValue(b,"marginRight")+this._getIntStyleValue(b.firstChild,"marginRight");g.set(b,{marginLeft:d?""+d+"px":"",marginRight:k?""+k+"px":""});g.set(b.firstChild,{direction:"",textAlign:""});m("mozilla")||g.set(b.firstChild,{marginLeft:"",marginRight:""})}for(;1<b.childNodes.length&&3==b.lastChild.nodeType&&b.lastChild.previousSibling&&
3==b.lastChild.previousSibling.nodeType&&""==p.trim(b.lastChild.nodeValue);)b.removeChild(b.lastChild);if(m("safari")&&this._hasTag(b.firstChild,"SPAN")&&B.contains(b.firstChild,"Apple-style-span")&&(d=b.firstChild,this._hasTag(d.firstChild,"SPAN")&&l.has(d.firstChild,"bogusFormat"))){for(;d.lastChild;)n.place(d.lastChild,d,"after");b.removeChild(d)}}else if(this._hasTag(b,"DIV")&&0==b.childNodes.length){b.parentNode.removeChild(b);return}if(m("ie")){if(this._hasTag(b,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(b.firstChild,
"SPAN")&&l.has(b.firstChild,"bogusIEFormat")){"PRE"===l.get(b.firstChild,"bogusIEFormat").toUpperCase()?(d=n.create("pre",{innerHTML:b.innerHTML},b,"before"),d.style.cssText=b.style.cssText,d.removeChild(d.firstChild),b.parentNode.removeChild(b)):b.removeChild(b.firstChild);return}d=n.create("div");d.style.cssText=b.style.cssText;for(b.parentNode.insertBefore(d,b);b.firstChild;)d.appendChild(b.firstChild);b.parentNode.removeChild(b)}if(!this._hasTag(b,"LI"))return;this._refineLIMargins(b);d=b.firstChild;
if(!this._hasTag(d,"DIV")||d!==b.lastChild)return;var a=g.getComputedStyle(d),f=a.direction,e=a.textAlign;g.getComputedStyle(b);g.set(b,"direction",f);e=this._refineAlignment(f,e);for(g.set(b,"textAlign",e);d.firstChild;)b.insertBefore(d.firstChild,d);b.removeChild(d)}else if(!this._hasTag(b.firstChild,"SPAN")){this._hasTag(b,"LI")&&(this._refineLIMargins(b),m("mozilla")&&this._hasStyledTextLineTag(b.firstChild)&&this._recountLIMargins(b));return}var t=!1,v=d=!1,k=0;l.has(b.firstChild,"bogusDir")&&
(t=!0,f=l.get(b.firstChild,"bogusDir"),g.set(b,"direction",f));if(l.has(b.firstChild,"bogusAlign")&&(v=t=!0,e=l.get(b.firstChild,"bogusAlign"),g.set(b,"textAlign",e),a=b.firstChild.nextSibling,this._hasTag(a,"SPAN")&&g.get(a,"textAlign")===e&&(g.set(a,"textAlign",""),""==a.style.cssText))){for(;a.lastChild;)n.place(a.lastChild,a,"after");b.removeChild(a)}l.has(b.firstChild,"bogusMargin")&&(d=t=!0,k=parseInt(l.get(b.firstChild,"bogusMargin")),this._hasTag(b,"LI")||(a="rtl"===g.get(b,"direction")?"marginRight":
"marginLeft",e=this._getIntStyleValue(b,a)+k,g.set(b,a,0==e?"":""+e+"px")));if(l.has(b.firstChild,"bogusFormat")){t=!1;l.remove(b.firstChild,"bogusDir");if(b.firstChild.nextSibling&&this._hasTag(b.firstChild.nextSibling,"SPAN")){for(var e=b.firstChild.style.cssText.trim().split(";"),f=b.firstChild.nextSibling.style.cssText.trim().split(";"),q=0;q<e.length;q++)if(e[q])for(a=0;a<f.length;a++)if(e[q].trim()==f[a].trim()){a=e[q].trim().split(":")[0];g.set(b.firstChild.nextSibling,a,"");break}if(""===
b.firstChild.nextSibling.style.cssText){for(;b.firstChild.nextSibling.firstChild;)n.place(b.firstChild.nextSibling.firstChild,b.firstChild.nextSibling,"after");b.removeChild(b.firstChild.nextSibling)}}a=l.get(b.firstChild,"bogusFormat");for(e=n.create(a,null,b.firstChild,"after");e.nextSibling;)n.place(e.nextSibling,e,"last");b.removeChild(b.firstChild);m("webkit")&&this._hasTag(b,"LI")&&(f=b.parentNode.parentNode,this._hasTag(f,a)&&l.set(f,"tempRole","true"));1!=b.childNodes.length||this._hasTag(b,
"TD")||(m("mozilla")||this._hasTag(b,"LI")?this._hasTag(b,"LI")||(e.style.cssText=b.style.cssText,n.place(e,b,"after"),l.set(b,"tempRole","true")):(e.style.cssText=b.style.cssText,l.set(b,"tempRole","true")))}t&&b.removeChild(b.firstChild);this._hasTag(b,"LI")&&(m("webkit")&&!v&&"center"!=g.get(b,"textAlign")&&g.set(b,"textAlign","rtl"==g.get(b,"direction")?"right":"left"),m("safari")&&this._hasTag(b,"DIV")&&(b.innerHTML=b.nextSibling.innerHTML,b.parentNode.removeChild(b.nextSibling)),t=b.parentNode.parentNode,
t!==this.editor.editNode&&this._hasTag(t,"DIV")&&1==t.childNodes.length&&(t.parentNode.insertBefore(b.parentNode,t),t.parentNode.removeChild(t)),this._refineLIMargins(b),d&&this._recountLIMargins(b,k))},this);m("mozilla")?r("*[tempRole]",this.editor.editNode).forEach(function(b,a,h){if(this._hasTag(b,"SPAN")){if(l.get(b.parentNode,"tempRole"))return;if(this._hasTag(b.parentNode,"LI")){b.parentNode.parentNode.removeChild(b.parentNode);return}}b.parentNode.removeChild(b)},this):m("webkit")&&r("*[tempRole]",
this.editor.editNode).forEach(function(b,a,h){if(!this._hasTag(b,"LI")&&!this._hasTag(b,"UL")){for(;b.lastChild;)n.place(b.lastChild,b,"after");b.parentNode.removeChild(b)}},this)},_execNormalizedIndent:function(a){q.forEach(a.nodes,function(b){var a="rtl"===g.get(b,"direction")?"marginRight":"marginLeft",h=g.get(b,a),h=isNaN(h)?0:parseInt(h);g.set(b,a,""+(h+this._indentBy)+"px")},this)},_execNormalizedOutdent:function(a){q.forEach(a.nodes,function(b){var a="rtl"===g.get(b,"direction")?"marginRight":
"marginLeft",h=g.get(b,a),h=isNaN(h)?0:parseInt(h),e=0;if("LI"===b.tagName.toUpperCase()){var d=0,k=b.parentNode;if(g.get(b,"direction")!=g.get(k,"direction")){for(;k!==this.editor.editNode;)this._hasTagFrom(k,["OL","UL"])&&d++,k=k.parentNode;e=this._getMargins(d)}}h>=this._indentBy+e&&g.set(b,a,h==this._indentBy?"":""+(h-this._indentBy)+"px")},this)},_prepareIndent:function(a){q.forEach(a.nodes,function(b){if(m("mozilla")){var a=this._getParentFrom(b,["TD"]);a&&0==r("div[tempRole]",a).length&&n.create("div",
{innerHTML:this.bogusHtmlContent,tempRole:"true"},a);this._hasTag(b,"LI")&&(a=this._getLIIndent(b),l.set(b,"tempIndent",a))}if(m("webkit")&&this._hasTag(b,"LI")&&this._hasStyledTextLineTag(b.firstChild)){for(a=this._tag(b.firstChild);b.firstChild.lastChild;)n.place(b.firstChild.lastChild,b.firstChild,"after");b.removeChild(b.firstChild);n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:a},b,"first")}},this)},_prepareOutdent:function(a){q.forEach(a.nodes,function(b){if(m("mozilla")||m("webkit")){if(m("mozilla")){var a=
this._getParentFrom(b,["TD"]);a&&0==r("div[tempRole]",a).length&&n.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},a)}a=this._tag(b);if(m("mozilla")&&"LI"!==a)return;var h=null;if(m("webkit")&&this._hasTag(b,"LI")&&this._hasStyledTextLineTag(b.firstChild)){for(var a=this._tag(b.firstChild),e=b.firstChild;e.lastChild;)n.place(e.lastChild,e,"after");b.removeChild(b.firstChild);h=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:a},b,"first")}if(b.firstChild&&b.firstChild.tagName&&
this._hasTagFrom(b.firstChild,this._lineStyledTextArray)){m("mozilla")&&(b.firstChild.style.cssText=b.style.cssText,a="rtl"===g.get(b,"direction")?"marginRight":"marginLeft",e=this._getLIIndent(b),0<e&&g.set(b.firstChild,a,""+e+"px"));return}var d=g.getComputedStyle(b),e=d.direction,d=d.textAlign,d=this._refineAlignment(e,d);m("webkit")&&"LI"==a&&g.set(b,"textAlign","");a=h?b.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},b,"first");l.set(a,"bogusDir",e);""!=d&&l.set(a,"bogusAlign",
d);m("mozilla")&&(e=this._getLIIndent(b),l.set(a,"bogusIndent",e))}if(m("ie")&&"LI"==b.tagName.toUpperCase()&&(g.set(b,"marginLeft",""),g.set(b,"marginRight",""),1==this._getLILevel(b)&&(b.firstChild&&this._hasTagFrom(b.firstChild,["P","PRE"])&&n.create("span",{bogusIEFormat:this._tag(b.firstChild)},b.firstChild,"first"),this._hasTag(b.firstChild,"PRE")))){for(a=n.create("p",null,b.firstChild,"after");b.firstChild.firstChild;)n.place(b.firstChild.firstChild,a,"last");a.style.cssText=b.style.cssText;
b.removeChild(b.firstChild)}},this)},_execIndent:function(a){q.forEach(a.nodes,function(b){m("mozilla")||g.set(b,"margin","");if(this._hasTag(b,"LI")){var a=0;m("mozilla")&&l.has(b,"tempIndent")&&(a=parseInt(l.get(b,"tempIndent")),l.remove(b,"tempIndent"));this._refineLIMargins(b);m("mozilla")&&this._recountLIMargins(b,a)}if(l.has(b.firstChild,"bogusFormat")){a=l.get(b.firstChild,"bogusFormat");for(a=n.create(a,null,b.firstChild,"after");a.nextSibling;)n.place(a.nextSibling,a,"last");b.removeChild(b.firstChild)}if(m("ie")||
m("webkit"))for(b=b.parentNode;b!==this.editor.editNode;){b=u.getBlockAncestor(b,/blockquote/i,this.editor.editNode).blockNode;if(!b)break;l.has(b,"dir")&&l.remove(b,"dir");g.set(b,"marginLeft","");g.set(b,"marginRight","");g.set(b,"margin","");b=b.parentNode}},this);m("mozilla")&&(r("div[tempRole]",this.editor.editNode).forEach(function(a,c,h){a.parentNode.removeChild(a)}),r("ul,ol",this.editor.editNode).forEach(function(a,c,h){g.set(a,"marginLeft","");g.set(a,"marginRight","")}))},_execOutdent:function(a){q.forEach(a.nodes,
function(a){if(m("mozilla")||m("webkit")){if(!this._hasTag(a.firstChild,"SPAN")){this._hasTag(a,"LI")&&(this._refineLIMargins(a),m("mozilla")&&this._hasStyledTextLineTag(a.firstChild)&&(this._recountLIMargins(a),a.firstChild.style.cssText=""));return}var b=!1,h=!1,e=0;if(l.has(a.firstChild,"bogusDir")){var b=!0,d=l.get(a.firstChild,"bogusDir");g.set(a,"direction",d)}l.has(a.firstChild,"bogusAlign")&&(b=!0,d=l.get(a.firstChild,"bogusAlign"),g.set(a,"textAlign",d));if(l.has(a.firstChild,"bogusIndent")&&
(b=!0,e=parseInt(l.get(a.firstChild,"bogusIndent")),!this._hasTag(a,"LI"))){var d="rtl"===g.get(a,"direction")?"marginRight":"marginLeft",k=""+(this._getIntStyleValue(a,d)+e)+"px";g.set(a,d,k)}if(l.has(a.firstChild,"bogusFormat")){b=!0;d=l.get(a.firstChild,"bogusFormat");for(d=n.create(d,null,a.firstChild,"after");d.nextSibling;)n.place(d.nextSibling,d,"last");this._hasTag(a,"LI")||(d.style.cssText=a.style.cssText,h=!0)}if(b&&(a.removeChild(a.firstChild),h)){for(;a.lastChild;)n.place(a.lastChild,
a,"after");l.set(a,"tempRole","true")}m("webkit")&&this._hasTag(a,"LI")&&"center"!=g.get(a,"textAlign")&&g.set(a,"textAlign","rtl"==g.get(a,"direction")?"right":"left");m("mozilla")&&this._hasTag(a,"LI")&&(b=a.parentNode.parentNode,b!==this.editor.editNode&&this._hasTag(b,"DIV")&&1==b.childNodes.length&&(b.parentNode.insertBefore(a.parentNode,b),b.parentNode.removeChild(b)))}if(m("ie")&&this._hasTag(a,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(a.firstChild,"SPAN")&&l.has(a.firstChild,
"bogusIEFormat")){"PRE"===l.get(a.firstChild,"bogusIEFormat").toUpperCase()?(e=n.create("pre",{innerHTML:a.innerHTML},a,"before"),e.style.cssText=a.style.cssText,e.removeChild(e.firstChild),a.parentNode.removeChild(a)):a.removeChild(a.firstChild);return}b=n.create("div");b.style.cssText=a.style.cssText;for(a.parentNode.insertBefore(b,a);a.firstChild;)b.appendChild(a.firstChild);a.parentNode.removeChild(a)}this._hasTag(a,"LI")&&(this._refineLIMargins(a),m("mozilla")&&this._recountLIMargins(a,e))},
this);(m("mozilla")||m("webkit"))&&r("div[tempRole]",this.editor.editNode).forEach(function(a,c,h){a.parentNode.removeChild(a)})},_prepareFormat:function(a,b){q.forEach(a.nodes,function(a){if(m("mozilla")&&this._hasTag(a,"LI")){if(a.firstChild&&!this._isBlockElement(a.firstChild)){var c=a.ownerDocument.createElement(b),e=a.firstChild;for(a.insertBefore(c,a.firstChild);e;)c.appendChild(e),e=e.nextSibling}c=this._getLIIndent(a);l.set(a,"tempIndent",c)}if(m("webkit")){var d;if(this._hasTag(a,"LI")){if(this._hasStyledTextLineTag(a.firstChild)){for(;a.firstChild.lastChild;)n.place(a.firstChild.lastChild,
a.firstChild,"after");a.removeChild(a.firstChild)}d=n.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:b},a,"first")}e=g.getComputedStyle(a);c=e.direction;e=e.textAlign;e=this._refineAlignment(c,e);a=d?a.firstChild:n.create("span",{innerHTML:this.bogusHtmlContent},a,"first");l.set(a,"bogusDir",c);""!=e&&l.set(a,"bogusAlign",e)}},this)},_execFormatBlocks:function(a,b){q.forEach(a.nodes,function(a){if(this._hasTagFrom(a,this._lineTextArray)){if(this._hasTag(a.parentNode,"DIV")&&a.parentNode!==
this.editor.editNode)for(;a.parentNode.lastChild&&(3==a.parentNode.lastChild.nodeType&&""==p.trim(a.parentNode.lastChild.nodeValue)||this._hasTag(a.parentNode.lastChild,"BR"));)a.parentNode.removeChild(a.parentNode.lastChild);if(this._hasTag(a.parentNode,"DIV")&&a.parentNode!==this.editor.editNode&&1==a.parentNode.childNodes.length){var c=a.parentNode,e=g.getComputedStyle(c),d=this._refineAlignment(e.direction,e.textAlign);g.set(a,{direction:e.direction,textAlign:d});d="rtl"===e.direction?"marginRight":
"marginLeft";e=parseInt(g.get(c,d));0==e||isNan(e)||g.set(a,d,e);c.parentNode.insertBefore(a,c);c.parentNode.removeChild(c)}}if(this._hasTag(a,"LI")){c=0;l.has(a,"tempIndent")&&(c=parseInt(l.get(a,"tempIndent")),l.remove(a,"tempIndent"));this._refineLIMargins(a);for(c&&this._recountLIMargins(a,c);1<a.childNodes.length&&3==a.lastChild.nodeType&&""==p.trim(a.lastChild.nodeValue);)a.removeChild(a.lastChild);if(this._hasTagFrom(a.firstChild,this._lineStyledTextArray))e=g.getComputedStyle(a),d=this._refineAlignment(e.direction,
e.textAlign),m("mozilla")||m("ie")&&this._hasTag(a,"LI")||g.set(a.firstChild,{direction:e.direction,textAlign:d});else if(this._hasTag(a.firstChild,"DIV")){for(c=a.firstChild;c.firstChild;)a.insertBefore(c.firstChild,c);a.removeChild(c)}if(m("ie")&&!this._hasTag(a.firstChild,"P")&&"\x3cp\x3e"===b){c=n.create("p");for(d=this._hasTagFrom(c.nextSibling,this._lineStyledTextArray)?c.nextSibling:a;d.firstChild;)n.place(d.firstChild,c,"last");n.place(c,a,"first");d!==a&&a.removeChild(d)}}if(m("webkit")){if(this._hasTag(a,
"DIV")){if(l.has(a,"tempRole"))return;if(this._hasTag(a.previousSibling,"LI")){for(;a.firstChild;)n.place(a.firstChild,a.previousSibling,"last");l.set(a,"tempRole",!0);a=a.previousSibling}}c=!1;l.has(a.firstChild,"bogusDir")&&(c=!0,d=l.get(a.firstChild,"bogusDir"),g.set(a,"direction",d));l.has(a.firstChild,"bogusAlign")&&(c=!0,d=l.get(a.firstChild,"bogusAlign"),g.set(a,"textAlign",d));if(l.has(a.firstChild,"bogusFormat")){var c=!0,k=l.get(a.firstChild,"bogusFormat");if("DIV"!==k.toUpperCase())for(d=
n.create(k,null,a.firstChild,"after");d.nextSibling;)n.place(d.nextSibling,d,"last");else d=a;if(m("safari")&&this._hasTag(a.nextSibling,"DIV")){for(;a.nextSibling.firstChild;)n.place(a.nextSibling.firstChild,d,"last");l.set(a.nextSibling,"tempRole","true")}}c&&a.removeChild(a.firstChild);k&&this._hasTag(a,"LI")&&(a=a.parentNode.parentNode,this._hasTag(a,k)&&l.set(a,"tempRole","true"))}},this);m("webkit")&&r("*[tempRole]",this.editor.editNode).forEach(function(a,b,e){for(;a.lastChild;)n.place(a.lastChild,
a,"after");a.parentNode.removeChild(a)},this)},_rebuildBlock:function(a){for(var b=a.firstChild,c,g,e=!1;b;){if(this._isInlineOrTextElement(b)&&!this._hasTagFrom(b,this._tableContainers))e=!this._hasTagFrom(a,this._lineTextArray),c||(c=b),g=b;else if(this._isBlockElement(b)||this._hasTagFrom(b,this._tableContainers))c&&(this._repackInlineElements(c,g,a),c=null),e=!0;b=b.nextSibling}e&&c&&this._repackInlineElements(c,g,a)},_repackInlineElements:function(a,b,c){var h=[],e=c.ownerDocument.createElement(this.blockMode),
d,k=a.previousSibling&&1==a.previousSibling.nodeType?a.previousSibling.style.cssText:c.style.cssText,f=c===this.editor.editNode;h.push(e);a=c.replaceChild(e,a);n.place(a,e,"after");for(f?g.set(e,"direction",g.get(this.editor.editNode,"direction")):e.style.cssText=k;a;){var l=a.nextSibling;this._isInlineOrTextElement(a)&&(this._hasTag(a,"BR")&&a!==b&&(d=c.ownerDocument.createElement(this.blockMode),h.push(d),a=c.replaceChild(d,a),n.place(a,d,"after"),f?g.set(d,"direction",g.get(this.editor.editNode,
"direction")):d.style.cssText=k),!this._hasTag(a,"BR")&&8!=a.nodeType||e.hasChildNodes()||(e.innerHTML=this.bogusHtmlContent),this._hasTag(a,"BR")&&m("ie")?a.parentNode.removeChild(a):8!=a.nodeType?e.appendChild(a):a.parentNode.removeChild(a),3==a.nodeType&&a.previousSibling&&3==a.previousSibling.nodeType&&(a.previousSibling.nodeValue+=a.nodeValue,a.parentNode.removeChild(a)),d&&(e=d,d=null));if(a===b)break;a=l}return h},_preFilterNewLines:function(a){a=a.split(/(<\/?pre.*>)/i);for(var b=!1,c=0;c<
a.length;c++)0>a[c].search(/<\/?pre/i)&&!b?a[c]=a[c].replace(/\n/g,"").replace(/\t+/g,"\u00a0").replace(/^\s+/,"\u00a0").replace(/\xA0\xA0+$/,""):0<=a[c].search(/<\/?pre/i)&&(b=!b);return a.join("")},_refineAlignment:function(a,b){return b=0<=b.indexOf("left")&&"rtl"==a?"left":0<=b.indexOf("right")&&"ltr"==a?"right":0<=b.indexOf("center")?"center":""},_refineLIMargins:function(a){var b=g.get(a,"direction"),c=g.get(a.parentNode,"direction"),h=0,e=a.parentNode;for(m("webkit")&&(c=g.get(this.editor.editNode,
"direction"));e!==this.editor.editNode;)this._hasTagFrom(e,["OL","UL"])&&h++,e=e.parentNode;g.set(a,"marginRight","");g.set(a,"marginLeft","");e="rtl"==b?"marginRight":"marginLeft";h=this._getMargins(h);b!=c&&g.set(a,e,""+h+"px")},_getMargins:function(a){if(0==a)return 0;var b=35;m("mozilla")?b=45:m("ie")&&(b=25);return b+40*(a-1)},_recountLIMargins:function(a,b){var c=g.get(a,"direction"),h=g.get(a.parentNode,"direction"),e="rtl"==c?"marginRight":"marginLeft",d=g.get(a,e),k=(isNaN(parseInt(d))?0:
parseInt(d))+(b?b:0);a.firstChild&&1==a.firstChild.nodeType&&(d=g.get(a.firstChild,e),k+=isNaN(parseInt(d))?0:parseInt(d),g.set(a.firstChild,{marginLeft:"",marginRight:""}));c!=h&&(k-=this._getMargins(this._getLILevel(a)));if(d=this._getListMargins(a))for(var f=0;f<d/40;f++){var l=n.create(this._tag(a.parentNode),null,a,"before");n.place(a,l,"last")}c!=h&&(k+=this._getMargins(this._getLILevel(a)));k&&g.set(a,e,""+k+"px")},_getLILevel:function(a){a=a.parentNode;for(var b=0;this._hasTagFrom(a,["UL",
"OL"]);)b++,a=a.parentNode;return b},_getLIIndent:function(a){var b=a.parentNode,c=g.get(a,"direction"),h=g.get(b,"direction"),b=this._getIntStyleValue(a,"rtl"===c?"marginRight":"marginLeft");a=c===h?0:this._getMargins(this._getLILevel(a));return b-a},_getListMargins:function(a){a=a.parentNode;for(var b,c=0;this._hasTagFrom(a,["UL","OL"]);)b="rtl"==g.get(a,"direction")?"marginRight":"marginLeft",b=g.get(a,b),c+=isNaN(parseInt(b))?0:parseInt(b),a=a.parentNode;return c},_tag:function(a){return a&&a.tagName&&
a.tagName.toUpperCase()},_hasTag:function(a,b){return a&&b&&a.tagName&&a.tagName.toUpperCase()===b.toUpperCase()},_hasStyledTextLineTag:function(a){return this._hasTagFrom(a,this._lineStyledTextArray)},_hasTagFrom:function(a,b){return a&&b&&a.tagName&&0<=q.indexOf(b,a.tagName.toUpperCase())},_getParentFrom:function(a,b){if(!a||!b||!b.length)return null;for(var c=a;c!==this.editor.editNode;){if(this._hasTagFrom(c,b))return c;c=c.parentNode}return null},_isSimpleInfo:function(a){return!a||2>a.groups.length},
_isListTypeChanged:function(a,b){if(!this._hasTag(a,"LI"))return!1;var c=a.parentNode;return this._hasTag(c,"UL")&&"insertorderedlist"===b||this._hasTag(c,"OL")&&"insertunorderedlist"===b},_getIntStyleValue:function(a,b){var c=parseInt(g.get(a,b));return isNaN(c)?0:c},_mergeLists:function(){var a=u.getSelection(this.editor.window),b=a&&0<a.rangeCount;if(b)var c=a.getRangeAt(0).cloneRange(),g=c.startContainer,e=c.startOffset,d=c.endContainer,k=c.endOffset;var f=!1;r("ul,ol",this.editor.editNode).forEach(function(a,
b,c){if(l.has(a,"tempRole"))a.parentNode.removeChild(a);else for(b=a.nextSibling;this._hasTag(b,this._tag(a));){for(;b.firstChild;)n.place(b.firstChild,a,"last"),f=!0;l.set(b,"tempRole","true");b=b.nextSibling}},this);if(b&&f){a.removeAllRanges();try{c.setStart(g,e),c.setEnd(d,k),a.addRange(c)}catch(t){}}},_cleanLists:function(){m("webkit")&&(r("table",this.editor.editNode).forEach(function(a,b,c){a=a.nextSibling;this._hasTag(a,"UL")&&"true"===l.get(a,"tempRole")&&a.parentNode.removeChild(a)},this),
r("li[tempRole]",this.editor.editNode).forEach(function(a,b,c){1==a.parentNode.childNodes.length?a.parentNode.parentNode.removeChild(a.parentNode):a.parentNode.removeChild(a)}));var a=u.getSelection(this.editor.window),b=a&&0<a.rangeCount;if(b)var c=a.getRangeAt(0).cloneRange(),g=c.startContainer,e=c.startOffset,d=c.endContainer,k=c.endOffset;var f=!1;r("span[bogusDir]",this.editor.editNode).forEach(function(a,b,c){c=b=a.firstChild;if(1==b.nodeType)for(;b;)c=b.nextSibling,n.place(b,a,"after"),f=!0,
b=c;a.parentNode.removeChild(a)},this);if(b&&f){a.removeAllRanges();try{c.setStart(g,e),c.setEnd(d,k),a.addRange(c)}catch(t){}}}});x.registry.bidiSupport=x.registry.bidisupport=function(a){return new z({})};return z});
//# sourceMappingURL=BidiSupport.js.map