define(function () {
    return {
        testLoad: function () {
        	    window.addEventListener("load", function(){
			        //first check if execCommand and contentEditable attribute is supported or not.
			        if(document.contentEditable != undefined && document.execCommand != undefined)
			       {
			           alert("HTML5 Document Editing API Is Not Supported");
			        }
			        else
			        {
			            document.execCommand('styleWithCSS', false, true);
			        }
			    }, false);
			   
	    }
    };
});
