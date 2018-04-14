import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TaskService {

	constructor(public localStorageService: LocalStorageService) { 

	}

	saveTasks(tasks: Task[]) {
		this.localStorageService.write(TaskService, tasks);
	}

	getTasks(): Task[] {
		return this.localStorageService.read<Task[]>(TaskService);
	}
}
