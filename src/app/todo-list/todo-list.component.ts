import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
	@Input() color: string;
	static latestId = 0;
	tasks: Task[];

	constructor(public dialog: MatDialog, public taskService: TaskService) {
		
	}

	ngOnInit() {
		this.tasks = this.taskService.getTasks() || [];
		if(this.tasks.length > 0) {
			var ids = this.tasks.map(task => task.id);
			TodoListComponent.latestId = Math.max.apply(null, ids);
		}
		else
			TodoListComponent.latestId = 0;

		this.color = '#' + this.color;
	}

	addTask() {
		this.tasks.push(<Task>{
			id: TodoListComponent.getId(),
			name: "",
			completed: false
		});
		this.save();
	}

	removeTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		var taskIndex = this.tasks.indexOf(task);
		if(task)
			this.tasks.splice(taskIndex, 1);
		this.save();
	}

	toggleTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		task.completed = !task.completed;
		this.save();
	}

	editTask(id: number) {
		var task = this.tasks.find(task => task.id == id);
		var dialogRef = this.dialog.open(EditTaskDialogComponent, {
			width: "400px",
			data: task
		});
		this.save();
	}

	//Move save functionality into an observable on the tasks array
	save() {
		this.taskService.saveTasks(this.tasks);
	}

	static getId() {
		TodoListComponent.latestId++;
		return TodoListComponent.latestId;
	}

}