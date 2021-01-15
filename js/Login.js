$(function(){
	/* 改变QQ、支付宝、微信图标 */
	$('.QQ').hover(function(){
		$('.QQ-n').css('display','block');
		$('.QQ-b').css('display','none');
	},function(){
		$('.QQ-b').css('display','block');
		$('.QQ-n').css('display','none');
	})
	$('.ZFB').hover(function(){
		$('.ZFB-n').css('display','block');
		$('.ZFB-b').css('display','none');
	},function(){
		$('.ZFB-b').css('display','block');
		$('.ZFB-n').css('display','none');
	})
	$('.VX').hover(function(){
		$('.VX-n').css('display','block');
		$('.VX-b').css('display','none');
	},function(){
		$('.VX-b').css('display','block');
		$('.VX-n').css('display','none');
	})
	/* 选择登录方式 */
	$('.login-password .login-choose').click(function(){
		$('.login-password').css('display','none');
		$('.main-login ol').css('display','none');
		$('.main-login ul').css('display','none');
		$('.main-login .login-letter').css('display','block');
		$('.main-title').html('短信验证码登录')
	})
	$('.login-letter .login-choose').click(function(){
		$('.login-letter').css('display','none');
		$('.main-login ol').css('display','block');
		$('.main-login ul').css('display','block');
		$('.main-login .login-password').css('display','block');
		$('.main-title').html('华为账号登录')
	})
	
	/* 验证 */
	$('#phone1').blur(function(){
		if($('#phone1')[0].value.length==0){
			// console.log($('#phone1')[0].value.length)
			$('.login-password .hint').html('请输入您的账号').css({
				'color':'#f00',
				'display':'block'
			});
			$('#phone1').css('border','1px solid #f00');
		}else if($('#phone1')[0].value.length<4||$('#phone1')[0].value.length>80){
			console.log($('#phone1')[0].value.length)
			$('.login-password .hint').html('华为帐号限制在4~80 个字符').css({
				'color':'#f00',
				'display':'block'
			});
			$('#phone1').css('border','1px solid #f00');
		}else{
			$('#phone1').css('border','1px solid #527DFF');
			$('.login-password .hint').html('');
			$('#phpassword').focus(function(){
				$('#phpassword').css('border','1px solid #527DFF');
			})
			$('#phpassword').blur(function(){
				if($('#phpassword')[0].value.length==0){
					$('#phpassword').css('border','1px solid #f00');
					$('.login-password .hint').html('请输入您的密码').css({
						'color':'#f00',
						'display':'block'
					});
				}else{
					$('#phpassword').css('border','0');
					$('.login-btn').css('background','#f00')
				}
			})
		}
	})
	
	$('#phone2').blur(function(){
		if($('#phone2')[0].value.length==0){
			$('.login-password .hint').html('请输入您的手机号').css({
				'color':'#f00',
				'display':'block'
			});
			$('#phone1').css('border','1px solid #f00');
		}else{
			$('.main-password div').css('color','#527DFF');
		}
	})
	
	
	
	
	
	
})