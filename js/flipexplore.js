// debulked onresize handler
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};


(function ($) {
  // DOC READY
  $(function () {
	
	//Change z value for hover box 
	jQuery('.no-touchevents .box').hover(function(){
	  jQuery(this).css('z-index','1000');
	}, function(){
	  jQuery(this).css('z-index','10');
	});




	function adjustCards(){

		var flipCardCount = jQuery('.box').length;

		//Separate the back & front of cards for flipping
		jQuery('.box').each(function(i,n){
			var nl = jQuery(n).find('.content').length;
			if(nl > 1) {
				jQuery(n).addClass('boxEnabled');
				var nfh = jQuery(n).find('.front').height();
				var nbh = jQuery(n).find('.back').height();
				if(nfh > nbh) {
					jQuery(n).css('height',nfh);
					jQuery(n).find('.back').height(jQuery(n).find('.front').height());
				} else {
					jQuery(n).css('height',nbh);
					jQuery(n).find('.front').height(jQuery(n).find('.back').height());
				}
			}
			if (i == flipCardCount - 1) {
					jQuery('.boxEnabled .front, .boxEnabled .back').conformity();
			}
		});
	}


	

	//Card Flipping "Flip" No Touch
	jQuery('.no-touchevents .box .front').mouseenter(function(){
	  jQuery('.box').removeClass('flip');
	  jQuery(this).parents('.box').addClass('flip');
	});
	
	//Card Flipping "Flip" Keyboard
	jQuery('.box .back *').focus(function(){
	  jQuery('.box').removeClass('flip');
	  jQuery(this).closest('.box').addClass('flip');
	});
	
	//Card Flipping "Back"
	jQuery('.no-touchevents .box .back').mouseleave(function(){
		jQuery(this).parents('.box').removeClass('flip');
	});




	on_resize(function() {
		adjustCards();
	})();



	timeoutID = window.setTimeout(adjustCards, 5000);
	timeoutID1 = window.setTimeout(adjustCards, 1000);
	timeoutID2 = window.setTimeout(adjustCards, 2000);
	timeoutID3 = window.setTimeout(adjustCards, 3000);
	timeoutID4 = window.setTimeout(adjustCards, 4000);



  });  // END DOC READY
})(jQuery);
