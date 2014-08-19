// new javascript file


function adjustIframes()
{
  $('iframe').each(function(){
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }
  
    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    }
  });
}
$(window).on('resize load',adjustIframes);
$(window).on('resize load',setTimeout(function(){adjustIframes();}, 500));

$(function(){
	 $('iframe').responsiveIframe();
	$('.effect').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
	$('.logo').css({display:'block' ,paddingTop:$(window).height(),opacity:'0'});
	var num = Math.random();
	if( num < 0.2 ){
		$(".logo").css("background-color","#9DE96B");
	}
	else if( num < 0.4 ){
		$(".logo").css("background-color","#52BFF8");
	}
	else if( num < 0.6 ){
		$(".logo").css("background-color","#FF7170");
	}
	else if( num < 0.8 ){
		$(".logo").css("background-color","#FFA001");
	}
	else{
		$(".logo").css("background-color","#404040");
	}
	

	$('.effect').animate({marginLeft:'0px',opacity:'1'},500);
	$('.logo').animate({paddingTop:'120px',opacity:'1'},500);
	setTimeout(adjustIframes, 500)	
	
	$('a').click(function(){
		var pass = $(this).attr("href");
   		$('.effect').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500);
   		$('.logo').animate({paddingTop:'+=' + $(window).height() + 'px',opacity:'0'},500);
		setTimeout(function(){location.href = pass;},500);
	      return false;
	});
	
});