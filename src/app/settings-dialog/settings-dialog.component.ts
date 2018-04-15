import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../task.service';

@Component({
	selector: 'settings-dialog',
	templateUrl: './settings-dialog.component.html',
	styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {
	@Output() onPickColor = new EventEmitter<string>();

	constructor(public dialog: MatDialogRef<SettingsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public taskService: TaskService) {

	}

	ngOnInit() {

	}

	pickColor(hexColor: string) {
		this.onPickColor.emit(hexColor);
	}

	clearTasks() {
		this.taskService.saveTasks([]);
		this.dialog.close();
	}

}
