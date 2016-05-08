(function(){
	var myApp =angular.module( 'blogApp',["firebase"]);
	myApp.controller('MyController', ['$firebaseArray',
		function($firebaseArray) {
			var self = this,
				ref = new Firebase("https://angular-cruddemo.firebaseio.com/");
	    	self.crudList = $firebaseArray(ref);
	    	
			self.addItem = function(){
				
				if(self.username){
				   self.crudList.$add({ name: self.username , 
				   					    message: self.usermessage ,
				   					    time: self.time() ,
				   					    like: 0,
				   					    unlike: 0 });
				   self.username = '';
				   self.usermessage = '';
				}  
			};
			self.time = function(){
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth()+1,
					day = date.getDate(),
					Hours = date.getHours(),
					Minutes = date.getMinutes(),
					time =year+"-"+month+"-"+day +" "+Hours+":"+ Minutes;
		        return time;
			};

			self.deleteItem = function(item){
				self.crudList.$remove(item);
			};
			self.editItem = function(item){
				item.message = prompt("edit" ,item.message);
				self.crudList.$save(item);
			};
			self.like = function(item){
				item.like += 1;
				self.crudList.$save(item);
			};
			self.unlike = function(item){
				item.unlike += 1;
				self.crudList.$save(item);
			};
		}
	]);
})();
