var win = $.win;
var statusBarHeight = Alloy.Globals.StatusBarHeight;

// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
var facebook = Alloy.Globals.Facebook;
facebook.appid = Ti.App.Properties.getString('ti.facebook.appid');
facebook.permissions = ['publish_stream'];

// Add events to the facebook button
facebook.addEventListener('login', function(e) {
    if (e.success) {
        console.log(e);
    		win.close();
    		var swipe = Alloy.createController("swipe", {}).getView();
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
	width:"100%",
    height:"100%",
    image:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/' +
    'Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/' +
    '402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
});
var view2 = Ti.UI.createImageView({ 
	width:"100%",
    height:"100%",
    image: 'http://www.nasa.gov/images/content/' + 
    '616903main_rover_comparison1600_1600-1200.jpg'
});
var view3 = Ti.UI.createImageView({ 
	width:"100%",
    height:"100%",
    image: 'http://www.nasa.gov/images/content/' + 
    '616903main_rover_comparison1600_1600-1200.jpg'
});

var photosView = Ti.UI.createScrollableView({
	width: '90%',
	height: '80%',
	top: statusBarHeight, bottom: 0, left: "5%", right: "5%",
    showPagingControl: false,
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
