var mongoose=require('mongoose');


//招聘模板内容的表结构
module.exports=new mongoose.Schema({
    //模板创建人
    who:String,
    //模板名称
    modalName:String,
    //同类模板使用次数
    times:Number,
    //招聘类别
    category:String,
    //工作地点
    address:String,
    //岗位名称
    position:String,
    //工作内容
    work:String,
    //岗位需求
    need:String,
    //薪资待遇
    money:String,
    //模板创建时间
    when:String
});