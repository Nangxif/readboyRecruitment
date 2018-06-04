$(function(){
    $("#register-btn").on('click',function(){
        var userName=$("#userName").val();
        var userId=$("#userId").val();
        var apartment=$("#apartment").val();
        var sex=$("#sex").val();
        var password=encrypt($("#password").val(),"nangxi");
        var  repassword=$("#repassword").val();
        $("#registersuccess").text("");
        $.ajax({
            type:"POST",
            url:'/user/register',
            data:{
                username:userName,
                userid:userId,
                password:password,
                repassword:repassword,
                apartment:apartment,
                sex:sex
            },
            success:function(result){
                $("#registersuccess").text(result.message);
                if(result.code==200){
                    $("#login_close").attr("data-dismiss","");
                    $("#register_close").attr("href","/login");
                }else{
                    $("#register_close").attr("data-dismiss","modal");
                }
            }
        })
    })
})