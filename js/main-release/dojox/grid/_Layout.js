//>>built
define("dojox/grid/_Layout","dojo/_base/kernel ../main dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom-geometry ./cells ./_RowSelector".split(" "),function(r,l,p,n,c,q){return p("dojox.grid._Layout",null,{constructor:function(a){this.grid=a},cells:[],structure:null,defaultWidth:"6em",moveColumn:function(a,d,b,f,h){var k=this.structure[a].cells[0],g=this.structure[d].cells[0],e=null,m=e=0;a=0;for(var c;c=k[a];a++)if(c.index==b){e=a;break}e=k.splice(e,1)[0];e.view=this.grid.views.views[d];
a=0;for(c=null;c=g[a];a++)if(c.index==f){m=a;break}h||(m+=1);g.splice(m,0,e);if(b=this.grid.getCell(this.grid.getSortIndex()))b._currentlySorted=this.grid.getSortAsc();this.cells=[];for(a=b=0;d=this.structure[a];a++)for(f=0;h=d.cells[f];f++)for(k=0;c=h[k];k++)c.index=b,this.cells.push(c),"_currentlySorted"in c&&(g=b+1,g*=c._currentlySorted?1:-1,this.grid.sortInfo=g,delete c._currentlySorted),b++;n.forEach(this.cells,function(a){var b=a.markup[2].split(" ");parseInt(b[1].substring(5))!=a.index&&(b[1]=
'idx\x3d"'+a.index+'"',a.markup[2]=b.join(" "))});this.grid.setupHeaderMenu()},setColumnVisibility:function(a,d){var b=this.cells[a];if(b.hidden==d){b.hidden=!d;var f=b.view,c=f.viewWidth;c&&"auto"!=c&&(f._togglingColumn=q.getMarginBox(b.getHeaderNode()).w||0);f.update();return!0}return!1},addCellDef:function(a,d,b){var f=this,h=function(a){var b=0;1<a.colSpan?b=0:(b=a.width||f._defaultCellProps.width||f.defaultWidth,isNaN(b)||(b+="em"));return b};a={grid:this.grid,subrow:a,layoutIndex:d,index:this.cells.length};
if(b&&b instanceof l.grid.cells._Base)return d=c.clone(b),a.unitWidth=h(d._props),d=c.mixin(d,this._defaultCellProps,b._props,a);d=b.type||b.cellType||this._defaultCellProps.type||this._defaultCellProps.cellType||l.grid.cells.Cell;c.isString(d)&&(d=c.getObject(d));a.unitWidth=h(b);return new d(c.mixin({},this._defaultCellProps,b,a))},addRowDef:function(a,d){for(var b=[],c=0,h=0,k=!0,g=0,e;e=d[g];g++)e=this.addCellDef(a,g,e),b.push(e),this.cells.push(e),k&&e.relWidth?c+=e.relWidth:e.width&&(e=e.width,
"string"==typeof e&&"%"==e.slice(-1)?h+=window.parseInt(e,10):"auto"==e&&(k=!1));c&&k&&n.forEach(b,function(a){a.relWidth&&(a.width=a.unitWidth=a.relWidth/c*(100-h)+"%")});return b},addRowsDef:function(a){var d=[];if(c.isArray(a))if(c.isArrayLike(a[0]))for(var b=0,f;a&&(f=a[b]);b++)d.push(this.addRowDef(b,f));else d.push(this.addRowDef(0,a));return d},addViewDef:function(a){this._defaultCellProps=a.defaultCell||{};a.width&&"auto"==a.width&&delete a.width;return c.mixin({},a,{cells:this.addRowsDef(a.rows||
a.cells)})},setStructure:function(a){this.fieldIndex=0;this.cells=[];var d=this.structure=[];if(this.grid.rowSelector){var b={type:l._scopeName+".grid._RowSelector"};if(c.isString(this.grid.rowSelector)){var f=this.grid.rowSelector;"false"==f?b=null:"true"!=f&&(b.width=f)}else this.grid.rowSelector||(b=null);b&&d.push(this.addViewDef(b))}var h=function(a){return"name"in a||"field"in a||"get"in a},b=function(a){return c.isArray(a)&&(c.isArray(a[0])||h(a[0]))?!0:!1},f=function(a){return null!==a&&c.isObject(a)&&
("cells"in a||"rows"in a||"type"in a&&!h(a))};if(c.isArrayLike(a)){for(var k=!1,g=0,e;e=a[g];g++)if(f(e)){k=!0;break}if(k)for(g=0;e=a[g];g++)b(e)?d.push(this.addViewDef({cells:e})):f(e)&&d.push(this.addViewDef(e));else d.push(this.addViewDef({cells:a}))}else f(a)&&d.push(this.addViewDef(a));this.cellCount=this.cells.length;this.grid.setupHeaderMenu()}})});
//# sourceMappingURL=_Layout.js.map