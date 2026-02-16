import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  // also works without the constructor, but you can use it to inject services
  constructor() {}

  // when you want the run when the component loads, you can use ngOnInit
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}
