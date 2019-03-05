const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */

router.post('/', async (ctx, next) => {
    // let res = await db.find('goodslist', {});
    // console.log(ctx.request.body)
    let { goods, oldprice, newprice, sign, left, status, joinTime, img } = ctx.request.body;
    let data = { goods, oldprice, newprice, sign, status, left, joinTime, img }
    let res = await db.insert('goodslist', data);
    ctx.body = { code: 2 };
});

module.exports = router;