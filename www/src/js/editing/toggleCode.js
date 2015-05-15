// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define(function () {
    return {
    	toggleCode: function(target, container){
    		var editor = document.getElementById("editor");
    		if (target.value == "html"){
			    editor.textContent = editor.innerHTML;
			    target.value = "code";
			    container.classList.add("code-mode");
			    } else if (target.value == "code"){
			    editor.innerHTML = editor.textContent;
			    target.value = "html";
			    container.classList.remove("code-mode");
			}

    	}
    };
});
