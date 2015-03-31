var args = arguments[0] || {};

var animationTime = 800;

function fpercentStr(quantity, percentString)
{
    var percent = new Number(percentString.replace("%", ""));
    return fpercent(quantity, percent);
}

function fpercent(quantity, percent)
{
    return quantity * percent / 100;
}

// animations
var animateLeft = Ti.UI.createAnimation({
	left: "-130%",
    transform: Ti.UI.create2DMatrix({rotate: -30}),
    duration: animationTime
});
var animateRight = Ti.UI.createAnimation({
    left: "130%",
    transform: Ti.UI.create2DMatrix({rotate: 30}),
    duration: animationTime
});
var animateDisappear = Ti.UI.createAnimation({
    opacity: 0,
    duration: animationTime
});
var animateAppear = Ti.UI.createAnimation({
    opacity: 100,
    duration: animationTime
});

var win = $.win;
var container = $.container;
var body = $.body;

var questionContainer = Ti.UI.createView({
	backgroundImage: "/images/views/swipe/background.png",
	opacity: 0,
	top: "5%", bottom: "5%", right: 0, left: 0,
	height: "90%",
	width: "100%",
});

body.add(questionContainer);

function generateTwoOptionsQuestion(){
	
	var questionMark = Ti.UI.createView({
	  	backgroundImage:'/images/views/swipe/question_mark.png',
	  	top: 0, 
	  	height: "20%", left: "37.5%", right: "37.5%", 
	  	width: "25%",
	  	zIndex: 1
	});
	
	var leftPhoto = Ti.UI.createView({
	  	backgroundImage:'/images/views/swipe/temp/left.jpg', 
	  	top: "5%", left: "5%",
	  	height: "75%",
	  	width: "45%",
	  	borderColor: "#E3E3E5",
		borderWidth: 1
	});
	
	var rightPhoto = Ti.UI.createView({
	  	backgroundImage:'/images/views/swipe/temp/right.jpg', 
	  	top: "5%", left: "50%", right: "5%",
	  	height: "75%",
	  	width: "45%",
	  	borderColor: "#E3E3E5",
	  	borderWidth: 1
	});
	
	var question = Ti.UI.createView({
	  	backgroundColor: "white",
	  	top: "80%", left: "5%", right: "5%",
	  	width: "90%", 
	  	height: "20%",
	  	borderColor: "#E3E3E5",
	  	borderWidth: 1
	});
	
	var wurfTxt = Ti.UI.createLabel({
		top:"20%",
		color: '#00948E',
	  	font: {fontSize:fpercentStr(screenWidth, "5%"),
	  		   fontWeight:'bold',
	  		   fontFamily:'Arial'},
	  	text: 'WOULD YOU RATHER FRIEND...',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var questionTxt = Ti.UI.createLabel({
		top:"40%",
		color: '#00948E',
	  	font: {fontSize:fpercentStr(screenWidth, "4%"), fontFamily:'Arial'},
	  	text: 'Dance with Stela, or her professor Johson Pica das Galaxias?',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	question.add(wurfTxt);
	question.add(questionTxt);
	
	questionContainer.addEventListener('swipe', function(e) {
		if ((e.direction == 'right' && e.source == rightPhoto) ||
		    (e.direction == 'left' && e.source == leftPhoto)){
		    // Increment points
		    Alloy.Globals.updatePoints();
		    	
			if(e.direction == 'right' && e.source == rightPhoto){
		    		rightPhoto.animate(animateRight);
		    		leftPhoto.animate(animateDisappear);
			}else if(e.direction == 'left' && e.source == leftPhoto){
		    		leftPhoto.animate(animateLeft);
		    		rightPhoto.animate(animateDisappear);		    		
			}
			questionMark.animate(animateDisappear);
		    	question.animate(animateDisappear, function(){
		    		questionContainer.removeAllChildren();
				questionContainer.setOpacity(0);
				generateTrueOrFalseQuestion();
		    	});		    
		}
	});

	questionContainer.add(questionMark);
	questionContainer.add(leftPhoto);
	questionContainer.add(rightPhoto);
	questionContainer.add(question);

	questionContainer.animate(animateAppear);
}

function generateTrueOrFalseQuestion(){
	
	var questionMark = Ti.UI.createView({
	  	backgroundImage:'/images/views/swipe/question_mark.png',
	  	top: 0, 
	  	height: "20%", left: "37.5%", right: "37.5%", 
	  	width: "25%",
	  	zIndex: 1
	});
	
	var photo = Ti.UI.createView({
	  	backgroundImage:'/images/views/swipe/temp/left.jpg', 
	  	top: "5%", left: "5%", right: "5%",
	  	height: "75%",
	  	width: "90%",
	  	borderColor: "#E3E3E5",
		borderWidth: 1
	});
	
	var question = Ti.UI.createView({
	  	backgroundColor: "white",
	  	top: "80%", left: "5%", right: "5%",
	  	width: "90%", 
	  	height: "20%",
	  	borderColor: "#E3E3E5",
	  	borderWidth: 1
	});
	
	var wurfTxt = Ti.UI.createLabel({
		top:"20%",
		color: '#00948E',
	  	font: {fontSize:fpercentStr(screenWidth, "5%"),
	  		   fontWeight:'bold',
	  		   fontFamily:'Arial'},
	  	text: 'WOULD YOU RATHER FRIEND...',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var questionTxt = Ti.UI.createLabel({
		top:"40%",
		color: '#00948E',
	  	font: {fontSize:fpercentStr(screenWidth, "4%"), fontFamily:'Arial'},
	  	text: 'Dance with Stela, or her professor Johson Pica das Galaxias?',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	question.add(wurfTxt);
	question.add(questionTxt);
	
	questionContainer.addEventListener('swipe', function(e) {
		if(e.source == photo && (e.direction == 'left' || e.direction == 'right')){
			// Increment points
			Alloy.Globals.updatePoints();
			
			if (e.direction == 'left'){
				questionMark.backgroundImage = '/images/views/swipe/thumb_down.png';
			    	questionMark.animate(animateDisappear);
			    	photo.animate(animateLeft);
			}else if(e.direction == 'right'){
				questionMark.backgroundImage = '/images/views/swipe/thumb_up.png';
				questionMark.animate(animateDisappear);
				photo.animate(animateRight); 	
			}
			question.animate(animateDisappear, function(){
			    	questionContainer.removeAllChildren();
				questionContainer.setOpacity(0);
				generateTwoOptionsQuestion();
			});
		}
	});
	questionContainer.add(questionMark);
	questionContainer.add(photo);
	questionContainer.add(question);
	
	questionContainer.animate(animateAppear);
}	

generateTwoOptionsQuestion();

win.open();
