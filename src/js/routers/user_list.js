const Router = require('koa-router');

const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

// 创建路由
var router = new Router();


router.get('/',async (ctx,next)=>{
    
    let page = ctx.request.query.page;
    let qty = ctx.request.query.limit;    
    let idx = (page-1)*qty;

    // console.log('page:',page,'limit:',limit,'idx:',idx);
    let res = await db.find1('user','',idx,qty*1);
    // console.log(result)
    ctx.body = {
                "code": 0
                ,"msg": ""
                ,"count": result.count
                ,"data": result.res
                };
    });

router.post('/',async (ctx,next)=>{
    let id = ctx.request.body.id;    
    let res = await db.delete('user',{"_id":new ObjectID(id)});
    ctx.body = "1";
})

module.exports = router;