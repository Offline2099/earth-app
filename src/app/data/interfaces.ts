
export interface Epoch {
  name: string;
  start: number;
  end: number;
  description: string[];
}

export interface Period {
  name: string;
  start: number;
  end: number;
  epochs: Epoch[];
  description: string[];
}

export interface Era {
  name: string;
  start: number;
  end: number;
  periods: Period[];
  description: string[];
}

export interface Eon {
  name: string;
  start: number;
  end: number;
  eras: Era[];
  description: string[];
}


export interface PeriodContainer extends Period {
  showEpochs: boolean;
}

export interface EraContainer extends Era {
  showPeriods: boolean;
  periodContainers: PeriodContainer[];
}

export interface EonContainer extends Eon {
  showEras: boolean;
  eraContainers: EraContainer[];
}