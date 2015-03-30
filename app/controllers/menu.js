var args = arguments[0] || {};

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
var barHeight = fpercentStr(Ti.Platform.displayCaps.platformHeight, bar.getHeight());
var statusBarHeight = Alloy.Globals.StatusBarHeight;
var elementHeight = "40%";
var elementWidth = "8%";
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

var pointsTxt = Ti.UI.createLabel({
	color: '#FFFFFF',
	font: { fontSize:40 },
	text: '2.000'
});

var wurfIconWidth = fpercentStr(Ti.Platform.displayCaps.platformHeight, "5%");
var wurfIconLeft = (Ti.Platform.displayCaps.platformWidth - (wurfIconWidth + pointsTxt.toImage().width))/2;

var wurfIcon = Ti.UI.createImageView({ 
	left: wurfIconLeft,
	width: wurfIconWidth,
	height: elementHeight,
	borderRadius:20,
	borderWidth: 2,
	borderColor: "#707070",
    image:'/images/views/topbar/wurf_icon.png'
});

pointsTxt.setLeft(wurfIconLeft+fpercentStr(Ti.Platform.displayCaps.platformHeight, "6%"));

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
