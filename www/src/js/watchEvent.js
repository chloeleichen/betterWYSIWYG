// Helpful links
//
// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
// https://newcircle.com/s/post/1096/using_the_html5_attribute_contenteditable_to_create_a_wysiwyg

define([
	'./editing/editor',
	'./editing/toggleCode',
	'./helper/hasClass'
	], function (editor, toggleCode, hasClass) {
		//Native commands that does not require value
		var doCommand = function(){
			var container = document.getElementById('editor-container');
			var buttonContainer = document.getElementById("button-container");
			var buttons = buttonContainer.querySelectorAll('button');
			var codeButton = document.getElementById("code");

			for(var i =0, l = buttons.length; i <l; i++){
				buttons[i].addEventListener('click', function(e){
					var button = this;
					e.preventDefault();								
					if(hasClass(container, 'code-mode') === true){
						button.disabled = true;	
					}else {
						var command = this.dataset.event;
						//button.classList.toggle("active")
						editor(button, command);						
					}
				});
			}
			
			codeButton.addEventListener('click', function(e){
				toggleCode.toggleCode(codeButton, container);
			})
		}

		return doCommand;
	});
