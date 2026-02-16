import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'bot-home',
//   template: ` <p class="red">Inline Home Works!</p> `,
//   styles: [
//     `
//       .red {
//         color: red;
//         background-color: black;
//       }
//     `,
//   ],
// })
@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  // life cycle hook
  ngOnInit(): void {

  }
}
