import { Division } from './interfaces';


const PlaceholderDescription: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum mauris, nec consectetur mauris accumsan quis.',
  'Aenean malesuada augue quam, ultricies finibus turpis ornare tincidunt. Duis bibendum sem tortor, eu cursus orci tempor eu. Nullam auctor, arcu vel dignissim rutrum, nunc massa posuere erat, a fermentum dolor ipsum sit amet est. Nulla porttitor odio a nulla vehicula, sed aliquam urna tincidunt.',
  'Cras blandit, mi vulputate tempor vulputate, est purus tristique arcu, posuere tempor odio elit quis odio. Fusce finibus massa tortor, at aliquet nisi imperdiet eu.',
  ' Aliquam eget mauris odio. Sed et sem vitae purus rutrum laoreet. Donec ut velit porttitor velit iaculis malesuada in eget nunc.',
  'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ultrices turpis ut commodo mollis. Sed gravida interdum hendrerit.',
  'Donec ut magna ac tortor ornare scelerisque. Pellentesque egestas nisl condimentum ligula sagittis posuere. Vestibulum vel massa id tellus pharetra tempor. Proin a justo sagittis tortor maximus luctus. Nulla ac iaculis tortor, at sodales neque. '
];


// Epochs

const Paleocene: Division = {
  type: 'Epoch',
  name: 'Paleocene',
  start: 66,
  end: 56,
  subdivisions: [],
  description: PlaceholderDescription
}

const Eocene: Division = {
  type: 'Epoch',
  name: 'Eocene',
  start: 56,
  end: 34,
  subdivisions: [],
  description: PlaceholderDescription
}

const Oligocene: Division = {
  type: 'Epoch',
  name: 'Oligocene',
  start: 34,
  end: 23,
  subdivisions: [],
  description: PlaceholderDescription
}

const Miocene: Division = {
  type: 'Epoch',
  name: 'Miocene',
  start: 23,
  end: 5.33,
  subdivisions: [],
  description: PlaceholderDescription
}

const Pliocene: Division = {
  type: 'Epoch',
  name: 'Pliocene',
  start: 5.33,
  end: 2.58,
  subdivisions: [],
  description: PlaceholderDescription
}

const Pleistocene: Division = {
  type: 'Epoch',
  name: 'Pleistocene',
  start: 2.58,
  end: 0.011,
  subdivisions: [],
  description: PlaceholderDescription
}

const Holocene: Division = {
  type: 'Epoch',
  name: 'Holocene',
  start: 0.011,
  end: 0,
  subdivisions: [],
  description: PlaceholderDescription
}


// Periods

const Siderian: Division = {
  type: 'Period',
  name: 'Siderian',
  start: 2500,
  end: 2300,
  subdivisions: [],
  description: PlaceholderDescription
}

const Rhyacian: Division = {
  type: 'Period',
  name: 'Rhyacian',
  start: 2300,
  end: 2050,
  subdivisions: [],
  description: PlaceholderDescription
}

const Orosirian: Division = {
  type: 'Period',
  name: 'Orosirian',
  start: 2050,
  end: 1800,
  subdivisions: [],
  description: PlaceholderDescription
}

const Statherian: Division = {
  type: 'Period',
  name: 'Statherian',
  start: 1800,
  end: 1600,
  subdivisions: [],
  description: PlaceholderDescription
}

const Calymmian: Division = {
  type: 'Period',
  name: 'Calymmian',
  start: 1600,
  end: 1400,
  subdivisions: [],
  description: PlaceholderDescription
}

const Ectasian: Division = {
  type: 'Period',
  name: 'Ectasian',
  start: 1400,
  end: 1200,
  subdivisions: [],
  description: PlaceholderDescription
}

const Stenian: Division = {
  type: 'Period',
  name: 'Stenian',
  start: 1200,
  end: 1000,
  subdivisions: [],
  description: PlaceholderDescription
}

const Tonian: Division = {
  type: 'Period',
  name: 'Tonian',
  start: 1000,
  end: 720,
  subdivisions: [],
  description: PlaceholderDescription
}

const Cryogenian: Division = {
  type: 'Period',
  name: 'Cryogenian',
  start: 720,
  end: 635,
  subdivisions: [],
  description: PlaceholderDescription
}

const Ediacaran: Division = {
  type: 'Period',
  name: 'Ediacaran',
  start: 635,
  end: 538,
  subdivisions: [],
  description: PlaceholderDescription
}

const Cambrian: Division = {
  type: 'Period',
  name: 'Cambrian',
  start: 538,
  end: 485,
  subdivisions: [],
  description: PlaceholderDescription
}

const Ordovician: Division = {
  type: 'Period',
  name: 'Ordovician',
  start: 485,
  end: 444,
  subdivisions: [],
  description: PlaceholderDescription
}

