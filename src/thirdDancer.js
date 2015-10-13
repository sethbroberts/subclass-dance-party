var makeThirdDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;

  //order matters, need this statement after lines 4 & 5
  makeDancer.call(this, top, left, timeBetweenSteps); 

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;

  // this.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //   //oldStep.call(this);
  //   makeDancer.step.call(this);
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };

  //return blinkyDancer;
};

makeThirdDancer.prototype = Object.create(makeDancer.prototype);
makeThirdDancer.prototype.constructor = makeThirdDancer;
makeThirdDancer.prototype.step = function () {
  //makeDancer.prototype.step.call(this);           //either this or next line works
  makeDancer.prototype.step.bind(this)();
  this.$node.toggle();
};
makeThirdDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    'top': this.top,
    'left': this.left,
    'border-color': 'green',
    'border-radius': '5px',
    'border-width': '5px',
    'border-style': 'solid'
  };
  this.$node.css(styleSettings);  
};