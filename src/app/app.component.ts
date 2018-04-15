import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	color: string;

	constructor(public dialog: MatDialog) {

	}

	ngOnInit() {
		this.color = "358735";
	}

	openSettings() {
		var dialogRef = this.dialog.open(SettingsDialogComponent, {
			width: "500px"
		});

		dialogRef.componentInstance.onPickColor.subscribe((e) => {
			
		});
	}

	title = 'app';
}
