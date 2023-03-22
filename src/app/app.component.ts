import { Component, OnInit } from '@angular/core';

import { EonContainer, EraContainer, PeriodContainer } from './data/interfaces'
import { Timeline } from './data/timeline'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  timeline = Timeline.reverse();

  eons: EonContainer[] = [];

  ngOnInit() {
    this.constructEonContainers();
  }

  constructEonContainers(): void {
    this.eons = this.timeline.map(eon => ({
        name: eon.name,
        start: eon.start,
        end: eon.end,
        eras: eon.eras,
        description: eon.description,
        showEras: false,
        eraContainers: eon.eras.reverse().map(era => ({
          name: era.name,
          start: era.start,
          end: era.end,
          periods: era.periods,
          description: era.description,
          showPeriods: false,
          periodContainers: era.periods.reverse().map(period => ({
            name: period.name,
            start: period.start,
            end: period.end,
            epochs: period.epochs.reverse(),
            description: period.description,
            showEpochs: false
          }))
        }))
    }))
  }

  toggleEras(eonName: string): void {

    let eon: EonContainer | undefined = 
      this.eons.find(eon => eon.name == eonName);
    if (eon === undefined) return;

    eon.showEras = !eon.showEras;
  }

  togglePeriods(eonName: string, eraName: string): void {

    let eon: EonContainer | undefined = 
      this.eons.find(eon => eon.name == eonName);
    if (eon === undefined) return;

    let era: EraContainer | undefined = 
      eon.eraContainers.find(era => era.name == eraName);
    if (era === undefined) return;

    era.showPeriods = !era.showPeriods;
  }

  toggleEpochs(eonName: string, eraName: string, periodName: string): void {

    let eon: EonContainer | undefined = 
      this.eons.find(eon => eon.name == eonName);
    if (eon === undefined) return;

    let era: EraContainer | undefined = 
      eon.eraContainers.find(era => era.name == eraName);
    if (era === undefined) return;

    let period: PeriodContainer | undefined = 
      era.periodContainers.find(period => period.name == periodName);
    if (period === undefined) return;

    period.showEpochs = !period.showEpochs;
  }

}
