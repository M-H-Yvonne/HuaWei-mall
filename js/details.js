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
	/* 搜索框 */
	$('.write-cl').click(function(){
		$('.write-title').css('display','none');
		$('.write-down').css('display','block');
	})
	$('.write-cl input').blur(function(){
		$('.write-title').css('display','block');
		$('.write-down').css('display','none');
	})
	
	/* 分类 */
	var subLi,subA,subImg,subSpan,subUl;
	var primary=chArr.filter(function(item){
		return item.cardId==0;
	})
	for(var j=0;j<primary.length;j++){
		var sub=chArr.filter(function(item){
			return item.cardId==primary[j].id;
		})
		var oDiv=document.createElement('div');
		for(var k=0;k<sub.length;k++){
			if(k%5==0){
				subUl=document.createElement('ul');
			}
			subLi=document.createElement('li');
			subA=document.createElement('a');
			subA.href='#';
			
			subImg=document.createElement('img');
			subImg.src=sub[k].img;
			subSpan=document.createElement('span');
			subSpan.innerText=sub[k].txt;
			
			subA.appendChild(subImg);
			subA.appendChild(subSpan);
			subLi.appendChild(subA);
			subUl.appendChild(subLi);
			oDiv.appendChild(subUl);
			oDiv.id='classifies'+j;
		}
		$('.classify-snone')[0].appendChild(oDiv);
	}
	/* 分类滑过出现 */
	$('.fenlei').hover(function(){
		$('.classify').css('display','block');
		$('#classifies0').css('display','block');
	},function(){
		$('.classify').css('display','none');
		$('#classifies0').css('display','none');
	})
	$('.classify-first').hover(function(){
		$('#classifies0').css('display','block');
		$('.classify').css('border-radius','10px 0 0 10px');
	},function(){
		$('#classifies0').css('display','none');
		$('.classify').css('border-radius','10px');
	})
	$('.classify-sec').hover(function(){
		$('#classifies1').css('display','block');
		$('.classify').css('border-radius','10px 0 0 10px');
	},function(){
		$('#classifies1').css('display','none');
		$('.classify').css('border-radius','10px');
	})
	$('.classify-third').hover(function(){
		$('#classifies2').css('display','block');
		$('.classify').css('border-radius','10px 0 0 10px');
	},function(){
		$('#classifies2').css('display','none');
		$('.classify').css('border-radius','10px');
	})
	$('.classify-snone div').hover(function(){
		$(this).css('display','block');
		$('.classify').css('border-radius','10px 0 0 10px');
	},function(){
		$(this).css('display','none');
		$('.classify').css('border-radius','10px');
	})
	
	
	
	/* 放大镜 */
	$('.fl1-leftshowImg').hover(function(){
		$('#comSmallBox').css('display','block');
		$('.fl1-leftBigImg').css('display','block');
		$('.fl1-leftshowImg').mousemove(function(ev){
			var e = ev || window.event;
			//小框距离左边的距离为鼠标位置减掉小框的一半，减掉大框离左边的距离
			var left = e.pageX -  $('#comSmallBox').width()/2 - $('.fl1-leftshowImg').offset().left;
			var top = e.pageY -  $('#comSmallBox').height()/2 - $('.fl1-leftshowImg').offset().top;
			//left值小于0时小框停止小框移动
			//left值大于大框减去小框宽度时停止小框移动
			if(left <= 0){
				left = 0;
			};
			if(left >= 250){
				left = 250;
			};
			if(top <= 0){
				top = 0
			};
			if(top >= 250){
				top = 250;
			};
			$('#comSmallBox').css({
				left:left,
				top:top
			});
			//小方块的左距离 / 图片的宽度  =  大框的左距离 / 右边图片的宽度
			var w = left/(250);
			var h = top/(250);
			$('.fl1-leftBigImg').find('img').css({
				left:-left * 800 /400 ,
				top:-top * 800 /400 ,
			})
		})
	},function(){
		$('#comSmallBox').css('display','none');
		$('.fl1-leftBigImg').css('display','none');
	})
	
	/* 小轮播 */
	
	$('.fl1-left-listbtnl').click(function(){
		$('.fl1-left-list ul').animate({left:'0px',right:'-78px'});
	})
	$('.fl1-left-listbtnr').click(function(){
		$('.fl1-left-list ul').animate({right:'0px',left:'-78px'});
	})
	
	/* 滑过显示图片 */
	$('.fl1-left-list ul li').click(function(){
		$('.fl1-left-list ul li').css('border','0')
		$(this).css('border','2px dashed #f90')
	})
	$('.fl1-left-list ul .fl1-ph1').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph7.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph7.png');
	})
	$('.fl1-left-list ul .fl1-ph2').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph8.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph8.png');
	})
	$('.fl1-left-list ul .fl1-ph3').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph9.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph9.png');
	})
	$('.fl1-left-list ul .fl1-ph4').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph10.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph10.png');
	})
	$('.fl1-left-list ul .fl1-ph5').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph11.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph11.png');
	})
	$('.fl1-left-list ul .fl1-ph6').click(function(){
		$('.fl1-leftshowImg img').attr('src','img/details/details-fl1left-ph6.png');
		$('.fl1-leftBigImg img').attr('src','img/details/details-fl1left-ph6.png');
	})
	
	/* 数量 */
	$('#plus').click(function(){
		if($('#num')[0].value<100&&$('#num')[0].value>0){
			$('#num')[0].value++;
			$('#minus').css('color','#777');
		}
	})
	$('#minus').click(function(){
		if($('#num')[0].value>1){
			$('#num')[0].value--;
		}else if($('#num')[0].value==1){
			$('#minus').css('color','#c4c4c4');
		}
	})
	
	/* 改变手机颜色 */
	$('.fl1-color2').click(function(){
		$('.fl1two').css('display','block');
		$('.fl1one').css('display','none');
		$('.fl1-color2').css('border-color','#CA141D');
		$('.fl1-color1').css('border-color','#999');
		var str1=$('.fl1-color2 i').html();
		var str2=$('.fl1-banB p').html();
		var str3=$('.fl1-Can p').html();
		$('.fl1-choose p').html(str1+'/'+str2+'/'+str3);
		$('.fl1-num').css('display','none');
		$('#shoppingCar').css('display','none');
		$('#buy').css('display','none');
		$('#listen').css('display','block');
	})
	$('.fl1-color1').click(function(){
		$('.fl1one').css('display','block');
		$('.fl1two').css('display','none');
		$('.fl1-color1').css('border-color','#CA141D');
		$('.fl1-color2').css('border-color','#999');
		var str1=$('.fl1-color1 i').html();
		var str2=$('.fl1-banB p').html();
		var str3=$('.fl1-Can p').html();
		$('.fl1-choose p').html(str1+'/'+str2+'/'+str3);
		$('.fl1-num').css('display','block');
		$('#shoppingCar').css('display','inline-block');
		$('#buy').css('display','inline-block');
		$('#listen').css('display','none');
	})
	
	/* 根据距离判断 */
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		
		if($(window).scrollTop()>921&&$(window).scrollTop()<=11545){
			$('.floor2').css({
				'position':'fixed',
				top:0,
				'z-index':2
			})
			$('.fl2-nav1').css({
				'border-bottom':'2px solid #CA141D',
				'color':'#CA141D'
			});
			$('.fl2-nav2').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
			$('.fl2-nav3').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
		}else if($(window).scrollTop()>11545&&$(window).scrollTop()<=11972){
			$('.floor2').css({
				'position':'fixed',
				top:0,
				'z-index':2
			})
			$('.fl2-nav1').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
			$('.fl2-nav2').css({
				'border-bottom':'2px solid #CA141D',
				'color':'#CA141D'
			});
			$('.fl2-nav3').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
		}else if($(window).scrollTop()>11972&&$(window).scrollTop()<=12744){
			$('.floor2').css({
				'position':'fixed',
				top:0,
				'z-index':2
			})
			$('.fl2-nav1').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
			$('.fl2-nav2').css({
				'border-bottom':0,
				'color':'#a4a4a4'
			});
			$('.fl2-nav3').css({
				'border-bottom':'2px solid #CA141D',
				'color':'#CA141D'
			});
		}else{
			$('.floor2').css('position','relative');
		}
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
		if($(window).scrollTop()>=1000){
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
	
	
	
	
	
})