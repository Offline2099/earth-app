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
  description: [
    'Photosynthetic bacteria continue to produce huge amounts of oxygen. It reacts with iron in the oceans, forming insoluble magnetite and hematite. Those minerals deposit on the ocean floor, creating layers of banded iron formations. The oceans stop being green and take a modern look.',
    'With no remaining iron in the oceans to serve as an absorber, oxygen quickly builds up in the atmosphere. This is often referred to as the Great Oxidation Event that started roughly 2.44 billion years ago.',
    'As a result of the rapid increase in oxygen concentration and decrease in methane concentration, many species of anaerobic bacteria (which uses methane and to which oxygen is toxic) go extinct.',
    'About 2.4 billion years ago, methane\'s fraction of the atmosphere gets reduced to very low levels. This causes a significant drop in surface temperatures, known as the Huronian glaciation. Several ice ages occur, during which almost the entire surface of the Earth is covered with ice.'
  ]
}

const Rhyacian: Division = {
  type: 'Period',
  name: 'Rhyacian',
  start: 2300,
  end: 2050,
  subdivisions: [],
  description: [
    'The Huronian glaciation lasts throughout most of this period, until about 2.1 billion years ago.',
    'Intense volcanic eruptions occur around the planet, producing large quantities of carbon dioxide and other greenhouse gases. This increases the temperatures and finally ends the glaciation.',
    'Roughly 2.1 billion years ago, the super-continent Kenorland breaks apart due to the motion of tectonic plates.',
    'Cyanobacteria survive the glaciation and still dominate areas near coastlines and in marine waters.',
    'First eukaryotic organisms appear. Such organisms have a nucleus in their cells, unlike all previously existing prokaryotic life forms.'
  ]
}

const Orosirian: Division = {
  type: 'Period',
  name: 'Orosirian',
  start: 2050,
  end: 1800,
  subdivisions: [],
  description: [
    'Intence motion of tectonic plates produces multiple mountain ranges around the planet.',
    'Two large asteroid impacts occur: 2.023 billion years ago (produced a crater 300 km wide) and 1.85 billion years ago (produced a crater 250 km wide). These events, however, did not have significant long-term consequences.',
    'Prokaryotic cyanobacteria organisms continue to be the predominant life forms.',
    'A new super-continent, Nuna (also known as Columbia), is formed roughly 1.8 billion years ago, near the end of the period.'
  ]
}

const Statherian: Division = {
  type: 'Period',
  name: 'Statherian',
  start: 1800,
  end: 1600,
  subdivisions: [],
  description: [
    'The super-continent Nuna (Columbia) further increases in size, new continental platforms are forming.',
    'Oxygen levels in the atmosphere become relatively stable, remaining between 10% and 20% of current values.',
    'Unicellular organisms keep evolving and diversifying, both on land and in the oceans.',
    'The so-called Boring Billion starts, a time interval between 1.8 and 0.8 billion years ago, characterized by tectonic and climatic stability.'
  ]
}

const Calymmian: Division = {
  type: 'Period',
  name: 'Calymmian',
  start: 1600,
  end: 1400,
  subdivisions: [],
  description: [
    'The super-continent Nuna (Columbia) starts breaking up around 1.5 billion years ago. Shallow seas appear between landmasses.',
    'The atmospheric composition and climate remain stable, without significant fluctuations.',
    'Microorganisms become structurally more complex. First confirmed fossils of eukaryotic organisms belong to this period.'
  ]
}

const Ectasian: Division = {
  type: 'Period',
  name: 'Ectasian',
  start: 1400,
  end: 1200,
  subdivisions: [],
  description: [
    'Continents continue to drift and grow in size. The Earth\'s crust thickens due to the deposition of rock on top of older rock.',
    'First confirmed multicellular organisms (predecessors of red and green algae) appear.',
    'First organisms using sexual reproduction possibly appear, about 1.2 billion years ago.'
  ]
}

