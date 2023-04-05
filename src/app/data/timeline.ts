import { Division } from './interfaces';


const PlaceholderDescription: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum mauris, nec consectetur mauris accumsan quis.',
  // 'Aenean malesuada augue quam, ultricies finibus turpis ornare tincidunt. Duis bibendum sem tortor, eu cursus orci tempor eu. Nullam auctor, arcu vel dignissim rutrum, nunc massa posuere erat, a fermentum dolor ipsum sit amet est. Nulla porttitor odio a nulla vehicula, sed aliquam urna tincidunt.',
  // 'Cras blandit, mi vulputate tempor vulputate, est purus tristique arcu, posuere tempor odio elit quis odio. Fusce finibus massa tortor, at aliquet nisi imperdiet eu.',
  // ' Aliquam eget mauris odio. Sed et sem vitae purus rutrum laoreet. Donec ut velit porttitor velit iaculis malesuada in eget nunc.',
  // 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ultrices turpis ut commodo mollis. Sed gravida interdum hendrerit.',
  // 'Donec ut magna ac tortor ornare scelerisque. Pellentesque egestas nisl condimentum ligula sagittis posuere. Vestibulum vel massa id tellus pharetra tempor. Proin a justo sagittis tortor maximus luctus. Nulla ac iaculis tortor, at sodales neque. '
];


// Epochs

const Paleocene: Division = {
  type: 'Epoch',
  name: 'Paleocene',
  start: 66,
  end: 56,
  subdivisions: [],
  description: [
    'The continents of the Northern Hemisphere are still connected via land bridges. South America, Antarctica, and Australia are also not completely separated yet.',
    'The climate is warm, without permanent ice sheets near the poles. Global average temperatures are about 24–25 °C.',
    'Continents are covered with dense forests, populated mainly by small creatures. Mammals rapidly diversify and fill the ecological niches vacated by the Cretaceous-Paleogene extinction. The earliest placental and marsupial mammals appear.',
    'The end of the epoch is marked by the Paleocene–Eocene Thermal Maximum, a major climatic event in which a massive amount of carbon is released into the atmosphere, causing a spike in global temperatures.'
  ]
}

const Eocene: Division = {
  type: 'Epoch',
  name: 'Eocene',
  start: 56,
  end: 34,
  subdivisions: [],
  description: [
    'Continents continue to drift towards their modern positions. Australia splits from Antarctica around 45 million years ago.',
    'The climate keeps warming until it reaches the Eocene Optimum at around 49 million years ago, then begins to coool down. Sea level reaches up to 150 m higher than modern levels.',
    'Many groups of modern mammals appear, though most animals still remain small (under 10 kg). New groups of birds evolve. Plants and marine fauna also becomes quite modern.',
    'The epoch ends with the Eocene–Oligocene extinction event (also known as Grande Coupure), affecting mostly marine and aquatic species.'
  ]
}

const Oligocene: Division = {
  type: 'Epoch',
  name: 'Oligocene',
  start: 34,
  end: 23,
  subdivisions: [],
  description: [
    'The sea which used to separate <b>Europe</b> from <b>Asia</b> disappears, a persistent land connection between the two continents establishes. The passage between <b>South America</b> and <b>Antarctica</b> possibly appears. Modern mountain ranges (such as the <b>Alps</b> and the <b>Andes</b>) are rising.',
    'A rapid cooling occures about 33.5 million years ago. An ice sheet forms in Antarctica, it keeps growing and covers the entire continent. Sea levels drop by 105 meters. The climate remains cold until about 25 million years ago, when it temporarily gets warmer.',
    'Tropical and subtropical forests recede, getting replaced by temperate forests. Open plains and deserts became more common. Grasses and flowering plants expand their reach.',
    'The cooling climate, together with the opening and closing of land bridges, leads to a reorganization of the land fauna. Modern groups of <b>mammals</b> (such as horses, rhinoceroses, camels, deer, dogs, bears, weasels, raccoons) diversify and replace previously dominant groups, such as creodonts. Largest land mammals that ever existed, such as Paraceratherium, appear in Eurasia.',
    'Many species of marine snails and clams go extinct due to the cooling, and the overall diversity of marine life diminishes. However, some new species of whales and sharks evolve.'
  ]
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
  description: [
    'The continent of <b>Ur</b> breaks apart roughly 2.4 billion years ago.',
    'Photosynthetic bacteria continue producing huge amounts of oxygen. It reacts with iron in the oceans, forming insoluble magnetite and hematite. Those minerals deposit on the ocean floor, creating layers of <b>banded iron formations</b>. The oceans cease to be green and get a modern look.',
    'With no remaining iron in the oceans to serve as an absorber, oxygen quickly builds up in the atmosphere. This is known as the <b>Great Oxidation Event</b>, dating back to about 2.44 billion years ago.',
    'As a result of rapidly increasing oxygen levels and decreasing methane concentrations, many species of <b>anaerobic</b> microorganisms (which use methane and to which oxygen is toxic) go extinct.',
    'About 2.4 billion years ago, the fraction of methane in the atmosphere decreases to trace levels. This causes a significant drop in surface temperatures, known as the <b>Huronian glaciation</b>. Several ice ages occur, during which almost the entire surface of the Earth is covered with ice.'
  ]
}

