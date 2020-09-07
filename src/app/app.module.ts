import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TaskListService } from './services/task-list.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TaskItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
