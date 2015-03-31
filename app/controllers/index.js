var facebook = Alloy.Globals.Facebook;

// Already logged in
if(facebook.loggedIn == true){
	var swipe = Alloy.createController("swipe", {}).getView();
	swipe.open();
}else{
	var win = $.win;
	var container = $.container;
	
	// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
	facebook.appid = Ti.App.Properties.getString('ti.facebook.appid');
	facebook.permissions = ['publish_stream'];
		    
	// Add Facebook button.
	var facebookBtn = Titanium.UI.createButton({ 
	    backgroundImage:'/images/views/login/login_btn.png',
		bottom: "2.5%", left: "20%", right: "20%",
		width:"60%",
	    height:"8%",
	});
	
	// Add events to the facebook button
	facebookBtn.addEventListener('click', function(e) {
    		if(facebook.getLoggedIn()){
        		facebook.logout();
    		}else{
        		facebook.authorize();
    		}
	});
	facebook.addEventListener('login', function(e) {
	    if (e.success) {
	    		facebookBtn.setBackgroundImage('/images/views/login/logout_btn.png');
	        console.log(e);
	    		var swipe = Alloy.createController("swipe", {}).getView();
			swipe.open();
	    }
	});
	facebook.addEventListener('logout', function(e) {
		facebookBtn.setBackgroundImage('/images/views/login/login_btn.png');
	    alert('Logged out');
	});
	
	var logo = Ti.UI.createImageView({ 
		top: "2.5%", bottom: 0, left: "25%", right: "25%",
		width:"50%",
	    height:"15%",
	    image:'/images/views/login/logo_wurf.png'
	});
	
	var slide1 = Ti.UI.createImageView({ 
		width:"100%",
	    height:"100%",
	    image:'/images/views/login/slide01.png'
	});
	var slide2 = Ti.UI.createImageView({ 
		width:"100%",
	    height:"100%",
	    image:'/images/views/login/slide02.png'
	});
	var slide3 = Ti.UI.createImageView({ 
		width:"100%",
	    height:"100%",
	    image:'/images/views/login/slide03.png'
	});
	
	var photoShow = Ti.UI.createScrollableView({
		width: '80%',
		height: '65%',
		top: "21%", bottom: 0, left: "10%", right: "10%",
	    showPagingControl: true,
	    //overlayEnabled:false,
	    pagingControlColor:'transparent',
	    views: [
	        slide1,
	        slide2,
	        slide3
	    ],
	});
	
	container.add(logo);
	container.add(photoShow);
	container.add(facebookBtn);
	
	win.open();
}
