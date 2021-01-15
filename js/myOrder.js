$(function(){
	/* 订单选项卡 */
	var oUl=document.getElementById('fl2-btns1');
	var oDiv=document.getElementById('select');
	var oBtns=oUl.getElementsByTagName('li');
	var oH=oDiv.getElementsByTagName('h5');
	for(var i=0;i<oBtns.length;i++){
		oBtns[i].index=i
		oBtns[i].onclick = function() { //给每个按钮绑定事件
			for (var j = 0; j < oBtns.length; j++) {
				oH[j].style.display = 'none';  //隐藏内容
				oBtns[j].style.background='#F2F2F2';
				oBtns[j].style.color='#333';
			}
			this.style.background='#2d2d2d';
			this.style.color='#fff';
			oH[this.index].style.display = 'block';  //显示当前下标的内容
		}
	}
	
	
	
})