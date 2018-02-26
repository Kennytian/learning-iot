const {
  Board
} = require('johnny-five');

new Board().on('ready', () => {
  this.samplingInterval(1000),
});