const Rhyacian: Division = {
  type: 'Period',
  name: 'Rhyacian',
  start: 2300,
  end: 2050,
  subdivisions: [],
  description: [
    'Roughly 2.1 billion years ago, the supercontinent of <b>Kenorland</b> breaks apart.',
    'The <b>Huronian glaciation</b> lasts throughout most of this period, until about 2.1 billion years ago. Intense volcanic eruptions occur around the planet, producing large quantities of carbon dioxide and other greenhouse gases. This increases the temperatures and finally ends the glaciation.',
    '<b>Cyanobacteria</b> survive the glaciation and still dominate coastal areas and marine waters.',
    'First <b>eukaryotic</b> organisms possibly appear. Such organisms have a nucleus in their cells, unlike all previously existing <b>prokaryotic</b> life forms.'
  ]
}

const Orosirian: Division = {
  type: 'Period',
  name: 'Orosirian',
  start: 2050,
  end: 1800,
  subdivisions: [],
  description: [
    'Intense motion of tectonic plates produces multiple mountain ranges around the planet.',
    'A new supercontinent, <b>Columbia</b> (also known as <b>Nuna</b>), is formed roughly 1.8 billion years ago, near the end of the period.',
    'Two large asteroid impacts occur: 2.023 billion years ago (produced a crater 300 km wide) and 1.85 billion years ago (produced a crater 250 km wide). These events, however, have no significant long-term consequences.',
    '<b>Prokaryotic</b> microorganisms, such as <b>cyanobacteria</b>, remain the predominant form of life.'    
  ]
}

const Statherian: Division = {
  type: 'Period',
  name: 'Statherian',
  start: 1800,
  end: 1600,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) further increases in size. New continental platforms and mountain ranges are forming.',
    'Oxygen levels in the atmosphere become relatively stable, remaining between 10% and 20% of modern values.',
    'The so-called <b>Boring Billion</b> begins, a time interval between 1.8 and 0.8 billion years ago, characterized by biospheric and climatic stability.',
    'Unicellular microorganisms keep evolving and diversifying both on land and in the oceans.'    
  ]
}

const Calymmian: Division = {
  type: 'Period',
  name: 'Calymmian',
  start: 1600,
  end: 1400,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) begins to break up around 1.5 billion years ago. Shallow seas appear between landmasses.',
    'The so-called <b>Boring Billion</b> continues. The atmospheric composition and climate remain stable, without significant fluctuations.',
    'Microorganisms gradually evolve and become structurally more complex. The oldest known fossils of possibly <b>eukaryotic</b> species belong to this period.'
  ]
}

const Ectasian: Division = {
  type: 'Period',
  name: 'Ectasian',
  start: 1400,
  end: 1200,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks up completely about 1.35 billion years ago. Continents continue to drift apart and grow in size. The Earth\'s crust thickens due to the deposition of rock on top of older rock.',
    'The so-called <b>Boring Billion</b> continues. The atmospheric composition and climate remain stable, without significant fluctuations.',
    'First confirmed <b>multicellular</b> organisms (predecessors of red and green algae) appear in the fossil record. This is also the oldest direct evidence of <b>eukaryotic</b> organisms.',
    'First microorganisms using <b>sexual reproduction</b> possibly appear, about 1.2 billion years ago.'
  ]
}

const Stenian: Division = {
  type: 'Period',
  name: 'Stenian',
  start: 1200,
  end: 1000,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Rodinia</b>, forms about 1.13 billion years ago. It is the largest landmass in existence up to that time, with an extensive floodplain in the center.',
    'The so-called <b>Boring Billion</b> continues. The atmospheric composition and climate remain stable, without significant fluctuations. The concentration of oxygen in the atmosphere slightly increases.',
    'The first <b>sexually reproducing</b> organism confirmed by fossils, a species of red alga, appears around 1.05 billion years ago.',
    '<b>Stromatolites</b>, layered rock formations created by microorganisms, reach maximum diversity in sediments of this period.',
    '<b>Fungi</b> in the form of slime molds possibly develop towards the end of this period.'
  ]
}

