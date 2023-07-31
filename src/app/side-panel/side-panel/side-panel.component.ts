import { Component, OnInit, HostListener } from '@angular/core';

import { TimelineDivisionBlock } from '../../interfaces';
import { TimelineService } from '../../timeline.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor(private t: TimelineService) { }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.vOffset = this.t.currentScrollPos();
  }

  timeline: TimelineDivisionBlock[] = this.t.getTimeline();
  open: boolean = false;
  vOffset: number = 0;

  ngOnInit(): void {
  }

  togglePanel(): void {
    this.open = !this.open;
  }

}
