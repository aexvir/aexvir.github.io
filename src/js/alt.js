// When the user clicks on one of the directories he wants to visit, the page
// that is being displayed must go away and the new page must be loaded.
$(document).on('click','.directory',function(){
	pageswitch($(this).attr('dir'));
	removeClass('active');
	$(this).addClass('active');
});
// When the user clicks on one of the directories he wants to visit, the page
// that is being displayed must go away and the new page must be loaded.
$(document).on('click','.workitem',function(){
	$('#dynload').load('../html/'+$(this).attr('dir')+'.html');
	pageswitch($('#dynload'));
});
// This function recieves the id of the page that must be loaded on the user
// view. It gets the...
// Existing page id list.
pages = ['#main','#aboutme','#myworks','#contact','#dynload'];
function removeClass(id){
	dirs = $('.directory');
	for (var i = 0; i < dirs.length; i++) {
		$(dirs[i]).removeClass('active')
	};
}
function pageswitch(id){
	var mobile = $(window).width() <= 640;
	old = '';
	for (var i = 0; i < pages.length; i++) {
		if($(pages[i]).css('display') != 'none')
			old = pages[i];
	};
	if(old != id){
		if(old === '#main'){
			if(mobile){
				TweenMax.to($('#logoav img'),1,{ease: Power3.easeOut,height:'50px',width:'82px'});
				TweenMax.to($('#logoav'),1,{ease: Power3.easeOut,height:'50px',width:'20%',left:'80%',zIndex:10});
				TweenMax.to($('.zone'),1,{ease: Power3.easeOut,width:'40%'});
				TweenMax.to($('#logostl'),0.5,{opacity:0,display:'none'});
			} else {
				TweenMax.to($('#logoav img'),1,{ease: Power3.easeOut,height:'75px',width:'123px'});
				TweenMax.to($('#logoav'),1,{ease: Power3.easeOut,height:'75px',width:'20%',left:'40%',zIndex:10});
				TweenMax.to($('.zone'),1,{ease: Power3.easeOut,width:'40%'});
				TweenMax.to($('#logostl'),0.5,{opacity:0,display:'none'});
			}
			TweenMax.to($(old),0.5,{top:'-100vh',display:'none'});
			$(id).css('display', 'block');
			TweenMax.to($(id),0.25,{delay:0.5,opacity:1});
		} else if(id === '#main'){
			TweenMax.to($('#logoav img'),1,{ease: Power3.easeOut,height:'295px',width:'484px'});
			TweenMax.to($('#logoav'),1,{ease: Power3.easeOut,height:'100vh',width:'100vw',left:0,zIndex:2});
			TweenMax.to($('.zone'),1,{ease: Power3.easeOut,width:'50%'});
			TweenMax.to($('#logostl'),0.5,{display:'block',opacity:1});
			if(mobile){
				$(old).css('display', 'none');
			} else {
				TweenMax.to($(old),0.25,{opacity:0,display:'none'});
			}
			$(id).css('display', 'block');
			TweenMax.to($(id),0.5,{top:0});
		} else {
			if(mobile){
				$(old).css('display', 'none');
			} else {
				TweenMax.to($(old),0.25,{opacity:0,display:'none'});
			}
			$(id).css('display', 'block');
			TweenMax.to($(id),0.25,{delay:0.5,opacity:1});
		}
		if(mobile){
			$('.navicon-button').toggleClass('open');
			if($('#panel').css('display') !='none'){
				TweenMax.to($('#panel'),0.25,{opacity:0,display:'none'});
				TweenMax.to($('.directory').not($('.active')),0.25,{opacity:0,display:'none'});
			} else {
				$('#panel').css('display','block')
				$('.directory').css('display','block')
				TweenMax.to($('#panel'),0.25,{opacity:1});
				TweenMax.to($('.directory'),0.25,{opacity:1});
			}
		}
	}
}
//Navicon animations
$(document).on('click','.navicon-button',function(){
	$('.navicon-button').toggleClass('open');
	if($('#panel').css('display') !='none'){
		TweenMax.to($('#panel'),0.25,{opacity:0,display:'none'});
		TweenMax.to($('.directory').not($('.active')),0.25,{opacity:0,display:'none'});
	} else {
		$('#panel').css('display','block')
		$('.directory').css('display','block')
		TweenMax.to($('#panel'),0.25,{opacity:1});
		TweenMax.to($('.directory'),0.25,{opacity:1});
	}
});