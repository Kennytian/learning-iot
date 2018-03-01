const {
  Board,
  Led
} = require('johnny-five');
new Board().on('ready', () => {
  console.log('Ready event, Repl instance auto-initialized');
  const led = new Led(13);
  this.repl.inject({
    on: () => led.on(),
    off: () => led.off(),
  });
});