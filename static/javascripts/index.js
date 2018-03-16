function watting(){
		alert('功能正在开发中')

}
$(document).ready(function(){
	
$('.nav-list>ul li').click(function(){
	init()
	$(this).addClass('active')
})

$('.nav-button').click(function(){
	$('.nav-list').slideDown()
	$(this).hide()
	})
$('.nav-list .foot').click(function(){
	$('.nav-list').slideUp()
	$('.nav-button').show()

})
$(document).scroll(function(){
	var docHeight = $(document).scrollTop()
	 var ScrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	if($('#how').offset().top-100 > docHeight&&docHeight >$('#home').offset().top){
		init()
		$('.nav-list>ul li').eq(0).addClass('active')
	}
	else if ($('#land').offset().top-100 > docHeight&&docHeight >$('#how').offset().top){
				init()
				$('.nav-list>ul li').eq(1).addClass('active')
	}
	else if(ScrollBottom!=0&&$('#intro').offset().top -100 > docHeight&&docHeight >$('#land').offset().top ){
			init()
				$('.nav-list>ul li').eq(2).addClass('active')
	}
	else if(ScrollBottom ==0){
					init()

						$('.nav-list>ul li').eq(3).addClass('active')

	}
})
function init(){
		$('.nav-list>ul li').removeClass('active')

}
})
