const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  // 这里function()不要用箭头函数
  const led = new Led(13);
  this.repl.inject({
    led,
  });
  led.blink();
});

// >> led.stop() // to stop blinking
// then
// >> led.off()  // to shut it off (stop doesn't mean "off")
// then
// >> led.on()   // to turn on, but not blink
