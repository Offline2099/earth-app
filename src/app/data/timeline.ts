import { TimelineDivision } from '../interfaces';


/******************************************************************************
 * 
 *   Epochs
 * 
******************************************************************************/

const Paleocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Paleocene',
  start: 66,
  end: 56,
  image: true,
  subdivisions: [],
  description: [
    'The landmass of <b>Laurasia</b> breaks apart (forming <b>North America</b>, <b>Europe</b>, and <b>Asia</b>), although the continents are still connected via land bridges. <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b> are also not fully separated yet.',
    'The climate is warm and humid, with no permanent ice caps near the poles. Global average temperatures remain around 24-25 °C.',
    'Continents are covered with dense tropical and subtropical <b>forests</b>, populated mainly by small creatures. Many new species of <b>fruit-bearing plants</b> appear.',
    '<b>Mammals</b> rapidly diversify and fill the ecological niches vacated by the Cretaceous-Paleogene extinction. The earliest <b>placental</b> and <b>marsupial</b> mammals appear. <b>Birds</b> and <b>insects</b> also diversify.',
    'Various species of <b>ray-finned fish</b> become much more common in the oceans and increase in size. Marine invertebrates eventually recover to their former diversity, though it takes about 7 million years.', 
    'The end of the epoch is marked by the <b>Paleocene-Eocene Thermal Maximum</b>, a major climatic event in which a massive amount of carbon is released into the atmosphere, causing a brief spike in global temperatures.'
  ]
}

const Eocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Eocene',
  start: Paleocene.end,
  end: 34,
  image: true,
  subdivisions: [],
  description: [
    'Continents continue to drift towards their modern positions. <b>Australia</b> splits from <b>Antarctica</b> about 45 million years ago.',
    'The climate keeps warming until it reaches the <b>Eocene Optimum</b> about 49 million years ago, then reverses to a cooling trend. Sea levels reach their maximum, up to 150 m higher than today.',
    'Tropical flora, such as palm trees, grows in the polar regions. Warm temperate forests cover Antarctica. As the cooling begins, <b>deciduous trees</b> (those which seasonally shed leaves) become more common and overtake evergreen tropical species.',
    'Many groups of modern <b>mammals</b> appear (horses, elephants, bats, primates). Although the vast majority of creatures remain small, some groups of <b>herbivorous megafauna</b> (large plant-eating animals) and large terrestrial predators evolve. <b>Whales</b> diversify in the oceans.',
    'The epoch ends with the <b>Eocene–Oligocene extinction event</b> (also known as the <b>Grande Coupure</b>), affecting mostly marine life and aquatic species.'
  ]
}

const Oligocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Oligocene',
  start: Eocene.end,
  end: 23,
  image: true,
  subdivisions: [],
  description: [
    'The sea between <b>Europe</b> and <b>Asia</b> disappears, and a persistent land connection links the two continents together. <b>South America</b> probably separates from <b>Antarctica</b> (the exact timing is disputed).',
    'A rapid cooling occurs about 33.5 million years ago. An ice sheet forms in Antarctica and continues to grow until it covers the entire continent. Sea level drops by 105 meters. The climate remains relatively cold until about 25 million years ago, when it temporarily becomes warmer.',
    'Tropical and subtropical forests recede, getting replaced by temperate forests. Open plains and deserts become more common. <b>Grasses</b> and <b>flowering plants</b> expand their reach.',
    'Modern groups of <b>mammals</b> (horses, rhinoceroses, camels, deer, dogs, bears, weasels, raccoons) diversify and replace previously dominant groups, such as creodonts. The largest known land mammals, such as Paraceratherium (reaching the weight of 15-20 tons), appear in Eurasia.',
    'Many groups of <b>marine snails</b> and <b>clams</b> become extinct due to the cooling, and the overall diversity of marine life diminishes. However, some new species of <b>whales</b> and <b>sharks</b> evolve.'
  ]
}

const Miocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Miocene',
  start: Oligocene.end,
  end: 5.33,
  image: true,
  subdivisions: [],
  description: [
    '<b>Africa</b> collides with <b>Europe</b>, forming the Mediterranean Sea and allowing an interchange of its fauna with <b>Eurasia</b>.',
    'The epoch begins with a rapid cooling about 23 million years ago. Temperatures rise between 21 and 15 million years ago, then drop sharply once again and continue to decrease.',
    '<b>Grassland ecosystems</b> further expand, providing habitats for grazing animals (horses, deer, camels, rhinoceroses, hippopotamuses) pursued by large predators. Many groups of modern <b>birds</b> appear (ducks, owls, cockatoos, crows). <b>Snakes</b> significantly diversify.',
    'Multiple species of <b>apes</b> emerge and spread across Africa and Eurasia. First <b>hominins</b> (apes capable of walking on two legs) appear.',
    '<b>Kelp forests</b> spread in shallow seas, creating a new comfortable environment for fish and invertebrates. <b>Whales</b> reach their peak diversity in the oceans. New species of large-sized <b>sharks</b> appear.',
    'Between 14.8 and 14.5 million years ago, many terrestrial and aquatic species become extinct due to rapid changes in global climate. This event is known as the <b>Middle Miocene disruption</b>.'
  ]
}

const Pliocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Pliocene',
  start: Miocene.end,
  end: 2.58,
  image: true,
  subdivisions: [],
  description: [
    'A land bridge establishes between <b>North America</b> and <b>South America</b>. It allows an interchange of fauna between the two continents and significantly alters the pattern of oceanic currents.',
    'The climate is gradually cooling, although still remains slightly warmer than modern. Sea level remains about 25 meters higher than today. An ice sheet forms over Greenland about 3 million years ago.',
    '<b>Deciduous forests</b> (comprised of plants that shed leaves seasonally) and <b>grasslands</b> become more common. <b>Tundra</b> covers large areas at high latitudes. Tropical forests are limited to a narrow band near the equator.',
    'Both marine and continental faunas become more similar to modern, yet present-day animals still live side by side with many prehistoric species.',
    'Ancestors of <b>humans</b> continue to evolve, developing a more complex brain and the ability to walk consistently on two legs. First stone tools appear about 3.4 million years ago, marking the beginning of the <b>Stone Age</b>.'
  ]
}

const Pleistocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Pleistocene',
  start: Pliocene.end,
  end: 0.011,
  image: true,
  subdivisions: [],
  description: [
    'Continents remain essentially near their modern positions, moving no more than 100 km since the beginning of the epoch.',
    'The climate experiences repeated cycles of glaciation, commonly known as <b>Ice Ages</b>. Continental ice sheets grow and retreat every 40-100 thousand years. Sea level drops during colder phases and rises during warmer phases, with an amplitude of about 100-120 meters.',
    'Flora and fauna are mostly similar to the modern state. Many species retreat southward with each cold phase and spread back to higher latitudes during warm phases of the climate.',
    'Large land mammals (such as mammoth, mastodon, woolly rhinoceros, saber-toothed cat, giant sloth, cave bear, dire wolf) are common. They disappear near the end of the epoch, in a process known as the <b>Quaternary extinction</b> (120 to 11 thousand years ago).',
    'Anatomically modern <b>humans</b> appear (<b>Homo erectus</b> about 2 million years ago, <b>Homo sapiens</b> about 300 thousand years ago) and spread from Africa to other continents. They learn to use fire for cooking and heating.'
  ]
}

const Holocene: TimelineDivision = {
  type: 'Epoch',
  name: 'Holocene',
  start: Pleistocene.end,
  end: 0,
  image: true,
  subdivisions: [],
  description: [
    'Since the span of only ten thousand years is rather small on the geologic time scale, continents move by less than 1 km during this epoch. However, the melting of ice causes sea level to rise about 65 meters since the beginning of the Holocene, considerably altering coastlines.',
    'Following the much colder conditions of the last Ice Age, the climate is warming between 11 and 8 thousand years ago. It then remains fairly stable with a gradual cooling trend until about 150 years ago.',
    'A brief cooling event occurs about 8200 years ago and lasts about 400 years. Another mild cooling, known as the <b>Little Ice Age</b>, continues between the 14th and 19th centuries. A rapid increase in global temperatures is observed over the last 150 years.',
    'All recorded <b>human history</b> takes place during this epoch. With the development of agriculture between 10 and 7 thousand years ago, humans establish permanent settlements and form ancient civilizations. As a result of gradual scientific and technological progress, the human civilization becomes global.',
    'Human activity causes a significant decline in biodiversity, known as the <b>Holocene extinction</b>. Many species of bacteria, fungi, plants and animals disappear. This process is ongoing.'
  ]
}


/******************************************************************************
 * 
 *   Periods
 * 
******************************************************************************/

const Siderian: TimelineDivision = {
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

const Rhyacian: TimelineDivision = {
  type: 'Period',
  name: 'Rhyacian',
  start: Siderian.end,
  end: 2050,
  subdivisions: [],
  description: [
    'Roughly 2.1 billion years ago, the supercontinent of <b>Kenorland</b> breaks apart.',
    'The <b>Huronian glaciation</b> lasts throughout most of this period, until about 2.1 billion years ago. Intense volcanic eruptions occur around the planet, producing large quantities of carbon dioxide and other greenhouse gases. This increases the temperatures and finally ends the glaciation.',
    '<b>Cyanobacteria</b> survive the glaciation and still dominate coastal areas and marine waters.',
    'First <b>eukaryotic</b> organisms possibly appear. Such organisms have a nucleus in their cells, unlike all previously existing <b>prokaryotic</b> life forms.'
  ]
}

const Orosirian: TimelineDivision = {
  type: 'Period',
  name: 'Orosirian',
  start: Rhyacian.end,
  end: 1800,
  subdivisions: [],
  description: [
    'Intense motion of tectonic plates produces multiple mountain ranges around the planet.',
    'A new supercontinent, <b>Columbia</b> (also known as <b>Nuna</b>), is formed roughly 1.8 billion years ago, near the end of the period.',
    'Two large asteroid impacts occur: 2.023 billion years ago (produced a crater 300 km wide) and 1.85 billion years ago (produced a crater 250 km wide). These events, however, have no significant long-term consequences.',
    '<b>Prokaryotic</b> microorganisms, such as <b>cyanobacteria</b>, remain the predominant form of life.'    
  ]
}

const Statherian: TimelineDivision = {
  type: 'Period',
  name: 'Statherian',
  start: Orosirian.end,
  end: 1600,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) further increases in size. New continental platforms and mountain ranges are forming.',
    'Oxygen levels in the atmosphere become relatively stable, remaining between 10% and 20% of modern values.',
    'The so-called <b>Boring Billion</b> begins, a time interval between 1.8 and 0.8 billion years ago, characterized by biospheric and climatic stability.',
    'Unicellular microorganisms keep evolving and diversifying both on land and in the oceans.'    
  ]
}

const Calymmian: TimelineDivision = {
  type: 'Period',
  name: 'Calymmian',
  start: Statherian.end,
  end: 1400,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) begins to break up around 1.5 billion years ago. Shallow seas appear between landmasses.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations.',
    'Microorganisms gradually evolve and become structurally more complex. The oldest known fossils of possibly <b>eukaryotic</b> species belong to this period.'
  ]
}

const Ectasian: TimelineDivision = {
  type: 'Period',
  name: 'Ectasian',
  start: Calymmian.end,
  end: 1200,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks up completely about 1.35 billion years ago. Continents continue to drift apart and grow in size. The Earth\'s crust thickens due to the deposition of rock on top of older rock.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations.',
    'First confirmed <b>multicellular</b> organisms (predecessors of red and green algae) appear in the fossil record. This is also the oldest direct evidence of <b>eukaryotic</b> organisms.',
    'First microorganisms using <b>sexual reproduction</b> possibly appear, about 1.2 billion years ago.'
  ]
}

const Stenian: TimelineDivision = {
  type: 'Period',
  name: 'Stenian',
  start: Ectasian.end,
  end: 1000,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Rodinia</b>, forms about 1.13 billion years ago. It is the largest landmass in existence up to this time, with an extensive floodplain in the center.',
    'The so-called <b>Boring Billion</b> continues. Atmospheric composition and climate remain stable, without any significant fluctuations. The concentration of oxygen in the atmosphere slightly increases.',
    'The first <b>sexually reproducing</b> organism confirmed by fossils, a species of red alga, appears around 1.05 billion years ago.',
    '<b>Stromatolites</b>, layered rock formations created by microorganisms, reach their maximum diversity in sediments of this period.',
    '<b>Fungi</b> in the form of slime molds possibly develop towards the end of this period.'
  ]
}

