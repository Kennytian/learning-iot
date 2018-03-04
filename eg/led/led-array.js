const { Board, Leds } = require('johnny-five');
const board = new Board();
board.on('ready', () => {
  const leds = new Leds([3, 5, 6]);
  leds.pulse();
});
