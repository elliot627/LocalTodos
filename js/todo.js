//Todo object
var Todo = {
	list: new Array(),

	//returns all tasks in list
	getList: function(){
		var ret = "";
		for(var i = 0; this.list.length; i++){
			ret += this.list[i].getTask();
		}
		return ret;
	},

	//adds task to list
	add: function(task){
		if(task && (task !== ' ')){
			this.list.push(new Task(task));
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
	$("<li class=\"list-group-item task\">" + task + "</li>").hide().appendTo(".list").fadeIn(500);
}


//method to load list on load
Todo.populate = function(){
	for(var i = 0; i < this.length; i++){
		display(this.list[i]);
	}
}


//method to add and display new items
Todo.add = function(task){
	if(task && (task !== ' ')){
		this.list.push(new Task(task));
		display(task);
	}
}


//method to remove item
// Todo.remove(){

// }



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


	$(".task").click(function(){						//removes task
		var task = $(this).text();
		alert(task);
	});

});


