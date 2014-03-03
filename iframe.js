(function () {
    var framesData = [],
    iframes = [];

    function addIframe (el) {
        var url = el.dataset.url,
            height = el.dataset.height,
            iframeHtml = document.createElement('iframe');
        iframeHtml.src = url;
        iframeHtml.frameBorder = 0;
        iframeHtml.className = 'inserted-iframe';
        // insert iframe to page and add to list of iframes
        el.appendChild(iframeHtml);
        framesData.push({el: iframeHtml, url: url});
    }

    function init () {
        iframes = document.querySelectorAll('.iframe');
        // keep scrollbar permanently visble to prevent resize loop
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        // console.log(iframes)
        for (var i = 0; i < iframes.length; i += 1) {
            // console.log(iframes[i].dataset.url)
            addIframe(iframes[i]);
        }
        // console.log('framesData')
        // console.log(framesData)
    }

    function updateIframe (el, data) {
        // readjust iframe height
        el.el.style.height = data.height + 'px';
    }

    init();

    // alternate listening system
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        // console.log(event)
        var iframeNo;

        for (var i = 0; i < framesData.length; i += 1) {
            if (framesData[i].url === event.data.origin) {
                iframeNo = i;
            }
        }
        // console.log(iframeNo)
        updateIframe(framesData[iframeNo], event.data);
    }
})();