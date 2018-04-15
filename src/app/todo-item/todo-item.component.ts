import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
	selector: 'todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@Input() color: string;
	@Input() task: Task;
	@Output() remove = new EventEmitter();
	@Output() edit = new EventEmitter();
	@Output() save = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

}
