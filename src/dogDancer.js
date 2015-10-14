var makeDogDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;

  //order matters, need this statement after lines 4 & 5
  makeDancer.call(this, top, left, timeBetweenSteps); 

  this.$node.addClass('dogDancer');
  this.partner = null;

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

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;
makeDogDancer.prototype.step = function () {

  var currentLeft = Number(this.$node.css('left').slice(0, -2));
  var currentTop = Number(this.$node.css('top').slice(0, -2));

  if (this.partner === null && dancers.length > 2) {
    this.partner = dancers[Math.floor(Math.random()*dancers.length)];
  }
  if (this.partner) {
    console.log(this.partner.$node);

    var partnerLeft = Number(this.partner.$node.css('left').slice(0, -2));
    var partnerTop = Number(this.partner.$node.css('top').slice(0, -2));

    if (partnerLeft > currentLeft) {
      currentLeft = currentLeft + 5;
    } else {
      currentLeft = currentLeft - 5;
    }

    if (partnerTop > currentTop) {
      currentTop = currentTop + 5;
    } else {
      currentTop = currentTop - 5;
    }    

    if (Math.abs(partnerTop-currentTop) < 10 && Math.abs(partnerLeft-currentLeft) < 10) {
      this.partner = null;
    }

  }

  this.$node.css('left', currentLeft);
  this.$node.css('top', currentTop);

  //makeDancer.prototype.step.call(this);           //either this or next line works
  makeDancer.prototype.step.bind(this)();
};
makeDogDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    'top': this.top,
    'left': this.left,
  };
  this.$node.css(styleSettings);  
};

