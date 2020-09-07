import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Component({
  selector: 'app-task-item',
  template: `
    <div class="task-item">
      <div class="todo-indicator bg-warning"></div>
        <div class="widget-content p-0">
            <div class="widget-content-wrapper">
                <div class="widget-content-left mr-2">
                  <div class="custom-checkbox custom-control">
                    <input class="custom-control-input" title="Completada" (click)="completeItem()" type="checkbox">                 
                  </div>
                </div>
                <div class="widget-content-left">
                    <div class="widget-heading">
                        <span class="task-title" [ngClass]="{'task-complete': item.completed}">
                          {{ item.title }}
                        </span> 
                    </div>
                </div>
                <div class="widget-content-right">
                 <button class="border-0 btn-transition btn btn-outline-danger" (click)="removeItem()" > 
                  <i class="fa fa-trash"></i>
                 </button>
                 </div>
            </div>
      </div>
    </div>
  `,
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item: TaskItem;
  @Output() remove: EventEmitter<TaskItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}