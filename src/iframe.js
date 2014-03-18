/*! Responsive iFrame Copyright (c) 2014 Graham Licence
 *  Requires: extiframe.js to be added to the target frame.
 *  See: https://github.com/grahamlicence/responsive-iframe for details
 *  Available via the MIT license
 */
 
(function () {
    var framesData = [],
        iframes = [];

    // insert iframe to page and add to list of iframes
    function addIframe (el) {
        var url = el.dataset.url,
            height = el.dataset.height,
            iframeHtml = document.createElement('iframe');
        iframeHtml.src = url;
        iframeHtml.frameBorder = 0;
        iframeHtml.className = 'inserted-iframe';
        el.appendChild(iframeHtml);
        framesData.push({el: iframeHtml, url: url});
    }

    function init () {
        iframes = document.querySelectorAll('.iframe');
        // keep scrollbar permanently visble to prevent resize loop
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        
        for (var i = 0; i < iframes.length; i += 1) {
            addIframe(iframes[i]);
        }
    }

    function updateIframe (el, data) {
        // readjust iframe height
        el.el.style.height = data.height + 'px';
    }

    // set listening system
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        var iframeNo,
            origin = event.data.origin;

        // find which iframe sent message
        for (var i = 0; i < framesData.length; i += 1) {
            if (framesData[i].url === origin) {
                iframeNo = i;
            }
        }
        // update the iframe size
        if (iframeNo >= 0) {
            updateIframe(framesData[iframeNo], event.data);
        } else {
            console.log('Error \'data-url\' must be full domain path')
        }
    }

    return init();

})();