const { Board, Leds, Sensor } = require('johnny-five');
const board = new Board();
board.on('ready', () => {
  const leds = new Leds([2, 3, 4, 5, 6]);
  const pot = new Sensor('A0');
  pot.scale(
    [-1, 4].on('change', () => {
      const lastIndex = Math.round(this.value);
      if (lastIndex === -1) {
        leds.off();
      } else {
        leds.each((led, index) => {
          if (index <= lastIndex) {
            led.on();
          } else {
            led.off();
          }
        });
      }
    })
  );
});
