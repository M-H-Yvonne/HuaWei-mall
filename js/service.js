$(function(){
	
	/* 轮播 */
	var lbTimer = null;
	var lbImgShow = 0; //图片下标
	var lbImgCount = $('#ClickShow div').length;
	//显示当前图片，和下面方块
	
	lbTimer=setInterval(lbimgMove,5000);
	
	function lbimgMove(){
		lbImgShow = lbImgShow < lbImgCount - 1? (lbImgShow  + 1): 0;
		lbchangeImgShow();
	};
	$('#ClickShow div').hover(function(e) {
		clearInterval(lbTimer);
		lbImgShow = $(this).index();
		lbchangeImgShow();
		$('#ClickShow div').eq(lbImgShow).css({
			background: '#fff'
		})
	})
	$('.Rotation')[0].onmouseout = function(){
		clearInterval(lbTimer);
		lbTimer=setInterval(lbimgMove,5000);
	};
	function lbchangeImgShow(){
		$('.imgShow div').stop().animate({
			opacity: 0
		},1000);
		$('.imgShow div').eq(lbImgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('#ClickShow div').css({
			'border':'1px solid #fff',
			'background': 'rgba(0,0,0,0)'
		});
		$('#ClickShow div').eq(lbImgShow).css({
			background: '#fff'
		})
	}
	
	
	/* 自助服务 */
	serviceArr.map(function(item){
		$(`
			<li>
				<img src="${item.img}" >
				<p>${item.txt}</p>
			</li>
		`).appendTo('.fl2List')
	})
	
	
})