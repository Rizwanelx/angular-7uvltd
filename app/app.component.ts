import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <infinite-scroll-list></infinite-scroll-list>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
}
