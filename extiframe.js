(function () {
    var content = document.getElementsByTagName('body')[0],
        message,
        logSizes = function () {
            var data = {
                width: content.clientWidth,
                height: content.clientHeight,
                origin: window.location.href
            };
            // limit number of messages sent when dragging window wider
            clearTimeout(message);
            message = setTimeout(function () {
                window.parent.postMessage(data, window.location.ancestorOrigins[0]);
            }, 300);
        };
    logSizes();
    window.addEventListener('resize', logSizes);
})();