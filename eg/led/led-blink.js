const {
  Board,
  Led
} = require('johnny-five');
new Board().on('ready', () => {
  const led = new Led(13);
  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});