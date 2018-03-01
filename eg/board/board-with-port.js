const { Board } = require('johnny-five');

const port = '/dev/tty.wchusbserial1410';

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
const board = Board({
  port: port,
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on('ready', () => {
  this.pinMode(13, this.MODES.OUTPUT);
  this.loop(500, () => {
    this.digitalWrite(13, this.pins[13].value ? 0 : 1);
  });
});