const Tonian: Division = {
  type: 'Period',
  name: 'Tonian',
  start: 1000,
  end: 720,
  image: true,
  subdivisions: [],
  description: [
    'Rifts appear across the supercontinent of <b>Rodinia</b>, starting to break it apart roughly 750 million years ago and creating new shallow seas.',
    'Multiple species of filamentous and seaweed-like <b>green algae</b> become widespread and thrive on the seafloor in shallow waters.',
    '<b>Sponges</b> appear in the oceans, found in fossils about 760 million years old. First confirmed species of <b>fungi</b> appear about 890 million years ago.',
    'First worm-like marine animals evolve, reaching up to several centimeters in size, confirmed by fossils 840-740 million years old.'
  ]
}

const Cryogenian: Division = {
  type: 'Period',
  name: 'Cryogenian',
  start: 720,
  end: 635,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Rodinia</b> finally breaks up about 700 million years ago. Landmasses become clustered around the South Pole.',
    'The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend and contract in a series of rhythmic pulses, possibly reaching as far as the equator. Such state of the climate is often called the <b>Snowball Earth</b>. What exactly caused the glaciations is still unclear.',
    'Life retreats into the oceans, unable to survive harsh conditions on land. However, the evolution of marine species continues.',
    'First <b>heterotrophic</b> organisms, such as testate amoebae, appear. Such organisms cannot produce their own food, taking nutrition from organic matter created by other species.',
    'Heterotrophic <b>plankton</b> possibly develops. It feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.'
  ]
}

const Ediacaran: Division = {
  type: 'Period',
  name: 'Ediacaran',
  start: 635,
  end: 538,
  image: true,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Pannotia</b>, forms around 630 million years ago and breaks up 570 million years ago. The landmass of <b>Gondwana</b> forms 550 million years ago.',
    'The climate remains unstable early in the period. The <b>Gaskiers glaciation</b> occurs about 579 million years ago. It is followed by warm and humid climate during the second half of the Ediacaran. Another cooling event, the <b>Baykonurian glaciation</b>, starts about 547 million years ago.',
    'A variety of multicellular life forms evolve in the oceans, including new species of <b>fungi</b>, <b>algae</b>, <b>sponges</b>, <b>sea fans</b>, <b>jellyfish</b>, and other macroscopic organisms.',
    'Complex <b>ecosystems</b> are forming, with species becoming more specialized and engaging in more inter-species interactions.',
    'Most of the Ediacaran fauna does not survive into later periods. It is still disputed whether this was caused by a mass extinction event or the species were naturally replaced by more adaptable organisms.'
  ]
}

const Cambrian: Division = {
  type: 'Period',
  name: 'Cambrian',
  start: 538,
  end: 485,
  image: true,
  subdivisions: [],
  description: [
    'The remnants of <b>Pannotia</b> (the continents of <b>Laurentia</b>, <b>Baltica</b>, and <b>Siberia</b>) continue to drift apart, forming warm shallow seas and tidal flats.',
    'Polar ice caps melt in the early Cambrian, and the climate keeps warming. The atmospheric composition remains relatively stable, with about 16% of oxygen and 4200-6000 ppm of carbon dioxide.',
    'The diversity of oceanic life vastly increases. Complex multicellular organisms (such as <b>arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, first <b>vertebrates</b>, <b>burrowing animals</b>) appear and become widespread. First <b>coral reefs</b> possibly form. This rapid burst of biospheric development is known as the <b>Cambrian Explosion</b>.',
    'Life forms on land remain mostly limited to microbial ecosystems, possibly with <b>algae</b> and <b>lichens</b> present. First freshwater ecosystems are forming.',
    'Two extinction events occur: <b>End-Botomian</b> (517 million years ago) and <b>Dresbachian</b> (502 million years ago). Each of the events affects about 40-50% of marine species. The causes are still disputed.',
    'About 488 million years ago, the <b>Cambrian–Ordovician extinction event</b> eliminates many species of <b>brachiopods</b> and severely reduces the number of <b>trilobites</b>.'
  ]
}

const Ordovician: Division = {
  type: 'Period',
  name: 'Ordovician',
  start: 485,
  end: 444,
  image: true,
  subdivisions: [],
  description: [
    'The warming trend of the climate reverses, and the planet is gradually cooling. Polar ice caps are forming once again. The <b>Late Ordovician glaciation</b> happens near the end of the period.',
    'Oceanic life continues to flourish, with <b>molluscs</b> and <b>arthropods</b> being the predominant groups. It considerably expands during the <b>Great Ordovician Biodiversification Event</b>, with multiple species of <b>fish</b> evolving.',
    'First confirmed <b>plants</b> that use <b>spores</b> for reproduction appear on land. Some fungi reach the size of 15 centimeters. First <b>insects</b> appear.',
    'The <b>Ordovician meteor event</b> occurs about 467 million years ago, with a brief dramatic increase in the rate at which meteorites fall to Earth. Causes of the event are unclear.',
    'The <b>Late Ordovician mass extinction</b> occurs roughly 443 million years ago. It eliminates nearly 85% of marine species, becoming the second-largest known extinction event in the Earth\'s history.'
  ]
}

