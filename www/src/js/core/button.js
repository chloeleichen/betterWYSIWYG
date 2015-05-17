define([
	'core/Styles',
	'helper/dom'
	],function (Styles, dom) {
		var buttonState = function(button, pred){
			button.classList.toggle('active', pred());
		}
		

	var Button = function(buttonCurrent){
			this.buttonCurrent = buttonCurrent;
	}

	Button.prototype = {
		update : function(){
			var styleInfo = new Styles();
			var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull'];

			for(var i =0, len = commands.length; i < len; i ++){
				buttonState(document.getElementById(commands[i]), function(){
				return styleInfo[commands[i]] === commands[i];
				});
			}
		  }
		  
	   };


    return Button;
});
