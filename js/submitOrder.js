$(function(){
	/* 订单详情 */
	$('#details').click(function(){
		this.noD=!this.noD
		if(this.noD){
			$('#details img').attr('src','img/submitOrder/submitOrder-icon1.png');
			$('#detailsNo').slideDown(1000)
			
		}else{
			$('#details img').attr('src','img/submitOrder/submitOrder-icon2.png');
			$('#detailsNo').slideUp(1000)
		}
	})
	
	var t=24*3600;
	setInterval(function(){
		var hour=parseInt(t/3600);
		var minute=parseInt((t-hour*3600)/60);
		var second=parseInt(t-hour*3600-minute*60);
		t--;
		if(second<=9){
			second='0'+second;
		}
		if(minute<=9){
			minute='0'+minute;
		}
		if(hour<=9){
			hour='0'+hour;
		}
		$('#Timer').html(hour+'小时'+minute+'分钟'+second+'秒')
	},1000)
	
	/* 选项卡 */
	var oUl1 = document.getElementById("payTab1");
	var oUl2 = document.getElementById("tab-content");
	var aBtns = oUl1.getElementsByTagName("li");
	var aPs = oUl2.getElementsByTagName("ul");
	for (var i = 0; i < aBtns.length; i++) {
		aBtns[i].index = i; //赋值下标
		aBtns[i].onclick = function() { //给每个按钮绑定事件
			for (var j = 0; j < aBtns.length; j++) {
				aPs[j].style.display = 'none';  //隐藏内容
				aBtns[j].style.background='#F2F2F2';
			}
			this.style.background='#fff';
			aPs[this.index].style.display = 'block';  //显示当前下标的内容
		}
	}
	$('#tab-content ul li').click(function(){
		$('#tab-content ul li p').css('display','none')
		$('#tab-content ul li .tab-ph').css('border','1px solid #ccc')
		$(this).find('p').css('display','block')
		$(this).find('.tab-ph').css('border','1px solid #CA141D')
		$('.floor3 button').css({
			'background':'#CA141D',
			'color':'#fff'
		})
	})
	
	
	
	
})