const Silurian: Division = {
  type: 'Period',
  name: 'Silurian',
  start: 444,
  end: 419,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> covers a large portion of the Southern Hemisphere. Smaller landmasses (<b>Laurentia</b>, <b>Baltica</b>, <b>Siberia</b>, and <b>Avalonia</b>) drift together near the equator. A large ocean occupies most of the Northern Hemisphere. ',
    'The climate becomes warmer, polar ice caps retreat. However, the temperatures undergo significant short-term fluctuations. Oxygen levels in the atmosphere slightly increase and remain close to 19%.',
    'Marine life recovers from the <b>Late Ordovician mass extinction</b>. Multiple species of <b>jawed fish</b> and <b>bony fish</b> appear in the oceans. Sea scorpions reach several meters in length.',
    'First <b>vascular plants</b> (which have specialized tissues for conducting water and minerals) evolve from more primitive land plants. Multiple new species of land fungi emerge.',
    'First <b>terrestrial animals</b> (living exclusively on land) appear. Three groups of <b>arthropods</b> become fully terrestrialized: <b>myriapods</b> (centipede-like animals), <b>arachnids</b> (spider-like animals), and <b>hexapods</b> (six-legged animals).'
  ]
}

const Devonian: Division = {
  type: 'Period',
  name: 'Devonian',
  start: 419,
  end: 359,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> remains the largest landmass, located entirely within the Southern Hemisphere. The continent of <b>Laurussia</b> (also known as <b>Euramerica</b>) forms northwest of Gondwana through the collision of <b>Laurentia</b> and <b>Baltica</b>.',
    'The climate is relatively warm and arid, cooling towards the middle of the period and warming again towards its end. Average surface temperatures of the ocean remain close to 30 °C. Oxygen levels in the atmosphere increase from 20% to 27%.',
    '<b>Fish</b> reaches substantial diversity and dominates aquatic environments. <b>Trilobites</b> and <b>crinoids</b> remain common, first <b>ammonites</b> appear.',
    'Several groups of land plants evolve to grow leaves and roots. First <b>trees</b> and <b>ferns</b> appear. Plants spread rapidly across continents, forming extensive forests. This is sometimes referred to as the <b>Devonian Explosion</b>.',
    'First <b>tetrapods</b> (the ancestors of four-legged animals) appear in the fossil record. They begin adapting to walk on land, as their strong fins gradually evolve into legs.',
    'The <b>Late Devonian extinction</b>, a series of extinction events between 375 and 372 million years ago, significantly impacts marine life, killing off many species of animals living in warm shallow waters.',
    'Another mass extinction, the <b>Hangenberg event</b>, occurs 359 million years ago, mostly affecting aquatic life and coral reefs.'
  ]
}

const Carboniferous: Division = {
  type: 'Period',
  name: 'Carboniferous',
  start: 359,
  end: 299,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> collides with <b>Laurussia</b> (<b>Euramerica</b>), forming the supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate is warm early in the period. Trees keep consuming carbon dioxide and producing oxygen. This increases the atmospheric oxygen levels to 35% and drops the carbon dioxide levels roughly 8 times, causing gradual cooling of the planet.',
    'Tropical swamps and rainforests cover large parts of the continents. Fallen trees pile up, leading to the formation of coal.',
    '<b>Tetrapods</b> (four-legged vertebrates) significantly diversify, with the appearance of lizard-like, snake-like, and crocodile-like animals. <b>Amphibians</b> and <b>reptiles</b> become widespread. <b>Winged insects</b> appear, with some species reaching 70 cm in size.',
    '<b>Invertebrates</b> continue to thrive in the oceans, heavily represented in the fossil record. A wide variety of <b>sharks</b> appear. <b>Freshwater fish</b> also becomes abundant.',
    'Around 305 million years ago, decreased global temperatures cause significant changes in terrestrial ecosystems. This event is known as <b>Carboniferous Rainforest Collapse</b>.'
  ]
}

