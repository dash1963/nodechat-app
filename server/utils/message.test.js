var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
   it('Should generate correct message object', () => {
     var from = 'serge';
     var text = 'some text';
     var message = generateMessage(from, text);

     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({
       from: from,
       text: text
     });
   });
});


describe('generateLocationMessage', () => {
   it('Should generate correct Location message object', () => {
     var from = 'serge';
     var latitude  = 41.9943555;
     var longitude = -87.7565034;
     var url = 'https://www.google.com/maps?q=41.9943555,-87.7565034';

     var message = generateLocationMessage(from, latitude, longitude);

     expect(message.createdAt).toBeA('number');
     expect(message.url).toEqual(url);
     expect(message).toInclude({from});
});
});
