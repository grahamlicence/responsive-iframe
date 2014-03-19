Responsive iFrame
=================

Create cross domain responsive iFrames. More then one iFrame can be added to a page. 

This script is designed to enable cross domain iFrame resizing for smaller site dependencies, for example externally hosted charts or images. 

Demo at [grahamlicence.github.io/iframe/iframe.html](http://grahamlicence.github.io/iframe/iframe.html)

### Setup

There are two script files, [extiframe.js](https://github.com/grahamlicence/responsive-iframe/blob/master/src/extiframe.js) and [iframe.js](https://github.com/grahamlicence/responsive-iframe/blob/master/src/iframe.js), which are added to the iFrame and the page calling the iframe. 

```html
<script src="iframe.js"></script>
```

```html
<script src="extiframe.js"></script>
```

The inserted iFrame has a class `inserted-iframe` and giving this a width of 100% will mean the iFrame will exand to fit it's container. 

```css
.inserted-iframe {
    width: 100%;
}
```

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

`data-url` This is the url of your iFrame. It must be the same path name as the iFrame, eg http://www.example.com/test.html and not test.html

`data-height` This is a default height for the iFrame, used for aspect ratio

### Browser support

Tested on IE8+, Chrome, Firefox, Opera