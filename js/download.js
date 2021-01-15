$(function(){
	/* header背景消失 */
	$('#hdbc-btn').click(function(){
		$('.hdbc').css('display','none')
	})
	
	/* 更多精彩下拉框 */
	$('.hone').hover(function(){
		$('.hone .hdm-morebox').css('display','block');
		$(this).css('background','#fff');
		$('.hone .hdm-moretxt a').css('color','#B63305');
		$('.hone i').css('background-position','-85px 0');
		$('.hone .hdm-morebox li a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')})
	},function(){
		$('.hone .hdm-morebox').css('display','none');
		$(this).css('background','#2E2828');
		$('.hone .hdm-moretxt a').css('color','#afafaf');
		$('.hone i').css('background-position','-71px 0');
	})
	/* 客户服务下拉框 */
	$('.htwo').hover(function(){
		$('.htwo .hdm-morebox').css('display','block');
		$(this).css('background','#fff');
		$('.htwo .hdm-moretxt a').css('color','#B63305');
		$('.htwo i').css('background-position','-85px 0');
		$('.htwo .hdm-morebox li a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')})
	},function(){
		$('.htwo .hdm-morebox').css('display','none');
		$(this).css('background','#2E2828');
		$('.htwo .hdm-moretxt a').css('color','#afafaf');
		$('.htwo i').css('background-position','-71px 0');
	})
	/* 网址导航下拉框 */
	$('.hthree').hover(function(){
		$('.hthree .hdm-morebox').css('display','block');
		$(this).css('background','#fff');
		$('.hthree .hdm-moretxt a').css('color','#B63305');
		$('.hthree .morebox-mall a .morebox-malltxt').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')});
		$('.hthree .more-boxtxt a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')});
		$('.hthree i').css('background-position','-85px 0');
		$('.hthree .hdm-morebox li a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')})
	},function(){
		$('.hthree .hdm-morebox').css('display','none');
		$(this).css('background','#2E2828');
		$('.hthree .hdm-moretxt a').css('color','#afafaf');
		$('.hthree i').css('background-position','-71px 0');
	})
	/* 手机版下拉框 */
	$('.hfour').hover(function(){
		$('.hfour .hdm-morebox').css('display','block');
		$(this).css('background','#fff');
		$('.hfour .hdm-moretxt a').css('color','#B63305');
		$('.hfour i').css('background-position','-85px 0');
		$('.hfour .hdm-morebox li a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')})
	},function(){
		$('.hfour .hdm-morebox').css('display','none');
		$(this).css('background','#2E2828');
		$('.hfour .hdm-moretxt a').css('color','#afafaf');
		$('.hfour i').css('background-position','-71px 0');
	})
	/* 购物车下拉框 */
	$('.hfive').hover(function(){
		$('.hfive .hdm-morebox1').css('display','block');
		$(this).css('background','#fff');
		$('.hfive .hdm-moretxt a').css('color','#B63305');
		$('.hfive .hdm-moretxt b').css('background-position','-119px -4px');
		$('.hfive .hdm-morebox li a').hover(function(){$(this).css('color','#B63305')},function(){$(this).css('color','#777')})
	},function(){
		$('.hfive .hdm-morebox1').css('display','none');
		$(this).css('background','#2E2828');
		$('.hfive .hdm-moretxt a').css('color','#afafaf');
		$('.hfive .hdm-moretxt b').css('background-position','-99px -4px');
	})
	
	/* 侧边栏 */
	$('.side-tool .stool1 a').hover(function(){
		$('.stool1 div').css('display','block');
	},function(){
		$('.stool1 div').css('display','none');
	})
	$('.side-tool .stool2 a').hover(function(){
		$('.stool2 div').css('display','block');
	},function(){
		$('.stool2 div').css('display','none');
	})
	$('.side-tool .stool3 a').hover(function(){
		$('.stool3 div').css('display','block');
	},function(){
		$('.stool3 div').css('display','none');
	})
	$('.side-tool .stool4 a').hover(function(){
		$('.stool4 div').css('display','block');
	},function(){
		$('.stool4 div').css('display','none');
	})
	/* 判断侧边工具栏滚动 */
	$(window).scroll(function(){
		if($(window).scrollTop()>=500){
			$('.stool4 a').css('display','block');
		}else{
			$('.stool4 a').css('display','none');
		}
	})
	
	/* footer友情链接 */
	$('.fm6-btnrgt').click(function(){
		$('.fm6-btnrgt').css('background-position','-86px 0');
		$('.fm6-btnlft').css('background-position','-76px 0');
		$('.footer-hide div').animate({right:'0',left:'-154px'})
	})
	$('.fm6-btnlft').click(function(){
		$('.fm6-btnrgt').css('background-position','-66px 0');
		$('.fm6-btnlft').css('background-position','-96px 0');
		$('.footer-hide div').animate({left:'0'})
	})
	/* footer微信 */
	$('.footer-bom .fm-icon1 a').hover(function(){
		$('.footer-bom .fm-icon1-hide').css('display','block')
	},function(){
		$('.footer-bom .fm-icon1-hide').css('display','none')
	})
	
	/* 选项卡 */
	var oP = document.getElementById("sel");
	var oH = document.getElementById("main");
	var aBtns = oP.getElementsByTagName("i");
	var aPs = oH.getElementsByTagName("h1");
	for (var i = 0; i < aBtns.length; i++) {
		aBtns[i].index = i; //赋值下标
		aBtns[i].onclick = function() { //给每个按钮绑定事件
			for (var j = 0; j < aBtns.length; j++) {
				aPs[j].style.display = 'none';  //隐藏内容
				aBtns[j].style.color='#000';
			}
			this.style.color='#cb242b';
			aPs[this.index].style.display = 'block';  //显示当前下标的内容
		}
	}
	
	
	
	
	
})