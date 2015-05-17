// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define([
	
	],function (toggleCode) {
    return function(button,cmd){
    	//List of valid simple commands for direct editing
    	var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'removeFormat','backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];
        if(commands.indexOf(cmd) > -1){
        	document.execCommand(cmd, false, null);
        }

        else{
        	switch(cmd){
                case 'orderdList':
                console.log('orderdList');
                break;
                case 'unorderdList':
                console.log('unorderdList');
                break;
                case 'indent':
                console.log('indent')
                break;
                case 'outdent':
                console.log('outdent');
                break;
        		case 'image':
        		break;
        		default:
        		return;
        		
        	}
        }

    }
});
