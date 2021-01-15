$(function(){
	for(var i=0;i<$('a').length;i++){
		// $('a')[0].target="_blank";
		$('a')[0].href='#';
	}
	
	/* 首页 */
	for(var i=0;i<$('.HWindex').length;i++){
		if($('.HWindex')[i]){
			$('.HWindex')[i].href='index.html';
			$('.HWindex')[i].target="_self";
		}
	}
	
	
	/* 登录 */
	for(var i=0;i<$('.HWLogin').length;i++){
		if($('.HWLogin')[i]){
			$('.HWLogin')[i].href='Login.html';
			$('.HWLogin')[i].target="_self";
		}
	}
	
	/* 注册 */
	for(var i=0;i<$('.HWregister').length;i++){
		if($('.HWregister')[i]){
			$('.HWregister')[i].href='register.html';
			$('.HWregister')[i].target="_self";
		}
	}
	
	/* 购物车 */
	for(var i=0;i<$('.HWshoppingCart').length;i++){
		if($('.HWshoppingCart')[i]){
			$('.HWshoppingCart')[i].href='shoppingCart.html';
			$('.HWshoppingCart')[i].target="_self";
		}
	}
	
	/* App下载 */
	for(var i=0;i<$('.HWdownload').length;i++){
		if($('.HWdownload')[i]){
			$('.HWdownload')[i].href='download.html';
			$('.HWdownload')[i].target="_self";
		}
	}
	
	/* 我的订单 */
	for(var i=0;i<$('.HWmyOrder').length;i++){
		if($('.HWmyOrder')[i]){
			$('.HWmyOrder')[i].href='myOrder.html';
			$('.HWmyOrder')[i].target="_self";
		}
	}
	
	/* 服务中心 */
	for(var i=0;i<$('.HWservice').length;i++){
		if($('.HWservice')[i]){
			$('.HWservice')[i].href='service.html';
			$('.HWservice')[i].target="_self";
		}
	}
	
	/* 地址管理 */
	for(var i=0;i<$('.HWaddress').length;i++){
		if($('.HWaddress')[i]){
			$('.HWaddress')[i].href='address.html';
			$('.HWaddress')[i].target="_self";
		}
	}
	
	/* 消息中心 */
	for(var i=0;i<$('.HWpersonCenter').length;i++){
		if($('.HWpersonCenter')[i]){
			$('.HWpersonCenter')[i].href='personCenter.html';
			$('.HWpersonCenter')[i].target="_self";
		}
	}
	
	/* 商家入驻 */
	for(var i=0;i<$('.HWBusiness').length;i++){
		if($('.HWBusiness')[i]){
			$('.HWBusiness')[i].href='Business.html';
			$('.HWBusiness')[i].target="_self";
		}
	}
	
	/* 商品列表 */
	for(var i=0;i<$('.HWList').length;i++){
		if($('.HWList')[i]){
			$('.HWList')[i].href='List.html';
			$('.HWList')[i].target="_self";
		}
	}
	
	/* 商品详情 */
	for(var i=0;i<$('.HWdetails').length;i++){
		if($('.HWdetails')[i]){
			$('.HWdetails')[i].href='details.html';
			$('.HWdetails')[i].target="_self";
		}
	}
	
	/* 立即结算 */
	$('.setChoosebtn button').click(function(){
		// open('confirmOrder.html')
		location.assign('confirmOrder.html');
	})
	
	/* 加入购物车 */
	$('.HWshoppingCart2').click(function(){
		location.assign('shoppingCart.html');
	})
	
	
	/* 立即下单 */
	$('.HWsubmitOrder').click(function(){
		location.assign('confirmOrder.html');
	})
	
	/*  提交订单 */
	$('.HWconfirmOrder').click(function(){
		// open('submitOrder.html')
		location.assign('submitOrder.html');
	})
	
	/* 登录页面登录 */
	$('.HWLogin2').click(function(){
		// open('personCenter.html')
		location.assign('personCenter.html');
	})
	
	/* 跳转到我的订单 */
	$('.HWmyOrder2').click(function(){
		// open('personCenter.html')
		location.assign('myOrder.html');
	})
	
	/* 注册页面注册 */
	$('.HWregister2').click(function(){
		// open('Login.html')
		location.assign('Login.html');
	})
	
	/* 切换至华为商城 */
	$('.HWindex2').click(function(){
		// open('index.html')
		location.assign('index.html');
	})
	
	/* 切换至商品详情 */
	$('.HWdetails2').click(function(){
		location.assign('details.html');
	})
	
	/* 预约 */
	$('.btnLeft').click(function(){
		// open('subscribe.html')
		location.assign('subscribe.html');
	})
	/* 预约 */
	$('.btnRight').click(function(){
		// open('subscribe.html')
		location.assign('subscribe.html');
	})
	
	
	
})