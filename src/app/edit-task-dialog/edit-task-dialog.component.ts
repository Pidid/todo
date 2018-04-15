import { Component, OnInit, Inject, HostListener } from '@angular/core';
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

	@HostListener("keypress", ["$event"])
	public onKeyPress(event: KeyboardEvent) {
		//TODO: Move this logic into a directive
		var fromTextArea = event.srcElement.nodeName.toLocaleLowerCase() == "textarea";
		if(event.keyCode == 13 && !fromTextArea)
			 this.submit();
	}

	ngOnInit() {

	}

	submit() {
		this.dialog.close();
	}
}
