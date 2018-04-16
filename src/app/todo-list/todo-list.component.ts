import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Color } from '../models/color';

//TODO: Add a place in the template for task descriptions
@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
	@Input() color: Color;

	static latestId = 0;
	tasks: Task[];
	hex: string;

	constructor(private dialog: MatDialog, private taskService: TaskService) {
		
	}

	ngOnInit() {
		this.tasks = this.taskService.getTasks() || [];
	}

	addTask() {
		this.tasks.push(<Task>{
			id: this.taskService.getId(),
			name: "",
			completed: false,
			focus: true
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
		dialogRef.afterClosed().subscribe(() => {
			this.save();
		});
	}

	save() {
		this.taskService.saveTasks(this.tasks);
	}

	reloadTasks() {
		this.tasks = this.taskService.getTasks();
	}
}