const Tonian: TimelineDivision = {
  type: 'Period',
  name: 'Tonian',
  start: Stenian.end,
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

const Cryogenian: TimelineDivision = {
  type: 'Period',
  name: 'Cryogenian',
  start: Tonian.end,
  end: 635,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Rodinia</b> finally breaks up about 700 million years ago. Landmasses become clustered around the South Pole.',
    'The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend and contract in a series of rhythmic pulses, possibly reaching as far as the equator. Such state of the climate is often called the <b>Snowball Earth</b>. What exactly caused the glaciations is still unclear.',
    'Life retreats into the oceans, unable to survive the harsh conditions on land. However, the evolution of marine species continues uninterrupted.',
    'First <b>heterotrophic</b> organisms, such as testate amoebae, appear. Such organisms cannot produce their own food, taking nutrition from organic matter created by other species.',
    'Heterotrophic <b>plankton</b> possibly develops. It feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.'
  ]
}

const Ediacaran: TimelineDivision = {
  type: 'Period',
  name: 'Ediacaran',
  start: Cryogenian.end,
  end: 538,
  image: true,
  subdivisions: [],
  description: [
    'A new supercontinent, <b>Pannotia</b>, forms around 630 million years ago and breaks up 570 million years ago. The landmass of <b>Gondwana</b> forms 550 million years ago.',
    'The climate remains unstable early in the period. The <b>Gaskiers glaciation</b> occurs about 579 million years ago. It is followed by warm and humid climate during the second half of the Ediacaran. Another cooling event, the <b>Baykonurian glaciation</b>, begins about 547 million years ago.',
    'A variety of multicellular life forms evolve in the oceans, including new species of <b>fungi</b>, <b>algae</b>, <b>sponges</b>, <b>sea fans</b>, <b>jellyfish</b>, and other macroscopic organisms.',
    'Complex <b>ecosystems</b> are forming, with species becoming more specialized and engaging in more inter-species interactions.',
    'Most of the Ediacaran fauna does not survive into later periods. It is still disputed whether this was caused by a mass extinction event or the species were naturally replaced by more adaptable organisms.'
  ]
}

const Cambrian: TimelineDivision = {
  type: 'Period',
  name: 'Cambrian',
  start: Ediacaran.end,
  end: 485,
  image: true,
  subdivisions: [],
  description: [
    'The remnants of <b>Pannotia</b> (the continents of <b>Laurentia</b>, <b>Baltica</b>, and <b>Siberia</b>) continue to drift apart, forming warm shallow seas and tidal flats.',
    'Polar ice caps melt in the early Cambrian, and the climate keeps warming. Atmospheric composition remains relatively stable, with about 16% of oxygen and 4200-6000 ppm of carbon dioxide.',
    'The diversity of oceanic life increases dramatically. Complex multicellular organisms (such as <b>arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, first <b>vertebrates</b>, <b>burrowing animals</b>) appear and become widespread. First <b>coral reefs</b> possibly form. This rapid burst of biospheric development is known as the <b>Cambrian Explosion</b>.',
    'Life on land remains mostly limited to microbial ecosystems, possibly with <b>algae</b> and <b>lichens</b> present. First freshwater ecosystems are forming.',
    'Two extinction events occur: <b>End-Botomian</b> (517 million years ago) and <b>Dresbachian</b> (502 million years ago). Each of the events affects about 40-50% of marine species. The causes are still disputed.',
    'About 488 million years ago, the <b>Cambrian–Ordovician extinction event</b> eliminates many species of brachiopods (aquatic animals with hard shells) and severely reduces the number of trilobites.'
  ]
}

const Ordovician: TimelineDivision = {
  type: 'Period',
  name: 'Ordovician',
  start: Cambrian.end,
  end: 444,
  image: true,
  subdivisions: [],
  description: [
    'The warming trend of the climate reverses, and the planet is gradually cooling. Polar ice caps are forming once again. The <b>Late Ordovician glaciation</b> happens near the end of the period.',
    'Oceanic life continues to flourish, with <b>molluscs</b> and <b>arthropods</b> being the predominant groups. It expands considerably during the <b>Great Ordovician Biodiversification Event</b>, with multiple species of <b>fish</b> evolving.',
    'First confirmed <b>plants</b> that use <b>spores</b> for reproduction appear on land. Some fungi reach the size of 15 centimeters. First <b>insects</b> appear.',
    'The <b>Ordovician meteor event</b> occurs about 467 million years ago, with a brief dramatic increase in the rate at which meteorites fall to Earth. The causes of this event are unclear.',
    'The <b>Late Ordovician mass extinction</b> occurs roughly 443 million years ago. It eliminates nearly 85% of marine species, becoming the second-largest known extinction event in the Earth\'s history.'
  ]
}

const Silurian: TimelineDivision = {
  type: 'Period',
  name: 'Silurian',
  start: Ordovician.end,
  end: 419,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> covers most of the southern hemisphere. Smaller landmasses (<b>Laurentia</b>, <b>Baltica</b>, <b>Siberia</b>, and <b>Avalonia</b>) drift together near the equator. A large ocean occupies most of the northern hemisphere. ',
    'The climate becomes warmer, polar ice caps retreat. However, the temperatures undergo significant short-term fluctuations. Oxygen levels in the atmosphere slightly increase and remain close to 19%.',
    'Marine life recovers from the <b>Late Ordovician mass extinction</b>. Multiple species of <b>jawed fish</b> and <b>bony fish</b> appear in the oceans. Sea scorpions reach several meters in length.',
    'First <b>vascular plants</b> (which have specialized tissues for conducting water and minerals) evolve from more primitive land plants. Multiple new species of land fungi emerge.',
    'First <b>terrestrial animals</b> (living exclusively on land) appear. Three groups of <b>arthropods</b> become fully terrestrialized: <b>myriapods</b> (centipede-like animals), <b>arachnids</b> (spider-like animals), and <b>hexapods</b> (six-legged animals).'
  ]
}

