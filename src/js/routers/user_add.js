
const Router = require('koa-router');
const db = require('../db');
const ObjectID = require('mongodb').ObjectID;
// 创建路由
var router = new Router();


/**
 * ctx
 */ 
router.post('/',async (ctx,next)=>{
    // 解构
    // console.log(ctx.request.body);
    
    let m = ctx.request.body.m;
    let _id = ctx.request.body._id; 
        // console.log(_id);
    if(m == "aa"){
        let {username,nickname,password,phone,gender,birth,email,sign,close} = ctx.request.body;
        let data = {username,nickname,password,phone,gender,birth,email,sign,close,regtime:Date.now()}
        let res = await db.update('user',{"_id":new ObjectID(_id)},{$set:data});
    }else{
        let {username,nickname,password,phone,gender,birth,email,sign,close} = ctx.request.body;
        let data = {username,nickname,password,phone,gender,birth,email,sign,close,regtime:Date.now()}
        let res = await db.insert('user',data);
    }
    ctx.body = 'yes';

    // 存入数据库

});

router.get('/',async (ctx,next)=>{
    // 解构
    let {"_id":_id} = ctx.query;

    let res = await db.find('user',{"_id":new ObjectID(_id)});
    // console.log(ctx.query,_id)
    ctx.body = res;
})



module.exports = router;