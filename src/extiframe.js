/*! Responsive iFrame Copyright (c) 2014 Graham Licence
 *  Requires: iframe.js to be added to the parent frame.
 *  See: https://github.com/grahamlicence/responsive-iframe for details
 *  Available via the MIT license
 */
(function () {
    var content = document.getElementsByTagName('body')[0],
        message,
        logSizes = function () {
            var data = {
                    width: content.clientWidth,
                    height: content.clientHeight,
                    origin: window.location.href
                },
                ancestorOrigin;

            if (window.location.ancestorOrigins) {
                ancestorOrigin = window.location.ancestorOrigins[0]
            } else {
                ancestorOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
            }
            // don't send messages when directly opened
            if (ancestorOrigin === 'null') {
                // top.document.iframeListener(data);
                console.log('Error: scripts should be run on hosted sites or localhost')
                return;
            }
            // limit number of messages sent when dragging window wider
            clearTimeout(message);
            message = setTimeout(function () {
                parent.postMessage(JSON.stringify(data), ancestorOrigin);
            }, 300);
        };
    logSizes();
    if (!window.addEventListener) {
        window.attachEvent('resize', logSizes);
    } else {
        window.addEventListener('resize', logSizes);
    }
})();