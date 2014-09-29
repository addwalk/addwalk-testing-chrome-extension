var actualCode =  [
  "var addwalk_widget = addwalk_widget || {}; addwalk_widget['_id'] = '__widget_id__'; (function () { var _add = document.createElement('script'); _add.type = 'text/javascript';_add.async = true; _add.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'adds.addwalk.dev:3000/assets/adds/get_widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(_add, s); })();",
].join('\n');

chrome.storage.local.get(['addwalk_settings_widget_id','addwalk_settings_widget_url'], function(items){
  widget_id = items.addwalk_settings_widget_id;
  widget_url = items.addwalk_settings_widget_url;
  if(widget_id != "" && (document.URL.indexOf(widget_url) > -1)) {
    console.log("addwalk-test-widget successfully initialized");
    var script = document.createElement('script');
    script.textContent = actualCode.replace("__widget_id__", widget_id);
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
  }
});