const Stenian: Division = {
  type: 'Period',
  name: 'Stenian',
  start: 1200,
  end: 1000,
  subdivisions: [],
  description: [
    'A new super-continent, Rodinia, forms about 1.2 billion years ago. It is the largest landmass that had existed up to that time, with an extensive floodplain in the center.',
    'The first sexually reproducing organism confirmed by fossils, a red alga Bangiomorpha pubescens, appears around 1.05 billion years ago.',
    'New forms of life, such as fungi and mold, possibly appear near the end of this period.'
  ]
}

const Tonian: Division = {
  type: 'Period',
  name: 'Tonian',
  start: 1000,
  end: 720,
  subdivisions: [],
  description: [
    'Rifts appear on the super-continent Rodinia, starting to break it apart around 850 million years ago.',
    'Multiple species of filamentous and seaweed-like green algae thrive on the seafloor in shallow waters.',
    'First fungi confirmed by fossil records appear about 890 million years ago. Sponges appear, confirmed in the fossils around 760 million years old.',
    'First worm-like animals appear, reaching up to several centimeters in size, confirmed by fossils 840-740 million years old.'
  ]
}

const Cryogenian: Division = {
  type: 'Period',
  name: 'Cryogenian',
  start: 720,
  end: 635,
  subdivisions: [],
  description: [
    'The super-continent Rodinia finally breaks up about 700 million years ago. Landmasses clustered around the south pole.',
    'Two most severe glaciations in the Earth\'s history occur: Sturtian (750-700 million years ago) and Marinoan (650-635 million years ago). Glaciers extended and contracted in a series of rhythmic pulses, possibly reaching as far as the equator. Such state of the climate is often referred to as Snowball Earth. The exact causes of the glaciations are still disputed.',
    'Testate amoebae, the first heterotrophic eukaryotes, appear. Such organisms cannot produce its own food, taking nutrition from plant or animal matter created by other species.',
    'Heterotrophic plankton feeding on unicellular algae and prokaryotes possibly develops, ending the dominance of bacteria in the oceans.'
  ]
}

const Ediacaran: Division = {
  type: 'Period',
  name: 'Ediacaran',
  start: 635,
  end: 538,
  subdivisions: [],
  description: [
    'A new super-continent, Pannotia, formed between 600 and 540 million years ago.',
    'The climate remains unstable early in the period and until the Gaskiers glaciation that occurs around 579 million years ago, followed by warm and humid climate during the second part of the period. Another cooling event, the Baykonurian glaciation, starts about 547 million years ago.',
    'Diverse multicellular forms of life evolve in the oceans, including new species of fungi, algae, sponges, sea fans, jellyfish, and other organisms.',
    'Complex ecological communities are forming, with species becoming more specialized and engaging in more inter-species interactions.',
    'Most of the Ediacaran fauna did not survive into later periods. It is still disputed whether this was caused by a mass extinction due to a temporary decrease in oxygen levels, or whether the species were naturally replaced by more complex organisms.'
  ]
}

const Cambrian: Division = {
  type: 'Period',
  name: 'Cambrian',
  start: 538,
  end: 485,
  subdivisions: [],
  description: [
    'Supercontinent Pannotia breaks apart, forming warm shallow seas and tidal flats.',
    'Polar ice caps melt in early Cambrian, and the climate continues to warm. The atmosphere remains relatively stable, with around 16% of oxygen and 4200-6000 ppm of carbon dioxide.',
    'The diversity of oceanic life rapidly increases. Complex multicellular organisms (such as arthropods, trilobites, mollusсs, first vertebrates, burrowing animals) become widespread. First coral reefs possibly appear. This is often referred to as Cambrian Explosion.',
    'Life forms on land remain mostly limited to microbial ecosystems, possibly with algae and lichens present. First freshwater ecosystems are forming.',
    'Two extinction events occur: End-Botomian (517 million years ago) and Dresbachian (502 million years ago). Each of the events affected about 40% to 50% of marine species. The causes are still disputed.',
    'About 488 million years ago, Cambrian–Ordovician extinction event eliminates many brachiopods and severely reduces the number of trilobite species.'
  ]
}

