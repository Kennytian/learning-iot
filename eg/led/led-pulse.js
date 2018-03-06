const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  // Create a standard `led` component on a valid pwm pin
  const led = new Led(11);
  led.pulse();

  this.wait(10000, () => {
    // stop() terminates the interval
    // off() shuts the led off
    led.stop().off();
  });
});
