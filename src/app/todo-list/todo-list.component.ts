import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	tasks: Task[];

	constructor() { }

	ngOnInit() {
		this.tasks = [
			<Task>{
				name: "Test1"
			},	
			<Task>{
				name: "Test2"
			}	
		]
	}

}

interface Task {
	name: string;
}
