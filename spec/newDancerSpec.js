describe("newDancer", function() {

  var newDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    newDancer = new makeNewDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(newDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(newDancer.$node, 'toggle');
    newDancer.step();
    expect(newDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(newDancer, "step");
      expect(newDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(newDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(newDancer.step.callCount).to.be.equal(2);
    });
  });
});
