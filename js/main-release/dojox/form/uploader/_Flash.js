//>>built
define("dojox/form/uploader/_Flash","dojo/dom-form dojo/dom-style dojo/dom-construct dojo/dom-attr dojo/_base/declare dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/array dojox/embed/Flash".split(" "),function(q,f,g,h,k,l,m,d,n,p){return k("dojox.form.uploader._Flash",[],{swfPath:l.uploaderPath||require.toUrl("dojox/form/resources/uploader.swf"),preventCache:!0,skipServerCheck:!0,serverTimeout:2E3,isDebug:!1,devMode:!1,deferredUploading:0,postMixInProperties:function(){"flash"===
this.uploadType&&(this._files=[],this._fileMap={},this._createInput=this._createFlashUploader,this.getFileList=this.getFlashFileList,this.reset=this.flashReset,this.upload=this.uploadFlash,this.fieldname="flashUploadFiles");this.inherited(arguments)},onReady:function(a){},onLoad:function(a){},onFileChange:function(a){},onFileProgress:function(a){},getFlashFileList:function(){return this._files},flashReset:function(){this.flashMovie.reset();this._files=[];this._fileMap={}},uploadFlash:function(a){this.onBegin(this.getFileList());
a=a||{};a.returnType="F";a.uploadType=this.uploadType;this.flashMovie.doUpload(a)},_change:function(a){this._files=this._files.concat(a);n.forEach(a,function(a){a.bytesLoaded=0;a.bytesTotal=a.size;this._fileMap[a.name+"_"+a.size]=a},this);this.onChange(this._files);this.onFileChange(a)},_complete:function(a){this._getCustomEvent().type="load";this.onComplete(a)},_progress:function(a){this._fileMap[a.name+"_"+a.bytesTotal].bytesLoaded=a.bytesLoaded;var b=this._getCustomEvent();this.onFileProgress(a);
this.onProgress(b)},_error:function(a){this.onError(a)},_onFlashBlur:function(a){},_getCustomEvent:function(){var a={bytesLoaded:0,bytesTotal:0,type:"progress",timeStamp:(new Date).getTime()},b;for(b in this._fileMap)a.bytesTotal+=this._fileMap[b].bytesTotal,a.bytesLoaded+=this._fileMap[b].bytesLoaded;a.decimal=a.bytesLoaded/a.bytesTotal;a.percent=Math.ceil(a.bytesLoaded/a.bytesTotal*100)+"%";return a},_connectFlash:function(){this._subs=[];this._cons=[];var a=d.hitch(this,function(a,c){this._subs.push(m.subscribe(this.id+
a,this,c))});a("/filesSelected","_change");a("/filesUploaded","_complete");a("/filesProgress","_progress");a("/filesError","_error");a("/filesCanceled","onCancel");a("/stageBlur","_onFlashBlur");this.connect(this.domNode,"focus",function(){this.flashMovie.focus();this.flashMovie.doFocus()});0<=this.tabIndex&&h.set(this.domNode,"tabIndex",this.tabIndex)},_createFlashUploader:function(){var a=this.btnSize.w,b=this.btnSize.h;if(a){var c=this.getUrl();if(c&&0>c.toLowerCase().indexOf("http")&&0!=c.indexOf("/")){var e=
window.location.href.split("/");e.pop();e=e.join("/")+"/";c=e+c}this.inputNode=g.create("div",{className:"dojoxFlashNode"},this.domNode,"first");f.set(this.inputNode,{position:"absolute",top:"-2px",width:a+"px",height:b+"px",opacity:0});a={expressInstall:!0,path:(this.swfPath.uri||this.swfPath)+(this.preventCache?"?cb_"+(new Date).getTime():""),width:a,height:b,allowScriptAccess:"always",allowNetworking:"all",vars:{uploadDataFieldName:this.flashFieldName||this.name+"Flash",uploadUrl:c,uploadOnSelect:this.uploadOnSelect,
deferredUploading:this.deferredUploading||0,selectMultipleFiles:this.multiple,id:this.id,isDebug:this.isDebug,noReturnCheck:this.skipServerCheck,serverTimeout:this.serverTimeout},params:{scale:"noscale",wmode:"opaque",allowScriptAccess:"always",allowNetworking:"all"}};this.flashObject=new p(a,this.inputNode);this.flashObject.onError=d.hitch(function(a){});this.flashObject.onReady=d.hitch(this,function(){this.onReady(this)});this.flashObject.onLoad=d.hitch(this,function(a){this.flashMovie=a;this.flashReady=
!0;this.onLoad(this)});this._connectFlash()}else setTimeout(dojo.hitch(this,function(){this._getButtonStyle(this.domNode);this._createFlashUploader()}),200)}})});
//# sourceMappingURL=_Flash.js.map