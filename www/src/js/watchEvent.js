// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define([
	'./src/js/editing/editor.js'
	], function (editor) {
		//Native commands that does not require value
		var commandsSimple = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat'];

		var doCommand = function(sCmd){
			var target = document.getElementById(sCmd);

			if(target != null){
				document.getElementById(sCmd).addEventListener("click", function(e){
				editor(sCmd);
				});	
			}else return;
		};


		var watchEvent = function(){
			for (var i = 0, len = commandsSimple.length; i < len; i ++ ){
				doCommand(commandsSimple[i]);
			}
		}

		return watchEvent;
});
