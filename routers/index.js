var express=require('express');
var router=express.Router();
var app=express();
var swig=require('swig');
app.engine('html',swig.renderFile);
app.set('views','/views');
app.set('view engine','html');
app.use('/public',express.static(__dirname+'/public'));
//主界面路由
router.get('/',function(req,res,next){
    res.render('index');
});
//模板选择界面路由
router.get('/chooseModel',function(req,res,next){
    res.render('chooseModel');
});

module.exports=router;