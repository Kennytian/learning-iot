const {
  Board
} = require('johnny-five');

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
const board = Board({
  port: '/dev/cu.usbmodem1411',
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on('ready', () => {
  this.pinMode(13, this.MODES.OUTPUT);
  this.loop(500, () => {
    this.digitalWrite(13, this.pins[13].value ? 0 : 1)
  });
});