const {
  Board
} = require('johnny-five');

// The board's pins will not be accessible until
// the board has reported that it is ready

new Board().on('ready', () => {
  console.log('Ready!');
  const led = new five.Led(13);
  led.blink(500);
});