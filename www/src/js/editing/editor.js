// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define([
	
	],function (toggleCode) {
    return function(button,cmd){
    	//List of valid commands for direct editing
    	var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat',
                    'backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];
        if(commands.indexOf(cmd) > -1){
        	document.execCommand(cmd, false, null);
        }

        else{
        	switch(cmd){
        		

        	}
        }

    }
});