const Permian: Division = {
  type: 'Period',
  name: 'Permian',
  start: 299,
  end: 252,
  image: true,
  subdivisions: [],
  description: [
    'All major landmasses are collected into a single supercontinent of <b>Pangaea</b> that spans from the equator to the poles. It experiences continental climate with extreme variations of heat and cold. Deserts cover large areas.',
    'Global temperatures remain relatively low near the beginning of the period, with polar ice caps present. Two major warmings occur: the <b>Artinskian Warming Event</b> (287 million years ago), and the <b>Emeishan Thermal Excursion</b> (260 million years ago). The climate becomes warm and dry.',
    '<b>Amphibians</b> become less common, replaced by <b>synapsids</b> (mammal-like reptiles), including <b>therapsids</b> (ancestors and relatives of modern mammals). Multiple new species of insects appear. Marine life experiences rather little changes compared to previous periods.',
    'Two extinction events occur: <b>Olson\'s Extinction</b> (273 million years ago) and the <b>Capitanian mass extinction</b> (262-259 million years ago). Although some ecosystems are significantly impacted, the biodiversity quickly recovers.',
    'The <b>Permian-Triassic extinction event</b> (also known as <b>Great Dying</b>) occurs 252 million years ago and becomes the largest mass extinction in Earth\'s history. It eliminates up to 95% of marine species and 70% of all land organisms. Possible causes include the eruption of Siberian Traps, an asteroid impact, or a combination of factors. '
  ]
}

const Triassic: Division = {
  type: 'Period',
  name: 'Triassic',
  start: 252,
  end: 201,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Pangaea</b> remains intact, drifting slowly northward.',
    'The climate is generally hot and dry, with deserts near the equator and temperate forests in the polar regions. Oxygen levels are continually decreasing, reaching 20%.',
    'Biodiversity is recovering from the <b>Permian-Triassic mass extinction</b>. The process takes 10 to 30 million years.',
    '<b>Sharks</b> dominate freshwater and marine environments. <b>Ray-finned fishes</b> rapidly diversify. Ancestors of modern amphibians, such as frogs, appear.',
    '<b>Reptiles</b> dominate on land. First <b>dinosaurs</b> appear between 245 and 233 million years ago. <b>Pterosaurs</b> (flying reptiles, first flying vertebrates) evolve about 228 million years ago. First true <b>mammals</b> appear and replace previously common mammal-like reptiles.',
    'The period ends with another mass extinction, the <b>Triassic-Jurassic extinction event</b> 201 million years ago. It eliminates nearly 25-30% of marine life (severely affecting invertebrates and marine reptiles) and multiple groups of land animals.'
  ]
}

const Jurassic: Division = {
  type: 'Period',
  name: 'Jurassic',
  start: 201,
  end: 145,
  image: true,
  subdivisions: [],
  description: [
    'Rifts appear on the supercontinent of <b>Pangaea</b>, splitting it into two separate landmasses: <b>Laurasia</b> in the north and <b>Gondwana</b> in the south.',
    'The climate remains warm, with no ice caps on the poles. Several brief cooling intervals occur. Forests grow in the polar regions, large arid expanses are common in lower latitudes. Oxygen levels remain stable near 20%.',
    '<b>Conifers</b> and <b>ferns</b> remain the most common groups of land plants. Ginkgo-like trees are also widespread.',
    '<b>Dinosaurs</b> diversify and fill the ecological niches vacated by the <b>Triassic-Jurassic extinction</b>, establishing as the predominant group of land animals. Some species reach over 30 meters in size, becoming the largest known terrestrial animals.',
    'Ancestors of birds appear, evolving from theropods (a group of dinosaur species). Ancestors of crocodiles make the transition from terrestrial to aquatic life.',
    'Large <b>marine reptiles</b>, scuh as ichthyosaurs and plesiosaurs, become common. <b>Turtles</b> significantly diversify.',
    'The <b>Toarcian Oceanic Anoxic Event</b> occurs about 183 million years ago. Reduced oxygen levels in the oceans cause the extinction of some marine invertebrates, although have rather little effect on reptiles.'
  ]
}

const Cretaceous: Division = {
  type: 'Period',
  name: 'Cretaceous',
  start: 145,
  end: 66,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> splits into several pieces that would later become the modern continents: <b>Africa</b> separates from the connected landmasses of <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>. <b>Laurasia</b> still remains largely intact in the Northern Hemisphere.',
    'The climate undergoes three major phases: warm and dry early in the period, warm and wet 125 to 85 million years ago, cool and dry near the end of the period.',
    '<b>Flowering plants</b> (angiosperms) appear. They rapidly spread and diversify, becoming the dominant group of terrestrial plants by the end of the period.',
    '<b>Dinosaurs</b> continue to dominate on land. New groups of small-sized <b>mammals</b> and <b>birds</b> emerge. Some modern <b>insects</b> (ants, termites, moths, grasshoppers) appear.',
    'Large marine reptiles, turtles, sharks, ammonites, starfish, rays, and other aquatic animals continue to thrive in the oceans.',    
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid 10-15 km wide. It wipes out all non-avian dinosaus, most other tetrapods (four-legged vertebrates) and large marine animals.'
  ]
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
  description: [
    'Starts with a large number of asteroid and comet impacts that presumably occur between 4.1 and 3.8 billion years ago, known as the <b>Late Heavy Bombardment</b>.',
    'The atmosphere has cooled to milder temperatures, although remains thick (with a surface pressure exceeding 10 modern atmospheres) and has an orange color due to high concentrations of methane, ammonia, and carbon dioxide.',
    'The planet\'s surface is mostly covered by water, with volcanoes and volcanic islands present. Oceans are green and acidic from dissolved iron compounds.',
    'Early microbial life possibly appears, utilizing methane as the primary source of energy.'
  ]
}

