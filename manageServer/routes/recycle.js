const express = require('express');
const router = express.Router();
const db = require('../db.js');

// 登录
router.post('/login', (req, res) => {
  let sql = db.login(req.body);
  console.log('sql', sql);

  db.Query(sql).then(data => {
    console.log('data',data);
    if (data.length) {
      console.log('用户登录成功！');
      res.send({ "code": "2000", "data": data, "message": "登录成功！" });
    } else {
      res.send({ "code": "400", "message": "账号或密码错误！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
});

//注册用户
router.post('/register', (req, res) => {
  let sql = db.register(req.body);
  console.log('sql', sql);
  db.Query(sql).then(data => {
    if (data) {
      console.log('用户注册成功！');
      res.send({ "code": "2000", "message": "注册成功！" });
    } else {
      res.send({ "code": "500", "message": "服务器内部错误！" });
    }
  }, err => {
    console.log('err', err);
    if(err.code==='ER_DUP_ENTRY') {
      res.send({ "code": "400", "message": '该账号已存在，无法重复注册！' });
    } else {
      res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
    }
  })
})

//发起上门回收预定
router.post('/orderRecycle', (req, res) => {
    console.log('req',req.body);
    // let sql = db.orderRecycle(req.body);
    // console.log('sql', sql);
    // db.Query(sql).then(data => {
    //   if (data) {
    //     console.log('用户预约成功！');
    //     res.send({ "code": "2000", "message": "预约成功！" });
    //   } else {
    //     res.send({ "code": "500", "message": "服务器内部错误！" });
    //   }
    // }, err => {
    //   console.log('err', err);
    //   res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
    // })
  })

console.log('recycle接口就绪');
module.exports = router;