const express = require('express');
const router = express.Router();
const db = require('../db.js');

//获取分类列表接口
router.get('/getItemList', (req, res) => {
    let sql = db.getItemList(req.query);
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
  
  

  
  console.log('item接口就绪');
module.exports = router;