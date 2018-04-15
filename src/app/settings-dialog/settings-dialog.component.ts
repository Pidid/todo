import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../task.service';
import { SettingsService } from '../settings.service';
import { Settings } from '../models/settings';
import { Color } from '../models/color';

@Component({
	selector: 'settings-dialog',
	templateUrl: './settings-dialog.component.html',
	styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {
	@Output() onPickColor = new EventEmitter<Color>();
	settings: Settings;
	colors: Color[];
	selectedColor: Color;

	constructor(public dialog: MatDialogRef<SettingsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public taskService: TaskService,
		public settingsService: SettingsService) {

	}

	ngOnInit() {
		this.settings = this.settingsService.getSettings();
		this.colors = this.settings.colors;
		this.colors = this.colors.concat(this.settingsService.getDefaultColors());
		if(this.settings.selectedColor)
			this.selectedColor = this.settings.selectedColor;
		else
			this.selectedColor = this.colors[0];
	}

	pickColor(color: Color) {
		this.settings.selectedColor = color;
		this.onPickColor.emit(color);
		this.settingsService.saveSettings(this.settings);
	}

	clearTasks() {
		this.taskService.saveTasks([]);
		this.dialog.close();
	}

}
