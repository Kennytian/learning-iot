const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  const led = new Led(13);
  led.on();

  // enter .exit ture off the led
  this.on('exit', function() {
    led.off();
  });
});
