import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { Division, DivisionContainer } from './data/interfaces';
import { Timeline } from './data/timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eons: DivisionContainer[] = [];

  reverseState: boolean = false;
  controlButtons: string[] = ['Chronological', 'Inversed'];

  sidePanelOpen: boolean = false;
  verticalOffset: number = 0;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
    this.constructDivsisionContainers();
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.verticalOffset = 
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  constructDivsisionContainers(): void {
    this.eons = Timeline.map(eon => this.constructContainer(eon));
  }

  constructContainer(d: Division): DivisionContainer {
    return {
      type: d.type,
      name: d.name,
      start: d.start,
      end: d.end,
      subdivisions: d.subdivisions,
      description: d.description,
      image: d.image,
      showSubdivisions: false,
      sidePanelBlockOpen: false,
      subdivisionContainers: 
        d.subdivisions.length ? d.subdivisions.map(s => this.constructContainer(s)) : []
    }
  }

  reverseDivsisionContainers(containers: DivisionContainer[]): void {
    containers.reverse();
    containers.forEach(container => this.reverseDivsisionContainers(container.subdivisionContainers));
  }

  setReverseState(state: boolean): void {
    if (this.reverseState != state) {
      this.reverseState = state;
      this.reverseDivsisionContainers(this.eons);
    }
  }

  toggleSidePanel(): void {
    this.sidePanelOpen = !this.sidePanelOpen;
  }

  navigateToDivision(containers: DivisionContainer[], name: string): void {
    this.sidePanelOpen = false;
    containers.forEach(d => {
      if (d.name == name) {
        let timer: ReturnType<typeof setTimeout> =
          setTimeout(() => {this.scroller.scrollToAnchor(name.toLowerCase())}, 100);
        d.showSubdivisions = false;
        return;
      }
      if (this.getSubdivisionNameList(d).includes(name)) {
        d.showSubdivisions = true;
        this.navigateToDivision(d.subdivisionContainers, name);
      }
    })
  }

  getSubdivisionNameList(division: DivisionContainer): string[] {
    let list: string[] = [];
    if (!division.subdivisionContainers.length) return [];
    division.subdivisionContainers.forEach(subdivision => {
      list.push(subdivision.name);
    });
    division.subdivisionContainers.forEach(subdivision => {
      if (!subdivision.subdivisionContainers.length) return;
      list.push(...this.getSubdivisionNameList(subdivision));
    });
    return list;
  }

}
