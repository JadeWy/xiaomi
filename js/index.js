window.onload=function(){
	// var imgboxs=getClass('bannerimg')[0];
	var imgs=getClass('bannerimg');

	var btn=getClass('btn')[0].getElementsByTagName('li');
	btn[0].style.background='#fff';
	// console.log(imgs)
	var ban=getClass('banner')[0];
	var btnleft=getClass('btnleft1')[0];
	var btnright=getClass('btnright1')[0];


	var index=0;
	var wwww=setInterval(wheel,3000);
	function wheel(){
		index++;
		if(index>imgs.length-1){
			index=0;
		}
		for (var i = 0; i < imgs.length; i++) {
			// imgs[i].style.zIndex='0';
			animate(imgs[i],{opacity:0});
			btn[i].style.background='rgba(0,0,0,0.4)';
		};
		animate(imgs[index],{opacity:1});
		// imgs[index].style.zIndex='99';
		btn[index].style.background='#fff';
	}
	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i;
		btn[i].onclick=function(){
			for (var j = 0; j < imgs.length; j++) {
				// imgs[j].style.zIndex='0';
				animate(imgs[j],{opacity:0});
			    btn[j].style.background='rgba(0,0,0,0.4)';
			};
			animate(imgs[this.index],{opacity:1});
			// imgs[this.index].style.zIndex='99';
			btn[this.index].style.background='#fff';
			index=this.index;
		}
	};
	
	ban.onmouseover=function(){
		// console.log(1)
		btnleft.style.cssText='background:#513a1e;opacity:0.5;filter:alpha(opacity=50);';
		btnright.style.cssText='background:#513a1e;opacity:0.5;filter:alpha(opacity=50);';
		clearInterval(wwww);


	}
	ban.onmouseout=function(){
		btnleft.style.cssText='';
		btnright.style.cssText='';
		wwww=setInterval(wheel,3000);
	}
	
	btnleft.onclick=function(){
		index--;
		if(index==-1){
			index=imgs.length-1;
		}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0});
			// imgs[i].style.zIndex='0';
			btn[i].style.background='rgba(0,0,0,0.4)';
		};
		// imgs[index].style.zIndex='99';   
		animate(imgs[index],{opacity:1});
		btn[index].style.background='#fff';
	}
	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i;
		btn[i].onclick=function(){
			for (var j = 0; j < imgs.length; j++) {
				// imgs[j].style.zIndex='0';
				animate(imgs[j],{opacity:0});
			    btn[j].style.background='rgba(0,0,0,0.4)';
			};
			// imgs[this.index].style.zIndex='99';
			animate(imgs[this.index],{opacity:1});
			btn[this.index].style.background='#fff';
			index=this.index;
		}
	}
	btnright.onclick=function(){
		wheel();
	}


	//  选项卡

	var qiehuan=getClass('qiehuan');
	var znyj1=getClass('jsbox');

	var as,ds;
	for (var i = 0; i < qiehuan.length; i++) {
		as=qiehuan[i].getElementsByTagName('a');
		ds=znyj1[i].getElementsByClassName('znyjright1');
		// console.log(ds);
		tab(as,ds);
	};


	function tab(l,con){
		for (var i = 0; i < l.length; i++) {
			l[i].index=i;
			l[i].onmouseover=function(){
				for (var j = 0; j < con.length; j++) {
					con[j].style.display='none';
					l[j].style.color='#424242';
					l[j].style.borderBottom='none';
				};
				con[this.index].style.display='block';
				l[this.index].style.color='#ff6700';
				l[this.index].style.borderBottom='2px solid #ff6700';
			}
		};
	}
	//小米明星单品 轮播
	var dpsbox=getClass('dpsbox-box')[0];
	// console.log(dpsbox);
	var dpas=getClass('dpsboxbox',dpsbox);
	// console.log(dpas);
	// console.log(dpas[0]);
	var jtaw=parseInt(getStyle(dpas[0],'width'));
	// console.log(jtaw);
	var jtoubox=getClass('jiantoubox')[0].getElementsByTagName('div');
	var jtIndex=0;
	var t=setInterval(tee,3000);
	function tee(){
		jtIndex++;

		if(jtIndex==dpas.length){
			jtIndex=0;
		}
		for (var i = 0; i < jtoubox.length; i++) {
			jtoubox[i].style='color:#000';
		};
		jtoubox[jtIndex].style='color:#ff6700';
		animate(dpsbox,{marginLeft:-jtIndex*jtaw});
	}
	var jianbox=getClass('jiantoubox')[0];
	// var dpoutbox=getClass('danpinbox')[0];
	jianbox.onmouseover=function(){
		clearInterval(t);
	}
	jianbox.onmouseout=function(){
		t=setInterval(tee,3000);
	}

	var jtrightbtn=getClass('jiantou2')[0];
	// console.log(jtbtn);
	jtrightbtn.onclick=function(){
		jtIndex++;

		if(jtIndex==dpas.length){
			jtIndex=dpas.length-1;
		}
		for (var i = 0; i < jtoubox.length; i++) {
			jtoubox[i].style='color:#000';
		};
		jtoubox[jtIndex].style='color:#ff6700';
		animate(dpsbox,{marginLeft:-jtIndex*jtaw});
	}
	var jtleftbtn=getClass('jiantou1')[0];

	jtleftbtn.onclick=function(){
		jtIndex--;
		if(jtIndex==-1){
			jtIndex=0;
		}
		for (var i = 0; i < jtoubox.length; i++) {
			jtoubox[i].style='color:#000';
		};
		jtoubox[jtIndex].style='color:#ff6700';
		animate(dpsbox,{marginLeft:-jtIndex*jtaw});
	}

	//  为你推荐 效果

	var tjbox=getClass('tjbox-box')[0];
	// console.log(tjboxbox);
	var tjas=getClass('tjboxbox',tjbox);
	// console.log(tjas);
	var tjaw=parseInt(getStyle(tjas[0],'width'));
	// console.log(tjaw);
	var tjbtn=getClass('jiantoubox1')[0].getElementsByTagName('div');
	var tjright=getClass('jiantou4')[0];
	// console.log(tjright);
	var tjleft=getClass('jiantou3')[0];
	var tjindex=0;
	tjright.onclick=function(){
		tjindex++;
		if(tjindex==tjas.length){
			tjindex=tjas.length-1;
		}
		animate(tjbox,{marginLeft:-tjindex*tjaw});
	}
	tjleft.onclick=function(){
		tjindex--;
		if(tjindex==-1){
			tjindex=0;
		}
		animate(tjbox,{marginLeft:-tjindex*tjaw});
	}


	//  内容

	/*var bbox=getClass('bookbox')[0];
	// console.log(bbox);
	var boxbox=getClass('book-box',bbox);
	// console.log(boxbox);
	var ribt=getClass('ribt')[0];
	// console.log(lebt);
	var lebt=getClass('lebt')[0];
	var bbaw=parseInt(getStyle(boxbox[0],'width'));
	// console.log(bbaw);
	var libt=getClass('btn2')[0].getElementsByTagName('li');
	var btindex=0;*/

    /*var bbox1=getClass('bookbox')[1];
    var boxbox1=getClass('book-box',bbox1);
    var ribt1=getClass('ribt1')[0];
    var lebt1=getClass('lebt1')[0];
	var bbaw1=parseInt(getStyle(boxbox1[0],'width'));
	var btindex1=0;	*/
    // };












	/*ribt.onclick=function(){
		btindex++;
		if(btindex==boxbox.length){
			btindex=boxbox.length-1;
		}
		for (var i = 0; i < libt.length; i++) {
			libt[i].className="";
		};
		libt[btindex].className="lis";
		animate(bbox,{marginLeft:-btindex*bbaw})
	}
	lebt.onclick=function(){
		btindex--;
		if(btindex==-1){
			btindex=0;
		}
		for (var i = 0; i < libt.length; i++) {
			libt[i].className="";
		};
		libt[btindex].className="lis";
		animate(bbox,{marginLeft:-btindex*bbaw})
	}*/




	var bookout=getClass('nrbox')
	var bbox=getClass('bookbox');
	var ribt=getClass('ribt');
	// console.log(ribt)
	var lebt=getClass('lebt');
	var lis=getClass('btn2');
	// console.log(lis)
	var libt,boxbox,bbaw;
	for (var i = 0; i < lis.length; i++) {
		libt=lis[i].getElementsByTagName('li');
		boxbox=getClass('book-box',bbox[i]);
		bbaw=parseInt(getStyle(boxbox[0],'width'));
		// bookout=getClass('nrbox')[i]
		
		lrtab(boxbox,libt,bbox[i],bbaw,ribt[i],lebt[i],bookout[i])
	};

	//boxbox---->图片
	//libt------>按钮
	//bbox----->对象
	//bbaw---->宽度
	//ribt----->右按钮
	//lebt---->左按钮

	function lrtab(boxbox,libt,bbox,bbaw,ribt,lebt,bookout){  //
		var btindex=0;  
		ribt.onclick=function(){
			btindex++;
			if(btindex==boxbox.length){
				btindex=boxbox.length-1;
			}
			for (var i = 0; i < libt.length; i++) {
				libt[i].className="";
			};
			libt[btindex].className="lis";
			animate(bbox,{marginLeft:-btindex*bbaw})
		}
		lebt.onclick=function(){
			btindex--;
			if(btindex==-1){
				btindex=0;
			}
			for (var i = 0; i < libt.length; i++) {
				libt[i].className="";
			};
			libt[btindex].className="lis";
			animate(bbox,{marginLeft:-btindex*bbaw})
		}
		bookout.onmouseover=function(){
			ribt.style.display='block';
			lebt.style.display='block';
		}
		bookout.onmouseout=function(){
			ribt.style.display='none';
			lebt.style.display='none';
		}
	}


	
























	/*fb=bbox[i].getElementsByClassName('book-box');
	    	bbaw=parseInt(getStyle(fb[0],'width'));
	    	libt=getClass('btn2')[0].getElementsByTagName('li');
	    	teb(fb,ab,bbaw,btnlr[0],btnlr[1]);*/
	/*var bbox=getClass('bookbox');
    // var boxbox=getClass('book-box');
    var btnlr=getClass('btnb');
    // var ribt=getClass('ribt');
    // var lebt=getClass('lebt');
    var btindex=0;
    var ab,fb,bbaw;
    for (var i = 0; i < btnlr.length; i++) {
    	ab=btnlr[i].getElementsByTagName('div');
    	console.log(ab.length);*/
	/*function teb(ob,ll,coo,sy,lt,rt){
		var sy="lis";
		rt.onclick=function(){
			btindex++;
			if(btindex==ll.length){
				btindex=ll.length-1;
			}
			for (var i = 0; i < coo.length; i++) {
				coo[i].className="";
			};
			coo[btindex].className="lis";
			animate(ob,{marginLeft:-btindex*bbaw})
		}
		lt.onclick=function(){
			btindex--;
			if(btindex==-1){
				btindex=0;
			}
			for (var i = 0; i < coo.length; i++) {
				coo[i].className="";
			};
			coo[btindex].className=sy;
			animate(ob,{marginLeft:-btindex*bbaw})
		}*/
	// }
	// /*var bbox1=getClass('bookbox')[1];
 //    var boxbox1=getClass('book-box',bbox1);
 //    var ribt1=getClass('ribt1')[0];
 //    var lebt1=getClass('lebt1')[0];
	// var bbaw1=parseInt(getStyle(boxbox1[0],'width'));
	// var btindex1=0;	
	// ribt1.onclick=function(){
	// 	btindex1++;
	// 	if(btindex1==boxbox1.length){
	// 		btindex1=boxbox1.length-1;
	// 	}*/
	// 	for (var i = 0; i < libt.length; i++) {
	// 		libt[i].className="";
	// 	};
	// 	libt[btindex].className="lis";
	// 	// animate(bbox1,{marginLeft:-btindex1*bbaw1})
	// /*}
	// lebt1.onclick=function(){
	// 	btindex1--;
	// 	if(btindex1==-1){
	// 		btindex1=0;
	// 	}
	// 	for (var i = 0; i < libt.length; i++) {
	// 		libt[i].className="";
	// 	};
	// 	libt[btindex].className="lis";
	// 	animate(bbox1,{marginLeft:-btindex1*bbaw1})
	// }*/



	//按需加载

	var lodding=getClass('lodding');
	console.log(lodding);
	var loddArr=[];
	for (var i = 0; i < lodding.length; i++) {
		loddArr.push(lodding[i].offsetTop)
	};
	// console.log(loddArr)
	
	// console.log(pinmu)
	window.onscroll=function(){
		var pinmu=document.documentElement.clientHeight;
		var loddst=document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(loddst)
		for (var i = 0; i < loddArr.length; i++) {
			if(loddst+pinmu>loddArr[i]){
				var loddimg=$('img',lodding[i]);
				for (var j = 0; j < loddimg.length; j++) {
					loddimg[j].src=loddimg[j].getAttribute('asrc');
				};
			}
		};
	}
	window.onscroll();

}