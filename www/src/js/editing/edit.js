// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define(function (Bullet) {
    return function(button,cmd){
        var b = new Bullet();
    	//List of valid simple commands for direct editing
    	var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'removeFormat','insertunorderedlist', 'indent', 'outdent', 'insertorderedlist'];
        if(commands.indexOf(cmd) > -1){
        	document.execCommand(cmd, false, null);
        }

        else{
        	switch(cmd){
        		case 'image':
        		break;
        		default:
        		return;
        		
        	}
        }

    }
});
