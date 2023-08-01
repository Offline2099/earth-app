
/******************************************************************************
 * 
 *   Geologic Timeline Divisions
 * 
 *  - Possible Types: Eon, Era, Period, Epoch.
 *  - Start and end: measured in millions of years before present.
 * 
******************************************************************************/

export interface TimelineDivision {
  type: string;
  name: string;
  start: number;
  end: number;
  image?: boolean;
  description: string[];
  subdivisions: TimelineDivision[];
}


/******************************************************************************
 * 
 *   UI Blocks
 * 
******************************************************************************/

export interface TimelineDivisionBlock {
  division: TimelineDivision;
  ancestors: TimelineDivision[];
  collapsed: boolean;
  showSummary: boolean;
  spCollapsed: boolean;
  duration: {
    normal: string[];
    inverse: string[];
  }
  subBlocks: TimelineDivisionBlock[];
}
