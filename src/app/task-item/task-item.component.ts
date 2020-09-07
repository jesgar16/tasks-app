import { Component, Input, OnInit } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Component({
  selector: 'app-task-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item: TaskItem;

  constructor() { }

  ngOnInit() {
  }

}