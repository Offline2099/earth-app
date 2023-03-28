import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timeline-boundary',
  templateUrl: './timeline-boundary.component.html',
  styleUrls: ['./timeline-boundary.component.css']
})
export class TimelineBoundaryComponent implements OnInit, OnChanges {

  @Input() value!: number;

  boundaryText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.formBoundaryText();
  }

  ngOnChanges(): void {
    this.formBoundaryText();
  }

  formBoundaryText(): void {
    if (this.value == 0) 
      this.boundaryText = 'Present Time';
    else 
      this.boundaryText = '≈ ' + this.value + ' Million Years Ago';
  }

}
