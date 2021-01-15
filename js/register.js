$(function(){
	$('.choosephone').click(function(){
		$('.phonenum').css('display','block');
		$('.check').css('display','block');
		$('.mail').css('display','none');
		$('.mailcheck').css('display','none');
		$('.choosephone').css('background','#f2f2f2');
		$('.choosemail').css('background','#fff');
	})
	$('.choosemail').click(function(){
		$('.phonenum').css('display','none');
		$('.check').css('display','none');
		$('.mail').css('display','block');
		$('.mailcheck').css('display','block');
		$('.choosephone').css('background','#fff');
		$('.choosemail').css('background','#f2f2f2');
	})
	var tel=/^1\d{10}$/;
	$('.phonenum #phone2').blur(function(){
		if(tel.test($('.phonenum #phone2')[0].value)){
			$('#phone_txt').html('手机号填写正确')
			$('#phone_txt').css('color','#0a6');
			// console.log(oInputPhone);
			
		}else{
			$('#phone_txt').html('手机号填写错误，请重新填写');
			$('#phone_txt').css('color','#f00');
		}
	})
	
	$('.c-password #phpassword1').blur(function(){
		if($('.c-password #phpassword1')[0].value.length<6||$('.c-password #phpassword1')[0].value.length>16){
			$('#code_txt').html('请输入正确长度密码');
			$('#code_txt').css('color','#f00');
		}else if($('.c-password #phpassword1')[0].value.length>=6&&$('.c-password #phpassword1')[0].value.length<=18){
			$('#code_txt').html('密码长度正确');
			$('#code_txt').css('color','#0a6');
			// console.log(oInputCode);
		}
	})
	
	/* 确认密码 */
	$('.c-passwordre #phpassword2').blur(function(){
		if($('.c-passwordre #phpassword2')[0].value!==$('.c-password #phpassword1')[0].value){
			$('#recode_txt').html('请输入正确密码');
			$('#recode_txt').css('color','#f00');
		}else if($('.c-passwordre #phpassword2')[0].value.length==0){
			$('#recode_txt').html('请输入密码');
			$('#recode_txt').css('color','#f00');
		}else{
			$('#recode_txt').html('密码正确');
			$('#recode_txt').css('color','#0a6');
			// console.log(oInputReCode);
		}
	})
	
	$('.country-secbtn').click(function(){
		$('.country-sec ul').slideDown(1000,function(){})
		$('.country-sec ul li').click(function(){
			console.log(this);
			$('.country-secbtn span').html($(this).html());
			$('.country-sec ul').slideUp(1000,function(){});
		})
	})
	
	
	
	

})