var Moin = require ('../../../src/scripts/Moin');

describe('Moin', function() {
  const moin = new Moin();
  describe('steve()', function() {
    it('should add 1 to passed value', function() {
      moin.steve(3).should.equal(4);
      moin.steve(1).should.equal(2);
    });
  });
});