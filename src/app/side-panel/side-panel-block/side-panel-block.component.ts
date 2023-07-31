import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

import { TimelineDivisionBlock } from '../../interfaces';
import { TimelineService } from '../../timeline.service';

@Component({
  selector: 'app-side-panel-block',
  templateUrl: './side-panel-block.component.html',
  styleUrls: ['./side-panel-block.component.css']
})
export class SidePanelBlockComponent implements OnInit {

  constructor(private t: TimelineService) { }

  @Input() group: TimelineDivisionBlock[] = [];
  @Input() invert: boolean = false;

  @Output() togglePanel = new EventEmitter<void>();

  ngOnInit(): void {
  }

  toggleSidePanelBlock(block: TimelineDivisionBlock): void {
    block.spCollapsed = !block.spCollapsed;
  }

  toggleSidePanel(): void {
    this.togglePanel.emit();
  }

  navigateToDivision(name: string): void {
    this.toggleSidePanel();
    this.t.navigateToBlock(name);
  }

}
