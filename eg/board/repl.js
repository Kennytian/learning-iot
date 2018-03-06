const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  // 这里function()不要用箭头函数
  const led = new Led(13);
  this.repl.inject({
    on: () => led.on(),
    off: () => led.off(),
  });
});
