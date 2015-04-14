// When the user clicks on one of the directories he wants to visit, the page
// that is being displayed must go away and the new page must be loaded.
$(document).on('click','.directory',function(){
	pageswitch($(this).attr('href'));
	removeClass('active')
	$(this).addClass('active');
});
// This function recieves the id of the page that must be loaded on the user
// view. It gets the...
// Existing page id list.
pages = ['#main','#aboutme','#myworks','#contact']
function removeClass(id){
	dirs = $('.directory');
	console.log(dirs)
	for (var i = 0; i < dirs.length; i++) {
		$(dirs[i]).removeClass('active')
	};
}
function pageswitch(id){
	old = '';
	for (var i = 0; i < pages.length; i++) {
		if($(pages[i]).css('display') != 'none')
			old = pages[i];
	};
	if(old != id){
		if(old === '#main'){
			TweenMax.to($(old),0.5,{top:'-100vh'});
			TweenMax.to($(id),0.25,{delay:0.5,display:'block',opacity:1});
		} else if(id === '#main'){
			TweenMax.to($(old),0.25,{opacity:0,display:'none'});
			TweenMax.to($(id),0.5,{delay:0.5,top:0});
		} else {
			TweenMax.to($(old),0.25,{opacity:0,display:'none'});
			TweenMax.to($(id),0.25,{delay:0.5,display:'block',opacity:1});
		}
		if($(window).width()<780){
			if($('#panel').css('display') !='none'){
				TweenMax.to($('#panel'),0.5,{opacity:0,display:'none'});
			} else {
				TweenMax.to($('#panel'),0.5,{display:'block',opacity:1});
			}
			$('.navicon-button').toggleClass('open');
		}
	}
}
//Navicon animations
$(document).on('click','.navicon-button',function(){
	$('.navicon-button').toggleClass('open');
	$('h1').addClass('fade');
	if($('#panel').css('display') !='none'){
		TweenMax.to($('#panel'),0.5,{opacity:0,display:'none'});
	} else {
		TweenMax.to($('#panel'),0.5,{display:'block',opacity:1});
	}
});