define(function () {
	var range = function(){
		var txt;
		if (window.getSelection) {
        txt = window.getSelection();
    	} else if (window.document.getSelection) {
        txt =window.document.getSelection();
    	} else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
    	}
    	return txt.focusNode;
	}
	return range;

});
