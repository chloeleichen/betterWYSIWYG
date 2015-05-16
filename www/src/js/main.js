require(['domReady','watchEvent'], function (domReady, watchEvent) {
	domReady(function () {
    //This function is called once the DOM is ready.
    //It will be safe to query the DOM and manipulate
    //DOM nodes in this function.
    if(document.contentEditable != undefined && document.execCommand != undefined)
    {
    	alert("HTML5 Document Editing API Is Not Supported");
    }
    else
    {
    	document.execCommand('styleWithCSS', false, true);
    	watchEvent();
    }
});
});
