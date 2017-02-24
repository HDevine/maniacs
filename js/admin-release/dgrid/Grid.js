//>>built
define("dgrid/Grid","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has put-selector/put ./List ./util/misc dojo/_base/sniff".split(" "),function(x,h,y,m,g,B,r){function p(a,b){b&&b.nodeType&&a.appendChild(b)}function z(a,b,c,e){if(this.formatter){e=this.formatter;var d=this.grid.formatterScope;c.innerHTML="string"===typeof e&&d?d[e](b,a):this.formatter(b,a)}else null!=b&&c.appendChild(document.createTextNode(b))}var A=8>m("ie")&&!m("quirks");h=h(B,{columns:null,cellNavigation:!0,tabableHeader:!0,
showHeader:!0,column:function(a){return"object"!=typeof a?this.columns[a]:this.cell(a).column},listType:"grid",cell:function(a,b){if(a.column&&a.element)return a;a.target&&a.target.nodeType&&(a=a.target);var c;if(a.nodeType){do{if(this._rowIdToObject[a.id])break;var e=a.columnId;if(e){b=e;c=a;break}a=a.parentNode}while(a&&a!=this.domNode)}if(!c&&"undefined"!=typeof b){var d=this.row(a);if(e=d&&d.element)for(var e=e.getElementsByTagName("td"),f=0;f<e.length;f++)if(e[f].columnId==b){c=e[f];break}}if(null!=
a)return{row:d||this.row(a),column:b&&this.column(b),element:c}},createRowCells:function(a,b,c,e){var d=g("table.dgrid-row-table[role\x3dpresentation]"),f=9>m("ie")||m("quirks")?g(d,"tbody"):d,w,u,h,v,p,t,l,n,k,q;c=c||this.subRows;u=0;for(h=c.length;u<h;u++)for(t=c[u],w=g(f,"tr"),t.className&&g(w,"."+t.className),v=0,p=t.length;v<p;v++){l=t[v];n=l.id;k=l.field?".field-"+r.escapeCssIdentifier(l.field,"-"):"";(q="function"===typeof l.className?l.className(e):l.className)&&(k+="."+q);k=g(a+(".dgrid-cell.dgrid-cell-padding"+
(n?".dgrid-column-"+r.escapeCssIdentifier(n,"-"):"")+k.replace(/ +/g,"."))+"[role\x3d"+("th"===a?"columnheader":"gridcell")+"]");k.columnId=n;A?(n=g(k,"!dgrid-cell-padding div.dgrid-cell-padding"),k.contents=n):n=k;if(q=l.colSpan)k.colSpan=q;if(q=l.rowSpan)k.rowSpan=q;b(n,l);w.appendChild(k)}return d},left:function(a,b){a.element||(a=this.cell(a));return this.cell(this._move(a,-(b||1),"dgrid-cell"))},right:function(a,b){a.element||(a=this.cell(a));return this.cell(this._move(a,b||1,"dgrid-cell"))},
renderRow:function(a,b){var c=this.createRowCells("td",function(e,d){var c=a;d.get?c=d.get(a):"field"in d&&"_item"!=d.field&&(c=c[d.field]);d.renderCell?p(e,d.renderCell(a,c,e,b)):z.call(d,a,c,e,b)},b&&b.subRows,a);return g("div[role\x3drow]\x3e",c)},renderHeader:function(){var a=this,b=this.headerNode,c=b.childNodes.length;for(b.setAttribute("role","row");c--;)g(b.childNodes[c],"!");c=this.createRowCells("th",function(a,b){var c=b.headerNode=a;A&&(a=a.parentNode);var d=b.field;d&&(a.field=d);b.renderHeaderCell?
p(c,b.renderHeaderCell(c)):("label"in b||b.field)&&c.appendChild(document.createTextNode("label"in b?b.label:b.field));!1!==b.sortable&&d&&"_item"!=d&&(a.sortable=!0,a.className+=" dgrid-sortable")},this.subRows&&this.subRows.headerRows);this._rowIdToObject[c.id=this.id+"-header"]=this.columns;b.appendChild(c);this._sortListener&&this._sortListener.remove();this._sortListener=y(c,"click,keydown",function(c){if("click"==c.type||32==c.keyCode||!m("opera")&&13==c.keyCode){var d=c.target,e,g,h;do if(d.sortable){h=
[{attribute:e=d.field||d.columnId,descending:(g=a._sort[0])&&g.attribute==e&&!g.descending}];e={bubbles:!0,cancelable:!0,grid:a,parentType:c.type,sort:h};y.emit(c.target,"dgrid-sort",e)&&(a._sortNode=d,a.set("sort",h));break}while((d=d.parentNode)&&d!=b)}})},resize:function(){var a=this.headerNode.firstChild,b=this.contentNode,c;this.inherited(arguments);if(!m("ie")||7<m("ie")&&!m("quirks"))b.style.width="",b&&a&&(c=a.offsetWidth)!=b.offsetWidth&&(b.style.width=c+"px")},destroy:function(){this._destroyColumns();
this._sortListener&&this._sortListener.remove();this.inherited(arguments)},_setSort:function(a,b){this.inherited(arguments);this.updateSortArrow(this._sort)},_findSortArrowParent:function(a){var b=this.columns,c;for(c in b){var e=b[c];if(e.field==a)return e.headerNode}},updateSortArrow:function(a,b){this._lastSortedArrow&&(g(this._lastSortedArrow,"\x3c!dgrid-sort-up!dgrid-sort-down"),g(this._lastSortedArrow,"!"),delete this._lastSortedArrow);b&&(this._sort=a);if(a[0]){var c=a[0].attribute,e=a[0].descending,
c=this._sortNode||this._findSortArrowParent(c),d;delete this._sortNode;c&&(c=c.contents||c,d=this._lastSortedArrow=g("div.dgrid-sort-arrow.ui-icon[role\x3dpresentation]"),d.innerHTML="\x26nbsp;",c.insertBefore(d,c.firstChild),g(c,e?".dgrid-sort-down":".dgrid-sort-up"),this.resize())}},styleColumn:function(a,b){return this.addCssRule("#"+r.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-"+r.escapeCssIdentifier(a,"-"),b)},_configColumns:function(a,b){var c=[],e=b instanceof Array;r.each(b,function(d,
f){"string"==typeof d&&(b[f]=d={label:d});e||d.field||(d.field=f);f=d.id=d.id||(isNaN(f)?f:a+f);this._configColumn&&(this._configColumn(d,f,b,a),f=d.id);e&&(this.columns[f]=d);d.grid=this;"function"===typeof d.init&&d.init();c.push(d)},this);return e?b:c},_destroyColumns:function(){var a=this.subRows,b=a&&a.length,c,e,d,f;this.cleanup();for(c=0;c<b;c++)for(e=0,f=a[c].length;e<f;e++)d=a[c][e],"function"===typeof d.destroy&&d.destroy()},configStructure:function(){var a=this.subRows,b=this._columns=
this.columns;this.columns=!b||b instanceof Array?{}:b;if(a)for(b=0;b<a.length;b++)a[b]=this._configColumns(b+"-",a[b]);else this.subRows=[this._configColumns("",b)]},_getColumns:function(){return this._columns||this.columns},_setColumns:function(a){this._destroyColumns();this.subRows=null;this.columns=a;this._updateColumns()},_setSubRows:function(a){this._destroyColumns();this.subRows=a;this._updateColumns()},setColumns:function(a){x.deprecated("setColumns(...)",'use set("columns", ...) instead',
"dgrid 0.4");this.set("columns",a)},setSubRows:function(a){x.deprecated("setSubRows(...)",'use set("subRows", ...) instead',"dgrid 0.4");this.set("subRows",a)},_updateColumns:function(){this.configStructure();this.renderHeader();this.refresh();this._lastCollection&&this.renderArray(this._lastCollection);this._started&&(this._sort&&this._sort.length?this.updateSortArrow(this._sort):this.resize())}});h.appendIfNode=p;h.defaultRenderCell=z;return h});
//# sourceMappingURL=Grid.js.map