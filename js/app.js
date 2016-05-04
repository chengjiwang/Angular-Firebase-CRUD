(function(){
	var myApp =angular.module( 'blogApp',["firebase"]);
	myApp.controller('MyController', ['$firebaseArray',
		function($firebaseArray) {
			var self = this,
				// ref = new Firebase("https://tainanfood-demo.firebaseio.com/");
				ref = new Firebase("https://angular-cruddemo.firebaseio.com/");

			// function time(){
		 //        var date = new Date();
		 //        var year = date.getFullYear();
		 //        var month = date.getMonth()+1;
		 //        var day = date.getDate();
		 //        var Hours = date.getHours();
		 //        var Minutes = date.getMinutes();
		 //        var time =year+"-"+month+"-"+day +" "+Hours+":"+ Minutes;
		 //        return time;
		 //    }

				
	    	self.crudList = $firebaseArray(ref);
	    	console.log(2);
			self.addItem = function(){
				console.log(1);
				if(self.username){
				   self.crudList.$add({name:self.username , message:self.usermessage ,time:self.time() });
				   self.username = '';
				   self.usermessage = '';
				}  
			};
			self.time = function(){
				var date = new Date();
		        var year = date.getFullYear();
		        var month = date.getMonth()+1;
		        var day = date.getDate();
		        var Hours = date.getHours();
		        var Minutes = date.getMinutes();
		        var time =year+"-"+month+"-"+day +" "+Hours+":"+ Minutes;
		        return time;
			};
			
			self.deleteItem = function(item){
				self.crudList.$remove(item);
			};
			self.editItem = function(item){
				item.label = prompt("edit" ,item.label);
				self.crudList.$save(item);
			}
		}
	]);
})();
