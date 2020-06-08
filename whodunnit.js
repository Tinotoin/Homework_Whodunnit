// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//COMMENTS
// This will print 'The murderer is Miss Scarlet' because Miss Scarlet is the const murderer.


// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// COMMENTS
// This will fail as it is trying to change a const variable.


//Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//COMMENTS
// This will print twice:
// 'First Verdict: The murderer is Mrs. Peacock'
// 'Second Verdict: The murderer is Professor Plum'
// This is because the first verdict is logged (where const Peacock is murderer), then secondVerdict (where let Plum is murderer).


//Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//COMMENTS
// This will print 'The suspects are Miss Scarlett, Professor Plum, Colonel Mustard' (as per line 60 & 61, but Mustard is #3 as the function on line 64 denotes.)
// This will print 'Suspect three is Mrs. Peacock' due to the fact that... erm I'm not sure.
//

//Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//COMMENTS
// This will print 'The weapon is the Revolver.' because the weapon was changed on line 93 and changeWeapon was declared last.


//Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//COMMENTS
// This will print 'The murderer is Mrs. White.' as the plotTwist 'overwrote' the Mr Green const before printing.


//Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//COMMENTS
// This will print 'The murderer is Colonel Mustard.' as plotTwist was called after unexpectedOutcome


//Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//COMMENTS
// This will print 'The weapon is Candle Stick.' as the unexpectedOutcome function and murderer===murderer section denotes the weapon change.



//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// COMMENTS
// This will print 'The murderer is Mrs. Peacock.'
// don't fully understand why this is actually Prof Plum...the if statement seems to contradict this.


// Extension Episode 10 - Tino's Episode

const scenario = {
  murderer: 'Prof. Plum',
  room: 'Hall',
  weapon: 'Pipe'
}

const declareMurderer = function(){
  return `The murderer is ${scenario.murderer}`
}

const declareRoom = function(){
  return `The murder happened in the ${scenario.room}`}

const declareWeapon = function(){
  return `The murder weapon was the ${scenario.weapon}`}

const verdict = declareMurderer(); declareRoom(); declareWeapon();

console.log(verdict);

// I stopped here as I couldn't get why it wouldn't display Room and Weapon after the murderer.
// Murdere identified though.
