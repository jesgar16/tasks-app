import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Component({
  selector: 'app-list-manager',
  template: `
     <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let taskItem of taskList">
        <app-task-item [item]="taskItem"></app-task-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  
  taskList: TaskItem[] = [
    { title: 'Socializar requerimientos con el cliente.' },
    { title: 'Diseñar base de datos.' },
    { title: 'Definir tipo de aplicación.' },
    { title: 'Socializar proyecto con el equipo' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(title: string) {
    this.taskList.push({ title });
  }

}
