//>>built
require({cache:{"url:dojox/grid/enhanced/templates/ClearFilterConfirmPane.html":'\x3cdiv class\x3d"dojoxGridClearFilterConfirm"\x3e\n\t\x3cdiv class\x3d"dojoxGridClearFilterMsg"\x3e\n\t\t${_clearFilterMsg}\n\t\x3c/div\x3e\n\t\x3cdiv class\x3d"dojoxGridClearFilterBtns" dojoAttachPoint\x3d"btnsNode"\x3e\n\t\t\x3cspan dojoType\x3d"dijit.form.Button" label\x3d"${_cancelBtnLabel}" dojoAttachPoint\x3d"cancelBtn" dojoAttachEvent\x3d"onClick:_onCancel"\x3e\x3c/span\x3e\n\t\t\x3cspan dojoType\x3d"dijit.form.Button" label\x3d"${_clearBtnLabel}" dojoAttachPoint\x3d"clearBtn" dojoAttachEvent\x3d"onClick:_onClear"\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/grid/enhanced/plugins/filter/ClearFilterConfirm",["dojo/_base/declare","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!../../templates/ClearFilterConfirmPane.html"],function(b,c,d,e,f){return b("dojox.grid.enhanced.plugins.filter.ClearFilterConfirm",[c,d,e],{templateString:f,widgetsInTemplate:!0,plugin:null,postMixInProperties:function(){var a=this.plugin.nls;this._clearBtnLabel=a.clearButton;this._cancelBtnLabel=a.cancelButton;this._clearFilterMsg=
a.clearFilterMsg},postCreate:function(){this.inherited(arguments);this.cancelBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiCancelButton);this.clearBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiClearButton)},uninitialize:function(){this.plugin=null},_onCancel:function(){this.plugin.clearFilterDialog.hide()},_onClear:function(){this.plugin.clearFilterDialog.hide();this.plugin.filterDefDialog.clearFilter(this.plugin.filterDefDialog._clearWithoutRefresh)}})});
//# sourceMappingURL=ClearFilterConfirm.js.map