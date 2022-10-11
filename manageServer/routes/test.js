const express = require('express');
const router = express.Router();
const db = require('../db.js');

//测试
router.get('/getTest', (req, res) => {
    let sql = db.getTest(req.query.userId);
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
  
  console.log('test接口就绪');
module.exports = router;