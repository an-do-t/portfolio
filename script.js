// スティッキーヘッダー
$(function(){
    // 画面の要素を取得
    $win = $(window),

    $fv = $(".fv"),
    $header = $("header"),
      // fvの高さ要素を取得
    fvHeight = $fv.outerHeight();
    // console.log(fvHeight);
    fixedClass = 'fixed';

    $win.on('load scroll',function(){
        // スクロールトップの取得
        var value = $(this).scrollTop();
        // console.log(value);

        // もしスマホサイズ以上でfvの高さを超えたとき
        if($win.width() > 768){
            if (value > fvHeight) {
                $header.addClass(fixedClass);
            } else {
                $header.removeClass(fixedClass);
            }
        }
    });
});

// スライダー
$(".slick01").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
});

// ハンバーガーメニュー
// $('burger-btn').on('click',funciton(){
//     $('.header-nav').fadeToggle(300);
//     $(this).toggleClass('cross');
// });

$(function(){
    $(".header-nav").hide();
    //メニューボタンをクリックしたとき
    $('.burger-btn').click(function(){
        //0.3秒で表示したり非表示にしたりする
        $(".header-nav").fadeToggle(300);
        $(this).toggleClass("cross");
        $('body').toggleClass('noscroll');
    });
});
