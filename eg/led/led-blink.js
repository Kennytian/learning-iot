const { Board, Led } = require('johnny-five');
new Board().on('ready', function() {
  var led = new Led(13);
  led.blink(500);
});
