import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component'
import { Color } from './models/color';
import { SettingsService } from './services/settings.service';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@ViewChild(TodoListComponent) todoList: TodoListComponent;
	color: Color;

	constructor(public dialog: MatDialog, public settingsService: SettingsService) {

	}

	ngOnInit() {
		var settings = this.settingsService.getSettings();

		if(settings.selectedColor)
			this.color = settings.selectedColor;
		else
			this.color = this.settingsService.getDefaultColors()[0];
	}

	openSettings() {
		var dialogRef = this.dialog.open(SettingsDialogComponent, {
			width: "500px"
		});

		//TODO: Find better way to update todo list when "Clear All Tasks" button is selected
		dialogRef.beforeClose().subscribe(() => {
			this.todoList.reloadTasks();
		});

		dialogRef.componentInstance.onPickColor.subscribe((color: Color) => {
			this.color = color;
		});
	}

	title = 'app';
}
