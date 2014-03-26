//Todo object
function Todo() {
	this.list =  new Array(),

	//returns a string of all tasks in list
	this.printList = function(){
		for(var i = 0; this.list.length; i++){
			console.log(this.list[i]);
		}
	},

	//retuns list
	this.getList = function(){
		return this.list;
	},

	//returns Task of given index
	this.getTask = function(index){
		return this.list[index];
	},

	//adds task to list
	this.add = function(task){
		if(task && (task !== ' ')){
			this.list.push(new Task(task));
			display(task);
		}
	},

	//removes task from list
	this.remove = function(finishedTask){
		for (var i = 0; i < this.list.length; i++) {
			if(this.list.getTask() == finishedTask){
				console.log("removing " + this.list.getTask());
				this.list.splice(i,1);
			}
		};
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
			todo.add($("#draft").val());
			$("#draft").val('');
		}
	});


	$("#add").click(function(){							//submit task via submit button
		todo.add($("#draft").val());
		$("#draft").val('');
		$(".draft").focus();
	});


});

$('body').on('click', '.task', function(){
	var finishedTask = $(this).text();
	todo.remove(finishedTask);
})


