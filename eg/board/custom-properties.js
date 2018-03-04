const { Board, Sensor } = require('johnny-five');
const board = new Board();
board.on('ready', () => {
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
