const { Board, Led } = require('johnny-five');

const boards = new Board([{ id: 'A', port: '/dev/tty.wchusbserial1410' }, { id: 'B', port: '/dev/tty.wchusbserial1411' }]);

boards.on('ready', () => {
  const led = new Led({
    pin: 13,
    board: this.byId('A'),
  });
  led.blink();

  this.each(board => {
    if (board.id === 'B') {
      const led = new Led({
        pin: 13,
        board: board,
      });
      led.blink();
    }
  });
});
