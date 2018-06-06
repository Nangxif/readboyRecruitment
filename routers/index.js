var express=require('express');
var Register=require('../models/registerModel');
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

/*
* DES解密
* */
function decrypt(str, pwd) {
    if (str == null || str.length < 8) {
        alert("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");
        return;
    }
    if (pwd == null || pwd.length <= 0) {
        alert("Please enter a password with which to decrypt the message.");
        return;
    }
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
        prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.round(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    var salt = parseInt(str.substring(str.length - 8, str.length), 16);
    str = str.substring(0, str.length - 8);
    prand += salt;
    while (prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i += 2) {
        enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
        enc_str += String.fromCharCode(enc_chr);
        prand = (mult * prand + incr) % modu;
    }
    return enc_str;
}



//主界面路由
router.get('/',function(req,res,next){
    res.render('index');
});
//模板选择界面路由
router.get('/chooseModal',function(req,res,next){
    res.render('chooseModel',{
        userInfo:req.userInfo
    });
});
//登录界面路由
router.get('/login',function(req,res,next){
    res.render('login');//render('login.html')本来是这么写的，让界面渲染login.html页面，但是.html后缀可以省略
});
//注册界面路由
router.get('/register',function(req,res,next){
    res.render('register');
});
//注册数据提交
/*
* 用户注册
*   注册逻辑
*   1.所有控件不能为空
*   2.两次输入密码是否一致
*
*   1.用户是否已经注册了
*      数据库查询
* */
router.post('/user/register',function(req,res,next){
    var username=req.body.username;
    var userid=req.body.userid;
    var apartment=req.body.apartment;
    var password=req.body.password;
    var repassword=req.body.repassword;
    var sex=req.body.sex;

    //是否为空
    if(username==''){
        responseData.code=1;
        responseData.message="用户名不能为空";
        return res.json(responseData);
    }
    if(userid==''){
        responseData.code=2;
        responseData.message="工号不能为空";
        return res.json(responseData);
    }

    if(password==''){
        responseData.code=3;
        responseData.message="密码不能为空";
        return res.json(responseData);
    }
    if(repassword==''){
        responseData.code=4;
        responseData.message="确认密码不能为空";
        return res.json(responseData);
    }
    if(apartment==''){
        responseData.code=5;
        responseData.message="您未选择部门";
        return res.json(responseData);
    }
    if(sex==''){
        responseData.code=6;
        responseData.message="性别不能为空";
        return res.json(responseData);
    }
    //昵称是否已经被注册
    Register.findOne({
        userid:userid
    }).then(function(RegisterInfo){
        if(RegisterInfo){
            //表示数据库中有该记录
            responseData.code=7;
            responseData.message="该工号已注册";
            return res.json(responseData);
        }else{
            //保存用户注册的信息到数据库中,不需要直接操作数据库，通过操作对象来操作数据库
            var register=new Register({
                username:username,
                userid:userid,
                apartment:apartment,
                password:password,
                sex:sex
            });
            return register.save();
        }
    }).then(function ( newRegisterInfo ) {
        responseData.code=200;
        responseData.message="注册成功";
        return res.json(responseData);
    });
    return;
});



//登录数据提交
router.post('/user/login',function(req,res,next){
    var userid=req.body.userid;
    var password=req.body.password;
    if(JSON.stringify(req.cookies.request.userInfo)!="{}"){
        responseData.code=0;
        responseData.message='已处于登录状态，不能重复登录！';
        return res.json(responseData);
    }
    //登录验证
    if(userid==''||password==''){
        responseData.code=1;
        responseData.message='工号和密码不能为空';
        return res.json(responseData);
    }
    //查询数据库中相同id和密码的记录是否存在，如果存在则登录成功
    Register.findOne({
        userid:userid
    }).then(function(userInfo){
        if(userInfo&&decrypt(userInfo.password,"nangxi")==password){
            //登录成功之后除了返回登录的信息给客户端，还要先发送一个cookie给浏览器端
            req.cookies.set('userinfo', JSON.stringify({
                _id: userInfo._id,
                userid: userInfo.userid
            }));
            responseData.code=200;
            responseData.message = "登录成功";
            responseData.userInfo = {
                _id: userInfo._id,
                userid: userInfo.userid
            };
            return res.json(responseData);
        }else{
            responseData.code=2;
            responseData.message="用户名或密码错误";
            return res.json(responseData);
        }
    });
});

/*
* 退出
* */
router.get('/user/logout',function(req,res,next){
    req.cookies.set('userinfo',null);
    res.json(responseData);
});


module.exports=router;