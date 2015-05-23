define([
	'helper/range',
	'helper/dom'
	],function(range, dom){
	var Styles = function(){
			var styleInfo = [];
			var rgn = range();
			var target = dom.isText(rgn)? rgn.parentNode : rgn;

			function getList(el, ListName){
				if(el.parentNode.tagName == 'LI'){
					var tag = el.parentNode.parentNode.tagName;
					return(tag == ListName)? true : false;
				} else {
					return false;
				}				

			}
		      // document.queryCommandState for toggle state
		      styleInfo['bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';
		      styleInfo['italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';
		      styleInfo['underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';
		      styleInfo['strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';
		      styleInfo['superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';
		      styleInfo['subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';
		      styleInfo['justifyLeft'] = (dom.getStyle(target, "text-align") == 'left') ? 'justifyLeft' : 'normal';
		      styleInfo['justifyRight'] = (dom.getStyle(target, "text-align") == 'right') ? 'justifyRight' : 'normal';
		      styleInfo['justifyCenter'] = (dom.getStyle(target, "text-align") == 'center') ? 'justifyCenter' : 'normal';
		      styleInfo['insertorderedlist'] = (getList(target, 'OL') == true)? 'insertorderedlist' : 'none';
		      styleInfo['insertunorderedlist'] = (getList(target, 'UL') == true)? 'insertunorderedlist' : 'none';

		    return styleInfo;
		}
		return Styles;
});