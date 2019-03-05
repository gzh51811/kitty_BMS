const Router = require('koa-router');
var mongoose = require('mongoose');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.get('/', async (ctx, next) => {
    let { page, limit } = ctx.request.query;
    var pg = (page - 1) * limit;
    let res = await db.find('order', {});
    var data1 = (res).slice(pg, limit * page);

    if (res) {
        ctx.body = {
            "code": 0,
            "msg": "",
            "count": res.length,
            "data": data1
        };
    }

});
router.post('/', async (ctx, next) => {
    // console.log(ctx.request.body)
    let { id, field, newfield } = ctx.request.body;
    let reg = { id, field, newfield };

    var oid = mongoose.Types.ObjectId(id);
    if (field == "status1") {
        let res = await db.update('order', { "_id": oid }, { $set: { "status1": newfield, "status2": "未发货", "status3": "订单未完成" } });
    } else if (field == "status2") {
        let res = await db.update('order', { "_id": oid }, { $set: { "status1": "已支付", "status2": newfield, "status3": "订单未完成" } });
    } else if (field == "status3") {
        let res = await db.update('order', { "_id": oid }, { $set: { "status1": "已支付", "status2": "已发货", "status3": newfield } });
    }

    // console.log(res)
    ctx.body = {
        "msg": "已修改",
        "reg": res
    };
});



module.exports = router;                                                                                            