$(function(){
	/* 头部点击事件 */
	$('#headClick').click(function(){
		this.cl=!this.cl
		if(this.cl){
			$('#headOpen').css('display','flex')
		}else{
			$('#headOpen').css('display','none')
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
	
	
	
	
	
	
	
	
	
	
	
	
})