const Ordovician: Division = {
  type: 'Period',
  name: 'Ordovician',
  start: 485,
  end: 444,
  subdivisions: [],
  description: [
    'The warming trend of the climate is reversing, and the planet is gradually cooling. In the late Ordovician, polar ice caps are forming once again.',
    'Oceanic life continues to flourish, with molluscs and arthropods being the predominant forms. It considerably expands during the Great Ordovician Biodiversification Event, with multiple species of fish evolving.',
    'First confirmed plants and spores appear on land. Some fungi reach the size of 15 centimeters. First insects appear.',
    'The Ordovician meteor event occurs about 467 million years ago, with a brief dramatic increase in the rate at which meteorites fell to Earth. Causes of the event are disputed.',
    'The Late Ordovician mass extinction occurs roughly 443 million years ago. It eliminates nearly 85% of marine species, becoming the second-largest known extinction event in the Earth\'s history.'
  ]
}

const Silurian: Division = {
  type: 'Period',
  name: 'Silurian',
  start: 444,
  end: 419,
  subdivisions: [],
  description: [
    'Polar ice caps melt once again, and the climate becomes warmer. Oxygen levels in the atmosphere are close to 19%.',
    'Marine life recovers from the Late Ordovician mass extinction. Multiple species of jawed fish and bony fish appear in the oceans.',
    'First vascular plants (which have specialized tissues for conducting water and minerals) evolve from more primitive land plants. Multiple new species of land fungi emerge.',
    'First animals appear on land. Three groups of arthropods become fully terrestrialized: myriapods, arachnids, and hexapods.'
  ]
}

const Devonian: Division = {
  type: 'Period',
  name: 'Devonian',
  start: 419,
  end: 359,
  subdivisions: [],
  description: [
    'The continent of Gondwana is located entirely within the Southern Hemisphere. The continent of Laurussia is fully formed northwest of Gondwana.',
    'The climate is relatively warm and arid, cooling towards the middle of the period and warming again towards its end. Average surface temperature of the oceans remains close to 30 °C. Oxygen levels the atmosphere increase from 20% to 27%.',
    'Fish reaches substantial diversity and dominates aquatic environment (Age of Fishes). Trilobites remain common, first ammonites appear.',
    'Several groups of land plants evolve leaves and roots. First trees and ferns appear. Plants spread across continents, forming extensive forests.',
    'Arthropods (such as myriapods, arachnids, and hexapods) become well-established on land. First tetrapods (four-legged animals) appear in the fossil record.',
    'The Late Devonian extinction, a series of extinction events between 375 and 372 million years ago, singificantly affects marine life, killing off many species of placoderms and trilobites.',
    'Another mass extinction, the Hangenberg event, occurs 359 million years ago, mostly affecting aquatic animals.'
  ]
}

const Carboniferous: Division = {
  type: 'Period',
  name: 'Carboniferous',
  start: 359,
  end: 299,
  subdivisions: [],
  description: [
    'Gondwana collides with Laurussia, forming the supercontinent Pangaea.',
    'Trees keep consuming carbon dioxide and producing oxygen. This increases the atmospheric oxygen levels to 31% and drops the carbon dioxide levels roughly 8 times, leading to gradual cooling of the planet.',
    'Tropical swamps and rainforests cover large parts of the continents. Fallen trees pile up, leading to the formation of coal.',
    'Tetrapods (four-legged vertebrates) significantly diversify, with the appearance of lizard-like, snake-like, and crocodile-like animals. Amphibians and reptiles become widespread on land. Winged insects appear, with some species reaching dozens of centimeters in size.',
    'Marine life continues to evolve, with a wide variety of sharks appearing. Freshwater fish also becomes abundant.',
    'Around 305 million years ago, decreased global temperatures cause significant changes in terrestrial ecosystems and the extinction of some pecies. This event is known as Carboniferous Rainforest Collapse.'
  ]
}

