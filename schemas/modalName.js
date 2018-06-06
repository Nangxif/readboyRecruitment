var mongoose=require('mongoose');


//模板名称的表结构
module.exports=new mongoose.Schema({
    //模板名称
    modalName:String,
    //模板类型
    modalType:String
});