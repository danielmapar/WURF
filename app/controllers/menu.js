var args = arguments[0] || {};

screenWidth = Titanium.Platform.displayCaps.platformWidth;
screenHeight = Titanium.Platform.displayCaps.platformHeight;

function fpercentStr(quantity, percentString)
{
    var percent = new Number(percentString.replace("%", ""));
    return fpercent(quantity, percent);
}

function fpercent(quantity, percent)
{
    return quantity * percent / 100;
}

var bar = $.bar;
// Transform percentage height to decimal equivalent
var barHeight = fpercentStr(screenHeight, bar.getHeight());
var statusBarHeight = Alloy.Globals.StatusBarHeight;
var elementHeight = "40%";
var elementWidth = "8%";
var elementWidthValue = fpercentStr(screenWidth, elementWidth);
var menuTop = (barHeight - fpercentStr(barHeight, elementHeight))/2 + statusBarHeight/4;

var configButton = Titanium.UI.createButton({
   top: menuTop,
   backgroundImage:'/images/views/topbar/configuration.png',
   width: elementWidth,
   height: elementHeight,
   left: "5%"
});
configButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

pointsTxt = Ti.UI.createLabel({
	color: '#FFFFFF',
	font:{fontSize: fpercentStr(screenWidth, "7%")},
	text: '0'
});

var wurfIconLeft = (screenWidth - (elementWidthValue + pointsTxt.toImage().width))/2;

var wurfIcon = Ti.UI.createImageView({ 
	top: menuTop,
	left: wurfIconLeft,
	width: elementWidthValue,
	height: elementHeight,
    image:'/images/views/topbar/wurf_icon.png'
});

pointsTxt.setLeft(wurfIconLeft+fpercentStr(screenWidth, "9%"));

// Apply more space due to iOS status bar
if(OS_IOS){
	pointsTxt.setTop(menuTop);
}

var categoryButton = Titanium.UI.createButton({
   	top: menuTop,
   	backgroundImage:'/images/views/topbar/category.png',
   	width: elementWidth,
   	height: elementHeight,
   	right: "20%"
});
categoryButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var chatButton = Titanium.UI.createButton({
   	top: menuTop,
   	backgroundImage:'/images/views/topbar/chat.png',
   	width: elementWidth,
   	height: elementHeight,
   	right: "5%"
});
chatButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

$.bar.add(configButton);
$.bar.add(wurfIcon);
$.bar.add(pointsTxt);
$.bar.add(categoryButton);
$.bar.add(chatButton);