const Silurian: Division = {
  type: 'Period',
  name: 'Silurian',
  start: 444,
  end: 419,
  subdivisions: [],
  description: PlaceholderDescription
}

const Devonian: Division = {
  type: 'Period',
  name: 'Devonian',
  start: 419,
  end: 359,
  subdivisions: [],
  description: PlaceholderDescription
}

const Carboniferous: Division = {
  type: 'Period',
  name: 'Carboniferous',
  start: 359,
  end: 299,
  subdivisions: [],
  description: PlaceholderDescription
}

const Permian: Division = {
  type: 'Period',
  name: 'Permian',
  start: 299,
  end: 252,
  subdivisions: [],
  description: PlaceholderDescription
}

const Triassic: Division = {
  type: 'Period',
  name: 'Triassic',
  start: 252,
  end: 201,
  subdivisions: [],
  description: PlaceholderDescription
}

const Jurassic: Division = {
  type: 'Period',
  name: 'Jurassic',
  start: 201,
  end: 145,
  subdivisions: [],
  description: PlaceholderDescription
}

const Cretaceous: Division = {
  type: 'Period',
  name: 'Cretaceous',
  start: 145,
  end: 66,
  subdivisions: [],
  description: PlaceholderDescription
}

const Paleogene: Division = {
  type: 'Period',
  name: 'Paleogene',
  start: 66,
  end: 23,
  subdivisions: [Paleocene, Eocene, Oligocene],
  description: PlaceholderDescription
}

const Neogene: Division = {
  type: 'Period',
  name: 'Neogene',
  start: 23,
  end: 2.58,
  subdivisions: [Miocene, Pliocene],
  description: PlaceholderDescription
}

const Quaternary: Division = {
  type: 'Period',
  name: 'Quaternary',
  start: 2.58,
  end: 0,
  subdivisions: [Pleistocene, Holocene],
  description: PlaceholderDescription
}


// Eras

const Eoarchean: Division = {
  type: 'Era',
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  subdivisions: [],
  description: PlaceholderDescription
}

const Paleoarchean: Division = {
  type: 'Era',
  name: 'Paleoarchean',
  start: 3600,
  end: 3200,
  subdivisions: [],
  description: PlaceholderDescription
}

const Mesoarchean: Division = {
  type: 'Era',
  name: 'Mesoarchean',
  start: 3200,
  end: 2800,
  subdivisions: [],
  description: PlaceholderDescription
}

const Neoarchean: Division = {
  type: 'Era',
  name: 'Neoarchean',
  start: 2800,
  end: 2500,
  subdivisions: [],
  description: PlaceholderDescription
}

const Paleoproterozoic: Division = {
  type: 'Era',
  name: 'Paleoproterozoic',
  start: 2500,
  end: 1600,
  subdivisions: [Siderian, Rhyacian, Orosirian, Statherian],
  description: PlaceholderDescription
}

const Mesoproterozoic: Division = {
  type: 'Era',
  name: 'Mesoproterozoic',
  start: 1600,
  end: 1000,
  subdivisions: [Calymmian, Ectasian, Stenian],
  description: PlaceholderDescription
}

const Neoproterozoic: Division = {
  type: 'Era',
  name: 'Neoproterozoic',
  start: 1000,
  end: 538,
  subdivisions: [Tonian, Cryogenian, Ediacaran],
  description: PlaceholderDescription
}

const Paleozoic: Division = {
  type: 'Era',
  name: 'Paleozoic',
  start: 538,
  end: 252,
  subdivisions: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian],
  description: PlaceholderDescription
}

const Mesozoic: Division = {
  type: 'Era',
  name: 'Mesozoic',
  start: 252,
  end: 66,
  subdivisions: [Triassic, Jurassic, Cretaceous],
  description: PlaceholderDescription
}

const Cenozoic: Division = {
  type: 'Era',
  name: 'Cenozoic',
  start: 66,
  end: 0,
  subdivisions: [Paleogene, Neogene, Quaternary],
  description: PlaceholderDescription
}


// Eons

const Hadean: Division = {
  type: 'Eon',
  name: 'Hadean',
  start: 4567,
  end: 4000,
  subdivisions: [],
  description: PlaceholderDescription
}

const Archean: Division = {
  type: 'Eon',
  name: 'Archean',
  start: 4000,
  end: 2500,
  subdivisions: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean],
  description: PlaceholderDescription
}

const Proterozoic: Division = {
  type: 'Eon',
  name: 'Proterozoic',
  start: 2500,
  end: 538,
  subdivisions: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic],
  description: PlaceholderDescription
}

const Phanerozoic: Division = {
  type: 'Eon',
  name: 'Phanerozoic',
  start: 538,
  end: 0,
  subdivisions: [Paleozoic, Mesozoic, Cenozoic],
  description: PlaceholderDescription
}


// Timeline

export const Timeline: Division[] = [
  Hadean, Archean, Proterozoic, Phanerozoic
];
