// Helpful links
//
// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
// https://newcircle.com/s/post/1096/using_the_html5_attribute_contenteditable_to_create_a_wysiwyg

define([
	'./src/js/editing/editor.js'
	], function (editor) {
		//Native commands that does not require value
		var doCommand = function(){
			var buttonContainer = document.getElementById("button-container");
			var buttons = buttonContainer.querySelectorAll('button');

			for(var i =0, l = buttons.length; i <l; i++){
				buttons[i].addEventListener('click', function(e){
					e.preventDefault();
					var command = this.dataset.event;
					editor(command);
				});
			}
		}

		return doCommand;
});
