/*

    通过类名获取元素

    getClass(类名,获取范围);

    参数1：要获取的元素的类名
    参数2：

*/
function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for (var i = 0; i < alls.length; i++) {
			if(Checkclass(alls[i].className,classname)){
				arr.push(alls[i]);
			}
		};
		return arr;
		
	}
}
function Checkclass(oldclass,newclass){
	var narr=oldclass.split(' ');
	for (var i = 0; i < narr.length; i++) {
		if(narr[i]==newclass){
			return true;
		}
	};
	return false;
}


//获取、设置文本

function text(obj,val){//  如果形参没有对应的实参的值  结果 为  undefined
	if(val==undefined){// 判断第二个参数 的 值  是不是  undefined  如果是  就说明没有传参 是要获取文本内容 
		if(obj.innerText){ //获取文本内容  思想是 通过判断  该浏览器有没有  这个属性 
			return obj.innerText;  //   IE  支持 这个属性
		}else{
			return obj.textContent;//  Firefox、chrome、IE9-11  支持 这个属性
		}
	}else{
		if(obj.innerText){//  设置文本内容 思想是 通过判断当前该浏览器有没有这个属性
			obj.innerText=val; 
			// return obj.innerText;
		}else{
			obj.textContent=val;
			// return obj.textContent;
		}
		// return val;
	}
	
}

//获取  行内样式 和 外部样式
/*

   获取 行内样式  和 外部样式

   getStyle(obj,attr)

    
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

/*
    简化获取元素

	$("#box")
    $(".box")
    $("div")
 
*/
function $(selector,context){
	if(typeof selector=="string"){
		context=context||document;
		if(selector.charAt(0)=="#"){
			return context.getElementById(selector.substring(1));
		}else if(selector.charAt(0)=="."){
			return getClass(selector.substring(1));
		}else if(/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)){
			return context.getElementsByTagName(selector)
		}else if(/^<[a-zA-Z][A-Za-z1-6]{0,10}>$/.test(selector)){
			return context.createElement(selector.slice(1,-1));
		}
	}
	if(typeof selector=="function"){
		on(window,'load',selector);
	}
	
	

}
/*

 	获取所有的子节点


*/
function getChild(obj,type){
	var type=type||"w";
	var newarr=[];
	var childs=obj.childNodes;
	if(type=="w"){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1){
				newarr.push(childs[i]);
			}
		};
	}
	if(type=="e"){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&strm(childs[i].nodeValue)!="")){
				newarr.push(childs[i]);
			}
		};
	}
	return newarr;
}



function getFirst(parent,type){
	return getChild(parent,type)[0];
}
function getNum(parent,index,type){
	return getChild(parent,type)[index];
}
function getLast(parent,type){
	var all=getChild(parent,type);
	return all[all.length-1];
}
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&strm(next.nodeValue)=="")){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&strm(up.nodeValue)=="")){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}

/*
  插入到某个对象之后
  insertAfter(obj,after) 
  obj---->要插入的对象
  after---->之后的对象
 
*/
function insertAfter(obj,after){
	var next=getNext(after);
	if(next==false){
		after.parentNode.appendChild(obj)
	}else{
		next.parentNode.insertBefore(obj,next);
	}
	
}

/*去除字符串的空格   string.trim

string.replace返回的是新字符串  没有动原先的字符串*/
function strm(str,type1){
	var type1=type1||"lr";
	if(type1=="a"){
		return str.replace(/\s*/g,"")
	}
	if(type1=="l"){
		return str.replace(/^\s*/g,"")
	}
	if(type1=="r"){
		return str.replace(/\s*$/g,"")
	}
	if(type1=="lr"){
		return str.replace(/^\s+|\s*$/g,"")
	}
}

/*

  同一个事件绑定多个处理程序

  on(对象,事件,处理程序)


*/
function on(obj,event,fn){
	if(obj.addEventListener){
		return obj.addEventListener(event,fn,false);
	}else{
		return obj.attachEvent('on'+event,fn);
	}
}

/*

  同一个事件删除指定处理程序

  off(对象,事件,处理程序)


*/
function off(obj,event,fn){
	if(obj.removeEventListener){
		return obj.removeEventListener(event,fn,false);
	}else{
		return obj.detachEvent('on'+event,fn);
	}
}
