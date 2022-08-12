$(function () {
    // 节流阀
    var flag = true;
    var toolTop = $(".recom").offset().top;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
        // 当页面滚动到对应区域时对应的fixedtool添加类名current
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    })
    $(".fixedtool li").click(function () {
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("html, body").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        })
        $(this).addClass("current").siblings().removeClass();
    })
})