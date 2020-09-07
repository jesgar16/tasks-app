import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="task-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let taskItem of taskList">
        <app-task-item [item]="taskItem" (remove)="removeItem($event)"></app-task-item>
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  taskList: TaskItem[];
  constructor(private taskListService:TaskListService) { }

  ngOnInit(): void {
    this.taskList = this.taskListService.getTaskList();
  }

  addItem(title: string) {
    this.taskListService.addItem({ title });
  }

  removeItem(item) {
    this.taskListService.deleteItem(item);
  }
}