const Devonian: TimelineDivision = {
  type: 'Period',
  name: 'Devonian',
  start: Silurian.end,
  end: 359,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> remains the largest landmass, located entirely within the southern hemisphere. The continent of <b>Laurussia</b> (also known as <b>Euramerica</b>) forms northwest of Gondwana through the collision of <b>Laurentia</b> and <b>Baltica</b>.',
    'The climate is relatively warm and arid, cooling towards the middle of the period and warming again towards its end. Average surface temperatures of the ocean remain close to 30 °C. Oxygen levels in the atmosphere increase from 20% to 27%.',
    '<b>Fish</b> reaches substantial diversity and dominates aquatic environments. <b>Trilobites</b> and <b>crinoids</b> remain abundant, first <b>ammonites</b> appear.',
    'Several groups of land plants evolve to grow leaves and roots. First <b>trees</b> and <b>ferns</b> appear. Plants spread rapidly across continents, forming extensive forests. This is sometimes referred to as the <b>Devonian Explosion</b>.',
    'First <b>tetrapods</b> (the ancestors of four-legged animals) appear in the fossil record. They begin adapting to walking on land, as their strong fins gradually evolve into legs.',
    'The <b>Late Devonian extinction</b>, a series of extinction events between 375 and 372 million years ago, significantly impacts marine life, killing off many species of animals living in warm shallow waters.',
    'Another mass extinction, the <b>Hangenberg event</b>, occurs 359 million years ago, affecting mostly aquatic life and coral reefs.'
  ]
}

const Carboniferous: TimelineDivision = {
  type: 'Period',
  name: 'Carboniferous',
  start: Devonian.end,
  end: 299,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> collides with <b>Laurussia</b> (<b>Euramerica</b>), forming the supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate is warm early in the period. Trees keep consuming carbon dioxide and producing oxygen. This increases the atmospheric oxygen levels to 35% and drops the carbon dioxide levels roughly 8 times, causing gradual cooling of the planet.',
    '<b>Tropical swamps</b> and <b>rainforests</b> cover large parts of the continents. Fallen trees pile up, leading to the formation of coal.',
    '<b>Tetrapods</b> (four-legged vertebrates) significantly diversify, with the appearance of lizard-like, snake-like, and crocodile-like animals. <b>Amphibians</b> and <b>reptiles</b> become widespread. <b>Winged insects</b> appear, with some species reaching 70 cm in size.',
    '<b>Invertebrates</b> continue to flourish in the oceans, heavily represented in the fossil record. A wide variety of <b>sharks</b> appear. <b>Freshwater fish</b> also becomes abundant.',
    'Around 305 million years ago, decreased global temperatures cause significant changes in terrestrial ecosystems. This event is known as the <b>Carboniferous Rainforest Collapse</b>.'
  ]
}

const Permian: TimelineDivision = {
  type: 'Period',
  name: 'Permian',
  start: Carboniferous.end,
  end: 252,
  image: true,
  subdivisions: [],
  description: [
    'All major landmasses are collected into a single supercontinent of <b>Pangaea</b> that spans from the equator to the poles. It experiences continental climate with extreme variations of heat and cold. Deserts cover large areas.',
    'Global temperatures remain relatively low at the beginning of the period, with polar ice caps present. Two major warmings occur: the <b>Artinskian Warming Event</b> (287 million years ago), and the <b>Emeishan Thermal Excursion</b> (260 million years ago). The climate becomes warm and dry.',
    '<b>Amphibians</b> become less common, replaced by <b>synapsids</b> (mammal-like reptiles), including <b>therapsids</b> (ancestors and relatives of modern mammals). Multiple new species of insects appear. Marine life experiences rather little changes compared to previous periods.',
    'Two extinction events occur: <b>Olson\'s Extinction</b> (273 million years ago) and the <b>Capitanian mass extinction</b> (262-259 million years ago). Although some ecosystems are significantly impacted, the biodiversity quickly recovers.',
    'The <b>Permian-Triassic extinction event</b> (also known as the <b>Great Dying</b>) occurs 252 million years ago and becomes the largest mass extinction in Earth\'s history. It eliminates up to 95% of marine species and 70% of all land organisms. Possible causes include the eruption of the Siberian Traps, an asteroid impact, or a combination of factors. '
  ]
}

const Triassic: TimelineDivision = {
  type: 'Period',
  name: 'Triassic',
  start: Permian.end,
  end: 201,
  image: true,
  subdivisions: [],
  description: [
    'The supercontinent of <b>Pangaea</b> remains intact, drifting slowly northward.',
    'The climate is generally hot and dry, with deserts near the equator and temperate forests in the polar regions. Oxygen levels are continually decreasing, reaching 20%.',
    'Biodiversity gradually recovers from the <b>Permian-Triassic mass extinction</b>. The process takes 10 to 30 million years.',
    '<b>Reptiles</b> dominate on land. First <b>dinosaurs</b> appear between 245 and 233 million years ago. <b>Pterosaurs</b> (flying reptiles, first flying vertebrates) evolve about 228 million years ago. First true <b>mammals</b> appear and replace previously common mammal-like reptiles.',
    '<b>Sharks</b> dominate freshwater and marine environments. <b>Ray-finned fishes</b> rapidly diversify. Ancestors of modern <b>amphibians</b>, such as frogs, appear.',
    'The period ends with another mass extinction, the <b>Triassic-Jurassic extinction event</b> 201 million years ago. It eliminates nearly 25-30% of marine life (severely affecting invertebrates and marine reptiles) and multiple groups of land animals.'
  ]
}

const Jurassic: TimelineDivision = {
  type: 'Period',
  name: 'Jurassic',
  start: Triassic.end,
  end: 145,
  image: true,
  subdivisions: [],
  description: [
    'Rifts appear on the supercontinent of <b>Pangaea</b>, splitting it into two separate landmasses: <b>Laurasia</b> in the north and <b>Gondwana</b> in the south.',
    'The climate remains warm, with no ice caps at the poles. Several brief cooling intervals occur. Forests grow in the polar regions, large arid expanses are common at lower latitudes. Oxygen levels remain stable near 20%.',
    '<b>Conifers</b> and <b>ferns</b> remain the most common groups of land plants. Ginkgo-like trees are also widespread.',
    '<b>Dinosaurs</b> diversify and fill the ecological niches vacated by the Triassic-Jurassic extinction, establishing as the predominant group of land animals. Some species reach over 30 meters in length, becoming the largest known terrestrial animals.',
    'Ancestors of birds appear, evolving from theropods (a group of dinosaur species). Ancestors of crocodiles make the transition from terrestrial to aquatic life.',
    'Large <b>marine reptiles</b>, such as ichthyosaurs and plesiosaurs, become abundant in the oceans. <b>Turtles</b> significantly diversify.',
    'The <b>Toarcian Oceanic Anoxic Event</b> occurs about 183 million years ago. Reduced oxygen levels in the oceans cause the extinction of some marine invertebrates, although have rather little effect on reptiles.'
  ]
}

