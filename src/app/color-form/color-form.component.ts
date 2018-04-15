import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '../models/color';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';

export class HexMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl, form: FormGroupDirective | NgForm | null): boolean {
		var invalid = true;
		if(!control.dirty)
			return false;
		if(control.value !== null) {
			var controlValue = <string>control.value;
			invalid = controlValue.length !== 6 || controlValue.toLocaleLowerCase().match("[g-z]") !== null;
		}
		return invalid;
	}
}

@Component({
	selector: 'color-form',
	templateUrl: './color-form.component.html',
	styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
	@Output() onSubmit = new EventEmitter();
	color: Color = new Color("", "");
	hexMatch = new HexMatcher();
	constructor() { 

	}

	ngOnInit() {

	}

	submit() {
		if(this.color.hex.length !== 6)
			return;
		this.onSubmit.emit(this.color);
	}

}
