// 引入express
let express = require('express');
//引入处理解析中间体模块
let bodyParser = require('body-parser');
// 引入cors解决跨域
let cors = require('cors');
//引入express-jwt用来解决token的验证问题,express-jwt和jwt都要引入(jwt的加密解密方法在util里面),两者解决的问题不同（jwt用来加密，express-jwt用来验证）。
let expressJWT = require('express-jwt');

//引入路径
let loginRouter = require('./routes/login');
let planRouter = require('./routes/plan')
let costRouter = require('./routes/cost')
let testRouter = require('./routes/test')
let goodsRouter = require('./routes/goods')
let addressRouter=require('./routes/address.js')
let itemRouter=require('./routes/item.js')
let recycleRouter=require('./routes/recycle.js')
// 实例化
let app = express();
app.listen(8808);
console.log('后端服务已开启,现在监听8808端口...')
//使用所需中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//解析application/json
app.use(bodyParser.json({ limit: '10mb' }));
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
//使用expressJWT对路由进行token验证
let secretOrPrivateKey = "mykey"  //私钥 校验token时要使用
app.use(expressJWT({
  secret: secretOrPrivateKey,
  algorithms: ['HS256']
}).unless({
  path: ['/api/user/login']  //这里可以设置保护路由，login就不用进行token验证
}));
//token拦截器，当token失效时发出注销账号指令
app.use('/*', function (err, req, res, next) {
  //console.log(err.name);
  originalUrl = req.originalUrl;
  //console.log(originalUrl);
  //只对后端路由和部分user路由进行验证
  //如果请求/user或者/backend相关的内容，就进行token验证，仅访问前端内容不进行token验证
  if (originalUrl.indexOf('/api/personals') > -1) {

    if (err.name === 'UnauthorizedError') {
      console.log('身份认证不通过');
      //如果身份验证不通过，则发送错误信息提示，前端收到该提示后，在router拦截器里面设置相应对应办法
      res.send({ "code": '401', "err": err });
    } else {
      next();
    }
  } else {
    next();
  }
});

app.use('/api/user', loginRouter);
app.use('/api/plan', planRouter);
app.use('/api/cost', costRouter);
app.use('/api/test', testRouter);
app.use('/api/goods', goodsRouter);
app.use('/api/address',addressRouter);
app.use('/api/item',itemRouter);
app.use('/api/recycle',recycleRouter);
module.exports = app;