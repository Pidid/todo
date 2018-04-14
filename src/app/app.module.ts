import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
	declarations: [
		AppComponent,
		TodoListComponent
  	],
  	imports: [
    	BrowserModule,
		MatToolbarModule,
		MatCardModule,
		MatListModule,
		MatIconModule,
		MatButtonModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
