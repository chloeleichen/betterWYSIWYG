define(function(){
	var dom = function(){
		var self = {};

		self.isText = function(node){
			return node && node.nodeType === 3;		
		};

		self.hasClass = function(el, className){
    	if (el.classList && el.classList.contains(className)){  
            return true;
        }else if(new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)){           
            return true;
        } else{
            return false;
        }
    	};

    	self.getStyle = function(el, property){
        	return getComputedStyle(el, null).getPropertyValue(property);
        	};


		return self;
	}();

	return dom;
})