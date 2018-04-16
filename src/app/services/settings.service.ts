import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Settings } from '../models/settings';
import { Color } from '../models/color';

@Injectable()
export class SettingsService {

	constructor(private localStorageService: LocalStorageService) {

	}

	saveSettings(settings: Settings) {
		this.localStorageService.write(SettingsService, settings);
	}

	getSettings(): Settings {
		var settings = this.localStorageService.read<Settings>(SettingsService);
		if(!settings) {
			settings = new Settings();
			this.saveSettings(settings);
		}

		if(!settings.colors || settings.colors.length < 1)
			settings.colors = this.getDefaultColors();

		if(!settings.selectedColor)
			settings.selectedColor = settings.colors[0];

		return settings;
	}

	getDefaultColors(): Color[] {
		var colors = [];
		var green = new Color("Green", "358735");
		var red = new Color("Red", "873535");
		var blue = new Color("Blue", "353587");

		colors.push(green);
		colors.push(red);
		colors.push(blue);

		return colors;
	}
}
