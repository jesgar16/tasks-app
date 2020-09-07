import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Component({
  selector: 'app-task-item',
  template: `
    <div class="task-item">
      {{ item.title }}

      <button class="btn btn-red btn-sm" (click)="removeItem()">
      <i class="fa fa-trash"></i>
    </button>

    </div>
  `,
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item: TaskItem;
  @Output() remove: EventEmitter<TaskItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.item);
  }
}