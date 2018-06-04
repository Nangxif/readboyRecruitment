var express=require('express');
var router=express.Router();
var app=express();
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
module.exports=router;

