const expect = require ('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

 it('Should reject non-string values', () => {
   var str = {numero: 123};
   var res = isRealString(str);
   expect(res).toBe(false)
 });

 it('Should reject strings with only spaces' , () => {
   var str = '';
   var res = isRealString(str);
   expect(res).toBe(false)
 });

 it('Should allow strings with non-space characters' , () => {
   var str = '  lot  ';
   var res = isRealString(str);
   expect(res).toBe(true)
 });


});
