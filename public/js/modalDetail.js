$(function(){
    //选择模板数组
    var modalArr=["古侠","科幻","故事","红色革命"];
    var whichModal=sessionStorage.getItem("modal");
    $("#chooseModal").text(modalArr[whichModal-1]);
    //获取该模板使用过的次数
    var times=1;
    $.ajax({
        type:"POST",
        url:"/modal/times",
        data:{
            modalName:modalArr[whichModal-1]
        },
        success:function(tim){
            times=tim.times+1;
            $("#times").text(times);
        }
    })
    //顶部按钮点击后向下滑动
    $(".btn-getting-started").on("click",function(){
        $("html,body").animate({scrollTop:($(".title-wrap").eq(0).offset().top)},500);
    })
    //点击岗位需求的增加按钮的操作
    $("#add1").on("click",function(){
        var need=$("<div class=\"row input-group input-group-md needrow\">" +
            "                 <span class=\"input-group-addon\">*</span><input type=\"text\" class=\"form-control\" placeholder=\"岗位需求，每个框只允许填写一个需求\" aria-describedby=\"sizing-addon4\"/>\n" +
            "                        <span class=\"input-group-btn\">\n" +
            "                            <button class=\"btn btn-default decrease\" type=\"button\">-</button>\n" +
            "                        </span>" +
            "                   </div>");
        $("#need").append(need);
        decrease();
        inpfun();
    })
    //点击工作内容的增加按钮的操作
    $("#add2").on("click",function(){
        var work=$("<div class=\"input-group input-group-md workrow\">\n" +
            "                        <span class=\"input-group-addon\">*</span><input type=\"text\" class=\"form-control\" placeholder=\"工作内容，每个框只允许填写一个工作内容\" aria-describedby=\"sizing-addon5\"/>\n" +
            "                        <span class=\"input-group-btn\">\n" +
            "                            <button class=\"btn btn-default decrease\" type=\"button\">-</button>\n" +
            "                        </span>\n" +
            "                    </div>");
        $("#work").append(work);
        decrease();
        inpfun();
    })
    //减少输入框
    function decrease(){
        for(var i=0;i<$(".decrease").length;i++){
            $(".decrease").eq(i).on("click",function(){
                $(this).parent().parent().remove();
            })
        }
    }
    //确定增加按钮的操作
    var obj={
        "type":[],
        "name":[],
        "address":[],
        "need":[],
        "work":[],
        "money":[]
    };
    var needmiddle=[],workmiddle=[];
    //判断所有的input控件是否为空
    var isEmpty=true;
    $("#sure").attr("data-toggle","tooltip");
    $("#sure").attr("title","必填信息未填写完全，请填写完重试！");
    $("#sure").attr("data-placement","left");
    //按钮提示框弹出
    $('[data-toggle="tooltip"]').tooltip();
    inpfun();
    function inpfun(){
        $("input[type='text']").on("focus change blur",function(){
            isEmpty=true;
            $("input[type='text']").each(function () {
                if ($(this).val() == "") {
                    isEmpty=false;
                }
            })
            if(isEmpty){
                $("#sure").attr("data-toggle","");
                $("#sure").attr("title","");
                $("#sure").attr("data-placement","");
                $("#sure").attr("data-original-title","");
            }else{
                $("#sure").attr("data-toggle","tooltip");
                $("#sure").attr("title","必填信息未填写完全，请填写完重试！");
                $("#sure").attr("data-original-title","必填信息未填写完全，请填写完重试！");
                $("#sure").attr("data-placement","left");
                //按钮提示框弹出
                $('[data-toggle="tooltip"]').tooltip();
            }
        })
    }
    $("#sure").on("click",function(){
        $("input[type='text']").each(function () {
            if ($(this).val() == "") {
                isEmpty=false;
            }
        })
        if(isEmpty){
            $("tbody").empty();
            needmiddle=[];
            workmiddle=[];
            obj["type"].push($("#type").val());
            obj["name"].push($("#name").val());
            obj["address"].push($("#address").val());
            for(var m=0;m<$(".needrow").length;m++){
                needmiddle.push($(".needrow").eq(m).find("input").val());
            }
            obj["need"].push(needmiddle.join(";"));
            for(var n=0;n<$(".workrow").length;n++){
                workmiddle.push($(".workrow").eq(n).find("input").val());
            }
            obj["work"].push(workmiddle.join(";"));
            obj["money"].push($("#money").val());
            for(var p=0;p<obj["type"].length;p++){
                var tr=$("<tr>\n" +
                    "                                    <td>"+(p+1)+"</td>\n" +
                    "                                    <td>"+obj["type"][p]+"</td>\n" +
                    "                                    <td>"+obj["name"][p]+"</td>\n" +
                    "                                    <td>"+obj["address"][p]+"</td>\n" +
                    "                                    <td>"+obj["need"][p]+"</td>\n" +
                    "                                    <td>"+obj["work"][p]+"</td>\n" +
                    "                                    <td>"+obj["money"][p]+"</td>\n" +
                    "                                    <td><button class=\"btn btn-danger delete\">删除</button></td>\n" +
                    "                                </tr>");
                $("tbody").append(tr);
            }
            $("#type").val("技术类");
            $("#name").val("");
            $("#address").val("中山");
            $("#need").val("");
            $("#work").val("");
            $("#money").val("");
            $("#sure").attr("data-toggle","tooltip");
            $("#sure").attr("title","必填信息未填写完全，请填写完重试！");
            $("#sure").attr("data-original-title","必填信息未填写完全，请填写完重试！");
            $("#sure").attr("data-placement","left");
            //按钮提示框弹出
            $('[data-toggle="tooltip"]').tooltip();
            $("input[type='text']").each(function () {
                $(this).val("");
            })
        }
        del();
    })

    //删除按钮的操作函数
    function del(){
        for(var d=0;d<$(".delete").length;d++){
            $(".delete").eq(d).on("click",function(){
                obj["type"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                obj["name"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                obj["address"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                obj["need"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                obj["work"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                obj["money"].splice($(this).parent().parent().find("td").eq(0).text()-1,1);
                $("tbody").empty();
                for(var p=0;p<obj["type"].length;p++){
                    var tr=$("<tr>\n" +
                        "                                    <td>"+(p+1)+"</td>\n" +
                        "                                    <td>"+obj["type"][p]+"</td>\n" +
                        "                                    <td>"+obj["name"][p]+"</td>\n" +
                        "                                    <td>"+obj["address"][p]+"</td>\n" +
                        "                                    <td>"+obj["need"][p]+"</td>\n" +
                        "                                    <td>"+obj["work"][p]+"</td>\n" +
                        "                                    <td>"+obj["money"][p]+"</td>\n" +
                        "                                    <td><button class=\"btn btn-danger delete\">删除</button></td>\n" +
                        "                                </tr>");
                    $("tbody").append(tr);
                }
                del();
            })
        }
    }
    //生成模板按钮
    $("#createModal").on("click",function(){
        $("#enter").attr("href","javascript:;");
        if(obj["type"].length==0){//如果没有数据的话，不能发送请求
            $("#successText").text("模板生成失败！");
        }else{
            sessionStorage.setItem("modalName",modalArr[whichModal-1]);
            sessionStorage.setItem("times",times);
            var when=new Date();
            $.ajax({
                type:"POST",
                url:"/modal/addModal",
                data:{
                    modalName:modalArr[whichModal-1],
                    //使用该模板次数
                    times:times,
                    //招聘岗位类型
                    category:obj["type"].join("|"),
                    //工作地点
                    address:obj["address"].join("|"),
                    //岗位名称
                    position:obj["name"].join("|"),
                    //工作内容
                    work:obj["work"].join("|"),
                    //岗位需求
                    need:obj["need"].join("|"),
                    //薪资待遇
                    money:obj["money"].join("|"),
                    //创建时间
                    when:when.toLocaleString()
                },
                success:function(result){
                    if(result.code==200){
                        $("#successText").text("模板生成成功！");
                        $("#enter").attr("href","/modal/Antiquity");
                    }else{
                        $("#successText").text("模板生成失败！");
                    }
                }
            })
        }
    })
})