(function(){
	var myApp =angular.module( 'blogApp',["firebase"]);
	myApp.controller('MyController', ['$firebaseArray',
		function($firebaseArray) {
			var self = this,
				ref = new Firebase("https://tainanfood-demo.firebaseio.com/");
	    	self.todoList = $firebaseArray(ref);
			self.addItem = function(){
				if(self.newItem){
				   self.todoList.$add({label:self.newItem});
				   self.newItem = '';
				}  
			};
			self.deleteItem = function(item){
				self.todoList.$remove(item);
			};
			self.editItem = function(item){
				item.label = prompt("edit" ,item.label);
				self.todoList.$save(item);
			}
		}
	]);
})();
