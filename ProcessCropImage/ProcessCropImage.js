$(function(){
	$crop = $('#jcrop_target');
	if ($crop.length > 0) {
		var ar = $crop.data('aspectratio');
		$crop.Jcrop({
			onChange: showCoords,
			onSelect: showCoords,
			aspectRatio: ar
		});
	}
});

function showCoords(c)
{
	var ew = $('#jcrop_target').data('width');
	var eh = $('#jcrop_target').data('height');
	var ow = $('#jcrop_target').width();
	var oh = $('#jcrop_target').height();
	var ar = $('#jcrop_target').data('aspectratio');
	
		
	var rx = ew / c.w;
	var ry = eh / c.h;

	$('#preview').css({
		width: Math.round(rx * ow) + 'px',
		height: Math.round(ry * oh) + 'px',
		marginLeft: '-' + Math.round(rx * c.x) + 'px',
		marginTop: '-' + Math.round(ry * c.y) + 'px'
	});
	
	$('#x1').val(c.x);
	$('#y1').val(c.y);
	$('#w').val(c.w);
	$('#h').val(c.h);
};
