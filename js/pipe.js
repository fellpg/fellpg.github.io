(function(win){
	function ran(){
		return  Math.random()*240+10;
		// return Math.random()*50+300 /*Math.random()*240+10*/;
	}
	function Pipe(ctx,imgup,imgdown,speed,space){
		this.ctx=ctx;
		this.imgup=imgup;
		this.imgdown=imgdown;
		this.space = space;
		this.speed = speed;
		this.X = 300+this.imgup.width*3*Pipe.leng;
		this.Y = ran()-this.imgup.height;
		Pipe.leng++;
	}
	Pipe.leng=0;
	extend(Pipe.prototype,{
		draw:function(){
			this.ctx.drawImage(this.imgdown,this.X,this.Y);
			this.ctx.drawImage(this.imgup,this.X,this.Y+this.imgdown.height+this.space);
			this.path();
		},
		path:function(){
			this.ctx.rect(this.X,this.Y,this.imgdown.width,this.imgdown.height);
			this.ctx.rect(this.X,this.Y+this.imgdown.height+this.space,this.imgdown.width,this.imgdown.height);
		},
		move:function(){
			this.X-=this.speed;
			// this.X = this.X<=-this.imgup.width*3 ? this.imgup.width*3*(Pipe.leng-1)-4:this.X;
			if(this.X<=-this.imgup.width*3){
				this.X=this.imgup.width*3*(Pipe.leng-1)-4;
				this.Y = ran()-this.imgup.height;
			}
		}
	});
	function getPipe(ctx,imgup,imgdown,speed,space){
		return new Pipe(ctx,imgup,imgdown,speed,space);
	}
	win.getPipe=getPipe;
})(window);