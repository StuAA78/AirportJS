describe('AirportJS', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('Plane', function() {
    it('can land at an airport', function() {
      expect(plane.land(heathrow)).toEqual(true);
    });
  });
});