const Paleoarchean: Division = {
  type: 'Era',
  name: 'Paleoarchean',
  start: 3600,
  end: 3200,
  subdivisions: [],
  description: [
    'The Earth\'s <b>magnetic field</b> finally establishes around 3.5 billion years ago, preventing the planet\'s atmosphere from getting stripped away by the solar wind.',
    'Continent formation begins, with increasingly larger land masses emerging from the oceans and forming <b>Vaalbara</b>, the first supercontinent.',
    'The earliest confirmed microbial life appears, evidenced from microfossils of organisms found in rocks 3.465 billion years old.',
    'First forms of <b>cyanobacteria</b> capable of using <b>photosynthesis</b>, a process that converts the energy of light into chemical energy, possibly appear.'
  ]
}

const Mesoarchean: Division = {
  type: 'Era',
  name: 'Mesoarchean',
  start: 3200,
  end: 2800,
  subdivisions: [],
  description: [
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, breaks apart. A new continent, <b>Ur</b>, emerges.',
    'Surface temperatures further decrease and remain around 55-85 °C during most of the era. The atmosphere still has high levels of methane and carbon dioxide. The oxygen produced by bacteria quickly becomes bound as it reacts with minerals in the environment.',
    'More diverse microbial life develops. First microorganisms on land possibly appear, around 3 billion years ago.',
    'The oldest known glaciation event, the <b>Pongola glaciation</b>, occurs around 2.9 billion years ago. Polar glaciers extend up to 48 degrees of latitude.'
  ]
}

const Neoarchean: Division = {
  type: 'Era',
  name: 'Neoarchean',
  start: 2800,
  end: 2500,
  subdivisions: [],
  description: [
    'The movement of tectonic plates continues. A new supercontinent, <b>Kenorland</b>, forms about 2.7 billion years ago.',
    'Oceans are still green, with increased sulfur and molybdenum levels, and methane still prevails in the atmospheric composition.',
    'Multiple species of bacteria capable of oxygen-forming <b>photosynthesis</b> evolve, contributing to the rise of oxygen concentration in the atmosphere.',
    'Microorganisms spread on land, confirmed in 2.75 billion year old fossils. They start breaking down rock and forming first soils.'
  ]
}

const Paleoproterozoic: Division = {
  type: 'Era',
  name: 'Paleoproterozoic',
  start: 2500,
  end: 1600,
  image: true,
  subdivisions: [Siderian, Rhyacian, Orosirian, Statherian],
  description: [
    'The supercontinent of <b>Kenorland</b> breaks apart roughly 2.1 billion years ago. Tectonic plates keep moving, creating a new supercontinent, <b>Columbia</b> (also known as <b>Nuna</b>), about 1.8 billion years ago. Multiple mountain ranges and continental platforms are forming.',
    'Photosynthetic microorganisms keep producing oxygen. It reacts with minerals dissolved in the water, depositing them on the ocean floor and making the water look clear. It also accumulates in the atmosphere, causing a mass extinction of anaerobic organisms for which oxygen is toxic. This is known as the <b>Great Oxidation Event</b>.',
    'Decreased atmospheric concentrations of methane and carbon dioxide lead to lower surface temperatures. The <b>Huronian glaciation</b> lasts from about 2.4 to 2.1 billion years ago. It includes multiple ice ages, with glaciers possibly covering the entire surface of the Earth. Intense volcanism eventually produces enough greenhouse gases to end the glaciation.',
    'First possible <b>eukaryotic</b> microorganisms appear, as early as about 2.1 billion years ago. Such organisms have a nucleus in their cells, unlike all previously existing <b>prokaryotic</b> species.',
    '<b>Prokaryotic</b> unicellular organisms still remain the predominant form of life, evolving and diversifying.'
  ]
}

