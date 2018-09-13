// JavaScript Document
var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';

	window.onload = function() {
	    var back_page = document.getElementsByClassName('icon-common-jinru-copy')[0];
	    back_page.onclick = function() {
	        window.history.go(-1);
	    }
	}
	// 点击弹出层中的取消关闭
	$('.meber_quxiao').on('click',function(){
		$('.member_fn').hide();
	})
	
	// 分类列表左右切换
	var $menu_box = $('.control .con_title>li');
	$menu_box.click(function(){
	    $(this).addClass('con_curr').siblings().removeClass('con_curr');
	    var index = $menu_box.index(this);
	    $('.con_warp .tab_content').eq(index).show().siblings().hide();
	});
	// 确认订单左右切换
	var $order_box = $('.addres_box .order_click');
	$order_box.click(function(){
	    // $(this).addClass('con_curr').siblings().removeClass('con_curr');
	    var index = $order_box.index(this);
	    $('.addres_warp .addres_content').eq(index).show().siblings().hide();
	});
	$('.order_click').click(function(){
		$('.addres_else').show();
		$('.else_txt').show();
	})
	$('.one').click(function(){
		$('.addres_else').hide();
		$('.else_txt').hide();
	})
	// 全部订单列表切换
	var $all_box = $('.all_title ul>li');
	$all_box.click(function(){
	    $(this).addClass('all_curr').siblings().removeClass('all_curr');
	    var index = $all_box.index(this);
	    $('.all_warp .all_list').eq(index).show().siblings().hide();
	});
	//全选或全不选 
	$('input[name="selectAll"]').click(function(){
		if($(this).is(':checked')){
    		$('input[name="checkbox"]').each(function(){
        	//此处如果用attr，会出现第三次失效的情况
			    $(this).prop("checked",true);
			});
    	}else{
        	$('input[name="checkbox"]').each(function(){
			    $(this).removeAttr("checked",false);
			});
    	}
	});

	// 数量加减
	$(".pro_add").click(function(){
		var n = $(this).prev().val();
		var num = parseInt(n)+1;
		if(num == 0){ return;}
		$(this).prev().val(num);
	});
	$(".pro_minus").click(function(){
		var n = $(this).next().val();
		var num = parseInt(n)-1;
		if(num == 0){ return}
		$(this).next().val(num);
	});
