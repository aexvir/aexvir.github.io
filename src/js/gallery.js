$(document).on('load', '#galleryWrapper', function(event) {
	event.preventDefault();
	imagelist = $('.stlimg');
	srclist = [];
	for (var i = 0; i < imagelist.length; i++) {
		srclist[i]=$(imagelist[i]).attr('src');
	};
});