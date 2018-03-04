const { Board, Led } = require('johnny-five');

// The board's pins will not be accessible until
// the board has reported that it is ready
const board = new Board();
board.on('ready', () => {
  console.log('Ready!');
  const led = new Led(13);
  led.blink(500);
});
