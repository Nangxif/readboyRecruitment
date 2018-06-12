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
    res.render('selfCenter',{
        userInfo:req.userInfo
    });
});
//获取相应模板的数据
router.get('/allModal',function(req,res,next){
    Recruitment.find({
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

