import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { TimelineDivision, TimelineDivisionBlock } from './interfaces';
import { Timeline } from './data/timeline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private scroller: ViewportScroller) { }

  private timeline: TimelineDivisionBlock[] = this.constructTimeline();

  private constructTimeline(): TimelineDivisionBlock[] {
    return Timeline.map(eon => this.constructDivisionBlock(eon, []));
  }

  private constructDivisionBlock(d: TimelineDivision, anc: TimelineDivision[]): TimelineDivisionBlock {

    let length: number = d.subdivisions.length;

    let line: TimelineDivision[] = anc.slice();
    line.push(d);

    return {
      division: d,
      ancestors: anc,
      collapsed: d.type != 'Eon',
      showSummary: d.type != 'Eon' && !length,
      spCollapsed: d.type != 'Eon',
      duration: this.divisionDurationLines(d),
      subBlocks: length ? d.subdivisions.map(s => this.constructDivisionBlock(s, line)) : []
    }
  }

  private divisionDurationLines(d: TimelineDivision): {normal: string[], inverse: string[]} {
    return {
      normal: [
        d.start + (d.end > 0 ? ' - ' + d.end : ' Million Years Ago - '),
        d.end > 0 ? 'Million Years Ago' : 'Present Time'
      ],
      inverse: [
        d.end > 0 ? d.end + ' - ' + d.start : 'Present Time - ',
        d.end > 0 ? 'Million Years Ago' : d.start + ' Million Years Ago'
      ]
    }
  }

  private invertDivsisionGroup(blocks: TimelineDivisionBlock[]): void {
    blocks.reverse();
    blocks.forEach(block => this.invertDivsisionGroup(block.subBlocks));
  }

  private findBlock(name: string, group: TimelineDivisionBlock[]): TimelineDivisionBlock | undefined {

    let b: TimelineDivisionBlock | undefined;
   
    group.forEach(block => {
      if (b) return;
      if (block.division.name == name) b = block;
      else b = this.findBlock(name, block.subBlocks);
    });

    return b;
  }

  private expandBlockAncestors(block: TimelineDivisionBlock, group: TimelineDivisionBlock[]): void {
    group.forEach(b => {
      if (block.ancestors.map(a => a.name).includes(b.division.name)) {
        b.collapsed = false;
        this.expandBlockAncestors(block, b.subBlocks);
      }
    });
  }

  public getTimeline(): TimelineDivisionBlock[] {
    return this.timeline;
  }

  public invertTimeline(): void {
    this.invertDivsisionGroup(this.timeline);
  }

  public currentScrollPos(): number {
    return this.scroller.getScrollPosition()[1];
  }

  public navigateToBlock(name: string): void {

    let block = this.findBlock(name, this.timeline);
    if (!block) return;

    this.expandBlockAncestors(block, this.timeline);
    block.collapsed = false;

    setTimeout (() => {
      this.scroller.scrollToAnchor(block!.division.name.toLowerCase());
    }, 100);
  }

}
