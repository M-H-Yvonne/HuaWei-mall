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
	
	
	
	
	/* 添加购物车 */
	shoppingArr.map(function(item1){
		$(`
			<div class="shoppingList">
				<div>
					<input type="checkbox" name="" class="shoppingListCheck" id="" value="" />
				</div>
				<div class="product">
					<div>
						<img src="${item1.product}" >
					</div>
					<div class="productNews">
						<p>${item1.txt1}</p>
						<p>${item1.txt2}</p>
						<p><span>${item1.txt3}</span></p>
					</div>
				</div>
				<div class="shoppingPrice">￥${item1.price}</div>
				<div class="shoppingCount">
					<div class = 'shoppingCountWid'>
						<button type="button" class = 'shoppingCountMinues'>-</button>
						<input type="" name="" class="shoppingNums" value="1" />
						<button type="button"  class = 'shoppingCountAdd'>+</button>
					</div>
				</div>
				<div class="shoppingPriceAll">￥${item1.priceAll}</div>
				<div class="shoppingRemove">删除</div>
			</div>
		`).appendTo($('.shopping'))
	})
	
	/* 复选框选择 */
	var count=0;
	var goods=[];
	var countAll=0;
	$('.shoppingListCheck').click(function(){
		var index=$('.shoppingListCheck').index(this);
		// console.log(index);
		if(this.checked){
			count++;
			goods.push(shoppingArr[index]);
			countAll+=Number($('.shoppingNums')[index].value);
			console.log(goods)
		}else{
			count--;
			countAll-=Number($('.shoppingNums')[index].value);
			var i=goods.indexOf(shoppingArr[index]);
			goods.splice(i,1)
		}
		/* 如果count的数量与存数据的数组的长度相等，则全选框被选中为true */
		if(count==shoppingArr.length){
			$('.checkAll input')[0].checked=true;
			$('.setChoose input')[0].checked=true;
		}else{
			$('.checkAll input')[0].checked=false;
			$('.setChoose input')[0].checked=false;
		}
		allGoodsPrice();
		$('.setChoosePrice div b').html(countAll);
	})
	
	/* 全选框，如果这个选中，则checked为true */
	$('.checkAll input').click(function(){
		// console.log(this.checked)
		if(this.checked){
			$('.shoppingListCheck').prop('checked', true);
			$('.setChoose input')[0].checked=true;
			count=shoppingArr.length;
			goods=shoppingArr.concat();
			countAll=0
			for(var j=0;j<$('.shoppingNums').length;j++){
				// console.log($('.shoppingNums')[j].value)
				countAll+=Number($('.shoppingNums')[j].value);
			}
		}else{
			$('.shoppingListCheck').prop('checked', false);
			$('.setChoose input')[0].checked=false;
			goods=[];
			count=0;
			countAll=0;
		}
		$('.setChoosePrice div b').html(countAll);
		allGoodsPrice();
	})
	$('.setChoose input').click(function(){
		console.log(this.checked)
		if(this.checked){
			$('.shoppingListCheck').prop('checked', true);
			$('.checkAll input')[0].checked=true;
			goods=shoppingArr.concat();
			count=shoppingArr.length;
			countAll=0
			for(var j=0;j<$('.shoppingNums').length;j++){
				// console.log($('.shoppingNums')[j].value)
				countAll+=Number($('.shoppingNums')[j].value);
			}
		}else{
			$('.shoppingListCheck').prop('checked', false);
			$('.checkAll input')[0].checked=false;
			goods=[];
			count=0;
			countAll=0;
		}
		$('.setChoosePrice div b').html(countAll);
		allGoodsPrice();
	})
	/* 数量减 */
	$('.shoppingCountMinues').click(function(){
		var index=$('.shoppingCountMinues').index(this);
		var j=$('.shoppingNums')[index].value
		countAll=$('.setChoosePrice div b').html();
		// console.log(countAll)
		if(j<=0){
			j=0;
			$('.shoppingNums')[index].value=j;
			// countAll=0;
		}else{
			j--;
			$('.shoppingNums')[index].value=j;
			// countAll--;
		}
		if($(this).parent().parent().parent().find('.shoppingListCheck')[0].checked==true){
			if(j<=0){
				countAll=countAll;
			}else{
			
				countAll--;
			}
		}else{
			countAll=countAll
		}
		
		// countAll+=j;
		$('.setChoosePrice div b').html(countAll)
		singlePrice(index)
		allGoodsPrice();
		// console.log(countAll)
		// console.log($('#shoppingNums').val())
	})
	
	/* 数量加 */
	$('.shoppingCountAdd').click(function(){
		var index=$('.shoppingCountAdd').index(this);
		var j=$('.shoppingNums')[index].value;
			j++;
			$('.shoppingNums')[index].value=j;
			if($(this).parent().parent().parent().find('.shoppingListCheck')[0].checked==true){
				countAll++;
			}else{
				countAll=countAll
			}
			$('.setChoosePrice div b').html(countAll)
		// console.log($('#shoppingNums').val())
		singlePrice(index)
		allGoodsPrice();
	})
	
	
	
	/* 删除 */
	$('.shoppingRemove').click(function(){
		var index=$('.shoppingRemove').index(this);
		countAll=$('.setChoosePrice div b').html();
		if(countAll==0){
			countAll-=0;
		}else if($(this).parent().find('.shoppingListCheck')[0].checked==true){
			countAll-=$('.shoppingNums')[index].value;
			var i=goods.indexOf(shoppingArr[index])
			goods.splice(i,1)
			allGoodsPrice();
		}else{
			countAll-=0;
		}
		// allGoodsPrice();
		console.log(goods)
		$('.shoppingList')[index].remove()
		$('.setChoosePrice div b').html(countAll)
		shoppingArr.splice(index, 1);
		// allGoodsPrice();
	})
	
	
	
	
	
	/* 单个物品价格 */
	function singlePrice(index){
		// console.log(shoppingArr[index].priceAll)
		shoppingArr[index].priceAll=$('.shoppingNums')[index].value*shoppingArr[index].price;
		$('.shoppingPriceAll').eq(index).html('￥'+shoppingArr[index].priceAll)
	}
	
	/* 全部商品价格 */
	function allGoodsPrice(){
		var all=0;
		for(var k=0;k<goods.length;k++){
			all=all+goods[k].priceAll;
		}
		// console.log(goods[k].priceAll)
		// return all
		$('.setChoosePrice span').html('￥'+all);
	}
	
	
	
	
})