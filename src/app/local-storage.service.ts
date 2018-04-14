import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	constructor() { 

	}

	//TODO: There is a possibility to overwrite data on accident if multiple components or services use this method
	write(key: any, data: any) {
		localStorage.setItem(key.toString(), JSON.stringify(data));
	}

	read<T>(key: any): any {
		return <T>JSON.parse(localStorage.getItem(key.toString()));
	}

	delete(key: any) {
		localStorage.removeItem(key.toString());
	}
}