// Helpful links
//
// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
// https://newcircle.com/s/post/1096/using_the_html5_attribute_contenteditable_to_create_a_wysiwyg

define([
	'./editing/edit',
	'./editing/toggleCode',
	'./helper/dom',
	'./helper/range',
	'./core/Button'
	], function (edit, toggleCode, dom, range, Button ) {
		//Native commands that does not require value
		var doCommand = function(){
		var container = document.getElementById('editor-container');
		var buttonContainer = document.getElementById("button-container");
		var buttons = buttonContainer.querySelectorAll('button');
		var codeButton = document.getElementById("code");
		var editor = document.getElementById("editor");
		var button = new Button;


		for(var i =0, l = buttons.length; i <l; i++){
			buttons[i].addEventListener('click', function(e){
				var currentButton = this;
				e.preventDefault();								
				if(dom.hasClass(container, 'code-mode') === true){
					currentButton.disabled = true;	
				}else {
					var command = this.getAttribute('id');
					//button.classList.toggle("active")
					edit(currentButton, command);
					button.update();
					editor.focus();			
				}
			});
		}

		editor.addEventListener('mouseup', function(e){		
			button.update();
		});

		editor.addEventListener('keyup', function(e){		
			button.update();
		});

		editor.addEventListener('keypress', function(ev){
		    if(ev.keyCode == '13')
		        document.execCommand('formatBlock', false, 'p');
		}, false);

		codeButton.addEventListener('click', function(e){
			toggleCode.toggleCode(codeButton, container, editor);
		})
	}

		return doCommand;
});
