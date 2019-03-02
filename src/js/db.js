const db = require('../db/index');

(async () => {
    let res = await db.find('goodslist')
    console.log(res)
})();