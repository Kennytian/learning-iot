const {
  Board,
  Leds,
} = require('johnny-five');
new Board().on('ready', () => {
  const leds = new Leds([11, 10, 9, 6, 5, 3]);
  const timing = 250;
  const randomFade = true;
  let fadeIndex = 0;
  const ledCount = leds.length;

  function fadeNext() {
    let candidateIndex = fadeIndex;
    leds[fadeIndex].fadeIn(timing);

    // Determine the next LED to fade
    if (randomFade) {
      while (candidateIndex === fadeIndex) {
        candidateIndex = Math.round(Math.random() * (ledCount - 1));
      }
    } else {
      candidateIndex = (fadeIndex < ledCount - 1) ? fadeIndex + 1 : 0;
    }
    fadeIndex = candidateIndex;
    leds[fadeIndex].fadeOut(timing, fadeNext);
  }

  leds.on();
  leds[fadeIndex].fadeOut(timing, fadeNext);
});