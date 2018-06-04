var mongoose=require('mongoose');


//用户的表结构
module.exports=new mongoose.Schema({
    //昵称
    username:String,
    //工号
    mobilephone:Number,
    //密码
    password:String,
    //部门
    apartment:String,
    //性别
    sex:{
        type:String,
        default:"未知"
    }
});