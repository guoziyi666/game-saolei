var init=function(){//22*33
	count=0;
	array=new Array(726);
	btn=new Array(726);
	for (var i = 0; i < 726; i++) {
		array[i]='';
	}
	for (var i = 0; i < 99; i++) {
		var bool=parseInt(Math.random()*726)
		if (array[bool]=='') {
			array[bool]='bool';
		}else
		{
			while(array[bool]!='') {
				bool=parseInt(Math.random()*726)
			}
			array[bool]='bool';
		}
	}
	contentvalue(array);
	for(var i=0;i<726;i++)
	{
		btn[i]=document.createElement('button');
		btn[i].num=i;	
		btn[i].innerText=array[i]	
		btn[i].onclick=click;
		btn[i].oncontextmenu = function(e){
			this.flag=!this.flag;
			if (this.flag) {
				this.style.background='url(flag.bmp)'
			}else{
				this.style.background="";
			}
		　　return false;
		}
		wrapper.appendChild(btn[i])
	}
}
START.onclick=function(){
	wrapper.innerHTML="";
	init();
}
var contentvalue=function(array){
	hasleft=hastop=hasbottom=hasright=null;
	for (var i = 0; i < array.length; i++) {
		if(array[i]=='bool'){
			if (array[i-1]!='undefinded'&&i%33>0) //left
			{
				hasleft=true;
				if (array[i-1]!='bool') {
					if (array[i-1]!="") {
						array[i-1]++;
					}
					else{
						array[i-1]=1;
					}
				}
			}
			if (array[i+1]!='undefinded'&&(i+1)%33>0) //right
			{
				hasright=true;
				if (array[i+1]!='bool') {
					if (array[i+1]!="") {
						array[i+1]++;
					}
					else{
						array[i+1]=1;
					}
				}
			}
			if (array[i+33]!='undefinded'&&i<692) //bottom
			{
				hasbottom=true;
				if (array[i+33]!='bool') {
					if (array[i+33]!="") {
						array[i+33]++;
					}
					else{
						array[i+33]=1;
					}
				}
			}
			if (array[i-33]!='undefinded'&&i>33) //top
			{
				hastop=true;
				if (array[i-33]!='bool') {
					if (array[i-33]!="") {
						array[i-33]++;
					}
					else{
						array[i-33]=1;
					}
				}
			}
			if (array[i+32]!='undefinded'&&i<692&&array[i-1]!='undefinded'&&i%33>0) //leftbottom
			{
				if (array[i+32]!='bool') {
					if (array[i+32]!="") {
						array[i+32]++;
					}
					else{
						array[i+32]=1;
					}
				}
			}
			if (array[i-34]!='undefinded'&&i>33&&array[i-1]!='undefinded'&&i%33>0) //lefttop
			{
				if (array[i-34]!='bool') {
					if (array[i-34]!="") {
						array[i-34]++;
					}
					else{
						array[i-34]=1;
					}
				}
			}
			if (array[i+34]!='undefinded'&&i<692&&array[i+1]!='undefinded'&&(i+1)%33>0) //rightbottom
			{
				if (array[i+34]!='bool') {
					if (array[i+34]!="") {
						array[i+34]++;
					}
					else{
						array[i+34]=1;
					}
				}
			}
			if (array[i-32]!='undefinded'&&i>33&&array[i+1]!='undefinded'&&(i+1)%33>0) //righttop
			{
				if (array[i-32]!='bool') {
					if (array[i-32]!="") {
						array[i-32]++;
					}
					else{
						array[i-32]=1;
					}
				}
			}
		}
	}
}
var click=function(){
	this.onclick=null;
		if (array[this.num]!='bool') {
			count++;
			if (count==627) {
				over();
				Num.innerText="你成功了！";
			}
			if (array[this.num]=='') {
				if (btn[this.num-1]&&this.num%33>0) //left
				{
					hasleft=true;
					if(btn[this.num-1].onclick&&array[this.num-1]!='bool') {
						btn[this.num-1].onclick();
					}
				}
				if (btn[this.num+1]&&(this.num+1)%33>0&&array[this.num+1]!='bool') //right
				{
					hasright=true;
					if(btn[this.num+1].onclick) {
						btn[this.num+1].onclick();
					}
				}
				if (btn[this.num+33]&&this.num<692&&array[this.num+33]!='bool') //bottom
				{
					hasbottom=true;
					if(btn[this.num+33].onclick) {
						btn[this.num+33].onclick();
					}
				}
				if (btn[this.num-33]&&this.num>33&&array[this.num-33]!='bool') //top
				{
					hastop=true;
					if(btn[this.num-33].onclick) {
						btn[this.num-33].onclick();
					}
				}
				if (btn[this.num+32]&&this.num<692&&btn[this.num-1]&&this.num%33>0&&array[this.num+32]!='bool') //leftbottom
				{
					if(btn[this.num+32].onclick) {
						btn[this.num+32].onclick();
					}
				}
				if (btn[this.num-34]&&this.num>33&&btn[this.num-1]&&this.num%33>0&&array[this.num-34]!='bool') //lefttop
				{
					if(btn[this.num-34].onclick) {
						btn[this.num-34].onclick();
					}
				}
				if (btn[this.num+34]&&this.num<692&&btn[this.num+1]&&(this.num+1)%33>0&&array[this.num+34]!='bool') //rightbottom
				{
					if(btn[this.num+34].onclick) {
						btn[this.num+34].onclick();
					}
				}
				if (btn[this.num-32]&&this.num>33&&btn[this.num+1]&&(this.num+1)%33>0&&array[this.num-32]!='bool') //righttop
				{
					if(btn[this.num-32].onclick) {
						btn[this.num-32].onclick();
					}
				}			
			}
			this.className='safe';
			switch(array[this.num]){
				case 1:
				this.style.color='blue';
				break;
				case 2:
				this.style.color='green';
				break;
				case 3:
				this.style.color='red';
				break;
				case 4:
				this.style.color='purple';
				break;
				case 5:
				this.style.color='deepblue';
				break;
				case 6:
				this.style.color='deepgreen';
				break;
				case 7:
				this.style.color='deepred';
				break;
				case 8:
				this.style.color='deeppurple';
				break;
			}
			this.innerText=array[this.num];
			
		}else{
			this.className='danger';
			over();
			Num.innerText="你失败了……"
		}
}
var over=function(){
	for (var i = 0; i < 726; i++) {
		if (btn[i].onclick) {
			btn[i].onclick();
		}
	}
}




