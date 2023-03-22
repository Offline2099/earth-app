import { Eon, Era, Period, Epoch } from './interfaces';


const PlaceholderDescription: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum mauris, nec consectetur mauris accumsan quis.',
  'Aenean malesuada augue quam, ultricies finibus turpis ornare tincidunt. Duis bibendum sem tortor, eu cursus orci tempor eu. Nullam auctor, arcu vel dignissim rutrum, nunc massa posuere erat, a fermentum dolor ipsum sit amet est. Nulla porttitor odio a nulla vehicula, sed aliquam urna tincidunt.',
  'Cras blandit, mi vulputate tempor vulputate, est purus tristique arcu, posuere tempor odio elit quis odio. Fusce finibus massa tortor, at aliquet nisi imperdiet eu.',
  ' Aliquam eget mauris odio. Sed et sem vitae purus rutrum laoreet. Donec ut velit porttitor velit iaculis malesuada in eget nunc.',
  'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ultrices turpis ut commodo mollis. Sed gravida interdum hendrerit.',
  'Donec ut magna ac tortor ornare scelerisque. Pellentesque egestas nisl condimentum ligula sagittis posuere. Vestibulum vel massa id tellus pharetra tempor. Proin a justo sagittis tortor maximus luctus. Nulla ac iaculis tortor, at sodales neque. '
];


// Epochs

const Paleocene: Epoch = {
  name: 'Paleocene',
  start: 66,
  end: 56,
  description: PlaceholderDescription
}

const Eocene: Epoch = {
  name: 'Eocene',
  start: 56,
  end: 34,
  description: PlaceholderDescription
}

const Oligocene: Epoch = {
  name: 'Oligocene',
  start: 34,
  end: 23,
  description: PlaceholderDescription
}

const Miocene: Epoch = {
  name: 'Miocene',
  start: 23,
  end: 5.33,
  description: PlaceholderDescription
}

const Pliocene: Epoch = {
  name: 'Pliocene',
  start: 5.33,
  end: 2.58,
  description: PlaceholderDescription
}

const Pleistocene: Epoch = {
  name: 'Pleistocene',
  start: 2.58,
  end: 0.011,
  description: PlaceholderDescription
}

const Holocene: Epoch = {
  name: 'Holocene',
  start: 0.011,
  end: 0,
  description: PlaceholderDescription
}


// Periods

const Siderian: Period = {
  name: 'Siderian',
  start: 2500,
  end: 2300,
  epochs: [],
  description: PlaceholderDescription
}

const Rhyacian: Period = {
  name: 'Rhyacian',
  start: 2300,
  end: 2050,
  epochs: [],
  description: PlaceholderDescription
}

const Orosirian: Period = {
  name: 'Orosirian',
  start: 2050,
  end: 1800,
  epochs: [],
  description: PlaceholderDescription
}

const Statherian: Period = {
  name: 'Statherian',
  start: 1800,
  end: 1600,
  epochs: [],
  description: PlaceholderDescription
}

const Calymmian: Period = {
  name: 'Calymmian',
  start: 1600,
  end: 1400,
  epochs: [],
  description: PlaceholderDescription
}

const Ectasian: Period = {
  name: 'Ectasian',
  start: 1400,
  end: 1200,
  epochs: [],
  description: PlaceholderDescription
}

const Stenian: Period = {
  name: 'Stenian',
  start: 1200,
  end: 1000,
  epochs: [],
  description: PlaceholderDescription
}

const Tonian: Period = {
  name: 'Tonian',
  start: 1000,
  end: 720,
  epochs: [],
  description: PlaceholderDescription
}

const Cryogenian: Period = {
  name: 'Cryogenian',
  start: 720,
  end: 635,
  epochs: [],
  description: PlaceholderDescription
}

const Ediacaran: Period = {
  name: 'Ediacaran',
  start: 635,
  end: 538,
  epochs: [],
  description: PlaceholderDescription
}

const Cambrian: Period = {
  name: 'Cambrian',
  start: 538,
  end: 485,
  epochs: [],
  description: PlaceholderDescription
}

const Ordovician: Period = {
  name: 'Ordovician',
  start: 485,
  end: 444,
  epochs: [],
  description: PlaceholderDescription
}

