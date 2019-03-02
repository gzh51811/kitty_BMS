const Router = require('koa-router');
var mongoose = require('mongoose');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.get('/', async (ctx, next) => {
    // console.log(ctx.request.body["_id"])

    let _id = ctx.request.url.split('?')[1];
    var id = mongoose.Types.ObjectId(_id);
    // console.log("_id:" + _id, "id:" + id)
    let res = await db.find('goodslist', { "_id": id });
    // console.log(res)
    ctx.body = res;
});
router.post('/', async (ctx, next) => {
    // console.log(ctx.request.body)
    let { _id, goods, oldprice, newprice, sign, left, status, joinTime, img } = ctx.request.body;
    let data = { _id, goods, oldprice, newprice, sign, status, left, joinTime, img };
    var id = mongoose.Types.ObjectId(_id);

    let res = await db.update('goodslist', { "_id": id }, { $set: { goods: goods, oldprice: oldprice, newprice: newprice, sign: sign, status: status, left: left, joinTime: joinTime, img: img } });

    console.log(data)
    ctx.body = { code: 1 };
});





module.exports = router;                                                                                            