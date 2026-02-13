import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // we need to make this reuable, so we will emit an event instead of just a standalone button
  // so we need to use and event emitter to emit an event when the button is clicked, and then we can listen to that event in the parent component and do something with it
  onClick() {
    this.btnClick.emit();
  }
}
