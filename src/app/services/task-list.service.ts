import { Injectable } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private taskList: TaskItem[] = [
    { title: 'Socializar requerimientos con el cliente.' },
    { title: 'Diseñar base de datos.' },
    { title: 'Definir tipo de aplicación.' },
    { title: 'Socializar proyecto con el equipo' }
  ];

  constructor() { }

  getTodoList() {
    return this.taskList;
  }
}
