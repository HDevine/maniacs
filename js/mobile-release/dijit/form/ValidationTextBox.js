//>>built
require({cache:{"url:dijit/form/templates/ValidationTextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dijit/form/ValidationTextBox","dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/i18n ./TextBox ../Tooltip dojo/text!./templates/ValidationTextBox.html dojo/i18n!./nls/validate".split(" "),function(g,h,k,l,m,d,n){var f=g("dijit.form.ValidationTextBox",m,{templateString:n,required:!1,promptMessage:"",invalidMessage:"$_unset_$",missingMessage:"$_unset_$",message:"",constraints:{},pattern:".*",regExp:"",regExpGen:function(){},state:"",tooltipPosition:[],_deprecateRegExp:function(a,b){b!=
f.prototype[a]&&(h.deprecated("ValidationTextBox id\x3d"+this.id+", set('"+a+"', ...) is deprecated.  Use set('pattern', ...) instead.","","2.0"),this.set("pattern",b))},_setRegExpGenAttr:function(a){this._deprecateRegExp("regExpGen",a);this._set("regExpGen",this._computeRegexp)},_setRegExpAttr:function(a){this._deprecateRegExp("regExp",a)},_setValueAttr:function(){this.inherited(arguments);this._refreshState()},validator:function(a,b){return(new RegExp("^(?:"+this._computeRegexp(b)+")"+(this.required?
"":"?")+"$")).test(a)&&(!this.required||!this._isEmpty(a))&&(this._isEmpty(a)||void 0!==this.parse(a,b))},_isValidSubset:function(){return 0==this.textbox.value.search(this._partialre)},isValid:function(){return this.validator(this.textbox.value,this.get("constraints"))},_isEmpty:function(a){return(this.trim?/^\s*$/:/^$/).test(a)},getErrorMessage:function(){var a="$_unset_$"==this.invalidMessage?this.messages.invalidMessage:this.invalidMessage?this.invalidMessage:this.promptMessage,b="$_unset_$"==
this.missingMessage?this.messages.missingMessage:this.missingMessage?this.missingMessage:a;return this.required&&this._isEmpty(this.textbox.value)?b:a},getPromptMessage:function(){return this.promptMessage},_maskValidSubsetError:!0,validate:function(a){var b="",c=this.disabled||this.isValid(a);c&&(this._maskValidSubsetError=!0);var e=this._isEmpty(this.textbox.value),d=!c&&a&&this._isValidSubset();this._set("state",c?"":((!this._hasBeenBlurred||a)&&e||d)&&(this._maskValidSubsetError||d&&!this._hasBeenBlurred&&
a)?"Incomplete":"Error");this.focusNode.setAttribute("aria-invalid","Error"==this.state?"true":"false");"Error"==this.state?(this._maskValidSubsetError=a&&d,b=this.getErrorMessage(a)):"Incomplete"==this.state?(b=this.getPromptMessage(a),this._maskValidSubsetError=!this._hasBeenBlurred||a):e&&(b=this.getPromptMessage(a));this.set("message",b);return c},displayMessage:function(a){a&&this.focused?d.show(a,this.domNode,this.tooltipPosition,!this.isLeftToRight()):d.hide(this.domNode)},_refreshState:function(){this._created&&
this.validate(this.focused);this.inherited(arguments)},constructor:function(a){this.constraints=k.clone(this.constraints);this.baseClass+=" dijitValidationTextBox"},startup:function(){this.inherited(arguments);this._refreshState()},_setConstraintsAttr:function(a){!a.locale&&this.lang&&(a.locale=this.lang);this._set("constraints",a);this._refreshState()},_setPatternAttr:function(a){this._set("pattern",a);this._refreshState()},_computeRegexp:function(a){var b=this.pattern;"function"==typeof b&&(b=b.call(this,
a));if(b!=this._lastRegExp){var c="";this._lastRegExp=b;".*"!=b&&b.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g,function(a){switch(a.charAt(0)){case "{":case "+":case "?":case "*":case "^":case "$":case "|":case "(":c+=a;break;case ")":c+="|$)";break;default:c+="(?:"+a+"|$)"}});try{"".search(c)}catch(e){c=this.pattern}this._partialre="^(?:"+c+")$"}return b},postMixInProperties:function(){this.inherited(arguments);this.messages=l.getLocalization("dijit.form","validate",this.lang);this._setConstraintsAttr(this.constraints)},
_setDisabledAttr:function(a){this.inherited(arguments);this._refreshState()},_setRequiredAttr:function(a){this._set("required",a);this.focusNode.setAttribute("aria-required",a);this._refreshState()},_setMessageAttr:function(a){this._set("message",a);this.displayMessage(a)},reset:function(){this._maskValidSubsetError=!0;this.inherited(arguments)},_onBlur:function(){this.displayMessage("");this.inherited(arguments)},destroy:function(){d.hide(this.domNode);this.inherited(arguments)}});return f});
//# sourceMappingURL=ValidationTextBox.js.map