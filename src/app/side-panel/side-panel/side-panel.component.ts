import { Component, HostListener } from '@angular/core';

import { TimelineDivisionBlock } from '../../interfaces';
import { TimelineService } from '../../timeline.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {

  constructor(private t: TimelineService) { }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.vOffset = this.t.currentScrollPos();
  }

  timeline: TimelineDivisionBlock[] = this.t.getTimeline();
  open: boolean = false;
  vOffset: number = 0;

  togglePanel(): void {
    this.open = !this.open;
  }

}
