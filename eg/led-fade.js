const {
  Board,
  Led
} = require('johnny-five');
new Board().on('ready', () => {
  const led = new Led(11);
  led.fadeIn();

  // Toggle the led after 5 seconds (shown in ms)
  this.wait(5000, () => {
    led.fadeOut();
  });
});