// setup data sources
const nouns = ['fish','couch','tree','plane','goat','car','bike','civil engineer','mercenary','goose','hammer','planet','Imperial Majestrix','snowball','rare earth element'];
const verbs = ['fish','run','sleep','dance','build','decay','grow','fester','ferment','mutate','shimmy','boogie','photosynthesize','nerf','work'];
const adverbs = ['fishily','slowly','quickly','nicely','infuriatingly','fungally','sinisterly','majestically','weirdly','radioactively','chaotically','randomly','stinkily','freshly','gnomically'];

// grab 3 random data elements
let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];


// output message
let message = `Hi! My ${noun} likes to ${verb} ${adverb}!`;

console.log (message);