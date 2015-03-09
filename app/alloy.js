// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.Facebook = require('facebook');

Alloy.Globals.StatusBarHeight = 0;
if (OS_IOS) {
    // Android stuff
	switch ( Ti.Platform.displayCaps.density ) {
		case 160:
		    Alloy.Globals.StatusBarHeight = 25;
		    break;
		case 120:
		    Alloy.Globals.StatusBarHeight = 19;
		    break;
		case 240:
		    Alloy.Globals.StatusBarHeight = 38;
		    break;
		case 320:
		    Alloy.Globals.StatusBarHeight = 50;
		    break;
		default:
		    Alloy.Globals.StatusBarHeight = 25;
		    break;
	}
}