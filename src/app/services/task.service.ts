import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TaskService {
	latestId: number;

	constructor(private localStorageService: LocalStorageService) {
	}

	saveTasks(tasks: Task[]) {
		this.localStorageService.write(TaskService, tasks);
	}

	getTasks(): Task[] {
		var tasks = this.localStorageService.read<Task[]>(TaskService);

		if(!this.latestId) {
			if(tasks.length > 0) {
				var ids = tasks.map(task => task.id);
				this.latestId = Math.max.apply(null, ids);
			}
			else
				this.latestId = 0;
		}

		return tasks;
	}

	getId() {
		this.latestId++;
		return this.latestId;
	}
}