const Permian: Division = {
  type: 'Period',
  name: 'Permian',
  start: 299,
  end: 252,
  subdivisions: [],
  description: [
    'All major landmasses are collected into a single supercontinent Pangaea, experiencing continental climate with extreme variations of heat and cold. Deserts cover a large portion of the land.',
    'Global temperatures remain relatively low near the beginning of the period, with polar ice caps present. A significant warming occurs 287 million years ago, known as Artinskian Warming Event, and 260 million years ago following the eruption of the Emeishan Traps. The climate becomes warm and dry.',
    'Marine life experiences rather little changes compared to previous periods. Amphibians become less common on land, replaced synapsids (mammal-like reptiles), including therapsids (ancestors and relatives of modern mammals). Multiple new insects appear.',
    'Two extinction events occur: Olson\'s Extinction (273 million years ago) and the Capitanian mass extinction (262-259 million years ago). Although some ecosystems are significantly impacted, the biodiversity quickly recovers.',
    'The Permian-Triassic extinction event (Great Dying) occurs 252 million years ago, becoming the largest mass extinction in Earth\'s history. It eliminates nearly 81% of marine species and 70% of terrestrial species. Possible causes include the eruption of Siberian Traps, an asteroid impact, or a combination of factors. '
  ]
}

const Triassic: Division = {
  type: 'Period',
  name: 'Triassic',
  start: 252,
  end: 201,
  subdivisions: [],
  description: [
    'The supercontinent of Pangaea begins to gradually rift into two separate landmasses, Laurasia to the north and Gondwana to the south.',
    'The climate is hot and dry in the beginning of the period and shifts to more humid folling the beeakup of Pangaea. Oxygen levels keep decreasing, from 26% to 20%.',
    'Biodiversity recovers from the Permian-Triassic extinction, the process takes 10 to 30 million years. Reptiles dominate on land. First dinosaurs, first flying animals (pterosaurs), and first true mammals appear.',
    'The period ends with another mass extinction, the Triassic–Jurassic extinction event 201 million years ago. It eliminates near 25-30% of marine life and multiple groups of land animals.'
  ]
}

const Jurassic: Division = {
  type: 'Period',
  name: 'Jurassic',
  start: 201,
  end: 145,
  subdivisions: [],
  description: [
    'The climate is warm, with no ice caps. Forests grow in the polar regions, with large arid expanses in the lower latitudes. Oxygen levels remain stable near 20%.',
    'Conifers and ferns remain most common groups of land plants. Dinosaurs diversify and take the ecological niches vacated by the Triassic–Jurassic extinction. First birds appear, evolving from pterosaurs.',
    'The Toarcian Oceanic Anoxic Event occurs about 183 million years ago. Decreased oxygen levels in the oceans lead to the extinction of some marine invertebrates, yet has rather minor effects on marine reptiles.'
  ]
}

