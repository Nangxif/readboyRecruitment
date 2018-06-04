$(function(){
    $("#login-btn").on('click',function(){
        var userid=$("#userid").val();
        var password=$("#password").val();
        $.ajax({
            type:"POST",
            url:"/user/login",
            data:{
                userid:userid,
                password:password
            },
            success:function(result){
                $("#loginsuccess").text(result.message);
                if(result.code==200){
                    $("#login_close").attr("data-dismiss","");
                    $("#login_close").attr("href","/chooseModal");
                }else{
                    $("#login_close").attr("data-dismiss","modal");
                }
            }
        })
    })
})