import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component'
import { Color } from './models/color';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	color: Color;

	constructor(public dialog: MatDialog) {

	}

	ngOnInit() {
		var green = new Color("green", 358735);
		var red = new Color("red", 873535);
		this.color = red;
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
