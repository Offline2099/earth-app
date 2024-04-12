import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-boundary',
  templateUrl: './timeline-boundary.component.html',
  styleUrls: ['./timeline-boundary.component.css']
})
export class TimelineBoundaryComponent {

  @Input() value!: number;

  boundaryText: string = '';

  ngOnChanges(): void {
    this.formBoundaryText();
  }

  formBoundaryText(): void {
    if (this.value == 0) 
      this.boundaryText = 'Present Time';
    else 
      this.boundaryText = `≈ ${this.value} Million Years Ago`;
  }

}
