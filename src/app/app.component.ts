import { Component } from '@angular/core';

@Component({
  selector: 'hb-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title | hbtranslate}}!
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'hb';
}
