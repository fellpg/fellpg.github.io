(function(win){
	function Land(ctx,img,speed){
		this.ctx=ctx;
		this.img=img;
		this.speed=speed;
		this.X=this.img.width*Land.leng;
		this.Y = this.ctx.canvas.height-this.img.height;
		Land.leng++;
	}
	Land.leng=0;
	extend(Land.prototype,{
		draw:function(){
			this.ctx.drawImage(this.img,this.X,this.Y);
		},
		move:function(){
			this.X-=this.speed;
			this.X = this.X<=-this.img.width ? this.img.width*(Land.leng-1)-4:this.X;
		}
	});
	function getLand(ctx,img,speed){
		return new Land(ctx,img,speed);
	}
	win.getLand=getLand;
})(window);