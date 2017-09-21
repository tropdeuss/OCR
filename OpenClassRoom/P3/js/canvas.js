var Canvas = {

	init : function(){
		
		var _this = this;
		$('#canvas').mousedown(function(e){
		  var mouseX = e.pageX - this.offsetLeft;  //   pageX  sur la page et offset par rapport au canvas
		  var mouseY = e.pageY - this.offsetTop;
				
		  this.paint = true;
		  _this.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		  _this.redraw();
		});

		$('#canvas').mousemove(function(e){
		  if(this.paint){
		    _this.addClick(e.pageX -this.offsetLeft, e.pageY - this.offsetTop, true);
		    _this.redraw();
		  }
		});

		$('#canvas').mouseup(function(e){
		  this.paint = false;
		});

		$('#canvas').mouseleave(function(e){
		  this.paint = false;
		});
	},


	addClick : function(x, y, dragging){

		this.clickX.push(x);
		this.clickY.push(y);
		this.clickDrag.push(dragging);
		
	},

	redraw : function(){
		var _this = this;
		this.context.clearRect(0, 0, 600, 600); // Clears the canvas
  
		this.context.strokeStyle = "#df4b26";
		this.context.lineJoin = "round";
		this.context.lineWidth = 5;
				
		for(var i=0; i < _this.clickX.length; i++) {		
			this.context.beginPath();
			if(this.clickDrag[i] && i){
				this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
			}else{
				this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
			}
			this.context.lineTo(this.clickX[i], this.clickY[i]);
			this.context.closePath();
			this.context.stroke();
		}
	},
}
