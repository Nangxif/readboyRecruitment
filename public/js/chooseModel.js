$(function(){

    //点击锚点之后滚动到相应位置
    $(".scroll").click(function(e) {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        if(e.target.hash=="#container2"){
            $('body').off("mousemove");
            $('.title-wrap').delay(500).fadeIn();
            $(".movegrop").animate({"left":"2%"},800).animate({"left":"-2%"},100).animate({"left":"0%"},100);
            //瀑布流出现
            function animate(item, x, y, index) {
                dynamics.animate(item, {
                    translateX: x,
                    translateY: y,
                    opacity: 1
                }, {
                    type: dynamics.spring,
                    duration: 800,
                    frequency: 120,
                    delay: 100 + index * 30
                });
            }

            minigrid('.grid', '.grid-item', 6, animate);

            window.addEventListener('resize', function(){
                minigrid('.grid', '.grid-item', 6, animate);
            });

        }else{
            $('.title-wrap').css("display","none");
            $(".movegrop").css("left","-80%");
            $('body').mousemove(function(e) {
                e = e || window.event;
                __yy = e.pageY || e.clientY + document.body.scrollTop;
                if(__yy<60){
                    $(".title-wrap").fadeIn();
                }else{
                    $(".title-wrap").fadeOut();
                }
            });
        }
        return false;
    });
    $('body').mousemove(function(e) {
        e = e || window.event;
        __yy = e.pageY || e.clientY + document.body.scrollTop;
        if(__yy<60){
            $(".title-wrap").fadeIn();
        }else{
            $(".title-wrap").fadeOut();
        }
    });
})