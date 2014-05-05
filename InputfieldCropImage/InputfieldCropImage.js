$(document).ready(function() {

	var magnificOptions = {
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		image: {
			titleSrc: function(item) {
				return item.el.find('img').attr('alt');
			}
		},
		callbacks: {
			open: function() {
				// for firefox, which launches Magnific after a sort
				if($(".InputfieldFileJustSorted").size() > 0) this.close();
			}
		}
	};

	$("a.crop").on("hover", function(e) {
		if( e.type === 'mouseover' || e.type === 'mouseenter') {
			url = $(this).data('thumburl') + "?timestamp=" + new Date().getTime();
			$(this).append("<img style='position: absolute; z-index: 999;' src="+url+" />");
		}
		else {
			$(this).find("img").remove();
		}
	});

	$(".InputfieldCropImage .InputfieldFileList").on('AjaxUploadDone', function() {
		$("a.InputfieldFileLink", $(this)).magnificPopup(magnificOptions);
	});
});
