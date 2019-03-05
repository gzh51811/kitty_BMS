 
const Router = require('koa-router');
const db = require('../db');
const token = require('./utils/token');
const ObjectID = require('mongodb').ObjectID;
// 创建路由
var router = new Router();


router.post('/',async (ctx,next)=>{
    // 解构
    // console.log(ctx.request.body);
    let tel = ctx.request.body.tel;
    let password = ctx.request.body.password;    
    // let {"phone":tel,password} = ctx.request.body;
    let res = await db.find('user',{"phone":tel,"password":password});
    // console.log(res);
    res = res[0];
    if(res){
        // 登录成功：发令牌
        let _token = token.create(tel);
        ctx.body = {
            code:200,
            _id:res._id,
            username:res.username,
            sign:res.sign,
            close:res.close,
            token:_token
        }
    }else{
        ctx.body = {
            code:100,
            msg:'fail'
        }
    } 
});


module.exports = router;