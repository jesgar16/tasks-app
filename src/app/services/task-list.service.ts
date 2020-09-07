import { Injectable } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';
import { StorageService } from './storage.service';

const taskListStoragekey = 'Task_List';

const defaultTaskList = [
  { title: 'Socializar requerimientos con el cliente.' },
  { title: 'Diseñar base de datos.' },
  { title: 'Definir tipo de aplicación.' },
  { title: 'Socializar proyecto con el equipo' }
];

@Injectable()
export class TaskListService {

  taskList: TaskItem[];

  constructor(private storageService: StorageService) { 
    this.taskList =
      storageService.getData(taskListStoragekey) || defaultTaskList;
  }

  saveList() {
    this.storageService.setData(taskListStoragekey, this.taskList);
  }

  addItem(item: TaskItem) {
    this.taskList.push(item);
    this.saveList();
  }

  updateItem(item, changes) {
    const index = this.taskList.indexOf(item);
    this.taskList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item) {
    const index = this.taskList.indexOf(item);
    this.taskList.splice(index, 1);
    this.saveList();
  }
  
  getTaskList() {
    return this.taskList;
  }
  
}
