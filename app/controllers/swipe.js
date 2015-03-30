var args = arguments[0] || {};

var win = $.win;
var container = $.container;
var body = $.body;

// animations
var animateLeft = Ti.UI.createAnimation({
	left: "-100%",
    transform: Ti.UI.create2DMatrix({rotate: 30}),
    opacity: 0,
    duration: 500
});
var animateRight = Ti.UI.createAnimation({
    left: "100%",
    transform: Ti.UI.create2DMatrix({rotate: -30}),
    opacity: 0,
    duration: 500
});

var view1 = Ti.UI.createView({
  backgroundColor: '#ff0000', 
  top: "5%", bottom: "5%", right: "5%", left: "5%",
  height: "90%",
  width: "90%",
  borderColor: "#000000",
  borderWidth: 1
});

var view2 = Ti.UI.createView({
  backgroundColor: '#ff0000', 
  top: "5%", bottom: "5%", right: "5%", left: "5%",
  height: "90%",
  width: "90%",
  borderColor: "#000000",
  borderWidth: 1
});

view1.addEventListener('swipe', swipe);
view2.addEventListener('swipe', swipe);

body.add(view1);
body.add(view2);

function swipe(e) {
	
	if (e.direction == 'left'){
    		e.source.animate(animateLeft);
  	}
  	else if (e.direction == 'right'){
    		e.source.animate(animateRight);
  	}
}

win.open();
