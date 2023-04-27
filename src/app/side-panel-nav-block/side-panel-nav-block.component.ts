import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

import { DivisionContainer } from '../data/interfaces';

@Component({
  selector: 'app-side-panel-nav-block',
  templateUrl: './side-panel-nav-block.component.html',
  styleUrls: ['./side-panel-nav-block.component.css']
})
export class SidePanelNavBlockComponent implements OnInit {

  @Input() container: DivisionContainer = Object.assign({});
  @HostBinding('class') hostClass = '';
  @Output() linkClicked: EventEmitter<string> = new EventEmitter();

  dName: string = '';
  dType: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dName = this.container.name.toLowerCase();
    this.dType = this.container.type.toLowerCase();
    this.hostClass = 'background-' + this.dName;
  }

  toggleSidePanelBlock(container: DivisionContainer): void {
    container.sidePanelBlockOpen = !container.sidePanelBlockOpen;
  }

  navigateToDivision(name: string): void {
    this.linkClicked.emit(name);
  }

}
