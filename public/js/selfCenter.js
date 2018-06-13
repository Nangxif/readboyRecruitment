$(function(){
    var modalNameArr=[];
    var timesArr=[];
    var whenArr=[];
    //预览图的选择
    var modalArray=["/modal/Antiquity","/modal/Technology"];
    //获取该用户的信息
    $.ajax({
        type:"GET",
        url:"/self/selfInformation",
        success:function(self){
            if(self.code==200){
                $("#userid").text(self.obj.userid);
                $("#apartment").text(self.obj.apartment);
                $("#sex").text(self.obj.sex);
            }
        }
    })
    //获取所有该用户的模板数据
    $.ajax({
        type:"GET",
        url:"/self/allModal",
        success:function(result){
            if(result.code==200){
                for(var m=0;m<result.obj.length;m++){
                    modalNameArr.push(result.obj[m].modalName);
                    timesArr.push(result.obj[m].times);
                    whenArr.push(result.obj[m].when);
                }
                for(var n=0;n<modalNameArr.length;n++){
                    var h=$("<tr class=\"warning\"><td>"+(n+1)+"</td>\n" +
                        "                    <td class='modalname'>"+modalNameArr[n]+"</td>\n" +
                        "                    <td>第"+timesArr[n]+"次</td>\n" +
                        "                    <td>"+whenArr[n]+"</td>\n" +
                        "                    <td><button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#myModal\">查看</button></td></tr>");
                    $("#data").append(h);
                }
                //预览图的选择
                for(var k=0;k<$(".btn-success").length;k++){
                    $(".btn-success").eq(k).on("click",function(){
                        switch($(this).parent().parent().find(".modalname").text()){
                            case "古风":$("iframe").attr("src",modalArray[0]); break;
                            case "科幻":$("iframe").attr("src",modalArray[1]); break;
                        }
                    })
                }
            }
        }
    })
    //注销按钮
    $("#logout").on("click",function(){
        $.ajax({
            type:"GET",
            url:"/user/logout",
            success:function(){
                window.location.replace("/chooseModal");
            }
        })
    })
})