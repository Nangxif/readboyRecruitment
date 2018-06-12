var express=require('express');
var router=express.Router();
var app=express();
var Recruitment=require('../models/readboyRecruitment');
var swig=require('swig');
app.engine('html',swig.renderFile);
app.set('views','/views');
app.set('view engine','html');
app.use('/public',express.static(__dirname+'/public'));


/*
* 统一返回格式
* */
var responseData;
router.use(function(req,res,next){
    responseData={
        code:0,
        message:'',
        obj:{}
    }
    next();
});



//主界面路由
router.get('/',function(req,res,next){
    res.render('modalDetail');
});
//添加模板
router.post('/addModal',function(req,res,next){
    var who=req.cookies.request.userInfo.userid;
    var category=req.body.category;
    var address=req.body.address;
    var position=req.body.position;
    var work=req.body.work;
    var need=req.body.need;
    var money=req.body.money;
    var modal=new Recruitment({
        who:who,
        category:category,
        address:address,
        position:position,
        work:work,
        need:need,
        money:money
    });
    modal.save().then(function(result){
        if(result){
            responseData.message="添加成功";
            responseData.code=200;
            return res.json(responseData);
        }
    });
});
//生成模板之后跳转的界面
router.get('/Antiquity',function(req,res,next){
    res.render('Antiquity',{
        userInfo:req.userInfo
    });
})

//获取相应模板的数据
router.get('/SearchModal',function(req,res,next){
    Recruitment.findOne({
        who:req.cookies.request.userInfo.userid
    }).then(function(response){
        if(response){
            responseData.obj=response;
            responseData.code=200;
            responseData.message="查询成功";
            return res.json(responseData);
        }
    })
})
module.exports=router;