const Mesoproterozoic: Division = {
  type: 'Era',
  name: 'Mesoproterozoic',
  start: 1600,
  end: 1000,
  image: true,
  subdivisions: [Calymmian, Ectasian, Stenian],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks apart between 1.5 and 1.35 billion years ago. Tectonic plates keep moving, leading to the formation of a new supercontinent, <b>Rodinia</b>, about 1.13 billion years ago. The Earth\'s crust thickens, land masses grow in size.',
    'The so-called <b>Boring Billion</b> continues. The atmospheric composition and climate remain stable, without significant fluctuations. No glaciations occur during this era.',
    'Microorganisms become structurally more complex. First confirmed <b>eukaryotic</b> species (which have a nucleus in their cells) appear in the fossil record. First <b>multicellular</b> organisms appear around 1.2 billion years ago, or possibly earlier.',
    'First confirmed organisms using <b>sexual reproduction</b> appear, at least 1.05 billion years ago.',
    'New forms of life, such as <b>fungi</b> in the shape of mold, possibly emerge by the end of this era.'
  ]
}

const Neoproterozoic: Division = {
  type: 'Era',
  name: 'Neoproterozoic',
  start: 1000,
  end: 538,
  image: true,
  subdivisions: [Tonian, Cryogenian, Ediacaran],
  description: [
    'The supercontinent of <b>Rodinia</b> breaks up 750-700 million years ago. A new supercontinent, <b>Pannotia</b>, exists between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'The <b>Boring Billion</b> finally ends. The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend all the way to the equator, which is often referred to as the <b>Snowball Earth</b>.',
    'Temperatures rise and remain warm towards the end of the era, yet two more glaciations happen: <b>Gaskiers</b> (579 million years ago) and <b>Baykonurian</b> (547 million years ago).',
    'Life keeps evolving in the oceans. New multicellular organisms appear, including some <b>fungi</b>, filamentous <b>green algae</b>, <b>sponges</b>, worm-like marine animals, <b>jellyfish</b>, and diverse <b>Ediacaran fauna</b>.',
    'First <b>heterotrophic</b> species appear. Such organisms cannot produce their own food, consuming organic matter created by other species. <b>Plankton</b> feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.',
    'Complex marine <b>ecosystems</b> are forming, with species becoming more specialized.'
  ]
}

const Paleozoic: Division = {
  type: 'Era',
  name: 'Paleozoic',
  start: 538,
  end: 252,
  image: true,
  subdivisions: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian],
  description: [
    'The continents of <b>Laurentia</b> and <b>Baltica</b>, left over from the breakup of <b>Pannotia</b>, collide again to form <b>Laurussia</b> (also known as <b>Euramerica</b>), which in turn collides with <b>Gondwana</b>, assembling the new supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate varies significantly throughout the era, alternating between warming and cooling trends. Oxygen levels keep increasing and reach the historical maximum of about 35%.',
    'The biosphere experiences dramatic evolutionary changes. Animals diversify rapidly in the oceans (<b>Cambrian Explosion</b>) and then eventually occupy the landmasses. <b>Arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, <b>fish</b>, <b>insects</b>, <b>amphibians</b>, <b>reptiles</b>, <b>tetrapods</b>, and multiple other groups of animals appear and become widespread.',
    '<b>Plants</b> appear on land and gradually evolve, forming extensive forests (<b>Devonian Explosion</b>) and providing more comfortable habitats for animals.',
    'Several extinction events occur. The era ends with the <b>Permian-Triassic mass extinction</b>, the largest one in Earth\'s history. It eliminates nearly 95% of marine life and 70% of terrestrial species.'
  ]
}

const Mesozoic: Division = {
  type: 'Era',
  name: 'Mesozoic',
  start: 252,
  end: 66,
  image: true,
  subdivisions: [Triassic, Jurassic, Cretaceous],
  description: [
    'The supercontinent of <b>Pangaea</b> breaks up about 175 million years ago, splitting into <b>Laurasia</b> in the north and <b>Gondwana</b> in the south. <b>Gondwana</b> further splits into several pieces that would later become <b>Africa</b>, <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>.',
    'The climate remains generally warm. Forests grow near the poles, large arid expanses are common near the equator. Oxygen concentration in the atmosphere decreases to 20% and remains at that level.',
    'Biodiversity recovers from the <b>Permian-Triassic extinction</b>. The process takes up to 30 million years.',
    'Initially, <b>reptiles</b> dominate on land. <b>Dinosaurs</b> appear and rapidly diversify, becoming widespread after the <b>Triassic–Jurassic extinction</b> 201 million years ago. Some species reach over 30 meters in size, becoming the largest known terrestrial animals.',
    'First flying vertebrates appear, such as <b>pterosaurs</b> and <b>birds</b>. First true <b>mammals</b> emerge, although remain small-sized. Some modern insects appear.',
    'Seed-producing plants (gymnosperms), such as <b>conifers</b> and <b>ferns</b>, dominate on land. <b>Flowering plants</b> (angiosperms) appear and become widespread across the Earth by the end of the era.',
    'Aquatic life continues to flourish. Large marine reptiles thrive in the oceans. Turtles significantly diversify.',
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid. It wipes out all non-avian dinosaus, together with most other large terrestrial and marine animals.'
  ]
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
  image: true,
  description: [
    'The beginning of the Hadean Eon is defined by the age of the oldest known solid material in the Solar System, found in meteorites and measured at 4.567 billion years old.',
    'The <b>Earth</b> forms about 4.54 billion years ago from an <b>accretion disk</b>, a cloud of gas and dust left over from the formation of the Sun.',
    'The <b>Moon</b> forms tens of millions of years after the Earth\'s formation. According to the <b>impact hypothesis</b>, a large stellar body struck the Earth with a glancing blow, causing a portion of its material to be ejected into orbit and forming the Moon.',
    'Initially, the Earth is molten due to frequent collisions with asteroids and other such objects. Later, the outer layer of the planet cools down and forms a solid crust. Gases form the atmosphere, and water condenses on the rocky surface.',
    'The initial heavy atmosphere consists mostly of carbon dioxide, has a surface temperature exceeding 200 °C and an atmospheric pressure of above 25 modern atmospheres.',
    'In the late Hadean, most of the planet\'s surface is covered by oceans. Water remains liquid at temperatures above 100 °C due to the high atmospheric pressure. Continents or islands may exist, but occupy a fairly small area.',
    'Between 4.1 and 3.8 billion years ago, numerous asteroid impacts occur, causing significant changes to the surface environment. This event is usually referred to as the <b>Late Heavy Bombardment</b>.',
    'Since very little evidence has survived from the Hadean Eon, geophysical models remain controversial and may change with new discoveries.'
  ]
}

