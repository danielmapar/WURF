var args = arguments[0] || {};

var win = $.win;
var question = $.question;

var firstImage = Ti.UI.createImageView({
	width:"100%",
	height:"100%",
	top:0, left:0, right:0, botoom: 0,
	image:'http://userserve-ak.last.fm/serve/252/53031387.jpg' /* accepts URL, local path, or Ti.Filesystem.File */
});

question.add(firstImage);

var olt = Titanium.UI.create3DMatrix();
this.transformClose = olt;

var curX, curY;

question.addEventListener('touchstart', function(e) {
    curX = e.x; curY = e.y;
});
 
var deltaX , deltaY;
question.addEventListener('touchmove', function(e) {
    deltaX = e.x - curX;
    deltaY = e.y - curY; 
    olt = olt.translate(deltaX, deltaY, 0); 
    question.animate({transform:olt, duration:1});
});
 
question.addEventListener('touchend', function(e) {
   	var startPositionX = Ti.Platform.displayCaps.platformWidth*0.05;
   	var currentPositionX = question.getRect().getX();
   	var startPositionY = Ti.Platform.displayCaps.platformHeight*0.05;
   	var currentPositionY = question.getRect().getY();
   	
   	if(currentPositionX <= startPositionX){
   		deltaX = startPositionX-currentPositionX;
   	}else{
   		deltaX = (currentPositionX-startPositionX)*-1;
   	}
   	
   	if(currentPositionY <= startPositionY){
   		deltaY = startPositionY-currentPositionY;
   	}else{
   		deltaY = (currentPositionY-startPositionY)*-1;
   	}
   	
   	olt = olt.translate(deltaX, deltaY, 0);
   	question.animate({transform:olt, duration:600});
});

win.open();
