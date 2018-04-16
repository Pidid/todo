import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../services/task.service';
import { SettingsService } from '../services/settings.service';
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

	constructor(public dialog: MatDialogRef<SettingsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public taskService: TaskService,
		public settingsService: SettingsService) {

	}

	ngOnInit() {
		this.settings = this.settingsService.getSettings();
	}

	pickColor(color: Color) {
		this.settings.selectedColor = color;
		this.onPickColor.emit(color);

		this.settingsService.saveSettings(this.settings);
	}

	addColor(color: Color) {
		this.settings.colors.push(color);
		this.settingsService.saveSettings(this.settings);

		this.pickColor(color);
	}

	deleteColor(color: Color) {
		var colorIndex = this.settings.colors.findIndex(c => c.hex == color.hex);
		this.settings.colors.splice(colorIndex, 1);

		this.pickColor(this.settings.colors[0]);
	}

	clearTasks() {
		this.taskService.saveTasks([]);
		this.dialog.close();
	}

	resetColors() {
		this.settings.colors = this.settingsService.getDefaultColors();
		this.pickColor(this.settings.colors[0]);

		this.settingsService.saveSettings(this.settings);
		this.dialog.close();
	}

}
