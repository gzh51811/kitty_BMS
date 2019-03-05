const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

// 引入页面路由
// const registryRouter = require('./registry');
// const loginRouter = require('./login');
const goodsRouter = require('./goodslist');
const addimgRouter = require('./addimg');
const addgoodsRouter = require('./addgoods');
const updategoodsRouter = require('./updategoods');
const orderRouter = require('./order');

const uploadRouter = require('./upload');
const deleteimgRouter = require('./deleteimg');
let url = '';
router.use('/', koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
        // 指定保存路径
        uploadDir: './img',
        keepExtensions: true,
        // 改文件名
        onFileBegin(filename, file) {
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:
            console.log(file.path)
            url = file.path;
            // file.path = './images/' + filename;
        }
    }
}));
router.use('/uploadimg', uploadRouter.routes());
router.use('/deleteimg', deleteimgRouter.routes());


router.use('/order', orderRouter.routes())
router.use('/updategoods', updategoodsRouter.routes())
router.use('/addimg', addimgRouter.routes())
router.use('/addgoods', addgoodsRouter.routes())
// router.use('/registry', registryRouter.routes())
// router.use('/login', loginRouter.routes())
router.use('/goodslist', goodsRouter.routes())
module.exports = router;