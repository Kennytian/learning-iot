const { Board, Sensor } = require('johnny-five');
new Board().on('ready', () => {
  const sensor = new Sensor({
    pin: 'A0',
    custom: {
      a: 1,
      b: 2,
    },
  });
  console.log(sensor.custom.a);
  console.log(sensor.custom.b);
});
