describe("thirdDancer", function() {

  var thirdDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    thirdDancer = new makeThirdDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(thirdDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(thirdDancer.$node, 'toggle');
    thirdDancer.step();
    expect(thirdDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(thirdDancer, "step");
      expect(thirdDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(thirdDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(thirdDancer.step.callCount).to.be.equal(2);
    });
  });
});