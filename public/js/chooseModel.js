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
    //选择弹框
    $(".grid-item").on("click",function(){
        sessionStorage.setItem("modal",$(this)[0].id);
        $("#pc_1").attr("src","/public/images/modal"+$(this)[0].id+".png");
        $("#pc_2").attr("src","/public/images/modal"+$(this)[0].id+"-1.png");
        $("#pc_3").attr("src","/public/images/modal"+$(this)[0].id+"-2.png");
        $("#pc_4").attr("src","/public/images/modal"+$(this)[0].id+"-3.png");
    })
})