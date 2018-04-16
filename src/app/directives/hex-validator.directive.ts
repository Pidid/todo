import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[hexValidator]',
	providers: [{provide: NG_VALIDATORS, useExisting: HexValidatorDirective, multi: true}]
})
export class HexValidatorDirective implements Validator {

	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		var invalid = false;
		if(control.value !== null) {
			var controlValue = <string>control.value;
			invalid = controlValue.length !== 6 || controlValue.toLocaleLowerCase().match("[g-z]") !== null;
		}

		return invalid ? { "invalidHex": { value: control.value } } : null;
	}

}
