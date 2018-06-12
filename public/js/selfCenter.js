$(function(){
    var modalNameArr=[];
    var timesArr=[];
    var whenArr=[];
    $.ajax({
        type:"GET",
        url:"/self/allModal",
        success:function(result){
            console.log(result);
            if(result.code==200){
                for(var m=0;m<result.obj.length;m++){
                    modalNameArr.push(result.obj[m].modalName);
                    timesArr.push(result.obj[m].times);
                    whenArr.push(result.obj[m].when);
                }
                for(var n=0;n<modalNameArr.length;n++){
                    var h=$("<tr><td class=\"warning\">"+(n+1)+"</td>\n" +
                        "                    <td class=\"warning\">"+modalNameArr[n]+"</td>\n" +
                        "                    <td class=\"warning\">第"+timesArr[n]+"次</td>\n" +
                        "                    <td class=\"warning\">"+whenArr[n]+"</td>\n" +
                        "                    <td class=\"warning\"><button class=\"btn btn-success\">查看</button></td></tr>");
                    $("#data").append(h);
                }
            }
        }
    })
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