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
				name: "Test1",
				completed: false
			},	
			<Task>{
				id: TodoListComponent.getId(),
				name: "Test2",
				completed: true
			}	
		]
	}

	addTask() {
		this.tasks.push(<Task>{
			id: TodoListComponent.getId(),
			name: "",
			completed: false
		});
	}

	removeTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		var taskIndex = this.tasks.indexOf(task);
		if(task)
			this.tasks.splice(taskIndex, 1);
	}

	toggleTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		task.completed = !task.completed;
	}

	static getId() {
		return TodoListComponent.latestId++;
	}

}

interface Task {
	id: number;
	name: string;
	completed: boolean;
}
