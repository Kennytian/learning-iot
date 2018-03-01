const { Board, Led } = require('johnny-five');
new Board().on('ready', () => {
  // Create a standard `led` component
  // on a valid pwm pin
  const led = new Led(11);
  led.pulse();

  this.wait(10000, () => {
    // stop() terminates the interval
    // off() shuts the led off
    led.stop.off();
  });
});
