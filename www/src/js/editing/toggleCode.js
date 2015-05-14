// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define(function () {
    return {
    	displayhtml: function(target){
    		var editor = document.getElementById("editor");
    		if (target.value == "html"){
			    editor.textContent = editor.innerHTML;
			    target.value = "code";
			    } else if (target.value == "code"){
			    editor.innerHTML = editor.textContent;
			    target.value = "html";
			}

    	}
    };
});
