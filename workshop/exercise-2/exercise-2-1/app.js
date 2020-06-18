// Preset values
const FROGS = 3;

const track = document.getElementById('track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 2. Create li
// 3. Create span and add it to the li
// 4. Assign an id to each lane

for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  let lane = document.createElement('li');
  track.appendChild(lane);

  let number = document.createElement('span');
  number.innerText = laneCount;
  lane.appendChild(number);

  lane.id = `frog-${laneCount}`;
}

// Exercise 2.2

let racers = [];

for (let x = 0; x < FROGS; x++) {
  const newFrog = frogStable[x];
  racers.push(newFrog);
}

console.log(racers);

// Exercise 2.3

racers.forEach(function (racer, id) {
  const newFrog = document.createElement('span');
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add('frog');
  newFrog.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);

  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;

  const frogProgress = document.createElement('span');
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(frogProgress);
});

// (for Exercise 2.5)
let ranking = [];

// Exercise 2.4
function racingFrog(racer) {
  let progress = racer.progress;
  const trackWidth = track.offsetWidth;
  const hopLength = (Math.floor(Math.random() * 100) / trackWidth) * 100;
  const bounce = setInterval(function () {
    progress += hopLength;
    if (progress > 100) {
      progress = 100;
      console.log(racer.name, ' has finished!');
      clearInterval(bounce);
      ranking.push(racer);
    }
    document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

racers.forEach(function (racer) {
  racingFrog(racer);
});

// Exercise 2.5
const endRace = setInterval(function () {
  if (ranking.length === racers.length) {
    console.log(ranking);
    clearInterval(endRace);
  }
}, 500);