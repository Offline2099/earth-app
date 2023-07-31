import { Component, OnInit } from '@angular/core';

import { TimelineDivisionBlock } from '../../interfaces';
import { TimelineService } from '../../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private t: TimelineService) { }

  timeline: TimelineDivisionBlock[] = this.t.getTimeline();

  controls: string[] = ['Chronological', 'Inverse'];
  invert: boolean = false;

  ngOnInit(): void {
  }

  setTimelineState(state: boolean): void {
    if (state != this.invert) {
      this.invert = state;
      this.t.invertTimeline();
    }
  }

}
