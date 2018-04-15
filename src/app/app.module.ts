import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { LocalStorageService } from './local-storage.service';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { FocusDirective } from './focus.directive';
import { Color } from './models/color';
import { SettingsService } from './settings.service';
import { ColorFormComponent } from './color-form/color-form.component';


@NgModule({
	declarations: [
		AppComponent,
		TodoListComponent,
		EditTaskDialogComponent,
		SettingsDialogComponent,
		FocusDirective,
		ColorFormComponent
	],
	entryComponents: [
		EditTaskDialogComponent,
		SettingsDialogComponent
	],
  	imports: [
		MatToolbarModule,
		MatCardModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule
  	],
	providers: [
		  TaskService,
		  LocalStorageService,
		  SettingsService
	  ],
  	bootstrap: [AppComponent]
})
export class AppModule { }
