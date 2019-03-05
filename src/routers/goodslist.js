const Router = require('koa-router');
var mongoose = require('mongoose');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.get('/', async (ctx, next) => {

    // let data = ctx.request.url;

    let { page, limit } = ctx.request.query;
    var pg = (page - 1) * limit;
    let res = await db.find('goodslist', {});

    var data1 = (res).slice(pg, limit * page);

    if (res) {
        ctx.body = {
            "code": 0,
            "msg": "",
            "count": res.length,
            "data": data1
        };
    } else {
        ctx.body = {
            code: 100,
            msg: 'fail'
        }
    }
    // 存入数据库
});
router.post('/', async (ctx, next) => {
    let _id = (ctx.request.body)["id"];
    var id = mongoose.Types.ObjectId(_id);
    // console.log("_id:" + _id, "id:" + id)
    let res = await db.delete('goodslist', { "_id": id });
});



module.exports = router;                                                                                            