const Cretaceous: TimelineDivision = {
  type: 'Period',
  name: 'Cretaceous',
  start: Jurassic.end,
  end: 66,
  image: true,
  subdivisions: [],
  description: [
    '<b>Gondwana</b> splits into several pieces that would later become the modern continents: <b>Africa</b> separates from the connected landmasses of <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>. <b>Laurasia</b> still remains largely intact in the northern hemisphere.',
    'The climate undergoes three major phases: warm and dry early in the period, warm and wet 125 to 85 million years ago, cool and dry near the end of the period.',
    '<b>Flowering plants</b> (angiosperms) appear. They rapidly spread and diversify, becoming the dominant group of terrestrial plants by the end of the Cretaceous.',
    '<b>Dinosaurs</b> continue to dominate on land. New groups of small-sized <b>mammals</b> and <b>birds</b> emerge. Some modern <b>insects</b> (ants, termites, moths, grasshoppers) appear.',
    'Large marine reptiles, turtles, sharks, ammonites, starfish, rays, and other aquatic animals continue to flourish in the oceans.',    
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid 10-15 km wide. It wipes out all non-avian dinosaurs, most other tetrapods (four-legged vertebrates) and large marine animals.'
  ]
}

const Paleogene: TimelineDivision = {
  type: 'Period',
  name: 'Paleogene',
  start: Cretaceous.end,
  end: 23,
  image: true,
  subdivisions: [Paleocene, Eocene, Oligocene],
  description: [
    'Continents begin to resemble their modern shapes. <b>Laurasia</b> breaks up, forming <b>North America</b>, <b>Europe</b>, and <b>Asia</b>. <b>South America</b> and <b>Australia</b> split from <b>Antarctica</b>.',
    'The climate keeps gradually warming until it reaches the <b>Eocene Optimum</b> about 49 million years ago, then reverses to a cooling trend. Temperatures remain significantly lower between 33.5 and 25 million years ago.',
    'In the early Paleogene, dense <b>evergreen forests</b> cover the landmasses. As the cooling begins, <b>temperate forests</b> and <b>open plains</b> become more common. An ice sheet begins to form in Antarctica about 33 million years ago and covers the entire continent by the end of the period.',
    '<b>Mammals</b> rapidly diversify and fill the ecological niches formerly taken by dinosaurs. Many groups of modern mammals appear (horses, elephants, rhinoceroses, camels, deer, dogs, bears, weasels, raccoons, bats, primates). Most creatures remain small, however some large herbivores (plant-eating animals) and large terrestrial predators also evolve.',
    'In the oceans, <b>ray-finned fish</b> becomes much more common. New species of <b>whales</b> appear. Marine life gets hit by the <b>Eocene-Oligocene extinction</b> (also known as the <b>Grande Coupure</b>) about 34 million years ago. The subsequent cooling also reduces aquatic biodiversity.'
  ]
}

const Neogene: TimelineDivision = {
  type: 'Period',
  name: 'Neogene',
  start: Paleogene.end,
  end: 2.58,
  image: true,
  subdivisions: [Miocene, Pliocene],
  description: [
    'Landmasses continue to drift towards their modern positions. <b>Africa</b> collides with <b>Europe</b>, forming the Mediterranean Sea. A land bridge establishes between <b>North America</b> and <b>South America</b>.',
    'A rapid cooling occurs about 23 million years ago. Temperatures rise between 21 and 15 million years ago, then a strong cooling trend establishes again and continues throughout the period.',
    '<b>Grassland ecosystems</b> and <b>temperate forests</b> become widespread. <b>Tundra</b> covers large areas at high latitudes. Tropical forests exist only near the equator. <b>Kelp forests</b> spread in shallow seas at low latitudes.',
    'Land <b>mammals</b> keep evolving and taking their modern shapes. Many groups of modern <b>birds</b> (ducks, owls, cockatoos, crows) and <b>snakes</b> appear. <b>Whales</b> reach their peak diversity, new large-sized <b>sharks</b> evolve.',
    'Multiple species of <b>apes</b> appear and spread across Africa and Eurasia. <b>Hominins</b> (the ancestors of modern humans) develop more complex brain and the ability to walk on two legs. First stone tools are made about 3.4 million years ago, marking the beginning of the <b>Stone Age</b>.'
  ]
}

const Quaternary: TimelineDivision = {
  type: 'Period',
  name: 'Quaternary',
  start: Neogene.end,
  end: 0,
  image: true,
  subdivisions: [Pleistocene, Holocene],
  description: [
    'Continents remain essentially near their modern positions, moving no more than 100 kilometers since the beginning of the period.',
    'The climate is marked by repeated cycles of glaciation, commonly known as <b>Ice Ages</b>. Continental ice sheets grow and retreat every 40-100 thousand years. Sea level drops during colder phases and rises during warmer phases, with an amplitude of about 100-120 meters.',
    'Flora and fauna are mostly similar to the modern state. Many species retreat southward with each cold phase and spread to higher latitudes during warm phases of the climate.',
    'Large land mammals (such as mammoth, woolly rhinoceros, saber-toothed cat) remain common for most of the period. They disappear between 120 and 11 thousand years ago in a process known as the <b>Quaternary extinction</b>.',
    'Anatomically modern <b>humans</b> appear (<b>Homo erectus</b> about 2 million years ago, <b>Homo sapiens</b> about 300 thousand years ago) and spread from Africa to other continents.',
    'All recorded <b>human history</b> takes place within the last 10 thousand years. With the development of agriculture, humans establish permanent settlements and form ancient civilizations. As a result of gradual scientific and technological progress, the human civilization becomes global.',
    'Human activity causes a significant decline in biodiversity, known as the <b>Holocene extinction</b>. Many species of bacteria, fungi, plants and animals disappear. This process is ongoing.'
  ]
}


