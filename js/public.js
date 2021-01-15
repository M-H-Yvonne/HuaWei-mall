/* 获取特定class元素节点 */
function elementsByClassName( nodes, classStr){
	var oDivAll = nodes.getElementsByTagName('*');
	var res = [];
	for( var i = 0; i<oDivAll.length; i++){
		if( oDivAll[i].className == classStr ){
			res.push(oDivAll[i]);
		}
	}
	return res;
}

/* 封装$方法 
判断这个字符串是哪种选择器 */
// function $(str){
// 	switch( str.charAt(0)){
// 		case '#':
// 			return document.getElementById(str.slice(1));
// 			break;
// 		case '.':
// 			return elementsByClassName(document,str.slice(1));
// 			break;
// 		case '[':
// 			return document.getElementsByName(str.slice(6,str.length-1));
// 			break;
// 		default:
// 			return document.getElementsByTagName(str);
// 		}
// }

/* 随机数 */
function ran(a,b){
	max=Math.max(a,b);
	min=Math.min(a,b);
	return parseInt(Math.random()*(max-min+1)+min);
}

/* 验证码 */
function team(n){
	var t=[];
	for(var i=0;i<n;i++){
		var num=ran(48,122);
		if(num>=48&&num<=57||num>=65&&num<=90||num>=97&&num<=122){
			t[i]=String.fromCharCode(num)
		}else{
			i--;
		}
	}
	return t.join("");
}

/* 获取数据类型 */
function getType(val){
	return Object.prototype.toString.call(val).slice(8,-1);
}


/* 显示当前时间 */
function getCurrentTime(){
			var d=new Date();
			var year=d.getFullYear();
			var month=addZero(d.getMonth()+1);//月
			var date=addZero(d.getDate());//日
			var hour=addZero(d.getHours());//时
			var min=addZero(d.getMinutes());//分
			var sec=addZero(d.getSeconds());//秒
			var day=d.getDay();
			var week=['日','一','二','三','四','五','六']
			return year +'年'+month+'月'+date+'日'+'星期'+week[day]+hour+':'+min+':'+sec;
		}
		function addZero(z){
			if(z<10){
				z='0'+z;
			}
			return z;
		}
		
/* 弹窗 */
function tan(oItem,t){
	setTimeout(function(){
		oItem.style.display='none';
	},t)
}


//拖拽
function Drag(oDiv){
	// var oDiv=document.getElementsByTagName('div')
	for(var i=0;i<oDiv.length;i++){
		// 	//得到鼠标距离div左边的距离
		oDiv[i].onmousedown=function(e){
			var e=e||window.event;
			var mLeft=e.clientX-this.offsetLeft;
			var mTop=e.clientY-this.offsetTop;
			var _this=this;
			// 	//移动时
			document.onmousemove=function(e){
				//鼠标点击的位置-鼠标距离左边的距离,得到div与左边屏幕的距离，给css
				_this.style.left=e.clientX-mLeft +'px';
				_this.style.top=e.clientY-mTop +'px';
			}
		// 	//鼠标抬起取消事件
			_this.onmouseup=function(){
				document.onmousemove=null;
			}
		}
	}
}