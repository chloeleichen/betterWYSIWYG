define([
	'helper/func',
	'helper/list'
	], function(list, func){
		var Bullet = function(){
			
		};

		Bullet.prototype = {
			insertOrderedList: function(){
				this._toggleList("OL");
			},

			insertUnorderedList: function(){
				this.toggleList("UL");
			},

			indent: function(){
				
				console.log('insertIndent');
			},

			outdent: function(){

				console.log('insertOutdent');
			},

			_toggleList: function(listName){
				//private method toggle list
				var self = this;
				console.log(listName);

			}
		}
		return Bullet;
	});