// JavaScript Document
$(document).ready(function(){
	// 优惠卷代金卷列表切换第一层
	var $vou_box = $('.voucher ul>li');
	$vou_box.click(function(){
	    $(this).addClass('vou_curr').siblings().removeClass('vou_curr');
	    var index = $vou_box.index(this);
	    $('.vou_warp .vou_view').eq(index).show().siblings().hide();
	});
	// 优惠卷第二层切换
	var $view_box = $('.view_ul li');
	$view_box.click(function(){
	    $(this).addClass('view_curr').siblings().removeClass('view_curr');
	    var index = $view_box.index(this);
	    $('.view_warp .view_list').eq(index).show().siblings().hide();
	});
	
})


