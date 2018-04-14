import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { Task } from '../models/task';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	static latestId = 0;
	tasks: Task[];

	constructor(public dialog: MatDialog) {

	}

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

	editTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		var dialogRef = this.dialog.open(EditTaskDialogComponent, {
			width: "400px",
			data: task
		});
	}

	static getId() {
		return TodoListComponent.latestId++;
	}

}