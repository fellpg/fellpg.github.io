(function(win){
	function Sky(ctx,img,speed){
		this.ctx=ctx;
		this.img=img;
		this.speed=speed;
		this.X=this.img.width*Sky.leng;
		Sky.leng++;
	}
	Sky.leng=0;
	extend(Sky.prototype,{
		draw:function(){
			this.ctx.drawImage(this.img,this.X,0);
		},
		move:function(){
			this.X-=this.speed;
			this.X = this.X<=-this.img.width?this.img.width*(Sky.leng-1):this.X;
		}
	});
	function getSky(ctx,img,speed){
		return new Sky(ctx,img,speed);
	}
	win.getSky=getSky;
})(window);