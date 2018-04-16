import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component'
import { Color } from './models/color';
import { SettingsService } from './services/settings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

		dialogRef.componentInstance.onPickColor.subscribe((color: Color) => {
			this.color = color;
		});
	}

	title = 'app';
}
