
	class Page{
		constructor(options){
			this.url = options.url;
			this.left = options.left;
			this.right = options.right;
			this.list = options.list;
		
			this.index = options.index || 0;
			this.num = options.num || 5;
			
			this.load();

			this.addEvent();
		}
		load(){
			var that = this;
			ajaxGet(this.url,function(res){

				that.res = JSON.parse(res);

				that.display();

				that.createPage();
			})
		}
		display(){
			var str = "";

			for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
				if(i<this.res.length){
					str += `<li>
					        <img src="${this.res[i].img}" alt="" class="img">        
					       	<p>${this.res[i].name}</p>
					        <span>${this.res[i].price}</span>
				        </li>`
				}
			}
			this.list.innerHTML = str;
		}
		createPage(){
			this.maxNum = Math.ceil(this.res.length / this.num);
			// var str = "";
			// for(var i=0;i<this.maxNum;i++){
			// 	str += `<li>${i+1}</li>`
			// }
			// this.pageCont.innerHTML = str;

		//	this.setActive();
		}
		// setActive(){
		// 	// for(var i=0;i<this.pageCont.children.length;i++){
		// 	// 	this.pageCont.children[i].className = "";
		// 	// }
		// 	this.pageCont.children[this.index].className = "active";
		// }
		addEvent(){
			var that = this;
			this.right.onclick = function(){
				that.changeIndex()
            }
            this.left.onclick = function(){
				that.changeIndex()
            }
		}
		changeIndex(){

			if(this.index == this.maxNum-1){
				this.index = 0
			}else{
				this.index++
			}
			this.display();

			//this.setActive();
        }
  
	}
	

	new Page({
		url:"http://localhost/gome/json/box.json",
		left:document.getElementById("user"),
		right:document.getElementById("pass"),
		list:document.getElementById("ajax-b").querySelector("ul"),    
		pageCont:document.getElementById("ajax-b").querySelector("ul"),
		index:0,
		num:6
	})
	