const Cretaceous: Division = {
  type: 'Period',
  name: 'Cretaceous',
  start: 145,
  end: 66,
  subdivisions: [],
  description: [
    'Pangea is finally split into separate continents. The climate remains warm, keeping sea levels high. Shallow inland seas spread along extensive new coastlines.',
    'Dinosaurs continue to dominate on land. New groups of mammals and birds appear.',
    'Flowering plants appear and began to rapidly diversify, becoming the dominant group of plants across the Earth by the end of the period.',
    'The Cretaceous-Paleogene extinction event occurs 66 million years ago, caused by the impact of a massive asteroid 10-15 km wide. It wipes out all non-avian dinosaus, most other tetrapods (four-legged vertebrates) and large marine reptiles.'
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
    'Starts with a heavy asteroid and comet bombardment that presumably occured between 4.1 and 3.8 billion years ago.',
    'The planet has cooled to mild temperatures. The atmosphere remains thick (with a surface pressure exceeding 10 modern atmospheres) and has an orange color due to high concentrations of methane, ammonia, and carbon dioxide.',
    'The planet\'s surface is covered mostly with water, with volcanoes and volcanic islands present. Oceans are green and acidic from dissolved iron compounds.',
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
    'The Earth\'s magnetic field finally establishes around 3.5 billion years ago, preventing the planet\'s atmosphere from being stripped away by the solar wind.',
    'Continent formation begins, with increasingly larger land masses emerging from the oceans and forming Vaalbara, the first super-continent.',
    'The earliest confirmed microbial life appears, evidenced from microfossils of organisms found in rocks 3.465 billion years old.',
    'First forms of cyanobacteria capable of using photosynthesis, a process that converts the energy of light into chemical energy, possibly appear.'
  ]
}

const Mesoarchean: Division = {
  type: 'Era',
  name: 'Mesoarchean',
  start: 3200,
  end: 2800,
  subdivisions: [],
  description: [
    'The movement of tectonic plates begins. The first super-continent, Vaalbara, breaks up. A new continent, Ur, emerges.',
    'Surface temperatures further decrease and remain around 55-85 °C during most of the era.',
    'More diverse microbial life develops, producing large amounts of oxygen. However, the atmosphere is still comprised mostly of methane and carbon dioxide,  as the oxygen continues to be used up in oxidizing minerals.',
    'First microbial life forms on land possibly appear, around 3 billion years ago.',
    'The oldest known glaciation event, Pongola glaciation, occures around 2.9 billion years ago. Polar glaciers extend up to 48 degrees of latitude.'
  ]
}

const Neoarchean: Division = {
  type: 'Era',
  name: 'Neoarchean',
  start: 2800,
  end: 2500,
  subdivisions: [],
  description: [
    'The movement of tectonic plates continues. A new super-continent, Kenorland, is formed about 2.7 billion years ago.',
    'Oceans are still green, with increased sulfur and molybdenum levels, and methane still prevails in the atmospheric composition.',
    'Multiple forms of bacteria capable of oxygen-forming photosynthesis evolve, contributing to the rise of oxygen concentration in the atmosphere.',
    'Microorganisms evolve on land (confirmed in 2.75 billion years old fossils), breaking down rock and forming first soils.'
  ]
}

const Paleoproterozoic: Division = {
  type: 'Era',
  name: 'Paleoproterozoic',
  start: 2500,
  end: 1600,
  subdivisions: [Siderian, Rhyacian, Orosirian, Statherian],
  description: [
    'Photosynthetic microorganisms keep producing more oxygen. It reacts with minerals dissolved in the water, depositing them on the ocean floor and making the water look clear. The concentration of oxygen in the atmosphere keeps growing, causing mass extinction of anaerobic bacteria for which oxygen is toxic. This is often referred to as the Great Oxidation Event.',
    'Decreased concentrations of methane and carbon dioxide in the atmosphere cause surface temperatures to drop. The Huronian glaciation lasts from about 2.4 to 2.1 billion years ago. It includes multiple ice ages, and almost the entire surface of the Earth gets covered with ice. Intense volcanism eventually produces enough greenhouse gases to end the glaciation.',
    'The super-continent Kenorland breaks apart roughly 2.1 billion years ago. Tectonic plates continue to move, creating a new super-continent Nuna (Columbia) about 1.8 billion years ago. Multiple mountain ranges and continental platforms are forming.',
    'First possible eukaryotic organisms appear, as early as about 2.1 billion years ago. Such organisms have a nucleus in their cells, unlike all previously existing prokaryotic life forms.',
    'Prokaryotic unicellular organisms continue to be the predominant form of life, evolving and diversifying.'
  ]
}

