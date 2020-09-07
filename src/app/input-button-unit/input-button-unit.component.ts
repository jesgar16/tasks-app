import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="task-input form-control-sm"
       autofocus
       #inputElementRef
       [value]=""
       placeholder="Ingresa tu tarea"
       (keyup.enter)="submitValue($event.target.value)
      ">
    <button class="btn btn-sm btn-primary"
      title="Agregar tarea" (click)="submitValue(inputElementRef.value)">
      <i class="fa fa-plus"></i>
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}