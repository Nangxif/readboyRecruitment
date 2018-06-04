$(function(){
    //点击锚点之后滚动到相应位置
    $(".scroll").click(function(e) {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(".self").on("click",function(){
        $(".self-detail").toggle();
    })
    //注销
    $("#loginout").on("click",function(){
        $.ajax({
            type:"GET",
            url:"/user/logout",
            success:function(){
                window.location.reload();
            }
        })
    })
})