const Mesoproterozoic: Division = {
  type: 'Era',
  name: 'Mesoproterozoic',
  start: 1600,
  end: 1000,
  subdivisions: [Calymmian, Ectasian, Stenian],
  description: [
    'The super-continent Nuna (Columbia) breaks apart around 1.5 billion years ago. Tectonic plates keep moving, leading to the formation of a new super-continent, Rodinia, about 1.2 billion years ago. The Earth\'s crust thickens, land masses grow in size.',
    'The atmospheric composition and climate remain stable, without significant fluctuations. No glaciations occur during this era.',
    'Microorganisms become structurally more complex. First multicellular organisms appear around 1.2 billion years ago.',
    'First confirmed organisms using sexual reproducion appear around 1.05 billion years ago. New forms of life, such as fungi and mold, possibly emerge by the end of this era.'
  ]
}

const Neoproterozoic: Division = {
  type: 'Era',
  name: 'Neoproterozoic',
  start: 1000,
  end: 538,
  subdivisions: [Tonian, Cryogenian, Ediacaran],
  description: [
    'The super-continent Rodinia breaks up between 850 and 700 million years ago. A new super-continent, Pannotia, formes between 600 and 540 million years ago.',
    'Several glaciations occur, including the two most severe in the Earth\'s history: Sturtian (750-700 million years ago) and Marinoan (650-635 million years ago). Glaciers extend all the way to the equator, which is often referred to as Snowball Earth.',
    'Multiple new forms of life evolve, including fungi, algae, sponges, and other organisms.',
    'Complex ecosystems are forming, with species becoming more specialized. First heterotrophic eukaryotes appear.'
  ]
}

const Paleozoic: Division = {
  type: 'Era',
  name: 'Paleozoic',
  start: 538,
  end: 252,
  subdivisions: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian],
  description: [
    'The supercontinent of Pannotia breaks apart. Continents keep drifting, forming Gondwana 510 million years ago, which later becomes a part of the new supercontinent Pangaea.',
    'Climatic trends vary significantly throughout the era. Oxygen levels increase and reach its historical maximum of nearly 32%.',
    'The biosphere experiences dramatic evolutionary changes. Arthropods, molluscs, fish, amphibians, reptiles, and multiple other groups of animals appear. Animals diversify rapidly in the oceans (Cambrian Explosion) and then eventually occupy the landmasses.',
    'Plants appear on land and gradually evolve, forming extensive forests and tropical swamps, providing more comfortable habitats for animals.',
    'The era ends with the Permian-Triassic mass extinction, the largest one in the Earth\'s history. It eliminates nearly 81% of marine species and 70% of terrestrial species.'
  ]
}

