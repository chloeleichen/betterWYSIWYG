// https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
define(function () {
    return function(cmd){
    	document.execCommand(cmd, false, null);
    }
});
