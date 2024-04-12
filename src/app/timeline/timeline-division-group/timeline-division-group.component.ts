import { Component, Input } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

import { TimelineDivisionBlock } from '../../interfaces';
import { TimelineService } from '../../timeline.service';

@Component({
  selector: 'app-timeline-division-group',
  templateUrl: './timeline-division-group.component.html',
  styleUrls: ['./timeline-division-group.component.css']
})
export class TimelineDivisionGroupComponent {

  constructor(private t: TimelineService) { }

  @Input() group: TimelineDivisionBlock[] = [];
  @Input() invert: boolean = false;

  toggleSummary(block: TimelineDivisionBlock): void {
    block.showSummary = !block.showSummary;
  }

  toggleBlock(block: TimelineDivisionBlock): void {
    block.collapsed = !block.collapsed;
  }

  navigateToDivision(name: string): void {
    this.t.navigateToBlock(name);
  }

}
