//>>built
define("dojo/hash","./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "),function(d,y,v,z,h,A,B,k){function t(a,c){var b=a.indexOf(c);return 0<=b?a.substring(b+1):""}function e(){return t(location.href,"#")}function n(){A.publish("/dojo/hashchange",e())}function l(){e()!==b&&(b=e(),n())}function w(a){if(f)if(f.isTransitioning())setTimeout(h.hitch(null,w,a),p);else{var c=f.iframe.location.href,b=c.indexOf("?");f.iframe.location.replace(c.substring(0,b)+
"?"+a)}else c=location.href.replace(/#.*/,""),location.replace(c+"#"+a),!x&&l()}function C(){function a(){b=e();k=g?b:t(u.href,"?");q=!1;r=null}var c=document.createElement("iframe"),f=v.dojoBlankHtmlUrl||y.toUrl("./resources/blank.html");c.id="dojo-hash-iframe";c.src=f+"?"+e();c.style.display="none";document.body.appendChild(c);this.iframe=d.global["dojo-hash-iframe"];var k,q,r,l,g,u=this.iframe.location;this.isTransitioning=function(){return q};this.pollLocation=function(){if(!g)try{var d=t(u.href,
"?");document.title!=l&&(l=this.iframe.document.title=document.title)}catch(D){g=!0}var m=e();if(q&&b===m)if(g||d===r)a(),n();else{setTimeout(h.hitch(this,this.pollLocation),0);return}else if(b!==m||!g&&k!==d){if(b!==m){b=m;q=!0;r=m;c.src=f+"?"+r;g=!1;setTimeout(h.hitch(this,this.pollLocation),0);return}g||(location.href="#"+u.search.substring(1),a(),n())}setTimeout(h.hitch(this,this.pollLocation),p)};a();setTimeout(h.hitch(this,this.pollLocation),p)}d.hash=function(a,b){if(!arguments.length)return e();
"#"==a.charAt(0)&&(a=a.substring(1));b?w(a):location.hash="#"+a;return a};var b,f,x,p=v.hashPollFrequency||100;B(function(){"onhashchange"in d.global&&(!k("ie")||8<=k("ie")&&"BackCompat"!=document.compatMode)?x=z.after(d.global,"onhashchange",n,!0):document.addEventListener?(b=e(),setInterval(l,p)):document.attachEvent&&(f=new C)});return d.hash});
//# sourceMappingURL=hash.js.map