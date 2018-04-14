import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	static latestId = 0;
	tasks: Task[];

	constructor() { }

	ngOnInit() {
		this.tasks = [
			<Task>{
				id: TodoListComponent.getId(),
				name: "Test1"
			},	
			<Task>{
				id: TodoListComponent.getId(),
				name: "Test2"
			}	
		]
	}

	addTask() {
		this.tasks.push(<Task>{
			id: TodoListComponent.getId(),
			name: ""
		});
	}

	removeTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		var taskIndex = this.tasks.indexOf(task);
		if(task)
			this.tasks.splice(taskIndex, 1);
	}

	completeTask(id: number) {

	}

	static getId() {
		return TodoListComponent.latestId++;
	}

}

interface Task {
	id: number;
	name: string;
}
