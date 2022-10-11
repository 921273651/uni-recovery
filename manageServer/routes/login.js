const express = require('express');
const router = express.Router();
const db = require('../db.js');

// 登录
router.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = db.login(username, password);

  db.Query(sql).then(data => {
    if (data.length) {
      console.log('用户登录成功！');
      res.send({ "code": "2000", "success": "登录成功！", 'data': { 'name': data[0].name, 'userId': data[0].id } });
    } else {
      console.log("账号或者密码错误，登录失败！");
      res.send({ "code": "401", "error": "账号或者密码错误，登录失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "401", "error": err });
  })
});

//注册用户
router.post('/register', (req, res) => {
  let sql = db.register(req.body);
  console.log('req.body',req.body)
  console.log('req.query',req.query)
  console.log('sql', sql);
  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('用户注册成功！');
      res.send({ "code": "2000", "success": "注册成功！" });
    } else {
      console.log("账号或者密码错误，注册失败！");
      res.send({ "code": "401", "error": "账号或者密码错误，注册失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "401", "error": err });
  })
})

console.log('login接口就绪');
module.exports = router;
