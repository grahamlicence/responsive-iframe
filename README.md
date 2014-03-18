responsive-iframe
=================

Create cross domain responsive iframes. More then one iframe can be added to a page. 

This script is designed to enable cross domain iframe resizing for smaller site dependencies, for example externally hosted charts or images. 

Demo at [grahamlicence.github.io/iframe/iframe.html](http://grahamlicence.github.io/iframe/iframe.html)

### Setup

There are two script files, [extiframe.js](https://github.com/grahamlicence/responsive-iframe/blob/master/src/extiframe.js) and [iframe.js](https://github.com/grahamlicence/responsive-iframe/blob/master/src/iframe.js), which are added to the iframe and the page calling the iframe. 

```css
.inserted-iframe {
    width: 100%;
}
```

The inserted iframe has a class `inserted-iframe` and giving this a width of 100% will mean the iframe will exand to fit it's container. 

### Example html

```html
<div class="iframe" data-url="http://your-iframe-url.html" data-height="400">
    <noscript>
        <iframe frameborder="0" width="100%" allowtransparency="true" marginheight="0" marginwidth="0" class="iframefallback"
     height="400" width="600" src="http://your-iframe-url.html" ></iframe>
    </noscript>
</div>
```

Add the following html, changing the options listed below:

### Options

`data-url` This is the url of your iframe. It must be the same path name as the iframe, eg http://www.example.com/test.html and not test.html

`data-height` This is a default height for the iframe, used for aspect ratio