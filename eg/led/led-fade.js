const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  const led = new Led(11);
  led.fadeIn();

  // Toggle the led after 5 seconds (shown in ms)
  this.wait(2000, () => {
    led.fadeOut();
  });
});
