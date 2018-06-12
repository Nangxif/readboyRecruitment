$(function(){
    // 读书郎求贤纳士的数据
    var getPeople=[];
    // var getPeople=[
    //     {
    //         "category":"技术类",
    //         "content":["PHP开发工程师","Android开发工程师","C#开发工程师","web前端开发工程师","硬件工程师","结构工程师"]
    //     },
    //     {
    //         "category":"教师类",
    //         "content":["数学双师直播老师","语文双师直播老师","英语讲师","微课堂讲师"]
    //     },
    //     {
    //         "category":"行政类",
    //         "content":["人力资源专员/助理"]
    //     }
    // ]





    var detailIfo=[];
    // var detailIfo=[
    //     {
    //         "position":"PHP开发工程师",
    //         "info":{
    //             "type":"技术类",
    //             "work":[
    //                 "跟进用户反馈信息，改善网站的功能并提供改善建议；",
    //                 "根据开发进度和任务分配，完成相应模块软件的设计，开发、编程任务；",
    //                 "代码编写及重构，开发及维护公司官网、商城、论坛、电商及新浪、微信平台；"
    //             ],
    //             "need":[
    //                 "具有一年及以上的开发经验,对技术和新技术有强烈的渴望，了解移动设备的网页设计和开发技术；",
    //                 "熟悉CI、Yii，至少一种PHP框架.掌握XHTML、CSS、DIV、Javascript等前端技术；",
    //                 "精通MVC框架，熟悉面向对象编程，具有PHP缓存技术使用、静态化设计方面的经验者；",
    //                 "熟悉数据库，分布式数据存储，以及高流量访问、大用户量级平台系统设计与开发；",
    //                 "有数据库优化，大型互联网设计、开发经验者优先。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"Android开发工程师",
    //         "info":{
    //             "type":"技术类",
    //             "work":[],
    //             "need":[
    //                 "计算机相关专业本科毕业；",
    //                 "熟悉Android软件开发和手机开发的优先；",
    //                 "要求熟悉Android应用开发平台，有网络应用开发经验的优先；",
    //                 "了解HTTP、TCP/IP等协议，会使用SQL数据库编程；",
    //                 "具备团队精神，并富有工作激情、创新力和责任感。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"C#开发工程师",
    //         "info":{
    //             "type":"技术类",
    //             "work":[
    //                 "负责手机生产测试软件工具的开发、保证工具在产线运行的正确和稳定，以保证产品质量；",
    //                 "维护工厂MES系统、生产流程管理系统；",
    //                 "负责MTK及高通测试工具（包括下载写号，校准，耦合等工具）进行二次开发，提升产线通用、易用性，提升产线测试效率；",
    //                 "负责产线测试工具开发（如线损自动测试工具，SN号检测工具等）。"
    //             ],
    //             "need":[
    //                 "熟悉一种主流数据库的使用，了解SQLserver数据库；",
    //                 "熟悉VC++、C#编程；",
    //                 "有自动化测试经验优先；",
    //                 "熟悉工厂MES系统、生产流程管理系统或ERP软件开发者优先；",
    //                 "了解adb、有开发手机助手或者刷机工具PC端相关经验的优先，有高通平台工具开发经验的更佳。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"web前端开发工程师",
    //         "info":{
    //             "type":"计算机开发/应用类",
    //             "work":[],
    //             "need":[
    //                 "精通Photoshop，Illustrator，Dreamweaver，flash等绘图及切图制作软件；",
    //                 "熟练html5+css3.0，熟悉html的DOM结构，可快速制作html页面；",
    //                 "熟悉原生javascript，熟悉jQuery框架，熟悉mvvm框架或其他流行的开源js框架并且对于建立js框架，有自己的想法优先；",
    //                 "熟悉常见的浏览器的特点和限制，熟悉W3C相关标准和Web常用协议、图片文件格式等；",
    //                 "有进行过APP内嵌web开发的优先。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"硬件工程师",
    //         "info":{
    //             "type":"硬件测试类",
    //             "work":[],
    //             "need":[
    //                 "本科及以上学历（电子专业），年龄25-35；",
    //                 "少精通一款ARM控制器，能熟练使用PROTEL99或ALLEGRO PCB设计软件，能独立完成原理图和PCB设计，有一年以上设计高速PCB板经验，能独立解决项目开发问题；",
    //                 "富有团队合作精神，吃苦敬业，勤学上进。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"结构工程师",
    //         "info":{
    //             "type":"工业/产品设计类",
    //             "work":[
    //                 "电子产品结构的布局，配合造型进行造型设计；",
    //                 "电子产品的结构方案设计和详细设计；",
    //                 "工程文件发行及结构设计标准建立；",
    //                 "结构、模具跟进和检讨，产品结构改良。"
    //             ],
    //             "need":[]
    //         }
    //     },
    //     {
    //         "position":"数学双师直播老师",
    //         "info":{
    //             "type":"教师类",
    //             "work":[
    //                 "根据教案PPT进行授课或兼任教案编写和课堂讲师。"
    //             ],
    //             "need":[
    //                 "全日制本科及以上学历，师范类院校或相关专业毕业； ",
    //                 "对教学文案的各类知识点有系统完善的把握，具备深刻的理解；",
    //                 "普通话标准，表达能力强，富有亲和力； ",
    //                 "讲课生动活泼，知识面宽广； ",
    //                 "在校老师或有培训机构辅导老师经验的优先。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"语文双师直播老师",
    //         "info":{
    //             "type":"教师类",
    //             "work":[
    //                 "根据教案PPT进行授课或兼任教案编写和课堂讲师。"
    //             ],
    //             "need":[
    //                 "全日制本科及以上学历，师范类院校或相关专业毕业； ",
    //                 "对教学文案的各类知识点有系统完善的把握，具备深刻的理解；",
    //                 "普通话标准，表达能力强，富有亲和力； ",
    //                 "讲课生动活泼，知识面宽广； ",
    //                 "在校老师或有培训机构辅导老师经验的优先。"
    //             ]
    //         }
    //     },
    //     {
    //         "position":"英语讲师",
    //         "info":{
    //             "type":"教师类",
    //             "work":[
    //                 "根据教案PPT进行授课或兼任教案编写和课堂讲师。"
    //             ],
    //             "need":[]
    //         }
    //     },
    //     {
    //         "position":"微课堂讲师",
    //         "info":{
    //             "type":"教育/咨询/法律/科研类",
    //             "work":[
    //                 "根据现成的教案PPT进行授课或兼任教案编写和课堂讲师"
    //             ],
    //             "need":[]
    //         }
    //     },
    //     {
    //         "position":"人力资源专员/助理",
    //         "info":{
    //             "type":"人力资源专员/助理类",
    //             "work":[
    //                 "执行并完善公司的人事制度与计划，培训与发展，绩效评估，员工社会保障福利等方面的管理工作；",
    //                 "组织并协助各部门进行招聘、培训和绩效考核等工作；",
    //                 "执行并完善员工入职、转正、异动、离职等相关政策及流程；",
    //                 "员工人事信息管理与员工档案的维护，核算员工的薪酬福利等事宜； ",
    //                 "其他人事日常工作。"
    //             ],
    //             "need":[
    //                 "本科及以上学历，法学、人力资源管理、应用心理学等相关专业；",
    //                 "1年以上同等岗位工作经验； ",
    //                 "熟悉人力资源管理各项实务操作，熟悉国家相关劳动人事法规政策，熟练掌握两个以上模块的工作；",
    //                 "具备较好的表达、沟通、组织、协调能力和时间管理能力及亲和力，适应性及承受力强；",
    //                 "熟练操作计算机，熟练使用各种办公软件；",
    //                 "专业对口且有较强学习能力，愿意从事人力资源管理工作的优秀应届毕业生可应聘人力资源助理。"
    //             ]
    //         }
    //     }
    // ];
    var responseObj={};
    var getArray=[];
	$.ajax({
		type:"GET",
		url:"/modal/SearchModal",
		success:function(data){
            if(data){
                var categoryArray=data.obj.category.split("|");
                var positionArray=data.obj.position.split("|");
                var needArray=data.obj.need.split("|");
                var workArray=data.obj.work.split("|");
                for(var p=0;p<categoryArray.length;p++){
                    if(responseObj[categoryArray[p]]){
                        continue;
                    }else{
                        getArray.push(categoryArray[p]);
                        responseObj[categoryArray[p]]=1;
                    }
                }
                //依次给getPeople的category赋值
                for(var m=0;m<getArray.length;m++){
                    getPeople.push({
                        "category":getArray[m],
                        "content":[]
                    })
                }
                for(var a=0;a<getPeople.length;a++){
                    for(var b=0;b<positionArray.length;b++){
                        if(categoryArray[b]==getPeople[a].category){
                            getPeople[a].content.push(positionArray[b]);
                        }
                    }
                }
                //依次给detailIfo数组赋值
                for(var t=0;t<categoryArray.length;t++){
                    detailIfo.push({
                                "position":positionArray[t],
                                "info":{
                                    "type":categoryArray[t],
                                    "work":workArray[t].split(";"),
                                    "need":needArray[t].split(";")
                                }
                            })
                }
            }






		}
	})
	$(".item").css("height",$(window).height()+"px");
	// 定义详情页面出现的方法
	window.show=function(target){
		$("#items").find("#position").text(target.innerHTML);
		$("#work").empty();
		$("#need").empty();
		for(var f=0;f<detailIfo.length;f++){
			if(detailIfo[f]["position"]==target.innerHTML){
				var type=detailIfo[f]["info"]["type"];
	    		var work=detailIfo[f]["info"]["work"];
	    		var need=detailIfo[f]["info"]["need"];
			}	
		}
		$("#type").text(type);
		var olist1=$("<ol></ol>");
		$("#work").append(olist1);
		var olist2=$("<ol></ol>");
		$("#need").append(olist2);
		if(work.length==0){
			$("#work").text("无");
		}else{
			for(var b=0;b<work.length;b++){
				var list1=$("<li>"+work[b]+"</li>");
				$("#work").find("ol").append(list1);
			}
		}
		if(need.length==0){
			$("#need").text("无");
		}else{
			for(var b=0;b<need.length;b++){
				var list2=$("<li>"+need[b]+"</li>");
				$("#need").find("ol").append(list2);
			}
		}
		$("#items").animate({"left":"0rem","opacity":"1"},1000);
	}

	$(".spinner").delay(2500).fadeOut(200,function(){
        $(".wrap").fadeIn(1000,function(){
        	// 读书郎招聘汇总页面渲染代码
        	var getPeoplelength=getPeople.length;
        	for(var i=0;i<getPeoplelength;i++){
        		var readboycontont=$("<div class='readboycontont'></div>");
        		var readboytil=$("<p class='content'>"+getPeople[i]["category"]+"</p>");
        		readboycontont.append(readboytil);
        		for(var j=0;j<getPeople[i]["content"].length;j++){
        			var rdy=$("<p class='content_1'>"+getPeople[i]["content"][j]+"</p>");
        			readboycontont.append(rdy);
        		}
        		$("#readboy").append(readboycontont);
        	}


        	//各个类别职位的页面渲染
        	for(var m=0;m<getPeoplelength;m++){
        		var item=$("<div class='item item-"+(5+m)+"'></div>");
	        	var bg=$("<div class='bg'>读书郎</div>");
	        	var title=$("<p class='title'>"+getPeople[m]["category"]+"</p>");
	        	var foot=$("<div class='foot'></div>");
	        	item.append(bg);
	        	item.append(title);
	        	item.append(foot);

	        	//如果列表参数少于三个的话
	        	if(getPeople[m]["content"].length<3){
		        	for(var n=0;n<getPeople[m]["content"].length;n++){
		        		if(getPeople[m]["content"].length==1){
		        			var detailcontent=$("<p class='detailcontent first' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        		}else{
		        			var detailcontent=$("<p class='detailcontent second' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        		}
		        		foot.append(detailcontent);
		        	}
		        }else{//如果列表参数多于三个的话
		        	for(var n=0;n<getPeople[m]["content"].length;n++){
		        		if(getPeople[m]["content"].length%3==1){
		        			//如果剩下最后一个的话，flex为50%
		        			if(n==getPeople[m]["content"].length-1){
		        				var detailcontent=$("<p class='detailcontent first' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        			}else{
		        				var detailcontent=$("<p class='detailcontent third' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        			}
		        		}else if(getPeople[m]["content"].length%3==2){
		        			//如果剩下最后两个的话，flex为50%
		        			if(n==getPeople[m]["content"].length-1||n==getPeople[m]["content"].length-2){
		        				var detailcontent=$("<p class='detailcontent second' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        			}else{//如果不是最后两个的话,flex三等分
		        				var detailcontent=$("<p class='detailcontent third' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        			}
		        		}else{
		        			var detailcontent=$("<p class='detailcontent third' ontouchstart='window.show(this);'>"+getPeople[m]["content"][n]+"</p>");
		        		}
		        		foot.append(detailcontent);
		        	}
		        }
		        var bgimg=$("<img src='/public/images/Antiquityimg/daima.png' class='bgimg'/>");
		        var up=$("<i class='up'></i>");
		        item.append(bgimg);
	        	item.append(up);
	        	$(".wrap").append(item);
        	}













	        $.getScript("/public/js/Antiquityjs/iSlider.js", function() {
			    new iSlider();
			});

		    $("#items").on("touchstart",function(){
		    	$("#items").animate({"left":"7.5rem","opacity":"0"},1000);
		    });
    	});
    });
})