/******************************************************************************
 * 
 *   Eras
 * 
******************************************************************************/

const Eoarchean: TimelineDivision = {
  type: 'Era',
  name: 'Eoarchean',
  start: 4000,
  end: 3600,
  subdivisions: [],
  description: [
    'The era begins with a large number of asteroid and comet impacts which presumably occur between 4.1 and 3.8 billion years ago, known as the <b>Late Heavy Bombardment</b>.',
    'The atmosphere is cooled to milder temperatures, although remains thick (with a surface pressure exceeding 10 modern atmospheres) and orange in color due to high concentrations of methane, ammonia, and carbon dioxide.',
    'Most of the planet\'s surface is covered by water, with volcanoes and volcanic islands present. The oceans are green and acidic due to dissolved iron compounds.',
    'Early microbial <b>life</b> possibly appears, utilizing methane as its primary source of energy.'
  ]
}

const Paleoarchean: TimelineDivision = {
  type: 'Era',
  name: 'Paleoarchean',
  start: Eoarchean.end,
  end: 3200,
  subdivisions: [],
  description: [
    'The Earth\'s <b>magnetic field</b> finally establishes around 3.5 billion years ago, preventing the planet\'s atmosphere from getting stripped away by the solar wind.',
    'Continent formation begins, with increasingly larger land masses emerging from the oceans and forming <b>Vaalbara</b>, the first supercontinent.',
    'The earliest confirmed microbial <b>life</b> appears, evidenced by microfossils of organisms found in rocks 3.465 billion years old.',
    'First forms of <b>cyanobacteria</b> capable of using <b>photosynthesis</b>, a process that converts the energy of light into chemical energy, possibly appear.'
  ]
}

const Mesoarchean: TimelineDivision = {
  type: 'Era',
  name: 'Mesoarchean',
  start: Paleoarchean.end,
  end: 2800,
  subdivisions: [],
  description: [
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, breaks apart. A new continent, <b>Ur</b>, emerges.',
    'Surface temperatures further decrease, remaining around 55-85 °C for most of the era. The atmosphere still contains high levels of methane and carbon dioxide. The oxygen produced by bacteria gets quickly bound as it reacts with minerals in the environment.',
    'More diverse microbial life develops. First microorganisms on land possibly appear about 3 billion years ago.',
    'The oldest known glaciation event, the <b>Pongola glaciation</b>, occurs around 2.9 billion years ago. Polar glaciers extend up to 48 degrees of latitude.'
  ]
}

const Neoarchean: TimelineDivision = {
  type: 'Era',
  name: 'Neoarchean',
  start: Mesoarchean.end,
  end: 2500,
  subdivisions: [],
  description: [
    'The movement of tectonic plates continues. A new supercontinent, <b>Kenorland</b>, forms about 2.7 billion years ago.',
    'The oceans are still green, with increased sulfur and molybdenum levels, and methane still prevails in the atmospheric composition.',
    'Multiple species of bacteria capable of oxygen-forming <b>photosynthesis</b> evolve, contributing to the rise of oxygen concentrations in the atmosphere.',
    'Microorganisms spread to the land, confirmed by 2.75 billion year old fossils. They begin breaking down rock and forming first soils.'
  ]
}

