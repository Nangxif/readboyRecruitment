var express=require('express');
var Register=require('../models/registerModel');
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
//登录界面路由
router.get('/login',function(req,res,next){
    res.render('login');//render('login.html')本来是这么写的，让界面渲染login.html页面，但是.html后缀可以省略
});
//注册界面路由
router.get('/register',function(req,res,next){
    res.render('register');
});


module.exports=router;