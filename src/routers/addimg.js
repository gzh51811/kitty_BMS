const Router = require('koa-router');

// const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */

router.post('/', async (ctx, next) => {
    // let res = await db.find('goodslist', {});
    // console.log(ctx)

    console.log(ctx.request.files.file.path)
    ctx.body = {

        "imgurl": ctx.request.files.file.path
    };
});

module.exports = router;