const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', () => {
  const led = new Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3,
    },
  });
  this.repl.inject({
    led: led,
  });
  led.on();
  led.color('#FF0000');
  led.blink(1000);
});
