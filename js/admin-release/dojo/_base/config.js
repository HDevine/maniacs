//>>built
define("dojo/_base/config",["../has","require"],function(e,d){var a={},b=d.rawConfig,c;for(c in b)a[c]=b[c];!a.locale&&"undefined"!=typeof navigator&&(b=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language||navigator.userLanguage)&&(a.locale=b.toLowerCase());return a});
//# sourceMappingURL=config.js.map