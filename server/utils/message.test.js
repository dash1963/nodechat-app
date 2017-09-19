var expect = require('expect');

var {generateMessage} = require('./message');

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

   })


})
