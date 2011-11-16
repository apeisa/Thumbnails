$(document).ready(function() {

	$("a.crop").live("hover", function(e) {
		if( e.type === 'mouseenter') {
			url = $(this).data('thumburl') + "?timestamp=" + new Date().getTime();
			$(this).append("<img style='position: absolute; z-index: 999;' src="+url+" />");
		}
		else {
			$(this).find("img").remove();
		}
	});
	
	/* Modal disabled, cropping huge images is very difficult with modals
	$("a.crop").live("click", function() {
		var url = $(this).attr('href');
		var windowHeight = $(window).height() - 120; 
		var windowWidth = $(window).width() - 120; 
		$iframe = $('<iframe id="pwimage_iframe" width="100%" frameborder="0" src="'+url+'"></iframe>');
		$iframe.parent().css('position', 'fixed').end().dialog({
					title: "Crop Image", 
					height: windowHeight,
					width: windowWidth,
					position: [60, 60], 
					modal: true,
					overlay: {
						opacity: 0.7,
						background: "black"
					}
				}).width(windowWidth).height(windowHeight);
		return false;
	});
	*/
});
