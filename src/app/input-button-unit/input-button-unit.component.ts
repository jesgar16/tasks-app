import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="task-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue($event.target.value)
      ">
    <button class="btn btn-lg" (click)="submitValue(inputElementRef.value)">
      <i class="fa fa-plus"></i>
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}