const Paleoproterozoic: TimelineDivision = {
  type: 'Era',
  name: 'Paleoproterozoic',
  start: Neoarchean.end,
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

const Mesoproterozoic: TimelineDivision = {
  type: 'Era',
  name: 'Mesoproterozoic',
  start: Paleoproterozoic.end,
  end: 1000,
  image: true,
  subdivisions: [Calymmian, Ectasian, Stenian],
  description: [
    'The supercontinent of <b>Columbia</b> (<b>Nuna</b>) breaks apart between 1.5 and 1.35 billion years ago. Tectonic plates keep moving, leading to the formation of a new supercontinent, <b>Rodinia</b>, about 1.13 billion years ago. The Earth\'s crust thickens, land masses grow in size.',
    'The so-called <b>Boring Billion</b> continues: atmospheric composition and climate remain stable, without significant fluctuations. No glaciations occur during this era.',
    'Microorganisms become structurally more complex. First confirmed <b>eukaryotic</b> species (which have a nucleus in their cells) appear in the fossil record.',
    'First <b>multicellular</b> organisms appear around 1.2 billion years ago, or possibly earlier. First confirmed organisms using <b>sexual reproduction</b> appear, at least 1.05 billion years ago.',
    'New types of life, such as <b>fungi</b> in the form of mold, possibly emerge by the end of this era.'
  ]
}

const Neoproterozoic: TimelineDivision = {
  type: 'Era',
  name: 'Neoproterozoic',
  start: Mesoproterozoic.end,
  end: 538,
  image: true,
  subdivisions: [Tonian, Cryogenian, Ediacaran],
  description: [
    'The supercontinent of <b>Rodinia</b> breaks up 750-700 million years ago. A new supercontinent, <b>Pannotia</b>, exists between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'The <b>Boring Billion</b> finally ends. The two most severe glaciations in the Earth\'s history occur: <b>Sturtian</b> (750-700 million years ago) and <b>Marinoan</b> (650-635 million years ago). Glaciers extend all the way to the equator, which is often referred to as the <b>Snowball Earth</b>.',
    'Temperatures rise and remain warm towards the end of the era, yet two more glaciations happen: <b>Gaskiers</b> (579 million years ago) and <b>Baykonurian</b> (547 million years ago).',
    'Life keeps evolving in the oceans. New multicellular organisms appear, including some <b>fungi</b>, filamentous green <b>algae</b>, <b>sponges</b>, worm-like marine animals, <b>jellyfish</b>, and diverse <b>Ediacaran fauna</b>.',
    'First <b>heterotrophic</b> species appear. Such organisms cannot produce their own food, consuming organic matter created by other species. <b>Plankton</b> feeds on unicellular algae and prokaryotes, ending the dominance of bacteria in the oceans.',
    'Complex marine <b>ecosystems</b> are forming, with species becoming more specialized.'
  ]
}

const Paleozoic: TimelineDivision = {
  type: 'Era',
  name: 'Paleozoic',
  start: Neoproterozoic.end,
  end: 252,
  image: true,
  subdivisions: [Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian],
  description: [
    'The continents of <b>Laurentia</b> and <b>Baltica</b>, left over from the breakup of <b>Pannotia</b>, collide again to form <b>Laurussia</b> (also known as <b>Euramerica</b>), which in turn collides with <b>Gondwana</b>, assembling the new supercontinent of <b>Pangaea</b> about 336 million years ago.',
    'The climate varies significantly throughout the era, alternating between warming and cooling trends. Oxygen levels keep increasing and reach the historical maximum of about 35%.',
    'The biosphere experiences dramatic evolutionary changes. Multicellular life rapidly diversifies in the oceans (<b>Cambrian Explosion</b>) and then eventually occupies the landmasses. <b>Arthropods</b>, <b>trilobites</b>, <b>molluscs</b>, <b>fish</b>, <b>insects</b>, <b>amphibians</b>, <b>reptiles</b>, <b>tetrapods</b>, and many other groups of animals appear and become widespread.',
    '<b>Plants</b> appear on land and gradually evolve, forming extensive forests (<b>Devonian Explosion</b>) and providing more comfortable habitats for terrestrial animals.',
    'Several extinction events occur. The era ends with the <b>Permian-Triassic mass extinction</b>, the largest one in Earth\'s history. It eliminates nearly 95% of marine life and 70% of terrestrial species.'
  ]
}

const Mesozoic: TimelineDivision = {
  type: 'Era',
  name: 'Mesozoic',
  start: Paleozoic.end,
  end: 66,
  image: true,
  subdivisions: [Triassic, Jurassic, Cretaceous],
  description: [
    'The supercontinent of <b>Pangaea</b> breaks up about 175 million years ago, splitting into <b>Laurasia</b> in the north and <b>Gondwana</b> in the south. <b>Gondwana</b> further splits into several pieces that would later become <b>Africa</b>, <b>South America</b>, <b>Antarctica</b>, and <b>Australia</b>.',
    'The climate remains generally warm. Forests grow near the poles, large arid expanses are common near the equator. Oxygen concentration in the atmosphere decreases to 20% and remains at that level.',
    'Biodiversity recovers from the <b>Permian-Triassic mass extinction</b>. The process takes up to 30 million years.',
    'Initially, <b>reptiles</b> dominate on land. <b>Dinosaurs</b> appear and rapidly diversify, becoming widespread after the <b>Triassic–Jurassic extinction</b> 201 million years ago. Some species reach over 30 meters in size, becoming the largest known terrestrial animals.',
    'First flying vertebrates evolve, such as <b>pterosaurs</b> and <b>birds</b>. First true <b>mammals</b> emerge, although remain small-sized. Some modern <b>insects</b> appear.',
    '<b>Gymnosperms</b> (seed-producing plants), such as <b>conifers</b> and <b>ferns</b>, initially dominate on land. <b>Angiosperms</b> (flowering plants) appear and become widespread across the globe by the end of the era.',
    'Aquatic life continues to flourish. Large <b>marine reptiles</b> thrive in the oceans. <b>Turtles</b> significantly diversify.',
    'The <b>Cretaceous-Paleogene extinction event</b> occurs 66 million years ago, caused by the impact of a massive asteroid. It wipes out all non-avian dinosaurs, together with most other large terrestrial and marine animals.'
  ]
}

const Cenozoic: TimelineDivision = {
  type: 'Era',
  name: 'Cenozoic',
  start: Mesozoic.end,
  end: 0,
  image: true,
  subdivisions: [Paleogene, Neogene, Quaternary],
  description: [
    'Continents gradually take their modern shapes and positions. <b>Laurasia</b> splits into <b>North America</b>, <b>Europe</b>, and <b>Asia</b> between 66 and 30 million years ago. <b>Antarctica</b> separates from <b>Australia</b> (about 45 million years ago) and from <b>South America</b> (when exactly is unclear). Land bridges connect Africa to Eurasia (15-19 million years ago) and North America to South America (3-5 million years ago).',
    'The climate remains warm during the early Cenozoic. A cooling trend begins about 50 million years ago and continues throughout most of the era, leading to periodic glaciations (commonly known as <b>Ice Ages</b>) since about 2.5 million years ago.',
    'Early in the era, extensive <b>forests</b> cover the landmasses and grow even in the polar regions. As the planet gets cooler, the forests retreat, giving way to <b>grasslands</b> and <b>savannas</b>.',
    'Following the extinction of dinosaurs, <b>mammals</b> become the new predominant group of animals. Most of the modern terrestrial fauna appears. <b>Birds</b>, <b>insects</b>, and <b>snakes</b> also significantly diversify.',
    'Among other groups of mammals, <b>primates</b> emerge and gradually develop, leading to the evolution of <b>humans</b>. The <b>Stone Age</b> begins about 3.4 million years ago. Humans become anatomically modern about 2 million years ago. <b>Homo sapiens</b> appears about 300 thousand years ago. All <b>recorded history</b> takes place within the last 10 thousand years.',
    'The <b>Eocene-Oligocene extinction</b> occurs about 34 million years ago, affecting mostly aquatic life. Large land mammals (also called megafauna) disappear between 120 and 11 thousand years ago in a process known as the <b>Quaternary extinction</b>. Human activity causes a significant decline in biodiversity, known as the ongoing <b>Holocene extinction</b>.'
  ]
}


/******************************************************************************
 * 
 *   Eons
 * 
******************************************************************************/

const Hadean: TimelineDivision = {
  type: 'Eon',
  name: 'Hadean',
  start: 4567,
  end: 4000,
  subdivisions: [],
  image: true,
  description: [
    'The beginning of the Hadean is defined by the age of the oldest known solid material in the Solar System, found in meteorites and measured at 4.567 billion years old.',
    'The <b>Earth</b> forms about 4.54 billion years ago from an <b>accretion disk</b>, a cloud of gas and dust left over from the formation of the Sun.',
    'The <b>Moon</b> forms tens of millions of years after the Earth\'s formation. According to the <b>impact hypothesis</b>, a large stellar body struck the Earth with a glancing blow, causing a portion of its material to be ejected into orbit and forming the Moon.',
    'Initially, the Earth is molten due to frequent collisions with asteroids. Later, the planet\'s outer layer cools down and forms a solid crust. Gases form the atmosphere, and water condenses on the rocky surface.',
    'The initial heavy atmosphere consists mostly of carbon dioxide, has a surface temperature exceeding 200 °C and an atmospheric pressure of more than 25 modern atmospheres.',
    'In the late Hadean, most of the planet\'s surface is covered by oceans. Water remains liquid at temperatures above 100 °C due to the high atmospheric pressure. Continents or islands may exist, but they occupy a fairly small area.',
    'Between 4.1 and 3.8 billion years ago, numerous asteroid impacts occur, causing significant changes to the surface environment. This event is usually referred to as the <b>Late Heavy Bombardment</b>.',
    'Since very little evidence has survived from the Hadean, geophysical models remain controversial and may change with new discoveries.'
  ]
}

const Archean: TimelineDivision = {
  type: 'Eon',
  name: 'Archean',
  start: Hadean.end,
  end: 2500,
  image: true,
  subdivisions: [Eoarchean, Paleoarchean, Mesoarchean, Neoarchean],
  description: [
    'The Earth\'s <b>magnetic field</b> finally forms about 3.5 billion years ago. It protects the planet from the solar wind and stabilizes the atmosphere.',
    'The movement of tectonic plates begins. The first supercontinent, <b>Vaalbara</b>, emerges 3.6 billion years ago and breaks up 2.8 billion years ago. The continent of <b>Ur</b> forms, around 2.8 billion years ago. The second supercontinent, <b>Kenorland</b>, forms 2.7 billion years ago.',
    'The planet is cooled to milder surface temperatures of about 55-85 °C. The atmosphere is orange, with high concentrations of methane and carbon dioxide. The oceans are green and acidic due to dissolved minerals.',
    'Microbial <b>life</b> appears in the oceans, as early as 3.77 billion years ago, and eventually spreads to the continents. Microorganisms break down rock, creating soils.',
    '<b>Cyanobacteria</b> evolve to use <b>photosynthesis</b> to convert the energy of sunlight into chemical energy, producing large amounts of oxygen. However, most of the oxygen is quickly bound as it reacts with minerals in the environment.',
    'The <b>Pongola glaciation</b>, the oldest known glaciation event, occurs closer to the end of the eon, about 2.9 billion years ago.'
  ]
}

const Proterozoic: TimelineDivision = {
  type: 'Eon',
  name: 'Proterozoic',
  start: Archean.end,
  end: 538,
  image: true,
  subdivisions: [Paleoproterozoic, Mesoproterozoic, Neoproterozoic],
  description: [
    'Tectonic plates continue to drift. Supercontinents are forming and breaking up: <b>Kenorland</b> breaks apart roughly 2.1 billion years ago, <b>Columbia</b> (<b>Nuna</b>) exists between 1.8 and 1.35 billion years ago, <b>Rodinia</b> between 1.13 and 0.7 billion years ago, <b>Pannotia</b> between 630 and 570 million years ago. <b>Gondwana</b> forms 550 million years ago.',
    'Microorganisms keep producing oxygen. It reacts with minerals dissolved in the oceans, turning the water clear. It also builds up in the atmosphere, causing a mass extinction of <b>anaerobic</b> organisms for which oxygen is toxic. This is known as the <b>Great Oxidation Event</b> (2.4 to 2.0 billion years ago).',
    'Decreased concentrations of greenhouse gases trigger the <b>Huronian glaciation</b> (2.4 to 2.1 billion years ago). The climate stabilizes 1.8 billion years ago and remains almost unchanged for a billion years (the so-called <b>Boring Billion</b>). Severe glaciations occur between 750 and 635 million years ago, with glaciers reaching the equator (<b>Snowball Earth</b>). Warm and humid climate establishes again near the end of the eon.',
    'Unicellular <b>prokaryotic</b> organisms, such as cyanobacteria, remain the predominant form of life during most of the eon, evolving and diversifying.',
    '<b>Eukaryotic</b> organisms (which have a nucleus in their cells) appear, possibly around 2.1 billion years ago. First <b>multicellular</b> organisms develop about 1.2 billion years ago. <b>Sexual reproduction</b> emerges, first confirmed around 1.05 billion years ago.',
    '<b>Heterotrophic</b> organisms (which cannot produce their own food and rely on the existence of other species) appear and become widespread. Complex <b>ecosystems</b> are forming in the oceans near the end of the eon.'
  ]
}

const Phanerozoic: TimelineDivision = {
  type: 'Eon',
  name: 'Phanerozoic',
  start: Proterozoic.end,
  end: 0,
  image: true,
  subdivisions: [Paleozoic, Mesozoic, Cenozoic],
  description: [
    '<b>Gondwana</b> collides with smaller landmasses, forming the supercontinent of <b>Pangaea</b> about 336 million years ago. It splits again about 175 million years ago into <b>Laurasia</b> in the north and <b>Gondwana</b> in the south. Those two landmasses further break up, resulting in the formation of modern continents.',
    'Most of the evolution of complex life happens during this eon. It begins with a rapid diversification of marine species about 540-520 million years ago, known as the <b>Cambrian Explosion</b>. Multicellular life flourishes in the oceans and eventually spreads to the land, forming terrestrial ecosystems. <b>Dinosaurs</b> appear 245-233 million years ago and dominate until 66 million years ago. <b>Mammals</b> take their place and thrive until modern times.',
    'Multiple extinction events occur. The most significant are the <b>Permian-Triassic mass extinction</b> (which eliminates nearly 95% of marine life and 70% of terrestrial species 252 million years ago) and the famous <b>Cretaceous-Paleogene extinction</b> (which wipes out dinosaurs and most other large animals 66 million years ago).',
    'Among other groups of mammals, <b>primates</b> emerge about 55 million years ago and gradually develop, leading to the evolution of <b>humans</b>. The <b>Stone Age</b> begins about 3.4 million years ago. Humans become anatomically modern about 2 million years ago. <b>Homo sapiens</b> appears about 300 thousand years ago.',
    'All recorded <b>human history</b> takes place within the last 10 thousand years, less than 0.002% of the eon. Humans develop agriculture, establish permanent settlements, advance complex science, and form a global civilization.'
  ]
}


/******************************************************************************
 * 
 *   Timeline
 * 
******************************************************************************/

export const Timeline: TimelineDivision[] = [
  Hadean, Archean, Proterozoic, Phanerozoic
];
