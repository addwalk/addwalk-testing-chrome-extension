var actualCode =  ["var addwalk_widget = addwalk_widget || {}; addwalk_widget['_id'] = 'XXXXXXXXXXXXXXXXXXX'; (function () { var _add = document.createElement('script'); _add.type = 'text/javascript';_add.async = true; _add.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'adds.addwalk.dev:3000/assets/adds/get_widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(_add, s); })();",
                  ' // Beware! This array have to be joined',
                  ' // using a newline. Otherwise, missing semicolons',
                  ' //  or single-line comments (//) will mess up your',
                  ' //  code ----->'].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
