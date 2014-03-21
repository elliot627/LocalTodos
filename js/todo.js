var Todo = {
	list: []
}

//function to append new item to list
var display = function(item){
	$("<li class=\"list-group-item\">" + item + "</li>").hide().appendTo(".list").fadeIn(500);
}


//function to load list on load
Todo.populate = function(){
	for(var i = 0; i < this.length; i++){
		display(this.list[i]);
	}
}


//function to add and display new items
Todo.add = function(item){
	this.list.push(item);
	display(item);
}


//function to remove item
// Todo.remove(){

// }