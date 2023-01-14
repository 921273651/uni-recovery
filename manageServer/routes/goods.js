const express = require('express');
const router = express.Router();
const db = require('../db.js');

//获取商品列表
router.get('/getCatesList', (req, res) => {
    let sql = db.getCatesList(req.query);
    console.log('sql', sql);
    db.Query(sql).then(data => {
      if (data) {
        res.send({ "code": "2000", "message": "获取成功！", "data": data });
      } else {
        res.send({ "code": "401", "error": "获取失败" });
      }
    }, err => {
      res.send({ "code": "401", "error": "获取失败" });
    })
  })

  router.post('/creatOrder', (req, res) => {
    const userId = req.header('token');
    let sql = db.createOrder(req.body, userId);

    db.Query(sql).then(data => {
      console.log('data',data);
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

  })

  router.post('/selectAdress', (req, res)=>{
    let sql = db.selectAdress(req.body);

    db.Query(sql).then(data => {
      console.log('data',data);
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
  
  console.log('goods接口就绪');
module.exports = router;