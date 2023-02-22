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

//生成订单
router.post('/createRecycleOrder', (req, res) => {
  const userId = req.header('token');
  let {sql1, sql2} = db.createRecycleOrder(req.body, userId);

  db.Query(sql1).then(data => {
    console.log('data', data);
    if (data.length) {
      console.log('订单已存在！');
      res.send({ "code": "2000", "data": data, "message": "订单已存在！" });
    } else {
      // res.send({ "code": "400", "message": "订单不存在！" });
      db.Query(sql2).then(data => {
        console.log('data', data);
        if (data) {
          console.log('订单成功生成！');
          res.send({ "code": "2000", "data": data, "message": "订单成功生成！" });
        } else {
          res.send({ "code": "400", "message": "订单生成失败！" });
        }
      }, err => {
        console.log('err', err);
        res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
      })
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

//选择地址
router.post('/selectRecycleAddress', (req, res) => {
  let sql = db.selectRecycleAddress(req.body);

  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('地址成功选择！');
      res.send({ "code": "2000", "data": data, "message": "地址成功选择！" });
    } else {
      res.send({ "code": "400", "message": "地址选择失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

// 获取回收订单列表
router.post('/getRecycleOrderList', (req, res) => {
  const userId = req.header('token');
  let sql = db.getRecycleOrderList(req.body, userId);
  const { isAdmin } = req.body;
  console.log('sql', sql);
  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('有待填写订单');
      if(isAdmin) {
        db.Query('select count(*) as total from tb_recycle_order').then(data1 => {
          if (data1) {
            console.log('获取total');
            res.send({ "code": "2000", "data": data, "total": data1[0].total,"message": "订单成功提交！" });
          } else {
            res.send({ "code": "400", "message": "订单提交失败！" });
          }
        }, err => {
          console.log('err', err);
          res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
        })
      }else {
        res.send({ "code": "2000", "data": data, "message": "有待填写订单" });
      }
    } 
    // else {
    //   res.send({ "code": "400", "message": "无待填写订单" });
    // }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

//提交回收订单
router.post('/submitRecycleOrder', (req, res) => {
  let sql = db.submitRecycleOrder(req.body);

  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('订单成功提交！');
      res.send({ "code": "2000", "data": data, "message": "订单成功提交！" });
    } else {
      res.send({ "code": "400", "message": "订单提交失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

// 确认回收
router.post('/checkRecycle', (req, res) => {
  let sql = db.checkRecycle(req.body);

  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('确认回收成功！');
      res.send({ "code": "2000", "data": data, "message": "确认回收成功！" });
    } else {
      res.send({ "code": "400", "message": "确认回收失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

// 商家接受回收订单
router.post('/againOrder', (req, res) => {
  let sql = db.againOrder(req.body);

  db.Query(sql).then(data => {
    console.log('data', data);
    if (data) {
      console.log('接受回收订单成功！');
      res.send({ "code": "2000", "data": data, "message": "接受回收订单成功！" });
    } else {
      res.send({ "code": "400", "message": "接受回收订单失败！" });
    }
  }, err => {
    console.log('err', err);
    res.send({ "code": "500", "message": '服务器异常，请刷新或重试！' });
  })
})

console.log('login接口就绪');
module.exports = router;