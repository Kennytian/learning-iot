import Person from '../person';
import sinon from 'sinon';

describe('sinon test', () => {
  it('spy', () => {
    const message = 'hello world';
    const spy = sinon.spy(Person, 'say');
    Person.say(message);
    expect(spy.withArgs(message).calledOnce).toEqual(true);
    spy.restore();
  });

  // it('stub', () => {
  //   const message = 'hello world';
  //   const returnValue = 'stub eat apple';
  //   sinon.stub(Person, 'say').callsFake((message) => {
  //     console.log(`stub log ${message}`);
  //   });
  //   const stub = sinon.stub(Person, 'eat');
  //   stub.withArgs('apple').returns('stub eat apple');
  //   const result = Person.eat('apple');
  //   expect(stub).toEqual(returnValue);
  //   stub.restore();
  // });

  it('mock', () => {
    const name = 'yellow';
    const mock = sinon.mock(Person);
    mock
      .expects('save')
      .once()
      .withArgs(name);
    Person.save(name);
    mock.verify();
    mock.restore();
  });
});
