$(function(){

    //カルーセルの設定
    $('.slider').slick({
		autoplay: true,
        autoplaySpeed: 5000,
		dots: true,
        fade: true,
        cssEase: 'linear',
	});

    //リンクホバー時の表示
    $('.animation').on('mouseover', function () {
        $(this).animate({
          opacity: 0.5,
        }, 500);
      });
       $('.animation').on('mouseout', function () {
         $(this).animate({
           opacity: 1.0,
         }, 500);
       });

    //topに戻るボタンの表示
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $("#js-pagetop").fadeIn(300).css('display', 'flex');
        } else {
            $("#js-pagetop").fadeOut(300);
        }
      });
      //topに戻るボタンが押された時の動作
      $("#js-pagetop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
      });

      //ページ内リンクのスクロールをなめらかにする
      $('#a-about').click(function(){
        var speed = 500;
        var target = $('#about');
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
      $('#a-works').click(function(){
        var speed = 800;
        var target = $('#works');
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".block").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });

    $(".js-modalWindow").click(function() {
        $("body").append("<div class=overlay></div>");
        $(".overlay").fadeIn(300);
        var target = $(this).attr("src");
        var largeImage = "<img class='modalImg' src='" + target + "'>";
        $(".overlay").append(largeImage);
        $("body").addClass("is-active");
        return false;
    });
    $("body").on("click",".overlay",function() {
        $(this).fadeOut(300,function() {
            $(this).remove();
            //body要素に追加したclass属性を削除
            $("body").removeClass("is-active");
        });
    });
});