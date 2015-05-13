// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define(function () {
    return {
        watchEvent: function () {
            //underlines the selected text
            underline();
            link();
            displayhtml();

			    function underline()
			    {
			    	document.getElementById("underline").addEventListener("click", function(){
			        	document.execCommand("underline", false, null);
			    	});
			    }
			    
			    //makes the selected text as hyperlink.
			    function link()
			    {
			        document.getElementById("link").addEventListener("click", function(){
			        	var url = prompt("Enter the URL");
			        	document.execCommand("createLink", false, url);
			        });
			    }
			    
			    //displays HTML of the output
			    function displayhtml()
			    {
			    	var editor = document.getElementById("editor");

			    	document.getElementById("code").addEventListener("click", function(){
			    		if (this.value == "html"){
			    			editor.textContent = editor.innerHTML;
			    			this.value = "code";
			    		} else if (this.value == "code"){
			    			editor.innerHTML = editor.textContent;
			    			this.value = "html";
			    		}
			    		

			    	});
			    }
        }
    };
});
