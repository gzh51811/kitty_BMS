 const Router = require('koa-router');
 const fs = require('fs');

// const db = require('../db');

// 创建路由
var router = new Router();
 

router.post('/',async (ctx,next)=>{
    // console.log(ctx.request.files.file.path.slice(4))
    let sign = ctx.request.files.file.path.slice(4);
    ctx.body = {sign};
});

router.get('/',async (ctx,next)=>{
    // console.log(ctx.request.query.result);
    // console.log(ctx.request.files.file.path.slice(4))
    let src_del = ctx.request.query.result;
    fs.unlink('./img/'+src_del,function (err) {
       if (err) {
           return ctx.body = {code:100,msg:"删除失败"};
       }
    });
    ctx.body = {code:200,msg:"删除成功"};
});

module.exports = router;