import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="fa fa-tasks"></i>&nbsp;Mis Tareas
      </div>
    </div>

    <app-list-manager></app-list-manager>
  `,

  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'app';

}

