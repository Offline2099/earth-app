import { Eon, Era, Period, Epoch } from './interfaces';


// Epochs

const Paleocene: Epoch = {
  name: 'Paleocene',
  start: 66,
  end: 56,
  description: []
}

const Eocene: Epoch = {
  name: 'Eocene',
  start: 56,
  end: 34,
  description: []
}

const Oligocene: Epoch = {
  name: 'Oligocene',
  start: 34,
  end: 23,
  description: []
}

const Miocene: Epoch = {
  name: 'Miocene',
  start: 23,
  end: 5.33,
  description: []
}

const Pliocene: Epoch = {
  name: 'Pliocene',
  start: 5.33,
  end: 2.58,
  description: []
}

const Pleistocene: Epoch = {
  name: 'Pleistocene',
  start: 2.58,
  end: 0.011,
  description: []
}

const Holocene: Epoch = {
  name: 'Holocene',
  start: 0.011,
  end: 0,
  description: []
}


// Periods

const Siderian: Period = {
  name: 'Siderian',
  start: 2500,
  end: 2300,
  epochs: []
}

const Rhyacian: Period = {
  name: 'Rhyacian',
  start: 2300,
  end: 2050,
  epochs: []
}

const Orosirian: Period = {
  name: 'Orosirian',
  start: 2050,
  end: 1800,
  epochs: []
}

const Statherian: Period = {
  name: 'Statherian',
  start: 1800,
  end: 1600,
  epochs: []
}

const Calymmian: Period = {
  name: 'Calymmian',
  start: 1600,
  end: 1400,
  epochs: []
}

const Ectasian: Period = {
  name: 'Ectasian',
  start: 1400,
  end: 1200,
  epochs: []
}

const Stenian: Period = {
  name: 'Stenian',
  start: 1200,
  end: 1000,
  epochs: []
}

const Tonian: Period = {
  name: 'Tonian',
  start: 1000,
  end: 720,
  epochs: []
}

const Cryogenian: Period = {
  name: 'Cryogenian',
  start: 720,
  end: 635,
  epochs: []
}

const Ediacaran: Period = {
  name: 'Ediacaran',
  start: 635,
  end: 538,
  epochs: []
}

const Cambrian: Period = {
  name: 'Cambrian',
  start: 538,
  end: 485,
  epochs: []
}

const Ordovician: Period = {
  name: 'Ordovician',
  start: 485,
  end: 444,
  epochs: []
}

const Silurian: Period = {
  name: 'Silurian',
  start: 444,
  end: 419,
  epochs: []
}

const Devonian: Period = {
  name: 'Devonian',
  start: 419,
  end: 359,
  epochs: []
}

const Carboniferous: Period = {
  name: 'Carboniferous',
  start: 359,
  end: 299,
  epochs: []
}

const Permian: Period = {
  name: 'Permian',
  start: 299,
  end: 252,
  epochs: []
}

const Triassic: Period = {
  name: 'Triassic',
  start: 252,
  end: 201,
  epochs: []
}

const Jurassic: Period = {
  name: 'Jurassic',
  start: 201,
  end: 145,
  epochs: []
}

const Cretaceous: Period = {
  name: 'Cretaceous',
  start: 145,
  end: 66,
  epochs: []
}

const Paleogene: Period = {
  name: 'Cretaceous',
  start: 66,
  end: 23,
  epochs: [Paleocene, Eocene, Oligocene]
}

const Neogene: Period = {
  name: 'Neogene',
  start: 23,
  end: 2.58,
  epochs: [Miocene, Pliocene]
}

const Quaternary: Period = {
  name: 'Quaternary',
  start: 2.58,
  end: 0,
  epochs: []
}


// Eras

const Eoarchean: Era = {
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  periods: []
}

const Paleoarchean: Era = {
  name: 'Paleoarchean',
  start: 3600,
  end: 3200,
  periods: []
}

const Mesoarchean: Era = {
  name: 'Mesoarchean',
  start: 3200,
  end: 2800,
  periods: []
}

const Neoarchean: Era = {
  name: 'Neoarchean',
  start: 2800,
  end: 2500,
  periods: []
}

const Paleoproterozoic: Era = {
  name: 'Paleoproterozoic',
  start: 2500,
  end: 1600,
  periods: [Siderian, Rhyacian, Orosirian, Statherian]
}

const Mesoproterozoic: Era = {
  name: 'Mesoproterozoic',
  start: 1600,
  end: 1000,
  periods: [Calymmian, Ectasian, Stenian]
}

const Neoproterozoic: Era = {
  name: 'Neoproterozoic',
  start: 1000,
  end: 538,
  periods: [Tonian, Cryogenian, Ediacaran]
}

const Paleozoic: Era = {
  name: 'Paleozoic',
  start: 538,
  end: 252,
  periods: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian]
}

const Mesozoic: Era = {
  name: 'Mesozoic',
  start: 252,
  end: 66,
  periods: [Triassic, Jurassic, Cretaceous]
}

const Cenozoic: Era = {
  name: 'Cenozoic',
  start: 66,
  end: 0,
  periods: [Paleogene, Neogene, Quaternary]
}


// Eons

const Hadean: Eon = {
  name: 'Hadean',
  start: 4567,
  end: 4000,
  eras: []
}

const Archean: Eon = {
  name: 'Archean',
  start: 4000,
  end: 2500,
  eras: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean]
}

const Proterozoic: Eon = {
  name: 'Proterozoic',
  start: 2500,
  end: 538,
  eras: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic]
}

const Phanerozoic: Eon = {
  name: 'Phanerozoic',
  start: 538,
  end: 0,
  eras: [Paleozoic, Mesozoic, Cenozoic]
}


// Timeline

export const Timeline: Eon[] = [
  Hadean, Archean, Proterozoic, Phanerozoic
];
