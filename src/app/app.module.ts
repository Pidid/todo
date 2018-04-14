import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		TodoListComponent,
		EditTaskDialogComponent
	],
	entryComponents: [
		EditTaskDialogComponent
	],
  	imports: [
		MatToolbarModule,
		MatCardModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
