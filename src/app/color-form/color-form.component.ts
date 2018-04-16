import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { Color } from '../models/color';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
	selector: 'color-form',
	templateUrl: './color-form.component.html',
	styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
	@Output() onSubmit = new EventEmitter();
	@ViewChild(NgForm) form: NgForm;
	color: Color = new Color("", "");

	constructor(public settingsService: SettingsService) {

	}

	ngOnInit() {

	}

	submit() {
		var settings = this.settingsService.getSettings();

		//TODO: Handle taken this better. Add an error message specifying the property taken
		var propertyTaken = settings.colors
			.findIndex(c => c.name == this.color.name || c.hex == this.color.hex) > -1;

		if(!this.form.valid || propertyTaken)
			return;

		this.onSubmit.emit(this.color);
		this.color = new Color("", "");
	}

}
