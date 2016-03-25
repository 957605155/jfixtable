;(function($){
	var fixtable=function(element,options){
		this.$element=$(element);
		this.options=options;
	};
	fixtable.prototype.init=function(){
		
	}
	fixtable.prototype.fixhead=function(){
		this.$element.addClass('fixtable');
		var head=this.$element.find('thead');
	   	var body=this.$element.find('tbody');
	   	var wrap=$('<div class=tablewrap></div>');
	   	var wrapbody=$('<div class=tbodywrap><table class="fixtable"></table></div>');
	   	var theadheight=head.height();
	   	wrapbody.css({
	   		// 'width':this.options.width
	   		'overflow':'auto',
	   		'height':this.options.height-theadheight
	   	});







		 this.$element.wrap(wrap);
		 wrap.css({
			'height':this.options.height,
			'width':this.options.width
			// 'background':'green'
		});
		 $('.tablewrap').css({
			'height':this.options.height,
			'width':this.options.width,
			// 'background':'green',
			'overflow':'hidden'
			// 'position':'relative'
		 });
		 wrapbody.insertAfter(this.$element);
		 body.appendTo(wrapbody.find('table'));
		 this.$element.wrap($('<div class="theadwrap"></div>'));
		 wrapbody.mCustomScrollbar({
        		theme:'dark'
        	});


	};
	$.fn.fixtable=function(option){
		return this.each(function(){
			var options=$.extend({},$.fn.fixtable.defaults,option);
			var a=new fixtable(this,options);
			a.fixhead();
		})
	};
	$.fn.fixtable.defaults={
		height:'200',
		width:'100%'
	};
})(jQuery);