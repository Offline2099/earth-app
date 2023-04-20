import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-timeline-button',
  templateUrl: './timeline-button.component.html',
  styleUrls: ['./timeline-button.component.css']
})
export class TimelineButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() text2?: string = '';
  @Input() blockType?: string = '';
  @Input() buttonType?: string = '';

  @HostBinding('class') class: string = '';

  constructor() { }

  ngOnInit(): void {
    this.class = this.blockType ? 'type-' + this.blockType : '';
  }

}
