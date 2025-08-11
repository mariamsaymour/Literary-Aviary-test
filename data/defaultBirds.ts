import { BirdData } from '../types/bird';

export const defaultBirdsData: BirdData[] = [
  // Shakespeare - Comprehensive Bird References from plays and poems
  
  // Ravens and Crows - Dark omens and foreboding
  {
    id: 1,
    species: 'Raven',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raven.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC613899-Kolkrabe_28.06.20_morgens_Lindau_Stiegel.mp3',
    quote: 'The raven himself is hoarse That croaks the fatal entrance of Duncan Under my battlements.',
    author: 'William Shakespeare',
    source: 'Macbeth',
    year: 1606,
    mood: 'fear',
    wingspan: 25, // Body length in cm - keeping field name for compatibility
    region: 'Europe'
  },
  {
    id: 2,
    species: 'Crow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Crow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/OHVUOTKPAA/XC1008026-Carrion%20Crow%2005.06.2020%20Sint-Niklaas%20Belgium%20Jaap%20Denee.mp3',
    quote: 'Light thickens, and the crow makes wing to the rooky wood.',
    author: 'William Shakespeare',
    source: 'Macbeth',
    year: 1606,
    mood: 'fear',
    wingspan: 18,
    region: 'Europe'
  },
  {
    id: 3,
    species: 'Crow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Crow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/OHVUOTKPAA/XC1008026-Carrion%20Crow%2005.06.2020%20Sint-Niklaas%20Belgium%20Jaap%20Denee.mp3',
    quote: "A crow o' the same colour.",
    author: 'William Shakespeare',
    source: 'Twelfth Night',
    year: 1601,
    mood: 'calm',
    wingspan: 18,
    region: 'Europe'
  },

  // Larks - Dawn, joy, and awakening
  {
    id: 4,
    species: 'Lark',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Lark.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC736017-Skylark%20song%20flight%20190622%201040%20Elmley%20Hake%20Lee%20Harvey.mp3',
    quote: 'Hark! hark! the lark at heaven\'s gate sings, And Phoebus gins arise.',
    author: 'William Shakespeare',    
    source: 'Cymbeline',
    year: 1611,
    mood: 'joy',
    wingspan: 18,
    region: 'Europe'
  },
  {
    id: 5,
    species: 'Lark',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Lark.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC736017-Skylark%20song%20flight%20190622%201040%20Elmley%20Hake%20Lee%20Harvey.mp3',
    quote: 'It was the lark, the herald of the morn, No nightingale.',
    author: 'William Shakespeare',
    source: 'Romeo and Juliet',
    year: 1595,
    mood: 'love',
    wingspan: 18,
    region: 'Europe'
  },
  {
    id: 6,
    species: 'Lark',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Lark.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC736017-Skylark%20song%20flight%20190622%201040%20Elmley%20Hake%20Lee%20Harvey.mp3',
    quote: 'Lo! here the gentle lark, weary of rest, From his moist cabinet mounts up on high.',
    author: 'William Shakespeare',
    source: 'Venus and Adonis',
    year: 1593,
    mood: 'love',
    wingspan: 18,
    region: 'Europe'
  },

  // Nightingales - Love, beauty, and melancholy
  {
    id: 7,
    species: 'Nightingale',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Nightingale.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLKUVE/XC513326-nightingale%20luscinia%20megarhynchos%20spain.mp3',
    quote: 'It was the nightingale, and not the lark, That pierced the fearful hollow of thine ear.',
    author: 'William Shakespeare',
    source: 'Romeo and Juliet',
    year: 1595,
    mood: 'love',
    wingspan: 16,
    region: 'Europe'
  },
  {
    id: 8,
    species: 'Nightingale',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Nightingale.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLKUVE/XC513326-nightingale%20luscinia%20megarhynchos%20spain.mp3',
    quote: 'The nightingale, if she should sing by day, When every goose is cackling, would be thought No better a musician than the wren.',
    author: 'William Shakespeare',
    source: 'The Merchant of Venice',
    year: 1596,
    mood: 'calm',
    wingspan: 16,
    region: 'Europe'
  },

  // Owls - Wisdom and death omens
  {
    id: 9,
    species: 'Owl',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Owl.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC695457-LittleOwl_20220315_193146.mp3',
    quote: "It was the owl that shriek'd, the fatal bellman, Which gives the stern'st good-night.",
    author: 'William Shakespeare',
    source: 'Macbeth',
    year: 1606,
    mood: 'fear',
    wingspan: 22,
    region: 'Europe'
  },
  {
    id: 10,
    species: 'Owl',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Owl.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC695457-LittleOwl_20220315_193146.mp3',
    quote: 'The screech-owl, screeching loud, Puts the wretch that lies in woe In remembrance of a shroud.',
    author: 'William Shakespeare',
    source: 'A Midsummer Night\'s Dream',
    year: 1595,
    mood: 'fear',
    wingspan: 22,
    region: 'Europe'
  },

  // Eagles - Power and nobility
  {
    id: 11,
    species: 'Eagle',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Eagle.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/HPJVJEIRWK/XC671906-call.mp3',
    quote: 'But eagles fly alone and they are but sheep which always herd together.',
    author: 'William Shakespeare',
    source: 'Coriolanus',
    year: 1608,
    mood: 'surprise',
    wingspan: 76,
    region: 'Europe'
  },
  {
    id: 12,
    species: 'Eagle',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Eagle.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/HPJVJEIRWK/XC671906-call.mp3',
    quote: 'I will soar with the eagle so high, that the clouds shall be beneath my flight.',
    author: 'William Shakespeare',
    source: 'Edward III',
    year: 1596,
    mood: 'joy',
    wingspan: 76,
    region: 'Europe'
  },

  // Swans - Death, beauty, and transformation
  {
    id: 13,
    species: 'Swan',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Swan.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC819006-Mute%20Swan%20calls.mp3',
    quote: 'I will play the swan, And die in music.',
    author: 'William Shakespeare',
    source: 'Othello',
    year: 1603,
    mood: 'sadness',
    wingspan: 125,
    region: 'Europe'
  },
  {
    id: 14,
    species: 'Swan',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Swan.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC819006-Mute%20Swan%20calls.mp3',
    quote: 'Sweet swan of Avon! what a sight it were To see thee in our waters yet appear.',
    author: 'Ben Jonson',
    source: 'To the Memory of Shakespeare',
    year: 1623,
    mood: 'love',
    wingspan: 125,
    region: 'Europe'
  },

  // Doves - Peace, love, and purity
  {
    id: 15,
    species: 'Dove',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Dove.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/WUUDJMKSJW/XC704083-Wood%20dove%20call.mp3',
    quote: "So shows a snowy dove trooping with crows As yonder lady o'er her fellows shows.",
    author: 'William Shakespeare',
    source: 'Romeo and Juliet',
    year: 1595,
    mood: 'love',
    wingspan: 26,
    region: 'Europe'
  },
  {
    id: 16,
    species: 'Dove',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Dove.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/WUUDJMKSJW/XC704083-Wood%20dove%20call.mp3',
    quote: "How silver-sweet sound lovers' tongues by night, Like softest music to attending ears! As is a winged messenger of heaven.",
    author: 'William Shakespeare',
    source: 'Romeo and Juliet',
    year: 1595,
    mood: 'love',
    wingspan: 26,
    region: 'Europe'
  },

  // Sparrows and small birds - Humility and providence
  {
    id: 17,
    species: 'Sparrow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Sparrow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC738016-HS%20full%20song%20dawn%2030_06_22.mp3',
    quote: 'There is special providence in the fall of a sparrow.',
    author: 'William Shakespeare',
    source: 'Hamlet',
    year: 1600,
    mood: 'calm',
    wingspan: 14,
    region: 'Europe'
  },
  {
    id: 18,
    species: 'Wren',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Wren.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC760918-Wren%20song%20140723%20600%20Otmoor%20RSPB%20Lee%20Harvey.mp3',
    quote: "The wren goes to't, and the small gilded fly Does lecher in my sight.",
    author: 'William Shakespeare',
    source: 'King Lear',
    year: 1605,
    mood: 'anger',
    wingspan: 10,
    region: 'Europe'
  },

  // Peacocks - Pride and vanity
  {
    id: 19,
    species: 'Peacock',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Peacock.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/CXVRWVNPRV/XC620284-Indian%20Peafowl%20call.mp3',
    quote: 'Why, he stalks up and down like a peacock—a stride and a stand.',
    author: 'William Shakespeare',
    source: 'Troilus and Cressida',
    year: 1602,
    mood: 'surprise',
    wingspan: 95,
    region: 'Europe'
  },

  // Hawks and Falcons - Hunting and nobility (using Raptor.svg)
  {
    id: 20,
    species: 'Hawk',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC671157-Common%20Buzzard%20-%20alarm%20call.mp3',
    quote: 'I know a hawk from a handsaw.',
    author: 'William Shakespeare',
    source: 'Hamlet',
    year: 1600,
    mood: 'calm',
    wingspan: 56,
    region: 'Europe'
  },
  {
    id: 21,
    species: 'Falcon',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
    audioUrl: 'https://www.bird-sounds.net/sounds/uploaded/PEREGRINE-FALCON/XC125727-Peregrine%20Falcon%20Call%20-%20High%20Quality.mp3',
    quote: 'My falcon now is sharp and passing empty, And till she stoop she must not be full-gorged.',
    author: 'William Shakespeare',
    source: 'The Taming of the Shrew',
    year: 1593,
    mood: 'calm',
    wingspan: 39,
    region: 'Europe'
  },

  // Geese and domesticated birds
  {
    id: 22,
    species: 'Goose',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Goose.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512915-Greylag%20Goose%20calls.mp3',
    quote: 'What a goose is that!',
    author: 'William Shakespeare',
    source: 'The Tempest',
    year: 1611,
    mood: 'surprise',
    wingspan: 75,
    region: 'Europe'
  },

  // Cock/Rooster - Dawn and time (using Cock.svg)
  {
    id: 23,
    species: 'Rooster',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Cock.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/UGDVOXVQJG/XC760099-Sri%20Lankan%20Junglefowl%20calling%2C%20Sinharaja%2C%20Sri%20Lanka%2C%20July%202023%20%28Mike%20Nelson%29.mp3',
    quote: "Some say that ever 'gainst that season comes Wherein our Saviour's birth is celebrated, The bird of dawning singeth all night long.",
    author: 'William Shakespeare',
    source: 'Hamlet',
    year: 1600,
    mood: 'calm',
    wingspan: 50,
    region: 'Europe'
  },

  // 1001 NIGHTS Bird References - Changed to Asia region
  
  // Hoopoe - Messenger and guide
  {
    id: 24,
    species: 'Hoopoe',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Hoopoe.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512918-Hoopoe%20call.mp3',
    quote: 'The hoopoe came with tidings from the Queen of Sheba, bearing messages between kingdoms.',
    author: 'Anonymous',
    source: '1001 Nights',
    year: 900,
    mood: 'surprise',
    wingspan: 28,
    region: 'Asia'
  },

  // Parrot - Speech and wisdom
  {
    id: 25,
    species: 'Parrot',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Parrot.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/JMSWOFBWLX/XC752912-Rose-ringed%20Parakeet%20begging%20calls%20%28Psittacula%20krameri%29%20recorded%20in%20Hyderabad%2C%20India.mp3',
    quote: "The merchant's parrot spoke in seven tongues, revealing the secrets of distant lands.",
    author: 'Anonymous',
    source: '1001 Nights',
    year: 900,
    mood: 'surprise',
    wingspan: 40,
    region: 'Asia'
  },

  // Bulbul - Love and poetry (Persian nightingale)
  {
    id: 26,
    species: 'Bulbul',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Bulbul.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/UGDVOXVQJG/XC760142-Common%20Bulbul%20song%2C%20Sinharaja%2C%20Sri%20Lanka%2C%20July%202023%20%28Mike%20Nelson%29.mp3',
    quote: 'The bulbul sang of love so sweetly that even the roses wept with longing.',
    author: 'Anonymous',
    source: '1001 Nights',
    year: 900,
    mood: 'love',
    wingspan: 20,
    region: 'Asia'
  },

  // Falcon - Hunting and nobility (Arabian falconry)
  {
    id: 27,
    species: 'Falcon',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
    audioUrl: 'https://www.bird-sounds.net/sounds/uploaded/PEREGRINE-FALCON/XC125727-Peregrine%20Falcon%20Call%20-%20High%20Quality.mp3',
    quote: "The Sultan's falcon returned with the ring, proof of the prince's noble quest.",
    author: 'Anonymous',
    source: '1001 Nights',
    year: 900,
    mood: 'love',
    wingspan: 39,
    region: 'Asia'
  },

  // OTHER LITERARY CLASSICS
  
  // Edgar Allan Poe - American Gothic
  {
    id: 28,
    species: 'Raven',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raven.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC613899-Kolkrabe_28.06.20_morgens_Lindau_Stiegel.mp3',
    quote: 'Once upon a midnight dreary, while I pondered, weak and weary…',
    author: 'Edgar Allan Poe',
    source: 'The Raven',
    year: 1845,
    mood: 'sadness',
    wingspan: 25,
    region: 'North America'
  },
  {
    id: 29,
    species: 'Raven',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raven.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC613899-Kolkrabe_28.06.20_morgens_Lindau_Stiegel.mp3',
    quote: 'Quoth the Raven "Nevermore."',
    author: 'Edgar Allan Poe',
    source: 'The Raven',
    year: 1845,
    mood: 'fear',
    wingspan: 25,
    region: 'North America'
  },

  // John Keats - Romantic Poetry
  {
    id: 30,
    species: 'Nightingale',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Nightingale.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLKUVE/XC513326-nightingale%20luscinia%20megarhynchos%20spain.mp3',
    quote: 'My heart aches, and a drowsy numbness pains My sense, as though of hemlock I had drunk.',
    author: 'John Keats',
    source: 'Ode to a Nightingale',
    year: 1819,
    mood: 'sadness',
    wingspan: 16,
    region: 'Europe'
  },
  {
    id: 31,
    species: 'Nightingale',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Nightingale.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/BLKUVE/XC513326-nightingale%20luscinia%20megarhynchos%20spain.mp3',
    quote: 'Thou wast not born for death, immortal Bird!',
    author: 'John Keats',
    source: 'Ode to a Nightingale',
    year: 1819,
    mood: 'love',
    wingspan: 16,
    region: 'Europe'
  },

  // Samuel Taylor Coleridge - Romantic Poetry
  {
    id: 32,
    species: 'Albatross',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Albatross.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/HFJWKUUOHC/XC711506-Royal%20Albatross%20call.mp3',
    quote: 'Instead of the cross, the Albatross About my neck was hung.',
    author: 'Samuel Taylor Coleridge',
    source: 'The Rime of the Ancient Mariner',
    year: 1798,
    mood: 'fear',
    wingspan: 110,
    region: 'Europe'
  },

  // William Blake - Mystical Poetry
  {
    id: 33,
    species: 'Robin',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Ruddock.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC736018-Robin%20song%20190622%20645%20Elmley%20Hake%20Lee%20Harvey.mp3',
    quote: 'A robin redbreast in a cage puts all heaven in a rage.',
    author: 'William Blake',
    source: 'Auguries of Innocence',
    year: 1803,
    mood: 'anger',
    wingspan: 14,
    region: 'Europe'
  },

  // Alfred Lord Tennyson - Victorian Poetry
  {
    id: 34,
    species: 'Eagle',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Eagle.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/HPJVJEIRWK/XC671906-call.mp3',
    quote: 'He clasps the crag with crooked hands; Close to the sun in lonely lands.',
    author: 'Alfred Lord Tennyson',
    source: 'The Eagle',
    year: 1851,
    mood: 'calm',
    wingspan: 76,
    region: 'Europe'
  },

  // Henry David Thoreau - Nature Writing
  {
    id: 35,
    species: 'Sparrow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Sparrow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC738016-HS%20full%20song%20dawn%2030_06_22.mp3',
    quote: 'I once had a sparrow alight upon my shoulder for a moment while I was hoeing.',
    author: 'Henry David Thoreau',
    source: 'Walden',
    year: 1854,
    mood: 'love',
    wingspan: 14,
    region: 'North America'
  },

  // Aesop's Fables
  {
    id: 36,
    species: 'Crow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Crow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/OHVUOTKPAA/XC1008026-Carrion%20Crow%2005.06.2020%20Sint-Niklaas%20Belgium%20Jaap%20Denee.mp3',
    quote: 'A crow, who had stolen a bit of meat, perched in a tree and held it in his beak.',
    author: 'Aesop',
    source: 'The Crow and the Fox',
    year: 600,
    mood: 'surprise',
    wingspan: 18,
    region: 'Europe'
  },

  // More Shakespeare from less common plays
  {
    id: 37,
    species: 'Kite',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Raptor.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC671157-Common%20Buzzard%20-%20alarm%20call.mp3',
    quote: 'Detested kite! thou liest.',
    author: 'William Shakespeare',
    source: 'King Lear',
    year: 1605,
    mood: 'anger',
    wingspan: 60,
    region: 'Europe'
  },
  {
    id: 38,
    species: 'Swallow',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Swallow.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/GYUUAAJMUG/XC760919-Swallow%20song%20calls%20140723%20630%20Otmoor%20RSPB%20Lee%20Harvey.mp3',
    quote: "True hope is swift, and flies with swallow's wings.",
    author: 'William Shakespeare',
    source: 'Richard III',
    year: 1593,
    mood: 'joy',
    wingspan: 17,
    region: 'Europe'
  },
  // Magpie - Using correct Pie.svg URL
  {
    id: 39,
    species: 'Magpie',
    imageUrl: 'https://raw.githubusercontent.com/mariamsaymour/ShakespeareBirds/refs/heads/main/birds/Pie.svg',
    audioUrl: 'https://xeno-canto.org/sounds/uploaded/OHVUOTKPAA/XC673511-Magpie%20calls%20210721%20430%20Durlston%20Lee%20Harvey.mp3',
    quote: 'Augurs and understood relations have By magot-pies and choughs and rooks brought forth.',
    author: 'William Shakespeare',
    source: 'Macbeth',
    year: 1606,
    mood: 'fear',
    wingspan: 44,
    region: 'Europe'
  }
];