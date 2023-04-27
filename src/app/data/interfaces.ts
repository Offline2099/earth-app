
// Timeline Divisions (Eon, Era, Period, Epoch)

export interface Division {
  type: string;
  name: string;
  start: number;
  end: number;
  image?: boolean;
  description: string[];
  subdivisions: Division[];
}

// Timeline Division Container State

export interface DivisionContainer extends Division {
  showSubdivisions: boolean;
  sidePanelBlockOpen: boolean;
  subdivisionContainers: DivisionContainer[];
}
