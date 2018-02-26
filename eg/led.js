const {Board,Led} = require('johnny-five');
new Board().on('ready',()=>{
  const led = new Led(13);
  this.repl.inject({
    led:led,
  });
  led.blink();
})

// >> led.stop() // to stop blinking
// then
// >> led.off()  // to shut it off (stop doesn't mean "off")
// then
// >> led.on()   // to turn on, but not blink