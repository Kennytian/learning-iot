const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  const led = new Led(13);
  led.blink(500);
});
