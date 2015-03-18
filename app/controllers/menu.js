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

var barHeight = fpercentStr(Ti.Platform.displayCaps.platformHeight, $.bar.getHeight());
var statusBarHeight = Alloy.Globals.StatusBarHeight;
var buttonHeight = "40%";
var menuTop = (barHeight - fpercentStr(barHeight, buttonHeight))/2 + statusBarHeight/4;

var configButton = Titanium.UI.createButton({
   top: menuTop,
   image:'/images/configuration.png',
   width: "8%",
   height: buttonHeight,
   left: "5%"
});
configButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var chatButton = Titanium.UI.createButton({
   top: menuTop,
   image:'/images/chat.png',
   width: "8%",
   height: buttonHeight,
   right: "5%"
});
chatButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var categoryButton = Titanium.UI.createButton({
   top: menuTop,
   image:'/images/category.png',
   width: "8%",
   height: buttonHeight,
   right: "20%"
});
categoryButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var points = Ti.UI.createLabel({
  color: '#000000',
  font: { fontSize:20 },
  text: '200000',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: menuTop,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

$.bar.add(configButton);
$.bar.add(categoryButton);
$.bar.add(chatButton);
$.bar.add(points);