//http://youmightnotneedjquery.com/
define(function () {
    return function(el, className){
    	if (el.classList && el.classList.contains(className)){  
            return true;
        }else if(new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)){           
            return true;
        } else{
            return false;
        }
    }
});