const Archean: Division = {
  type: 'Eon',
  name: 'Archean',
  start: 4000,
  end: 2500,
  image: true,
  subdivisions: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean],
  description: [
    'The Earth\'s <b>magnetic field</b> finally forms, around 3.5 billion years ago. It protects the planet from the solar wind and stabilizes the atmosphere.',
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, emerges 3.6 billion years ago and breaks up 2.8 billion years ago. The continent of <b>Ur</b> forms, around 2.8 billion years ago. The second supercontinent, <b>Kenorland</b>, forms 2.7 billion years ago.',
    'The planet is cooled to milder surface temperatures of about 55-85 °C. The atmosphere is orange, with high concentrations of methane and carbon dioxide. The oceans are green and acidic due to dissolved minerals.',
    'Microbial life appears in the oceans, as early as 3.77 billion years ago, and eventually spreads to the continents. Microorganisms break down rock, creating soils.',
    '<b>Cyanobacteria</b> evolve to use <b>photosynthesis</b> to convert the energy of sunlight into chemical energy, producing large amounts of oxygen. However, most of the oxygen quickly becomes bound as it reacts with minerals in the environment.',
    'The <b>Pongola glaciation</b>, the oldest known glaciation event, occurs closer the end of the eon, about 2.9 billion years ago.'
  ]
}

const Proterozoic: Division = {
  type: 'Eon',
  name: 'Proterozoic',
  start: 2500,
  end: 538,
  image: true,
  subdivisions: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic],
  description: [
    'The movement of tectonic plates continues. <b>Kenorland</b> breaks apart roughly 2.1 billion years ago. New supercontinents keep forming and breaking up: <b>Columbia</b> (<b>Nuna</b>) exists between 1.8 and 1.35 billion years ago, <b>Rodinia</b> between 1.13 and 0.7 billion years ago, <b>Pannotia</b> between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'Microorganisms keep producing oxygen. It reacts with minerals dissolved in the oceans, turning the water clear. It also builds up in the atmosphere, causing a mass extinction of <b>anaerobic</b> organisms for which oxygen is toxic. This is known as the <b>Great Oxidation Event</b> (2.4 to 2.0 billion years ago).',
    'Decreased concentrations of greenhouse gases trigger the <b>Huronian glaciation</b> (2.4 to 2.1 billion years ago). The climate stabilizes 1.8 billion years ago and remains almost unchanged for a billion years (so-called <b>Boring Billion</b>). Severe glaciations occur between 750 and 635 million years ago, with glaciers reaching the equator (<b>Snowball Earth</b>). Warm and humid climate establishes again near the end of the eon.',
    'Unicellular <b>prokaryotic</b> organisms, such as cyanobacteria, continue to be the predominant form of life during most of the eon, evolving and diversifying.',
    '<b>Eukaryotic</b> organisms (have a nucleus in their cells) appear, possibly around 2.1 billion years ago. First <b>multicellular</b> organisms develop about 1.2 billion years ago. <b>Sexual reproduction</b> emerges, first confirmed around 1.05 billion years ago.',
    '<b>Heterotrophic</b> organisms (cannot produce their own food, rely on the existence of other species) appear and become widespread. Complex <b>ecosystems</b> are forming in the oceans near the end of the eon.'
  ]
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
