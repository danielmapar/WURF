var win = $.win;

// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
var facebook = Alloy.Globals.Facebook;
facebook.appid = Ti.App.Properties.getString('ti.facebook.appid');
facebook.permissions = ['publish_stream'];

// Add events to the facebook button
facebook.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
        console.log(e);
        var args = {
        		test: 'test'
    		};
    		win.close();
    		var swipe = Alloy.createController("swipeSplitPicture", args).getView();
		swipe.open();
    }
});
facebook.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.
win.add(facebook.createLoginButton({
    style : facebook.BUTTON_STYLE_WIDE,
    bottom: "2.5%"	
}));

var view1 = Ti.UI.createImageView({ 
	width:Ti.Platform.displayCaps.platformWidth,
    height:Ti.Platform.displayCaps.platformHeight*0.85,
    image:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/' +
    'Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/' +
    '402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
});
var view2 = Ti.UI.createImageView({ 
	width:Ti.Platform.displayCaps.platformWidth,
    height:Ti.Platform.displayCaps.platformHeight*0.85,
    image: 'http://www.nasa.gov/images/content/' + 
    '616903main_rover_comparison1600_1600-1200.jpg'
});
var view3 = Ti.UI.createImageView({ 
	width:Ti.Platform.displayCaps.platformWidth,
    height:Ti.Platform.displayCaps.platformHeight*0.85,
    image: 'http://www.nasa.gov/images/content/' + 
    '616903main_rover_comparison1600_1600-1200.jpg'
});

var photosView = Ti.UI.createScrollableView({
	width: '100%',
	height: '85%',
	top: Alloy.Globals.StatusBarHeight,
    showPagingControl: true,
    currentPageIndicatorTintColor:'black',
    overlayEnabled:true,
    pagingControlColor:'transparent',
    views: [
        view1,
        view2,
        view3
    ],
});

win.add(photosView);
win.open();
