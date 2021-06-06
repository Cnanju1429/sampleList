$(function(){

	/* SP MenuBtn */
	$("#spHeader p.menuBtn").click(function(){
		var w = $(window).width();
		var x = 640;
		if (w <= x) {
			$( this ).toggleClass( 'active' );
			$( "ul.spMenu1st" ).slideToggle();
			return false;
		}
	});

	/* SP Accordion */
	$("ul.spMenu1st > li > span").click(function(){
		var w = $(window).width();
		var x = 640;
		if (w <= x) {
			$( this ).toggleClass( 'active' );
			$( this ).next("ul.spMenu2nd").slideToggle();
			return false;
		}
	});

	// PC MENUタブ切り替え
	$('li.tab').click(function(){
        $('li.tab').removeClass('is_current');
        $(this).addClass('is_current');
        $('.is_now').removeClass('is_now');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.newsTabCont > .newsList').eq(index).addClass('is_now');
	});


	// bg color change
	jQuery( function() {
	  backgroundColor();
	  jQuery( '.color ul li.white' ).click( function () {
	    backgroundColor( 'bg-white' );
	  });
	  jQuery( '.color ul li.yellow' ).click( function () {
	    backgroundColor( 'bg-yellow' );
	  });
	  jQuery( '.color ul li.blue' ).click( function () {
	    backgroundColor( 'bg-blue' );
	  });
	  jQuery( '.color ul li.black' ).click( function () {
	    backgroundColor( 'bg-black' );
	  });
	  function backgroundColor( $backgroundColor ) {
	    if( $backgroundColor == undefined ){
	      var $backgroundColor = jQuery.cookie( 'backgroundColor' );
	      if( $backgroundColor == undefined ){
	        var $backgroundColor = 'bg-white';
	      }
	    }
	    // jQuery( '#bgcolor' ).html( $backgroundColor );
	    jQuery.cookie( 'backgroundColor', $backgroundColor, { expires: 7 } );
	    jQuery( 'body' ).removeClass();
	    jQuery( 'body' ).addClass( $backgroundColor );
	  }
	});


	jQuery(function() {
	  var appear = false;
	  var pagetop = $('#page_top');
	  $(window).scroll(function () {
	    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
	      if (appear == false) {
	        appear = true;
	        pagetop.stop().animate({
	          'bottom': '50px' //下から50pxの位置に
	        }, 300); //0.3秒かけて現れる
	      }
	    } else {
	      if (appear) {
	        appear = false;
	        pagetop.stop().animate({
	          'bottom': '-100px' //下から-50pxの位置に
	        }, 300); //0.3秒かけて隠れる
	      }
	    }
	  });
	  pagetop.click(function () {
	    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
	    return false;
	  });
	});




  // // ブラウザサイズ変更時、リロードし、スタイルをリセット
  // $(window).on("resize", function() {
  //   var w = $(window).width();
  //   if(640 < w) {
  //     window.location = window.location;
  //   }
  // });




});
