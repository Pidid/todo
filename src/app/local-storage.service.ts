import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	constructor() { 

	}

	//TODO: There is a possibility to overwrite data on accident if multiple components or services use this method
	write(key: number, data: any) {
		localStorage.setItem(key.toString(), data);
	}

	read(key: number): any {
		return localStorage.getItem(key.toString());
	}

	delete(key: number) {
		localStorage.removeItem(key.toString());
	}
}