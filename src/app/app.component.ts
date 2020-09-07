import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Tareas diarias
    </h1>

    <app-list-manager></app-list-manager>
  `,

  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'app';

}

