$(document).ready(function() {
	
	$("#wrap_Inputfield_cropImages").delegate("a.crop", "hover", function() {
		if( event.type === 'mouseover' ) {
			url = $(this).data('thumburl');
			$(this).append("<img src="+url+" />");
		}
		else {
			$(this).find("img").remove();
		}
	});
	
	$("a.crop").live('click', function(){
		var url = $(this).attr('href');
		var windowHeight = $(window).height() - 120; 
		var windowWidth = $(window).width() - 120; 
		$iframe = $('<iframe id="pwimage_iframe" width="100%" frameborder="0" src="'+url+'"></iframe>');
		$iframe.dialog({
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
});
