const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const db = require('../db.js');

const upload = multer({dest:'tmp/'});

router.post('/upload', upload.single('file'),(req,res)=>{
  const userId = req.header('token');
  const imgFile = req.file;
  const tmp = imgFile.path;
  const ext = path.extname(imgFile.originalname);
  const newName = "" + (new Date().getTime()) + Math.round(Math.random()*10000) + ext;
  const newPath = "../public/images/" + newName;
  const fileData = fs.readFileSync(tmp);
  fs.writeFileSync(path.join(__dirname,newPath),fileData);

  let sql = db.upload(userId, newName);
  console.log('sql',sql)
  db.Query(sql).then(data => {
    console.log('data',data);
    if (data) {
      res.send({ "code": "2000", "data": newName, "message": "写入图片成功！" });
    } else {
      res.send({ "code": "400", "message": "写入图片错误！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})


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

//商家登录
router.post('/manage', (req, res) => {
  let sql = db.manage(req.body);
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

  //获取订单列表
  router.get('/getPoints', (req, res) => {
    const userId = req.header('token');
    let sql = db.getPoints(req.query, userId);
    console.log('sql', sql);
    db.Query(sql).then(async(data) => {
      if (data) {
        res.send({ "code": "2000", "message": "获取成功！", "data": data[0] });
      } else {
        res.send({ "code": "401", "error": "获取失败" });
      }
    }, err => {
      res.send({ "code": "401", "error": "获取失败" });
    })
  })

console.log('login接口就绪');
module.exports = router;