const Silurian: Period = {
  name: 'Silurian',
  start: 444,
  end: 419,
  epochs: [],
  description: PlaceholderDescription
}

const Devonian: Period = {
  name: 'Devonian',
  start: 419,
  end: 359,
  epochs: [],
  description: PlaceholderDescription
}

const Carboniferous: Period = {
  name: 'Carboniferous',
  start: 359,
  end: 299,
  epochs: [],
  description: PlaceholderDescription
}

const Permian: Period = {
  name: 'Permian',
  start: 299,
  end: 252,
  epochs: [],
  description: PlaceholderDescription
}

const Triassic: Period = {
  name: 'Triassic',
  start: 252,
  end: 201,
  epochs: [],
  description: PlaceholderDescription
}

const Jurassic: Period = {
  name: 'Jurassic',
  start: 201,
  end: 145,
  epochs: [],
  description: PlaceholderDescription
}

const Cretaceous: Period = {
  name: 'Cretaceous',
  start: 145,
  end: 66,
  epochs: [],
  description: PlaceholderDescription
}

const Paleogene: Period = {
  name: 'Paleogene',
  start: 66,
  end: 23,
  epochs: [Paleocene, Eocene, Oligocene],
  description: PlaceholderDescription
}

const Neogene: Period = {
  name: 'Neogene',
  start: 23,
  end: 2.58,
  epochs: [Miocene, Pliocene],
  description: PlaceholderDescription
}

const Quaternary: Period = {
  name: 'Quaternary',
  start: 2.58,
  end: 0,
  epochs: [Pleistocene, Holocene],
  description: PlaceholderDescription
}


// Eras

const Eoarchean: Era = {
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  periods: [],
  description: PlaceholderDescription
}

const Paleoarchean: Era = {
  name: 'Paleoarchean',
  start: 3600,
  end: 3200,
  periods: [],
  description: PlaceholderDescription
}

const Mesoarchean: Era = {
  name: 'Mesoarchean',
  start: 3200,
  end: 2800,
  periods: [],
  description: PlaceholderDescription
}

const Neoarchean: Era = {
  name: 'Neoarchean',
  start: 2800,
  end: 2500,
  periods: [],
  description: PlaceholderDescription
}

const Paleoproterozoic: Era = {
  name: 'Paleoproterozoic',
  start: 2500,
  end: 1600,
  periods: [Siderian, Rhyacian, Orosirian, Statherian],
  description: PlaceholderDescription
}

const Mesoproterozoic: Era = {
  name: 'Mesoproterozoic',
  start: 1600,
  end: 1000,
  periods: [Calymmian, Ectasian, Stenian],
  description: PlaceholderDescription
}

const Neoproterozoic: Era = {
  name: 'Neoproterozoic',
  start: 1000,
  end: 538,
  periods: [Tonian, Cryogenian, Ediacaran],
  description: PlaceholderDescription
}

const Paleozoic: Era = {
  name: 'Paleozoic',
  start: 538,
  end: 252,
  periods: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian],
  description: PlaceholderDescription
}

const Mesozoic: Era = {
  name: 'Mesozoic',
  start: 252,
  end: 66,
  periods: [Triassic, Jurassic, Cretaceous],
  description: PlaceholderDescription
}

const Cenozoic: Era = {
  name: 'Cenozoic',
  start: 66,
  end: 0,
  periods: [Paleogene, Neogene, Quaternary],
  description: PlaceholderDescription
}


// Eons

const Hadean: Eon = {
  name: 'Hadean',
  start: 4567,
  end: 4000,
  eras: [],
  description: PlaceholderDescription
}

const Archean: Eon = {
  name: 'Archean',
  start: 4000,
  end: 2500,
  eras: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean],
  description: PlaceholderDescription
}

const Proterozoic: Eon = {
  name: 'Proterozoic',
  start: 2500,
  end: 538,
  eras: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic],
  description: PlaceholderDescription
}

const Phanerozoic: Eon = {
  name: 'Phanerozoic',
  start: 538,
  end: 0,
  eras: [Paleozoic, Mesozoic, Cenozoic],
  description: PlaceholderDescription
}


// Timeline

export const Timeline: Eon[] = [
  Hadean, Archean, Proterozoic, Phanerozoic
];
