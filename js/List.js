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
	
	
	
	$('.choose1>p').hover(function(){
		$(this).css('border-bottom','1px solid #fff')
		$('#down1').css('display','none');
		$('#up1').css('display','inline-block');
		$('.choose1 div').css('display','flex');
	},function(){
		$(this).css('border-bottom','1px solid #999')
		$('#down1').css('display','inline-block');
		$('#up1').css('display','none');
		$('.choose1 div').css('display','none');
	})
	$('.choose2>p').hover(function(){
		$(this).css('border-bottom','1px solid #fff')
		$('#down2').css('display','none');
		$('#up2').css('display','inline-block');
		$('.choose2 div').css('display','flex');
	},function(){
		$(this).css('border-bottom','1px solid #999')
		$('#down2').css('display','inline-block');
		$('#up2').css('display','none');
		$('.choose2 div').css('display','none');
	})
	$('.choose3>p').hover(function(){
		$(this).css('border-bottom','1px solid #fff')
		$('#down3').css('display','none');
		$('#up3').css('display','inline-block');
		$('.choose3 div').css('display','flex');
	},function(){
		$(this).css('border-bottom','1px solid #999')
		$('#down3').css('display','inline-block');
		$('#up3').css('display','none');
		$('.choose3 div').css('display','none');
	})
	
	$('.more-choose>div>div').hover(function(){
		$(this).css('display','flex');
	},function(){
		$(this).css('display','none');
	})
	
	
	/* 插入列表 */
	// console.log(listArr[6].cardId);
	// if(listArr.cardId)
	for( var j=0;j<listArr.length;j++){
		$(`
			<li class="HWdetails2">
				<p><img src="${listArr[j].ph}" ></p>
				<div>${listArr[j].title}</div>
				<h5><span>${listArr[j].price}</span><i>${listArr[j].blu}</i></h5>
				<h4 class='redB'><span>${listArr[j].red1}</span></i></h4>
				<h3><i>${listArr[j].gray1}</i><b>${listArr[j].gray2}</b></h3>
			</li>`).appendTo($('.list-data ul'))
			if (listArr[j].red2){
				$(`<i>${listArr[j].red2}</i>`).appendTo($('.redB')[j])
			}
	}
	
	
	/* 选择 */
	$('.fl2-check b').click(function(){
		this.isStatus=!this.isStatus;
		if(this.isStatus){
			$(this).css({
				'border': '1px solid rgba(202,20,29,1)',
				'color':'rgba(202,20,29,1)'
			})
		}else{
			$(this).css({
				'border': '1px solid rgba(202,20,29,0.67)',
				'color':'#fff'
			})
		}
	})
	$('.fl2-check1 b').click(function(){
		this.isStatus=!this.isStatus;
		if(this.isStatus){
			$(this).css({
				'border': '1px solid rgba(202,20,29,1)',
				'color':'rgba(202,20,29,1)'
			})
		}else{
			$(this).css({
				'border': '1px solid rgba(202,20,29,0.67)',
				'color':'#fff'
			})
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