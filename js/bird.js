(function(win){
	function Bird(ctx,img,numX,numY,X,Y,speed){
		this.ctx=ctx;
		this.img=img;
		this.numX=numX;
		this.numY=numY;
		this.X=X;
		this.Y=Y;
		this.speed=speed;
		this.sx=0;
		this.sy=0;
		this.band();
	}
	win.extend(Bird.prototype,{
		draw:function(){
			var baseRadian = Math.PI/180*10;
			var maxRadian = Math.PI/180*45;
			var radian = baseRadian*this.speed;
			radian = radian > maxRadian ? maxRadian : radian;
			this.ctx.save();
			this.ctx.translate(this.X,this.Y);
			this.ctx.rotate(radian);
			this.ctx.drawImage(
				this.img,
				this.sx*this.img.width/this.numX,
				this.sy,
				this.img.width/this.numX,
				this.img.height/this.numY,
				-this.img.width/this.numX/2,
				-this.img.height/this.numY/2,
				this.img.width/this.numX,
				this.img.height/this.numY
				);
			this.ctx.restore();
		},
		band:function(){
			var self = this;
			this.ctx.canvas.onclick=function(){
				self.speed=-6;
				console.log(1);
			}	
		},
		move:function(){
			this.sx = ++this.sx>2?0:this.sx;
			this.speed+=0.5;
			this.Y+=this.speed;
			this.Y = this.Y<0?0:this.Y;
			if(this.Y>this.ctx.canvas.height-200){this.speed=-6;}
			this.Y = this.Y>this.ctx.canvas.height-112?this.ctx.canvas.height-112:this.Y;
		}
	});
	var bird=null;
	function getBird(ctx,img,numX,numY,X,Y,speed){
		if(!bird){
			bird=new Bird(ctx,img,numX,numY,X,Y,speed);
		}
		return bird;
	}
	win.getBird=getBird;
})(window);