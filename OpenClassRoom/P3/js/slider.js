var Slider = {

	position : 0,
	contener : $("#slides"),
	slides : document.querySelectorAll('#slides .slide'), //$('#slides') utiliser JQuery
	sliderWidth : $(".slider").width(),
	contenerWidth : $("#slides").width(),
	init : function(){
		var _this = this;
		$( ".control.next" ).click(function() {
 			_this.nextSlide();
 			
			console.log(_this.position);
 			
		});
		$( ".control.prev" ).click(function() {
 			_this.prevSlide();
 			console.log(_this.position);
		});

	},


	nextSlide : function(){
		
 		if(this.position < this.contenerWidth){
	 		this.contener.animate({
				left: "-="+this.sliderWidth,

			}, 1000, function() {
			    // Animation complete.
			});
			this.position += this.sliderWidth;
		}else{
			this.position = 0;
			this.contener.animate({
				left: 0,
				
			}, 1000, function() {
			    // Animation complete.
			});
		}

	},	

	prevSlide : function(){
		 if(this.position != 0){
	 		this.contener.animate({
				left: "+="+this.sliderWidth,

			}, 1000, function() {
			    // Animation complete.
			});
			this.position -= this.sliderWidth;
		}else{
			this.position = this.contenerWidth;
			this.contener.animate({
				left: '-'+(this.contenerWidth),

			}, 1000, function() {
			    // Animation complete.
			});
		}
	},

}