define(['helper/func'], function(){
	var list = (function(){
	/**
	* get the first item of an array 
	* @ param {Array} array 
	*/

	var first = function(array){
		return array[0];
	}
	/**
	* get the last item of an array
	* @param {Array} array
	*/

	var last = function(array){
		return array[array.length -1];
	}

	/**
	* return everything but the last entry of the array 
	* @param {Array} array
	*/

	var head = function (array){
		return array.slice(0, array.length -1 );
	}

	/**
	* return everything but the first entry of the array 
	* array.slice(start,end)
	* @param {Array} array
	*/

	var tail = function(array){
		return array.slice(1);
	}

	/**
	* return first item that meet the requirement 
	* @param {Array} array
	*/

	var find = function(array, check){
		for (var idx = 0, len = array.length; idx < len; idx ++){
			var item = array[idx];
			if(check(item)){
				return item;
			}
		}
	}

	/**
	* return true of all item meets requirement 
	* @param {Array} array
	*/

	var all = function(array, check){
		for (var idx = 0, len = array.length; idx < len; idx ++ ){
			if(!check(array[idx])){
				return false;
			}
		}
		return true;
	}

	/**
	* return true if value present in current array 
	* @param {Array} array
	*/

	var contains = function(array, item){
		if(array.indexOf(item) == -1){
			return false;
		}
		return true;
	}

	/**
	* return a duplicate version of the array 
	* @param {Array} array
	*/

	var unique = function(array){

		var result = [];

		for (var idx = 0, len = array.length; idx < len; idx ++ ){
			if (contains(result, array[idx])){
				result.push(array[idx]);
			}
		}
		return result;
	}


	/**
	* return a previus item in an array
	* @param {Array} array
	*/

	var prev = function(array, item){
		var idx = array.indexOf(item);
		if (idx === -1){
			return null;
		}
		return array[idx -1];
	}

	return{
		first: first,
		last: last,
		head: head,
		tail: tail,
		find: find,
		all: all,
		contains: contains,
		unique: unique,
		prev: prev
	}

})();

	return list;
})