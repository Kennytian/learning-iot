const { Board, Pin } = require('johnny-five');
const temporal = require('temporal');
const board = new Board();
board.on('ready', () => {
  let events = [];
  const strobe = new Pin(13);
  temporal.loop(500, loop => {
    strobe[loop.called % 2 === 0 ? 'high' : 'low']();
  });

  // Pin emits "high" and "low" events, whether it's
  // input or output.
  ['high', 'low'].forEach(state => {
    strobe.on(state, () => {
      if (events.indexOf(state) === -1) {
        console.log('Event emitted for:', state, 'on', this.addr);
        events.push(state);
      }
    });
  });

  const analog = new Pin('A0');

  // Query the analog pin for its current state.
  analog.query(state => {
    console.log(state);
  });
});
