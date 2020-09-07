import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Tareas diarias de: {{ title }}!
    </h1>

    <app-input-button-unit></app-input-button-unit>

    <ul>
      <li *ngFor="let taskItem of taskList">
        <app-task-item [item]="taskItem"></app-task-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'tasks-app';
  taskList = [
    { title: 'Socializar requerimientos con el cliente.' },
    { title: 'Diseñar base de datos.' },
    { title: 'Definir tipo de aplicación.' },
    { title: 'Socializar proyecto con el equipo' }
  ];
}

