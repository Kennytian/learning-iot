const { Board, Led, Sensor } = require('johnny-five');

new Board().on('ready', function() {
  var slider = new Sensor('A0');
  var led = new Led(11);

  // Scale the sensor's value to the LED's brightness range
  slider.scale([0, 255]).on('data', function() {
    led.brightness(this.value);
  });
});
