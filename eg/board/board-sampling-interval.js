const { Board, Led } = require('johnny-five');

function samplingInterval(ms) {
  const led = new Led(13);
  led.blink(ms);
}

new Board().on('ready', () => {
  samplingInterval(100);
});
