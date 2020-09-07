import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}