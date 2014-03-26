//Todo object
var Todo = {
	list: new Array(),

	//returns a string of all tasks in list
	printList: function(){
		var ret = "";
		for(var i = 0; this.list.length; i++){
			ret += this.list[i].getTask();
		}
		return ret;
	},

	//retuns list
	getList: function(){
		return this.list;
	},

	//returns Task of given index
	getTask: function(index){
		return this.list[index];
	},

	//adds task to list
	add: function(task){
		if(task && (task !== ' ')){
			this.list.push(new Task(task));
			display(task);
		}
	}
}


//Task object
function Task(task){
	//instance variable
	this.task = task;

	//instance methods
	this.getTask = function(){
		return this.task;
	}
	this.setTask = function(updated){
		task = updated;
	}
} 


//method to append new task to list
var display = function(task){
	$("<li class=\"list-group-item task\" style=\"color:black;\">" + task + "</li>").hide().appendTo(".list").fadeIn(500);
}


//method to load list on load
Todo.populate = function(){
	for(var i = 0; i < this.length; i++){
		display(this.list[i]);
	}
}


//method to remove item
// Todo.remove(){

// }


//instantiator
var todo = new Todo();



//provides interactivity
$(document).ready(function(){
	$(".draft").focus();


	$("#draft").keypress(function(event){				//submit task via enter key
		if(event.charCode === 13){
			Todo.add($("#draft").val());
			$("#draft").val('');
		}
	});


	$("#add").click(function(){							//submit task via submit button
		Todo.add($("#draft").val());
		$("#draft").val('');
		$(".draft").focus();
	});


});

$('body').on('click', '.task', function(){
	var task = $(this).text();
	var index = todo.
})