const Mesozoic: Division = {
  type: 'Era',
  name: 'Mesozoic',
  start: 252,
  end: 66,
  subdivisions: [Triassic, Jurassic, Cretaceous],
  description: [
    'The supercontinent Pangaea breaks up, splitting into several continents with extensive coastlines and shallow inland seas.',
    'The climate remains warm and shifts from more dry to more humid. Forests grow near the polar regions, large arid expanses exist closer to the equator.',
    'Biodiversity recovers from the Permian-Triassic extinction. Initially, reptiles dominate on land. Dinosaurs appear and rapidly diversify, becoming widespread after the Triassic–Jurassic extinction. First flying animals appear, evolving into birds. First mammals appear.',
    'Conifers and ferns dominate among land plants. Flowering plants appear and become widespread across the Earth by the end of the era.',
    'The Cretaceous-Paleogene extinction event occurs 66 million years ago, caused by the impact of a massive asteroid. It wipes out all non-avian dinosaus, most other large terrestrial animals and large marine reptiles.'
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
  description: [
    'The beginning of the Hadean Eon is defined by the age of the oldest known solid material in the Solar System.',
    'The Earth formes about 4.54 billion years ago from an accretion disk, a cloud of gas and dust left over from the formation of the Sun.',
    'The Moon formes tens of millions of years after the Earth\'s formation. According to the impact hypothesis, a large stellar body struck the Earth with a glancing blow, causing a portion of its material to be ejected into orbit and forming the Moon.',
    'Initially, the Earth was molten due to frequent collisions with other bodies. Later, the outer layer of the planet cools down and forms a solid crust. Gases form the atmosphere, and water condenses on the surface.',
    'The initial heavy atmosphere consists mostly of carbon dioxide, has a surface temperature exceeding 200 °C and an atmospheric pressure of above 25 modern atmospheres.',
    'Most of the planet\'s surface is covered by oceans. Water remains liquid at temperatures above 100 °C due to high pressure. Continents or islands may exist, but occupy a fairly small area.',
    'Between 4.1 and 3.8 billion years ago, numerous asteroid impacts occur, causing significant changes to the surface environment. This event is usually referred to as Late Heavy Bombardment.',
    'Since very little evidence has survived from the Hadean Eon, geophysical models remain controversial and may change with new discoveries.'
  ]
}

const Archean: Division = {
  type: 'Eon',
  name: 'Archean',
  start: 4000,
  end: 2500,
  subdivisions: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean],
  description: [
    'The Earth\'s magnetic field finally forms, around 3.5 billion years ago. This protects the planet from solar wind and stabillizes the atmosphere.',
    'The movement of tectonic plates begins. The first super-continent, Vaalbara, forms 3.6 billion years ago and breaks up 2.8 billion years ago. The continent of Ur forms, around 3 billion years ago. The second super-continent, Kenorland, forms 2.7 billion years ago.',
    'The planet is cooled down to relatively mild temperatures below 100 °C. The atmosphere is orange, it consists primarily of methane and carbon dioxide. The oceans are green and acidic due to dissolved minerals.',
    'Microbial life appears in the oceans and spreads to the continents. Cyanobacteria use photosynthesis to convert the energy of light into chemical energy, producing large amounts of oxygen. Microorganisms break down rock, creating soils.',
    'Pongola glaciation, the oldest known glaciation event, occures near the end of the eon (about 2.9 billion years ago).'
  ]
}

const Proterozoic: Division = {
  type: 'Eon',
  name: 'Proterozoic',
  start: 2500,
  end: 538,
  subdivisions: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic],
  description: [
    'The movement of tectonic plates continues. Kenorland breaks apart roughly 2.1 billion years ago. New super-continents keep forming and breaking up: Nuna (Columbia) exists between 1.8 and 1.5 billion years ago, Rodinia exists between 1.2 billion and 700 million years ago. The fifth super-continent, Pannotia, finally formes roughly 540 million years ago.',
    'Microorganisms keep producing oxygen. It reacts with minerals dissolved in the oceans, making the water more clear. It also builds up in the atmosphere, causing mass extinction of anaerobic bacteria for which oxygen is toxic. This is often referred to as the Great Oxidation Event (about 2.4 billion years ago).',
    'Decreased concentrations of greenhouse gases trigger the Huronian glaciation (2.4 to 2.1 billion years ago). Climate stabilizes 1.8 billion years ago and remains roughly the same for a billion years (so-called Boring Billion). Severe glaciations occur between 750 and 635 million years ago, with glaciers reaching the equator (Snowball Earth). Warm and humid climate establishes again near the end of the eon.',
    'Unicellular organisms, such as cyanobacteria, continue to be the predominant form of life during most of the eon, evolving and diversifying.',
    'Eukaryotic organisms (have a nucleus in their cells) appear, possibly around 2.1 billion years ago. First multicellular organisms develop around 1.2 billion years ago. Sexual reproducion emerges, first confirmed around 1.05 billion years ago.',
    'Heterotrophic organisms (cannot produce their own food, rely on the existence of other species for survival) appear and become widespread. Near the end of the eon, complex ecosystems start forming in the oceans.'
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
