const {
  Board,
  Led
} = require('johnny-five');

new Board().on('ready', () => {
  const led = new Led(13);
  led.on();

  this.on('exit', () => {
    led.off()
  });
});