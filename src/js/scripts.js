//Resizing event
$(window).resize(function(){
	if($(window).width() < 640){
		mobile = true;
		//$('#topbar').css('display', 'block');
		//$('.directory,.zone,#panel').css('display', 'none');
	} else {
		mobile = false;
		$('#topbar').css('display', 'none');
		$('.directory').css('display', 'inline-block');
		$('.zone').css('display','flex');
		$('.directory,.zone').css('opacity', '1');
		$('#panel').css('display', 'none');
	}
	console.log(mobile);
});
//If the device has a view width less than 640px things must go different
var mobile = $(window).width() <= 640;
//Navicon trigger
/*$(document).on('click','.navicon-button',function(){
	animatePanel();
});*/
// When the user clicks on one of the directories he wants to visit, the page
// that is being displayed must go away and the new page must be loaded.
$(document).on('click','.directory',function(){
	if(!mobile){pageSwitchPc($(this).attr('dir'));}else{pageSwitchMobile($(this).attr('dir'));}
	if(mobile && ($(this).attr('dir') == '#aboutme')){fixing();}
	rC('active');
	$(this).addClass('active');
	$('#topbar').html($('.active').html());
	/*if(mobile){
		$('.active').hide();
		$('.directory').not('.active').show();
		animatePanel();
	}*/
});
// When the user clicks on one of the directories he wants to visit, the page
// that is being displayed must go away and the new page must be loaded.
$(document).on('click','.workitem',function(){
	$('#dynload').load('/src/html/'+$(this).attr('dir')+'.html');
	if(!mobile){pageSwitchPc($('#dynload'));}else{pageSwitchMobile($('#dynload'));}
	setTimeout(function(){$('.fotorama').fotorama({
		//maxwidth: '80%',
		maxheight: '75%',
		allowfullscreen: 'native',
		keyboard: true,
		autoplay: true,
		arrows: true,
		click: true,
		swipe: true,
		nav:'thumbs'
	});},500);
});
// This function recieves the id of the page that must be loaded on the user
// view. It gets the...
// Existing page id list.
pages = ['#main','#aboutme','#myworks','#contact','#dynload'];
function rC(id){
	dirs = $('.directory');
	for (var i = 0; i < dirs.length; i++) {
		$(dirs[i]).removeClass('active')
	};
}
//Function that animates the page switch
function pageSwitchPc(id){
	old = '';
	for (var i = 0; i < pages.length; i++) {
		if($(pages[i]).css('display') != 'none')
			old = pages[i];
	};
	if(old != id){
		if(old === '#main'){
			TweenMax.to($('#logoav img'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,height:'75px',width:'123px'});
			TweenMax.to($('#logoav'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,height:'75px',width:'20%',left:'40%',zIndex:10});
			TweenMax.to($('.zone'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,width:'40%'});
			TweenMax.to($(old),0.5,{force3D:true,autoRound:false,top:'-100vh',display:'none'});
			TweenMax.to($('#logostl'),0.5,{opacity:0,display:'none'});
			$(id).css('display','block');
			TweenMax.to($(id),0.25,{delay:0.5,opacity:1});
		} else if(id === '#main'){
			TweenMax.to($('#logoav img'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,height:'295px',width:'484px'});
			TweenMax.to($('#logoav'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,height:'100vh',width:'100vw',left:0,zIndex:2});
			TweenMax.to($('.zone'),1,{force3D:true,autoRound:false,ease: Power3.easeOut,width:'50%'});
			//$('#logostl').css('display','block');
			TweenMax.to($('#logostl'),0.5,{opacity:1});
			TweenMax.to($(old),0.25,{opacity:0,display:'none'});
			$(id+',#logostl').css('display','block');
			$('#logoav').css('display', 'flex');
			$(id+',#logoav').css('opacity', '1');
			TweenMax.to($(id),0.5,{force3D:true,autoRound:false,top:0});
		} else {
			if(!mobile){TweenMax.to($(old),0.25,{opacity:0,display:'none'});}
			$(id).css('display','block');
			TweenMax.to($(id),0.5,{delay:0.5,opacity:1});
			$(window).scrollTop(0);
		}
	}
}
function pageSwitchMobile(id){
	old = '';
	for (var i = 0; i < pages.length; i++) {
		if($(pages[i]).css('display') != 'none')
			old = pages[i];
	};
	if(old != id){
		if(old === '#main'){
			TweenMax.to($('#logoav,'+old),0,{force3D:true,autoRound:false,top:'-100vh'});
			$(id).css('display','block');
			TweenMax.to($(id),0,{delay:0,opacity:1});
		} else if(id === '#main'){
			$('#logoav').css('display','flex');
			$('#logostl').css('display','block');
			TweenMax.to($(old),0,{opacity:0,display:'none'});
			$(id).css('display','block');
			TweenMax.to($('#logoav,'+id),0,{force3D:true,autoRound:false,delay:0,top:0});
		} else {
			TweenMax.to($(old),0,{opacity:0,display:'none'});
			$(id).css('display','block');
			TweenMax.to($(id),0,{delay:0,opacity:1});
			$(window).scrollTop(0);
		}
	}
}
//Function that animates the menu panel
/*function animatePanel(){
	$('.navicon-button').toggleClass('open');
	if($('#panel').css('display') !='none'){
		//$('#topbar').removeClass('active');
		TweenMax.to($('#panel'),0.25,{opacity:0,display:'none'});
		TweenMax.to($('.zone'),0.25,{opacity:0,display:'none'});
	} else {
		$('#panel,.zone').show();
		$('.directory').css('display', 'inline-block');
		//$('#topbar').addClass('active');
		TweenMax.to($('#panel'),0.25,{opacity:1});
		TweenMax.to($('.zone'),0.25,{opacity:1});
	}
}*/
//Stick when scrolling
function fixing(){
	var p1 = $('.1');
	var p2 = $('.2');
	var p3 = $('.3');
	var pos1 = p1.position();
	var pos2 = p2.position();
	var pos3 = p3.position();
	console.log(pos1,pos2,pos3);
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos3.top) {
			p3.addClass('stick');
			p1.removeClass('stick');
			p2.removeClass('stick');
		} else if (windowpos >= pos2.top) {
			p2.addClass('stick');
			p1.removeClass('stick');
			p3.removeClass('stick'); 
		} else {
			p1.addClass('stick');
			p2.removeClass('stick');
			p3.removeClass('stick');
		}
		if(windowpos == 0){
			p1.removeClass('stick');
			p2.removeClass('stick');
			p3.removeClass('stick');
		}
	});
}