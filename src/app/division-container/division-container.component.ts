import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { DivisionContainer } from '../data/interfaces';

@Component({
  selector: 'app-division-container',
  templateUrl: './division-container.component.html',
  styleUrls: ['./division-container.component.css']
})
export class DivisionContainerComponent implements OnInit {

  @Input() containers!: DivisionContainer[];
  @Input() division!: DivisionContainer;
  @Input() reverse: boolean = true;

  @HostBinding('attr.id') hostId: string = '';

  dType: string = '';
  dName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dType = this.division.type.toLowerCase();
    this.dName = this.division.name.toLowerCase();
    this.hostId = this.dName;
  }

  toggleSubdivisions(containers: DivisionContainer[], divisionName: string): void {

    let division: DivisionContainer | undefined = 
      containers.find(division => division.name == divisionName);

    if (division !== undefined) {
      if (!division.subdivisionContainers.length) return;
      division.showSubdivisions = !division.showSubdivisions;
    }
    else {
      containers.forEach(division => {
        if (!division.subdivisionContainers.length) return;
        this.toggleSubdivisions(division.subdivisionContainers, divisionName);
      });
    }
  }

}
