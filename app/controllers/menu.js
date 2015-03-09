var args = arguments[0] || {},
  isVisible = false,
  barHeight,
  optionsHeight;
 
function toggle() {
	return isVisible ? hide() : show();
}
 
function hide() {
	isVisible = false;
	
	$.options.animate({
		top: barHeight - optionsHeight,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN
	}, function () {
		$.container.height = Ti.UI.SIZE;
	});
 
	return;
}
 
function mayHide(e) {
	
	if (e.direction === 'up') {
		hide();
	}
	
	return;
}
 
function show() {
	isVisible = true;
	
	$.container.height = Ti.UI.FILL;
	$.options.animate({
		top: barHeight,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
	});
	
	return;
}
 
optionsHeight = $.options.children.length * $.options.children[0].height;
barHeight = $.bar.height;
 
$.options.applyProperties({
	top: barHeight - optionsHeight
});