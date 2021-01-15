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
	/* 侧边工具栏 */
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
	/* side-nav */
	$(window).scroll(function(){
		// console.log($(window).scrollTop())
		if($(window).scrollTop()>=2000&&$(window).scrollTop()<=3200){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','3px solid #CB242B');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>3200&&$(window).scrollTop()<=4200){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','3px solid #CB242B');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>4200&&$(window).scrollTop()<=5100){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','3px solid #CB242B');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>5100&&$(window).scrollTop()<=5800){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','3px solid #CB242B');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>5800&&$(window).scrollTop()<=6500){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','3px solid #CB242B');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>6500&&$(window).scrollTop()<=7200){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','3px solid #CB242B');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>7200&&$(window).scrollTop()<=7900){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','3px solid #CB242B');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>7900&&$(window).scrollTop()<=8700){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','3px solid #CB242B');
			$('.side-nav .side-x').css('border-right','0');
		}else if($(window).scrollTop()>8700&&$(window).scrollTop()<=9002){
			$('.side-nav').css('display','block');
			$('.side-nav .side-phone').css('border-right','0');
			$('.side-nav .side-pc').css('border-right','0');
			$('.side-nav .side-pb').css('border-right','0');
			$('.side-nav .side-wear').css('border-right','0');
			$('.side-nav .side-p').css('border-right','0');
			$('.side-nav .side-home').css('border-right','0');
			$('.side-nav .side-j').css('border-right','0');
			$('.side-nav .side-s').css('border-right','0');
			$('.side-nav .side-x').css('border-right','3px solid #CB242B');
		}else{
			$('.side-nav').css('display','none');
			// $('.side-nav li').css('border-right','0')
		}
		
		
		
	})
	
	/* 精品推荐 */	
	var i=$('.floor3-showright').attr('titile','0');
	$('.floor3-showright').click(function(){
		i=$('.floor3-showright').attr('titile');
		if(i<12){
			i++
			console.log(i)
			$('.floor3-show  ul').animate({'left':-1207*i});
			$('.floor3-showright').attr('titile',i);
			$('.floor3-showleft').attr('titile',i);
		}
	})
	$('.floor3-showleft').click(function(){
		var a=$('.floor3-showleft').attr('titile');
		// console.log(a)
		if(a>0){
			$('.floor3-show  ul').animate({'left':-1207*(a-1)});
			$('.floor3-showright').attr('titile',a-1);
			$('.floor3-showleft').attr('titile',a-1);
		}
		// console.log(a)
	})
	/* 轮播 */
	var lbTimer = null;
	var lbImgShow = 0; //图片下标
	var lbImgCount = $('#lbClickShow div').length;
	//显示当前图片，和下面方块
	
	lbTimer=setInterval(lbimgMove,5000);
	
	function lbimgMove(){
		lbImgShow = lbImgShow < lbImgCount - 1? (lbImgShow  + 1): 0;
		lbchangeImgShow();
	};
	$('#lbClickShow div').hover(function(e) {
		clearInterval(lbTimer);
		lbImgShow = $(this).index();
		lbchangeImgShow();
		$('#lbClickShow div').eq(lbImgShow).css({
			background: '#fff'
		})
	})
	$('.lb-ph')[0].onmouseout = function(){
		clearInterval(lbTimer);
		lbTimer=setInterval(lbimgMove,5000);
	};
	function lbchangeImgShow(){
		$('#lbImgShow div').stop().animate({
			opacity: 0
		},1000);
		$('#lbImgShow div').eq(lbImgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('#lbClickShow div').css({
			'border':'1px solid #fff',
			'background': 'rgba(0,0,0,0)'
		});
		$('#lbClickShow div').eq(lbImgShow).css({
			background: '#fff'
		})
	}
	$('.lb-phbtnlft').click(function(){
		//当下标为0再点击时，触发最后一个
		lbImgShow = lbImgShow > 0? (lbImgShow  - 1): (lbImgCount - 1);
		lbchangeImgShow();
	});
	$('.lb-phbtnrgt').click(function(){
		return lbimgMove()
	});
	
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
	/* 公告 */
	var txtShow = 0;
	var txtHeight=40;
	var txtTimer=null;
	var txtCount = $('.suspend-third div ul li').length;
	// console.log(txtCount);
	txtTimer=setInterval(txtMove,2000);
	function txtMove(){
		if(txtShow<txtCount-1){
			txtShow=txtShow+1;
		}else{
			txtShow=0;
		}
		changeTxtShow();
	}
	function changeTxtShow(){
		txtTop=-txtHeight*txtShow+'px';
		$('.suspend-third div h5 ul').animate({
			top:txtTop
			},1000)
	}
		
	/* floor4 */
	var fl4Timer = null;
	var fl4ImgShow = 0; //图片下标
	var fl4ImgCount = $('#clickShow div').length;
	//显示当前图片，和下面方块
	
	fl4Timer=setInterval(imgMove,5000);
	
	function imgMove(){
		fl4ImgShow = fl4ImgShow < fl4ImgCount - 1? (fl4ImgShow  + 1): 0;
		changeImgShow();
	};
	$('#clickShow div').hover(function(e) {
		clearInterval(fl4Timer);
		fl4ImgShow = $(this).index();
		changeImgShow();
		$('#clickShow div').eq(fl4ImgShow).css({
			background: '#fff'
		})
	},function(){
		$('#clickShow div').css({
			'background': 'rgba(0,0,0,0)',
			'border':'1px solid #fff'
		})
	})
	function changeImgShow(){
		$('#imgShow div').stop().animate({
			opacity: 0
		},1000);
		$('#imgShow div').eq(fl4ImgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('#clickShow div').css({
			'border':'1px solid #fff',
			'background': 'rgba(0,0,0,0)'
		});
		$('#clickShow div').eq(fl4ImgShow).css({
			background: '#fff'
		})
	}
	
	
	
	
})