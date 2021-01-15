$(function(){
	/* 判断收货人不能为空 */
	var oInputPerson;
	$('#persontxt').blur(function(){
		if($('#persontxt')[0].value.length==0){
			$('.person td b').css('display','inline-block')
		}else{
			oInputPerson=$('#persontxt')[0].value
			$('.person td b').css('display','none')
		}
		// console.log(oInputPerson)
	})
	/* 判断手机号 */
	var tel=/^1\d{10}$/;
	var oInputPhone;
	$('#phoneNumtxt').blur(function(){
		// console.log($('#phoneNumtxt')[0].value.length)
		if($('#phoneNumtxt')[0].value.length==0){
			$('.phoneNum td b').css('display','inline-block')
		}else if(tel.test($('#phoneNumtxt')[0].value)){
			oInputPhone=$('#phoneNumtxt')[0].value;
			$('.phoneNum td b').css('display','none')
		}else{
			$('.phoneNum td b').css('display','inline-block')
			$('.phoneNum td b span').html('手机号填写错误，请填写正确的11位手机号码，例如：13XXXXXXXXX')
			$('.phoneNum td b span').css({
				'color':'#f00',
			});
		}
		// console.log(oInputPhone)
	})
	
	/* 判断收货地址不能为空 */
	var oInputAddress
	$('#reAddresstxt').blur(function(){
		if($('#reAddresstxt')[0].value.length==0){
			$('.reAddress td b').css('display','inline-block')
		}else{
			oInputAddress=$('#reAddresstxt')[0].value
		}
	})
	var addNum;
	$('#addressNum').blur(function(){
		addNum=$('#addressNum')[0].value;
	})
	
	$('#addClear').click(function(){
		$('#persontxt')[0].value='';
		$('#phoneNumtxt')[0].value='';
		$('#reAddresstxt')[0].value='';
		$('#addressNum')[0].value=''
	})
	
	var addressDataarr=[]
	var addressOc={}
	
	
	$('#Add').click(function(){
		addressOc={
			oInputPerson,
			oInputPhone,
			oInputAddress,
			addNum
		}
		addressDataarr.push(addressOc);
		// console.log(addressDataarr)
		for(var j=addressDataarr.length-1;j<addressDataarr.length;j++){
			$(`
				<tr>
					<td>${addressDataarr[j].oInputPerson}</td>
					<td>${addressDataarr[j].oInputAddress}</td>
					<td>${addressDataarr[j].addNum}</td>
					<td>${addressDataarr[j].oInputPhone}</td>
				</tr>
			`).appendTo($('.fl2-tableshow table'))
		}
		
	})
	
	
	$('.fl2-sidenav>ul>li>a').hover(function(){
		$(this).css('color','#cf0a2c')
	},function(){
		$(this).css('color','#777')
	})
	
})