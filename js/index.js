// JavaScript Document
window.onload = function(){
	he.app.showloading();
	he.app.Change();
	he.app.Page1();
	he.app.Page2();
	he.app.Page4();
	he.app.page5();
	he.ui.cjAllOut();
	he.app.music();
	//
	//	var cjAnamite = he.ui.cjAnamite();
	//	
	//	cjAnamite[4].outAn();
	//	setTimeout(function(){
	//		cjAnamite[4].inAn();
	//	},2000);
}

var he = {}; //命名空间

//工具类
he.tools = {};

he.tools.$ = function(obj){
	return document.getElementById(obj);
}
he.tools.getByClass = function(oParent, className){
	var aEle = document.getElementsByTagName("*");
	var arr = [];
	for(var i= 0; i<aEle.length;i++)
	{
		var aClassName = aEle[i].className.split(" ");
		for(var j = 0; j<aClassName.length;j++){
			if(aClassName[j]==className){
				arr.push(aEle[i]);
				break;
			}
		}
	}
	return arr;
}
he.tools.getviwWidth = function(){
	return window.innerWidth || document.documentElement.clientWidth;
}
he.tools.getviwHeight = function(){
	return window.innerHeight || document.documentElement.clientHeight;
}

he.tools.setStyle = function(obj,attr,value){
	obj.style[attr] = value;
	obj.style['webkit'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
}



//公用组件类，特效什么的
he.ui = {};
he.ui.cjAnamite = function(){
	//p1
	var oP1 = he.tools.$("#page1");
	var oHomeContend = he.tools.getByClass(oP1, "homeContend")[0];
	var oHomeBtn = he.tools.getByClass(oP1, "homeBtn")[0];
	//p2
	
	var oP2 = he.tools.$("#page2");
	var oPlane1 = he.tools.getByClass(oP2, "plane1")[0];
	var oPlane2 = he.tools.getByClass(oP2, "plane2")[0];
	var oPlane3 = he.tools.getByClass(oP2, "plane3")[0];
	//p3
	var oP3 = he.tools.$("#page3");
	var oPancel1 = he.tools.getByClass(oP3, "pancel1")[0];
	var oPancel2 = he.tools.getByClass(oP3, "pancel2")[0];
	var oPancel3 = he.tools.getByClass(oP3, "pancel3")[0];
	//p4
	var oWanhua = he.tools.$("#wanhua");
	var oImgBox = he.tools.getByClass(oWanhua, "imgBox");
	//p5
	var oP5 = he.tools.$("#page5");
	var oP5_text = he.tools.getByClass(oP5, "p5_text")[0];
	var oTxtBox = he.tools.getByClass(oP5, "change")[0];
	
	var cj = [
		{
			inAn : function(){
				oHomeContend.style.opacity = 1;
				oHomeBtn.style.opacity = 1;
				he.tools.setStyle( oHomeContend, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oHomeBtn, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				oHomeContend.style.opacity = 0;
				oHomeBtn.style.opacity = 0;
				he.tools.setStyle( oHomeContend, "transform", "translate( 0, -200px )" );
				he.tools.setStyle( oHomeBtn, "transform", "translate( 0, 300px )" );
			}
		},
		{
			inAn : function(){
				he.tools.setStyle( oPlane1, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oPlane2, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oPlane3, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				
				he.tools.setStyle( oPlane1, "transform", "translate( -200px, -200px )" );
				he.tools.setStyle( oPlane2, "transform", "translate( -200px, 200px )" );
				he.tools.setStyle( oPlane3, "transform", "translate( 200px, -200px )" );
			}
		},
		{
			inAn : function(){
				he.tools.setStyle( oPancel1, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oPancel2, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oPancel3, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				he.tools.setStyle( oPancel1, "transform", "translate( 0, -200px )" );
				he.tools.setStyle( oPancel2, "transform", "translate( 0, 200px )" );
				he.tools.setStyle( oPancel3, "transform", "translate( 0, 200px )" );
			}
		},
		{
			inAn : function(){
				he.tools.setStyle( oImgBox[0], "transform", "rotate(0)" );
				he.tools.setStyle( oImgBox[1], "transform", "rotate(0)" );
			},
			outAn : function(){
				he.tools.setStyle( oImgBox[0], "transform", "rotate(45deg)" );
				he.tools.setStyle( oImgBox[1], "transform", "rotate(-45deg)" );
			}
		},
		{
			inAn : function(){
				oTxtBox.style.opacity = 1;
				oP5_text.style.opacity = 1;
				he.tools.setStyle( oTxtBox, "transform", "translate( 0, 0 )" );
				he.tools.setStyle( oP5_text, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				oTxtBox.style.opacity = 0;
				oP5_text.style.opacity = 0;
				he.tools.setStyle( oTxtBox, "transform", "translate( -300px, 0 )" );
				he.tools.setStyle( oP5_text, "transform", "translate( 200px, 0 )" );
			}
		}
		
	];
	
	return cj;
};
he.ui.cjAllOut = function(){
	var cj = he.ui.cjAnamite();
	for(var i = 0; i < cj.length; i++){
		cj[i].outAn();
	}
}


//应用类 --主要实现页面的功能
he.app = {};

//loading 图片预加载
he.app.showloading = function(){
	var oMain = he.tools.$("main");
	var oLoading = he.tools.$("loading");
	var oMyaudio = he.tools.$("Myaudio");
	var aDiv = oLoading.getElementsByTagName("div");
	var oSpan = oLoading.getElementsByTagName("span")[0];
	
	var arr = [
		"show1.jpg",
		"show2.jpg",
		"show3.jpg",
		"show4.jpg",
		"show5.jpg",
		"about2.jpg",
		"about3.jpg",
		"about4.jpg",
		"bg1.jpg",
		"bg2.jpg",
		"bg3.jpg",
		"bg4.jpg",
		"bg5.jpg",
		"greenLine.png",
		"team.png",
		"worksimg1.jpg",
		"worksimg2.jpg",
		"worksimg3.jpg",
		"worksimg4.jpg",
		"skew01.png",
		"skew02.png",
		"skew03.png",
		"skew04.png",
		"skew05.png",
		"skew06.png",
		"skew07.png",
		"skew08.png",
		"skew09.png",
		"skew10.png",
		"skew11.png",
		"skew12.png"
	];
	var iNow = 0;
	for(var i= 0; i < arr.length; i++){
		var objImg = new Image();
		objImg.src = "img/"+ arr[i];
		objImg.onload = function(){
			iNow++;
			oSpan.style.width = iNow/arr.length*100+"%";
		}
	}
	//检测span进度是不是运动结束
	oSpan.addEventListener("transitionend", spanChang, false);
	oSpan.addEventListener("webkitTransitionEnd", spanChang, false);
	function spanChang(){
		if(oSpan.style.width = "100%"){
			oSpan.style.display = "none";
			aDiv[0].style.height = 0;
			aDiv[1].style.height = 0;
			
		}
	}
	//检测div是不是运动结束
	aDiv[0].addEventListener("transitionend", divChang, false);
	oSpan.addEventListener("webkitTransitionEnd", divChang, false);
	function divChang(){
		oMain.removeChild(oLoading);
		oMyaudio.play();
		he.ui.cjAnamite()[0].inAn();
	}
	
}


he.app.Change = function(){ //全屏切换
	var oNav = he.tools.$("nav");
	var oHeaderMain = he.tools.$("headerMain");
	var aliNav = oNav.getElementsByTagName("li");
	var aUpNav = he.tools.getByClass(oNav, "up");
	var oArrow = he.tools.getByClass(oHeaderMain, "arrow")[0];
	var oContent = he.tools.$("content");
	var oSide_Nav = he.tools.getByClass(oContent, "side_Nav")[0];
	var aSnav_a = oSide_Nav.getElementsByTagName("a");
	var oList = he.tools.$("list");
	var aLilist = oList.getElementsByTagName("li");
	var iNow = 0;
	var prevIndex = 0;
	var oContentHeight = he.tools.getviwHeight()-80;
	
	var cj = he.ui.cjAnamite();
	
	init(); //初始化
	bingNav();
	window.onresize = fnResize;
	fnScroll();
	PageAuto();
	sideClick();
	//toMove(4)
	function init(){ //初始化
		aUpNav[0].style.width = "100%";
		oArrow.style.left = (aliNav[0].offsetLeft + aliNav[0].offsetWidth/2)-oArrow.offsetWidth/2+"px";
		oContent.style.height = oContentHeight +'px';
		for(var i = 0; i < aLilist.length; i++){
			aLilist[i].style.height = oContentHeight+"px";
		}
	}
	function bingNav(){ //点击导航
		for(var i = 0; i<aliNav.length;i++){
			aliNav[i].index = i;
			aliNav[i].onclick = function(){
				prevIndex = iNow;
				iNow=this.index;
				toMove(iNow, prevIndex);
				
			};
		}
	}
	
	function fnScroll(){ //滚轮
		var b = true;
		var timer = null;
		if(oContent.addEventListener){
			oContent.addEventListener('DOMMouseScroll',function(ev){
				var ev = ev || window.event;
				clearInterval(timer);
				timer = setTimeout(function(){
					toScroll(ev);
				},100);
				
			},false);
		}
		oContent.onmousewheel = function(){
			var ev = ev || window.event;
			clearInterval(timer);
			timer = setTimeout(function(){
				toScroll(ev);
			},100);
		};
		function toScroll(ev){
		    //ev.detail-->火狐
			//ev.wheelDelta-->标准
			if(ev.detail){
				b = ev.detail > 0 ? true : false;
			}
			else{
				b = ev.wheelDelta < 0 ? true : false;
			}
			prevIndex = iNow;
			if(b){
				iNow++;
				if(iNow > aSnav_a.length-1){
					iNow=aSnav_a.length-1;
				}
				else{
					toMove(iNow, prevIndex);
				}
			}
			else{
				iNow--;
				if(iNow<0){
					iNow=0;
				}
				else{
					toMove(iNow, prevIndex);
				}
			}
		}
		
	}
	function fnResize(){
		oContentHeight = he.tools.getviwHeight()-80;
		init();
	}
	function toMove(index, previndex){ //tab
		for(var i = 0; i<aUpNav.length;i++){
			aUpNav[i].style.width = "0";
			aSnav_a[i].className = "";
		}
		aUpNav[index].style.width = "100%";
		oArrow.style.left = (aliNav[index].offsetLeft + aliNav[index].offsetWidth/2)-oArrow.offsetWidth/2+"px";
		oList.style.top = -index*oContentHeight + "px";
		aSnav_a[index].className = "active";
		//场景切换
		if(cj[index].inAn){
			cj[index].inAn();
		};
		if(cj[previndex].outAn){
			cj[previndex].outAn();
		};
		
	}
	
	function PageAuto(){
		var aPage = he.tools.getByClass(oList, "page");
		var mt = (oContentHeight-aPage[0].offsetHeight)/2;
		for(var i = 0; i < aPage.length; i++){
			aPage[i].style.marginTop = mt+"px";
		}
		
	}
	function sideClick(){
		for(var i = 0; i<aSnav_a.length;i++){
			aSnav_a[i].index = i;
			aSnav_a[i].onclick = function(){ 
				prevIndex = iNow;
				iNow=this.index;
				toMove(iNow, prevIndex);
			};
		}
	}
	
}
he.app.Page1 = function(){
	var oPage1 = he.tools.$("page1");
	var oHomeContend = he.tools.getByClass(oPage1, "homeContend")[0];
	var aLi = oHomeContend.getElementsByTagName("li");
	var oHomeBtn = he.tools.getByClass(oHomeContend, "homeBtn")[0];
	var aBtn = oHomeBtn.getElementsByTagName("span");
	var prevIndex = 0;
	var timer = null;
	var iNow = 0;
	var data = ["img/show1.jpg","img/show2.jpg","img/show3.jpg","img/show4.jpg","img/show5.jpg"];
	aBtnClick();
	cleate();
	
	aLi[0].className = "activeHome";
	
	function aBtnClick(){
		for(var i = 0; i < aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick =function(){
				clearInterval(timer);
				for(var i = 0; i < aBtn.length; i++){
					aBtn[i].className = "";
				}
				this.className = "homeBtnActive";
				if(prevIndex < this.index){
					aLi[prevIndex].className = "LeftHide";
					aLi[this.index].className = "RightShow";
				}
				else if(prevIndex > this.index){
					aLi[prevIndex].className = "RightHide";
					aLi[this.index].className = "LeftShow";
				}
				prevIndex = this.index;
			}
		}
		
	}
	timer = setInterval(chang, 3000);
	function chang(){
		iNow++;
		if(iNow > aBtn.length-1){
			iNow = 0;
		}
		for(var i = 0; i < aBtn.length; i++){
			aBtn[i].className = "";
		}
		aBtn[iNow].className = "homeBtnActive";
		aLi[prevIndex].className = "LeftHide";
		aLi[iNow].className = "RightShow";
		prevIndex = iNow;
	}
	
	function cleate(){
		var oUl = document.createElement("ul");
		for(var i = 0; i < data.length; i++){
			var oLi = document.createElement("li");
			var oImg = document.createElement("img");
			oImg.src = data[i];
			oLi.appendChild(oImg);
			oUl.appendChild(oLi);
		}
		oHomeContend.appendChild(oUl);
		
	}
}
he.app.Page2 = function(){
	var oFanpai = he.tools.$("fanpai");
	var num = 12;
	var imgArr = ["skew01.png", "skew02.png","skew03.png","skew04.png","skew05.png","skew06.png","skew07.png","skew08.png","skew09.png","skew10.png","skew11.png","skew12.png"];
	var textArr = ["熟悉使用HTML5，进行前端规范化的布局，以及熟悉使用其新的功能", "精通DIV+CSS切片工作,以及css3的使用", "熟悉原生JavaScript，以及Ajax、DOM、JSON等相关技术", "熟悉使用HBuider以及H5+开发webAPP", "熟悉使用jq的框架，并有很多的开发项目的经验", "熟悉使用移动端zepto的框架，并有很多的开发项目的经验", "熟悉使用AngularJS开发单页面的webapp", "熟悉使用CMD(seaJS)和AMD(requirejs)的规范来模块化开发项目", "了解modeJS，并且正在努力学习ing~~", "熟悉使用git以及svn的版本管理的前端开发工具", "熟悉使用less以及sass的动态样式语言来开发", "当然ps，cdr，ai等的切图工具是必不可少的，以及grunt,gulp自动化构建工具等等，都有了解过"];
	for(var i = 0; i < num; i++){
		var oDiv1 = document.createElement("div");
		oDiv1.className = "courseLogo";
		var oDiv2 = document.createElement("div");
		oDiv2.className = "before";
		oDiv2.style.backgroundImage = "url(img/"+imgArr[i]+")";
		var oDiv3 = document.createElement("div");
		oDiv3.className = "after";
		oDiv3.innerHTML = textArr[i];
		oDiv1.appendChild(oDiv2);
		oDiv1.appendChild(oDiv3);
		oFanpai.appendChild(oDiv1);
	}
	
	
}

he.app.Page4 = function(){
	var oWanHua = he.tools.$("wanhua");
	var oImgBox = he.tools.getByClass(oWanHua, "imgBox");
	var oWanhua_up = he.tools.getByClass(oWanHua, "wanhua_up");
	var oWanhua_down = he.tools.getByClass(oWanHua, "wanhua_down");
	
	var oImgW = parseInt(oImgBox[0].offsetWidth);
	var oImgH = parseInt(oImgBox[0].offsetHeight);
	var bg = ["img/about3.jpg", "img/about4.jpg"]
	var pos = [
				{"left":0, "top": 0},
				{"left":-(oImgW/2), "top": 0},
				{"left":0, "top": -(oImgH/2)},
				{"left":-(oImgW/2), "top": -(oImgH/2)}
				]
	
	var pos_end = [
				{"left":(oImgW/2), "top": 0},
				{"left":0, "top": oImgH/2},
				{"left":0, "top": -oImgH},
				{"left":-oImgW, "top": (oImgH/2)}
				]
	
	
	init();
	touch();

	function init(){
		for(var i = 0; i < oWanhua_up.length; i++){
			creat(oWanhua_up[i], bg[i]);
		}
		function creat(obj,bg){
			for(var j = 0; j < 4 ; j++){
				var oDiv = document.createElement("div");
				oDiv.style.position = "relative";
				oDiv.style.width = oImgW/2 + "px";
				oDiv.style.height = oImgH/2 + "px";
				var oImg = document.createElement("img");
				oImg.src = bg;
				oImg.style.position = "absolute";
				oImg.style.left = pos[j].left+"px";
				oImg.style.top = pos[j].top+"px";
				//oDiv.style.background = " url("+bg+") no-repeat "+pos[j].left+"px "+pos[j].top+"px";
				oDiv.appendChild(oImg);
				obj.appendChild(oDiv);
			}	
		}
	}
	function touch(){
		for(var i = 0; i < oWanhua_up.length; i++){
			oWanhua_up[i].index = i;
			oWanhua_up[i].onmouseover = function(){
				var aImg = this.getElementsByTagName("img");
				for(var i = 0; i < aImg.length; i++){
					aImg[i].style.left = pos_end[i].left+"px";
					aImg[i].style.top = pos_end[i].top+"px";
				}
				oWanhua_down[this.index].style.transform = "scale(1)";
				oWanhua_down[this.index].style.WebkitTransform = "scale(1)";
			}
			oWanhua_up[i].onmouseout = function(){
				var aImg = this.getElementsByTagName("img");
				for(var i = 0; i < aImg.length; i++){
					aImg[i].style.left = pos[i].left+"px";
					aImg[i].style.top = pos[i].top+"px";
				}
				oWanhua_down[this.index].style.transform = "scale(1.5)";
				oWanhua_down[this.index].style.WebkitTransform = "scale(1.5)";
			}
		}
	}
	
	
	
}

he.app.page5 = function(){
	var oPage5 = he.tools.$("#page5");
	var oP5List = he.tools.getByClass(oPage5, "p5_list")[0];
	var aLi = oP5List.getElementsByTagName("li");
	var w = 113;
	var h = 365;
	var oC = null;
	var timer1 = null;
	var timer2 = null;
	creat();
	binCanvas();
	
	oP5List.onmouseleave = function(){
		clearInterval(timer1);
		clearInterval(timer2);
		oP5List.removeChild(oC);
		oC = null;
		for(var i = 0; i < aLi.length; i++){
			aLi[i].style.opacity = 1;
		}
	}
	function creat(){
		var oUl = document.createElement("ul");
		for(var i = 0; i < 8; i++){
			var oLi = document.createElement("li");
			oLi.style.background = "url(img/team.png) no-repeat";
			oLi.style.backgroundPosition = ""+-(i*w)+"px 0px";
			oUl.appendChild(oLi);
		}
		oP5List.appendChild(oUl);
	};
	function binCanvas(){
		for(var i = 0; i < aLi.length; i++){
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				for(var i = 0; i < aLi.length; i++){
					aLi[i].style.opacity = 0.5;
				}
				this.style.opacity = 1;
				addCanvas();
				oC.style.left = this.index*w + "px";
			}
		}
	}
	
	function addCanvas(){
		if(!oC){
			oC = document.createElement("canvas");
			oC.id = "p5canvas";
			oC.width = w;
			oC.height = h;
			oP5List.appendChild(oC);
			cavasEffect();
		}
	}
	
	function cavasEffect(){
		var oGC = oC.getContext("2d");
		var setArr = []//存储绘制圆的数据；
		timer1 = setInterval(function(){
			
			oGC.clearRect(0, 0, oC.width, oC.height);
			
			console.log(setArr.length)
			for(var i = 0; i < setArr.length; i++){
				setArr[i].num += 3;
				setArr[i].x = setArr[i].starX + Math.sin(setArr[i].num*Math.PI/180)*setArr[i].step;
				setArr[i].y = setArr[i].starY - (setArr[i].num*Math.PI/180)*setArr[i].step;
				if(setArr[i].y < 100){
					setArr.splice(i, 1);
				}
			}
			
			for(var i = 0; i < setArr.length; i++){
				//填充随机颜色
				oGC.fillStyle = "rgba("+setArr[i].c1+", "+setArr[i].c2+", "+setArr[i].c3+", "+setArr[i].a+")";
				//绘制圆
				oGC.beginPath();
					oGC.moveTo(setArr[i].x , setArr[i].y);
					oGC.arc(setArr[i].x, setArr[i].y, setArr[i].r, 0, 360*Math.PI/180);
				oGC.closePath();
				oGC.fill();
			}
			
		},1000/60)
		
		timer2 = setInterval(function(){
			var x = Math.random()*oC.width;
			var y = oC.height - 10;
			var r = Math.random()*6+4;
			//随机生成颜色
			var c1 = Math.round(Math.random()*255);
			var c2 = Math.round(Math.random()*255);
			var c3 = Math.round(Math.random()*255);
			var a = 1;
			var starX = x;
			var starY = y;
			var num = 0;
			var step = Math.random()*10+30;
			setArr.push({
				x : x,
				y : y,
				r : r,
				c1 :　c1,
				c2 : c2, 
				c3 : c3,
				a : a,
				starX : x,
				starY : y,
				num : num,
				step : step
			})
								
		},100)
		
	}
				
	
}

he.app.music = function(){
	var b = true;
	var Myaudio = he.tools.$("Myaudio");
	var Music = he.tools.$("music");
	Music.onclick = function(){
		if(b){
			Myaudio.pause()
			Music.style.backgroundImage = "url(img/musicoff.gif)";
		}
		else{
			Myaudio.play();
			Music.style.backgroundImage = "url(img/musicon.gif)";
		}
		b = !b;
	}
}











