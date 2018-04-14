import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../models/task';

@Component({
	selector: 'edit-task-dialog',
	templateUrl: './edit-task-dialog.component.html',
	styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

	constructor(public dialog: MatDialogRef<EditTaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public task: Task) 
	{

	}

	ngOnInit() {
	}

	submit() {
		this.dialog.close();
	}
}
