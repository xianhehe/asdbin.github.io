$(function() {
	$('.h a').click(function() {
		$('#one').hide()
		var i = $(this).attr('href')
		$(i).fadeIn()
		$('.h a').removeClass()
		$(this).addClass('ma')
		return false
	});
	$('.nav ul li').click(function() {
		var index = $(this).index();
//		console.log(index) //打印出来
		$(this).addClass('cha').siblings().removeClass('cha');
	});
})