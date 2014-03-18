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
                ancestorOrigin = window.location.ancestorOrigins[0];
            // don't send messages when directly opened
            if (ancestorOrigin === 'null') {
                console.log('Error: scripts should be fun on hosted sites or localhost')
                return;
            }
            // limit number of messages sent when dragging window wider
            clearTimeout(message);
            message = setTimeout(function () {
                window.parent.postMessage(data, ancestorOrigin);
            }, 300);
        };
    logSizes();
    window.addEventListener('resize', logSizes);
})();