import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // use Output() to make the button reusable. bring in an Event Emitter
  onClick() {
    // alert("Me clicked! Yah man!")
    this.btnClick.emit();
  }

}
