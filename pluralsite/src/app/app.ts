import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //simports: [RouterOutlet],
  template: `
   <p class="red">inline works!!</p>
  `,
  styles:`
  .red {
    color: red;
    background: black;
  }
  `,
})
export class App {
  protected readonly title = signal('pluralsite');
}
