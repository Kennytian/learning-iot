const { Board, Led } = require('johnny-five');

function samplingInterval(ms) {
  const led = new Led(13);
  led.blink(ms);
}
const board = new Board();
board.on('ready', () => {
  samplingInterval(100);
});
